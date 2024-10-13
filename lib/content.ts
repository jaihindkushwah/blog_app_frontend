import axios from "axios";

const baseUrl = process.env.NEXTAUTH_URL;

interface IContent {
  title: string;
  titleId: string;
  content: string;
  createBy: string;
  createdAt: string;
  updatedAt: string;
  category: string;
  description: string;
  author?: string;
}
export async function getContentById(
  id: string,
  init?: RequestInit
): Promise<{ data: IContent }> {
  const url = baseUrl ? baseUrl : "";
  const res = await fetch(url + `/api/content/${id}`, { ...init });
  const data = await res.json();
  // const response = await axios.get(url + `/api/content/${id}`);
  // console.log(data);
  return data;
}

export async function getAllContent(
  init?: RequestInit
): Promise<{ data: IContent[] }> {
  const url = baseUrl ? baseUrl : "";
  const res = await fetch(url + `/api/content`, { ...init });
  const data = await res.json();
  // console.log(data);
  return data;
}
