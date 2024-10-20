import Content from "@/models/Content";
import connectToDatabase from "@/utils/db";
import crypto from "crypto";

function generate8DigitUUID() {
  return crypto.randomBytes(5).toString("hex").substring(0, 8);
}

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { id?: string }; // id is content id
  }
) {
  const { id } = params;
  try {
    await connectToDatabase();

    let data = await Content.findById(id);
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

export async function PUT(
  request: Request,
  {
    params,
  }: {
    params: { id?: string }; // id is content id
  }
) {
  const { id } = params;
  try {
    const { title, content, description, createdBy, category, author } =
      await request.json();
    // console.log(title, content, description, createdBy, category, author);
    if (!title || !content || !createdBy || !category || !author) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }
    await connectToDatabase();
    const data = await Content.findByIdAndUpdate(id, {
      title,
      content,
      titleId:
        (title + "")
          .replaceAll(" ", "-")
          .replaceAll(":", "-")
          .replaceAll("?", "-") +
        "-" +
        generate8DigitUUID(),
      description,
      category,
      author,
      createBy: createdBy,
    });
    return Response.json(
      {
        message: "successfully updated data!",
        data: data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return Response.json(
        {
          message: "failed to update data!",
          error: error.message,
        },
        { status: 500 }
      );
    }
    return Response.json(
      {
        message: "failed to update data!",
        error: error,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  {
    params,
  }: {
    params: { id?: string }; // id is content id
  }
) {
  const { id } = params;
  try {
    await connectToDatabase();
    const data = await Content.findByIdAndDelete(id);
    return Response.json(
      {
        message: "successfully deleted data!",
        data: data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return Response.json(
        {
          message: "failed to delete data!",
          error: error.message,
        },
        { status: 500 }
      );
    }
    return Response.json(
      {
        message: "failed to delete data!",
        error: error,
      },
      { status: 500 }
    );
  }
}
