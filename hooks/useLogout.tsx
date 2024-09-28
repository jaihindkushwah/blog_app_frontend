"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useCallback } from "react";
// import { useDispatch, useSelector } from "react-redux";

function useLogout() {
  const { data: session } = useSession();
  const token = session?.user.token;
  const logoutHandler = useCallback(async () => {
    if (!token) return null;
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log("config", config);

      await axios.get("http://127.0.0.1:8080/api/v1/auth/logout", config);

      localStorage.removeItem("token");
    } catch (error) {}
  }, [token]);

  return { logoutHandler };
}

export default useLogout;
