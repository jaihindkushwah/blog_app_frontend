type PageProps = {
  params: {
    id: string;
    category: string;
  };
};

const Page = ({ params }: PageProps) => {
  const { category, id } = params;
  return (
    <div className="h-[50vh] mt-20">
      <h1>Category: {category}</h1>
      <h2>Post ID: {id}</h2>
    </div>
  );
};

export default Page;
