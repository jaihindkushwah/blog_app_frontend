import axios from "axios";

interface Props {
  params: {
    category: string;
  };
}
async function Page({ params }: Props) {
  const { category } = params;
  let data = null;
  try {
    if (category) {
      data = await axios.get("/api/category/" + category);
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  return <div className="h-[50vh] mt-20"></div>;
}

export default Page;
