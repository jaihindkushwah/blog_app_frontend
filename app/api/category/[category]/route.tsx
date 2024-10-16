import Content from "@/models/Content";
import connectToDatabase from "@/utils/db";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { category?: string };
  }
) {
  console.log(params);
  const { category } = params;
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");
  try {
    await connectToDatabase();

    let data = await Content.find({ category }, "-content -createBy")
      .skip(Number(page) * Number(limit))
      .limit(Number(limit));

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
