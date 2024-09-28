"use client";
import { usePeer } from "@/contexts/Peer";
import { useSocket } from "@/contexts/Socket";
import React, { useCallback, useEffect } from "react";
import ReactPlayer from "react-player";
import { Button } from "./ui/MyButton";
interface Props {
  roomId: string;
}
function Room({ roomId }: Props) {
  const { socket } = useSocket();
  const {
    peer,
    createOffer,
    createAnswer,
    setRemoteAnswer,
    sendStream,
    remoteStream,
  } = usePeer();
  const [mySteam, setMySteam] = React.useState<any>(null);
  const [remoteEmailId, setRemoteEmailId] = React.useState<string>("");

  const handleNewUserJoin = useCallback(
    async (data: { emailId: string }) => {
      const { emailId } = data;
      console.log("New user joined", emailId);
      const offer = await createOffer(emailId);
      socket.emit("call-user", { roomId, emailId, offer });

      setRemoteEmailId(emailId);
    },
    [createOffer, socket, roomId]
  );

  const handleIncomingCall = useCallback(
    async (data: any) => {
      const { from, offer } = data;
      console.log("Incoming call", from, offer);
      const ans = await createAnswer(offer);
      socket.emit("call-accepted", { emailId: from, ans });

      setRemoteEmailId(from);
    },
    [createAnswer, socket]
  );
  const handleCallAccepted = useCallback(
    async (data: any) => {
      const { ans } = data;
      console.log("call accepted");
      await setRemoteAnswer(ans);
    },
    [setRemoteAnswer]
  );
  const getUserMediaStream = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    setMySteam(stream);
  }, []);

  useEffect(() => {
    socket.on("user-joined", handleNewUserJoin);
    socket.on("incoming-call", handleIncomingCall);
    socket.on("call-accepted", handleCallAccepted);
    return () => {
      socket.off("user-joined", handleNewUserJoin);
      socket.off("incoming-call", handleIncomingCall);
      socket.off("call-accepted", handleCallAccepted);
    };
  }, [socket, handleNewUserJoin, handleIncomingCall, handleCallAccepted]);

  const handleNegotiation = useCallback(async () => {
    console.log("negotiation needed");
    const localOffer = await peer.createOffer();
    socket.emit("call-user", {
      roomId,
      emailId: remoteEmailId,
      offer: localOffer,
    });
  }, [peer, socket, roomId, remoteEmailId]);

  useEffect(() => {
    peer.addEventListener("negotiationneeded", handleNegotiation);
    return () => {
      peer.removeEventListener("negotiationneeded", handleNegotiation);
    };
  }, [peer, handleNegotiation]);

  useEffect(() => {
    getUserMediaStream();
  }, [getUserMediaStream]);

  return (
    <div className="flex flex-col gap-3 items-center">
      <h1 className="text-3xl">Welcome in new room</h1>
      <div>
        <h1>Room {roomId}</h1>
        <h1>you are connected to {remoteEmailId}</h1>
        <Button onClick={() => sendStream(mySteam)}>Start Call</Button>
        <div className="flex gap-3 flex-wrap">
          <ReactPlayer url={mySteam} controls muted playing />
          <ReactPlayer url={remoteStream} controls muted playing />
        </div>
      </div>
    </div>
  );
}

export default Room;
