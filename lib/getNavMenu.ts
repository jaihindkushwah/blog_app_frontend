// const baseUrl = process.env.NEXTAUTH_URL;
export async function getNavMenu() {
  // console.log("getNavMenu", baseUrl);
  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60 * 60 * 5, // 5 hours
    },
  };
  const response = await fetch(`/api/menu`, options);
  const data = await response.json();
  // console.log(data);
  return data.data;
}
