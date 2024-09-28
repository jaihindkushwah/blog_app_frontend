"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
interface Inputs {
  token: string;
  password: string;
}

function useCreateNewPassword() {
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const handleSubmit = async ({ token, password }: Inputs) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await axios.post(
        "http://127.0.0.1:8080/api/v1/auth/update-password",
        { token, password }
      );
      const data = await response.data;
      console.log("data", await data);
      setTimeout(() => {
        console.log("redirecting");
        router.replace("/auth/login");
        setIsLoading(false);
      }, 2000);
    } catch (error: any) {
      const errorMsg = error.response.data.message;
      if (errorMsg) {
        setError(errorMsg);
      } else {
        const errorMessage = error.response.data.error;
        setError(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return { handleSubmit, error, isLoading, setError, setIsLoading };
}

export default useCreateNewPassword;
