import Content from "@/models/Content";
import connectToDatabase from "@/utils/db";

export async function GET(
  request: Request,
  { params }: { params: { id?: string } }
) {
  try {
    const id = params?.id;
    // console.log({ id });
    //   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //   const data = await response.json();
    await connectToDatabase();
    const data = await Content.findOne({ titleId: id }).exec();

    //   console.log(data);
    return Response.json(
      {
        message: "successfully fetched data!",
        data: data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return Response.json(
        {
          message: "failed to fetch data!",
          error: error.message,
        },
        { status: 500 }
      );
    }
    return Response.json(
      {
        message: "failed to fetch data!",
        error: error,
      },
      { status: 500 }
    );
  }
}
