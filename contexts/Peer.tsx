"use client";
import dynamic from "next/dynamic";
import React, { useCallback, useEffect, useMemo } from "react";

const PeerContext = React.createContext<any>(null);

interface Props {
  children: React.ReactNode;
}

export const usePeer = () =>
  React.useContext<{
    peer: any;
    createOffer: any;
    createAnswer: any;
    setRemoteAnswer: any;
    sendStream: any;
    remoteStream: any;
  }>(PeerContext);

function PeerProvider({ children }: Props) {
  const [remoteStream, setRemoteStream] = React.useState<any>(null);

  const peer = useMemo(
    () =>
      new RTCPeerConnection({
        iceServers: [
          {
            urls: [
              "stun:stun.l.google.com:19302",
              "stun:global.stun.twilio.com:3478",
            ],
          },
        ],
      }),
    []
  );
  const createOffer = async () => {
    const offer = await peer.createOffer();
    await peer.setLocalDescription(offer);
    return offer;
  };
  const createAnswer = async (offer: any) => {
    await peer.setRemoteDescription(offer);
    const answer = await peer.createAnswer();
    await peer.setLocalDescription(answer);
    return answer;
  };

  const setRemoteAnswer = async (answer: any) => {
    await peer.setRemoteDescription(answer);
  };
  const sendStream = async (stream: any) => {
    const tracks = stream.getVideoTracks();
    for (const track of tracks) {
      peer.addTrack(track, stream);
    }
  };

  const handleTrackEvent = useCallback((ev: any) => {
    const stream = ev.streams;
    setRemoteStream(stream[0]);
  }, []);

  useEffect(() => {
    peer.addEventListener("track", handleTrackEvent);
    // peer.addEventListener("negotiationneeded", handleNegotiation);

    return () => {
      peer.removeEventListener("track", handleTrackEvent);
      //   peer.removeEventListener("negotiationneeded", handleNegotiation);
    };
  }, [peer, handleTrackEvent]);
  return (
    <PeerContext.Provider
      value={{
        peer,
        createOffer,
        createAnswer,
        setRemoteAnswer,
        sendStream,
        remoteStream,
      }}
    >
      {children}
    </PeerContext.Provider>
  );
}

export default dynamic(() => Promise.resolve(PeerProvider), {
  ssr: false,
});
