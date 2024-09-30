import axios from "axios";

const baseUrl = process.env.NEXTAUTH_URL;

export async function getContentById(id: string) {
  const response = await axios.get(baseUrl + `/api/content/${id}`);
  return response.data;
}

export async function getAllContent() {
  const response = await axios.get(baseUrl + "/api/content");
  return response.data;
}
