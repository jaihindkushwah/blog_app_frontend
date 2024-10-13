import Content from "@/models/Content";
import connectToDatabase from "@/utils/db";
import crypto from "crypto";

function generate8DigitUUID() {
  return crypto.randomBytes(5).toString("hex").substring(0, 8);
  // return Crypto.randomBytes(5).toString("hex").substring(0, 5);
}

export async function GET(request: Request) {
  try {
    //   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //   const data = await response.json();
    await connectToDatabase();
    const data = await Content.find(
      {},
      "-content -createBy -createdAt -updatedAt -__v"
    );

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
export async function POST(req: Request) {
  try {
    const { title, content, description, createdBy, category } =
      await req.json();
    if (!title || !content || !createdBy || !category) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await connectToDatabase();
    // console.log({ title, content, description, createdBy });
    const newContent = new Content({
      title,
      content,
      titleId: (title + "").replaceAll(" ", "_") + "_" + generate8DigitUUID(),
      description,
      category,
      createBy: createdBy,
    });
    await newContent.save();
    return Response.json({ message: "success", newContent }, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, {
        status: 500,
      });
    }
    return new Response("Something went wrong", {
      status: 500,
    });
  }
}
