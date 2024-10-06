import axios from "axios";

const baseUrl = process.env.NEXTAUTH_URL;

export async function getAllContentCategory(
  category: string,
  page = 0,
  limit = 10
) {
  const url = baseUrl ? baseUrl : "";
  const response = await axios.get(
    url + `/api/category/${category}?page=${page}&limit=${limit}`
  );
  const data = response.data;
  return data.data;
}

export async function getAllContent() {
  const response = await axios.get(baseUrl + "/api/content");
  return response.data;
}
