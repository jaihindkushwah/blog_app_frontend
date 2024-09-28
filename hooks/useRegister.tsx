"use client";

// import { updateLoggedInState } from "@/store/auth";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useReducer, useState } from "react";

type initialStateProps = {
  name: string;
  email: string;
  password: string;
};
type ActionProps = { type: "Submit"; payload: initialStateProps };

// const registerReducer = (state: initialStateProps, action: ActionProps) => {
//   switch (action.type) {
//     case "Submit":
//       return { ...state, ...action.payload };
//     default:
//       return state;
//   }
// };
// const initialState: initialStateProps = {
//   name: "",
//   email: "",
//   password: "",
// };

function useRegister() {
  // const dispatch = useDispatch();
  // const [state, dispatch] = useReducer(registerReducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [registerError, setRegisterError] = useState<string | null>(null);

  const handleRegister = async (formData: initialStateProps) => {
    setIsLoading(true);
    setRegisterError(null);
    try {
      console.log("user details", formData);
      const { email, password } = formData;
      const response = await axios.post(
        "http://127.0.0.1:8080/api/v1/auth/register",
        { ...formData }
      );
      const data = await response.data;
      console.log("data", await data);
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/pages/protected/dashboard",
      });
      // dispatch(updateLoggedInState(true));
    } catch (error: any) {
      const errorMsg = error.response.data.message;
      if (errorMsg) {
        setRegisterError(errorMsg);
      } else {
        const errorMessage = error.response.data.error;
        setRegisterError(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleRegister,
    isLoading,
    registerError,
    setRegisterError,
    setIsLoading,
  };
}
export default useRegister;
