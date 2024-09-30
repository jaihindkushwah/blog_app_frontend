type PageProps = {
  params: {
    category: string;
  };
};

const CategoryPage = ({ params }: PageProps) => {
  const { category } = params;
  return (
    <div className="h-[50vh] mt-20">
      <h1>Category: {category}</h1>
      <h2>Post ID: </h2>
    </div>
  );
};

export default CategoryPage;
