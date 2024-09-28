"use client";

import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { createContext, useState, useContext, useEffect } from "react";

interface HeaderFooterContextProps {
  isHeaderVisible: boolean;
  isFooterVisible: boolean;
  setIsHeaderVisible: (visible: boolean) => void;
  setIsFooterVisible: (visible: boolean) => void;
}
const HeaderFooterContext = createContext<HeaderFooterContextProps>({
  isHeaderVisible: true,
  setIsFooterVisible: () => {},
  isFooterVisible: true,
  setIsHeaderVisible: () => {},
});

export const useHeaderFooter = () => {
  return useContext(HeaderFooterContext);
};
interface Props {
  children: React.ReactNode;
}

const headerHideList = [
  "/auth",
  "/auth/login",
  "/auth/register",
  "/pages/protected/compiler",
  "/pages/protected/mcq",
];
const footerHideList = [
  "/auth",
  "/auth/login",
  "/auth/register",
  "/auth/create-new-password",
  "/pages/protected",
];

export default function HeaderFooterProvider({ children }: Props) {
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [isFooterVisible, setIsFooterVisible] = useState<boolean>(true);
  const path = usePathname();
  const session = useSession();

  useEffect(() => {
    console.log(session?.data?.user);
    console.log({ path });

    const isHeaderVisible = !headerHideList.includes(path);
    const isFooterVisible = !footerHideList.includes(path);
    const isProtected: boolean = path.startsWith("/pages/protected");
    if (path.startsWith("/auth") || isProtected) {
      setIsHeaderVisible(false);
      setIsFooterVisible(false);
      return;
    }
    setIsHeaderVisible(isHeaderVisible);
    setIsFooterVisible(isFooterVisible);

    return () => {};
  }, [path]);

  return (
    <HeaderFooterContext.Provider
      value={{
        isHeaderVisible,
        setIsFooterVisible,
        setIsHeaderVisible,
        isFooterVisible,
      }}
    >
      {children}
    </HeaderFooterContext.Provider>
  );
}
