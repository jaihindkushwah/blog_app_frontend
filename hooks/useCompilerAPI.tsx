// import { getAuthState } from "@/store/auth";
import axios from "axios";
import { useSession } from "next-auth/react";
// import { useSelector } from "react-redux";

export interface ICompilerRun {
  input: string;
  language: string;
  code: string;
  problemId: string;
}

export function useCompilerAPI() {
  const { data: session } = useSession();

  const handleRun = async ({ ...inputs }: ICompilerRun) => {
    const url = "http://localhost:8080/api/v1/compiler/test";
    // try {
    if (!session?.user.token) throw new Error("Not logged in");
    console.log(session?.user.token);
    const config = {
      headers: {
        Authorization: `Bearer ${session?.user.token}`,
      },
    };
    console.log(inputs);
    const response = await axios.post(url, inputs, config);
    return response.data;
  };
  const handleSubmit = async ({ ...inputs }: ICompilerRun) => {
    const url = "http://localhost:8080/api/v1/compiler/test";
    // try {
    if (!session?.user.token) throw new Error("Not logged in");
    console.log(session?.user.token);
    const config = {
      headers: {
        Authorization: `Bearer ${session?.user.token}`,
      },
    };
    console.log(inputs);
    const response = await axios.post(url, inputs, config);
    return response.data;
  };
  const getProblemById = async (id: string) => {
    const response = await axios.get(
      `http://127.0.0.1:8080/api/v1/dsa/get/${id}`
    );
    const data = await response.data;
    // console.log(data.problem.content);
    return data.problem;
  };

  return {
    handleRun,
    getProblemById,
    handleSubmit,
  };
}
