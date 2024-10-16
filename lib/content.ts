// import axios from "axios";

const baseUrl = process.env.NEXTAUTH_URL;

interface IContent {
  _id: string;
  title: string;
  titleId: string;
  content: string;
  createBy: string;
  createdAt: string;
  updatedAt: string;
  category: string;
  description: string;
  author?: string;
  status: string;
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

export async function getAllContentByUser(
  id: string,
  page?: string,
  limit?: string,
  init?: RequestInit
): Promise<{ data: IContent[] }> {
  const url = baseUrl ? baseUrl : "";
  const res = await fetch(
    url +
      `/api/protect/user/${id}${page ? "?page=" + page : ""}${
        limit ? "&limit=" + limit : ""
      }`,
    { ...init }
  );
  const data = await res.json();
  return data;
}

export async function deleteContentById(
  id: string,
  init?: RequestInit
): Promise<{ data: IContent }> {
  const url = baseUrl ? baseUrl : "";
  const res = await fetch(url + `/api/protect/user/${id}`, {
    method: "DELETE",
    ...init,
  });
  const data = await res.json();
  return data;
}
