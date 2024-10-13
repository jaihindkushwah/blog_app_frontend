import axios from "axios";

const baseUrl = process.env.NEXTAUTH_URL;

interface IContent {
  title: string;
  titleId: string;
  content?: string;
  createBy: string;
  createdAt: Date;
  updatedAt: Date;
  category: string;
  description: string;
}

interface IParams {
  category: string;
  page?: number;
  limit?: number;
}

export async function getAllContentCategory(
  params: IParams,
  init?: RequestInit
): Promise<IContent[] | []> {
  const { category, page = 0, limit = 10 } = params;
  const url = baseUrl ? baseUrl : "";
  const res = await fetch(
    url + `/api/category/${category}?page=${page}&limit=${limit}`,
    { ...init }
  );

  const data = await res.json();
  // console.log(data);
  return data?.data || [];
}

export async function getAllContent() {
  const response = await axios.get(baseUrl + "/api/content");
  return response.data;
}
