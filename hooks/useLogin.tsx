"use client";
import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateLoggedInState, updateProfile, updateToken } from "@/store/auth";
interface LoginInputs {
  email: string;
  password: string;
}

function useLogin() {
  const dispatch = useDispatch();

  const [loginError, setLoginError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLogin = async ({ email, password }: LoginInputs) => {
    try {
      setIsLoading(true);
      setLoginError(null);
      const response = await axios.post(
        "http://127.0.0.1:8080/api/v1/auth/login",
        { email, password }
      );
      const data = await response.data;
      console.log("data", await data);
      dispatch(updateProfile(data.user));
      dispatch(updateLoggedInState(true));
      dispatch(updateToken(data.token));
      localStorage.setItem("token", data.token);
    } catch (error: any) {
      const errorMsg = error.response.data.message;
      if (errorMsg) {
        setLoginError(errorMsg);
      } else {
        const errorMessage = error.response.data.error;
        setLoginError(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return { handleLogin, loginError, isLoading, setLoginError, setIsLoading };
}

export default useLogin;
