"use client";
import { ThemeProvider } from "@/components/ThemeProvider";
import React, { useEffect } from "react";
// import SocketProvider from "./Socket";
import PeerProvider from "./Peer";
import HeaderFooterProvider from "./HeaderFooter";
import StoreProvider from "@/store/StoreProvider";
import { Toaster } from "@/components/ui/toaster";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

interface Props {
  children: React.ReactNode;
  session: Session | null;
}
function AppProvider({ session, children }: Props) {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <HeaderFooterProvider>
            {/* <SocketProvider> */}
            <PeerProvider>{children}</PeerProvider>
            {/* </SocketProvider> */}
          </HeaderFooterProvider>
        </ThemeProvider>
      </StoreProvider>
    </SessionProvider>
  );
}

export default AppProvider;
