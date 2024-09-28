"use client";

import React, { createContext, useContext, useMemo } from "react";
import { io, Socket } from "socket.io-client";

interface Props {
  children: React.ReactNode;
}

const SocketContext = createContext<any>(null);
// <{ socket: Socket<any> }>({
//   // socket: io("http://localhost:8080"),
// });

export const useSocket = () => {
  return useContext(SocketContext);
};
function SocketProvider({ children }: Props) {
  const socket: any = null;
  // useMemo(() => io("http://localhost:8080"), []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
}

export default SocketProvider;
