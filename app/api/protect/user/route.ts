import Content from "@/models/Content";
import connectToDatabase from "@/utils/db";
import crypto from "crypto";

function generate8DigitUUID() {
  return crypto.randomBytes(5).toString("hex").substring(0, 8);
}

export async function POST(req: Request) {
  try {
    const { title, content, description, createdBy, category, author } =
      await req.json();
    if (!title || !content || !createdBy || !category || !author) {
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
