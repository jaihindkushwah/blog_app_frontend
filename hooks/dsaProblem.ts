import axios from "axios";

interface IGetAllProblem {
  currentPage?: number;
  totalPages?: number;
  totalProblems?: number;
  problems?: {
    _id: string;
    title: string;
    difficulty: string;
    createdAt: string;
    updatedAt: string;
    status: "pending" | "solved" | "unsolved";
    submissionCount: number;
  }[];
}

export const getProblemById = async (id: string) => {
  const response = await axios.get(
    `http://127.0.0.1:8080/api/v1/dsa/get/${id}`
  );
  const data = await response.data;
  // console.log(data.problem.content);
  return data.problem.content;
};

export async function getProblems(
  token: string,
  searchParams: {
    page?: string;
    status?: string;
    difficulty?: string;
    tags?: string;
  }
) {
  const urlParam = new URLSearchParams(searchParams);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(
    `http://127.0.0.1:8080/api/v1/dsa/getAll?` + urlParam.toString(),
    config
  );
  const data: IGetAllProblem = await response.data;
  console.log(data);
  // console.log(urlParam.toString());
  // console.log(searchParams);
  return data;
}
