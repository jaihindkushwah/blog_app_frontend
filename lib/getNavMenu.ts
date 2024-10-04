import axios from "axios";

const baseUrl = process.env.NEXTAUTH_URL;
export async function getNavMenu() {
  console.log("getNavMenu", baseUrl);
  const response = await axios.get(`/api/menu`);
  const data = response.data;
  return data.data;
}
