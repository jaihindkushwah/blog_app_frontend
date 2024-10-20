import Content from "@/models/Content";
import connectToDatabase from "@/utils/db";
export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { userId?: string }; // id is userId
  }
) {
  const { userId } = params;
  const { searchParams } = new URL(request.url);
  let page = searchParams.get("page");
  page = page ? page : "1";
  let limit = searchParams.get("limit");
  limit = limit ? limit : "5";
  try {
    await connectToDatabase();

    let data = await Content.find({ createBy: userId }, "-content -__v")
      .sort({ createdAt: -1 })
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit));

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
