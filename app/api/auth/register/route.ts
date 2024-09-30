import { encryption } from "@/lib/encryptDecrypt";
import User from "@/models/User";
import connectToDatabase from "@/utils/db";
import type { NextApiRequest } from "next";

// export function GET() {
//   return NextResponse.json({ message: "welcome to post method" });
// }
// export function POST() {}

// interface IRegisterRequest extends Request {
//   body: {
//     fullName: string;
//     email: string;
//     password: string;
//     role?: "user" | "creator"; // Optional, default to "user"
//   };
// }

export async function POST(req: Request) {
  const { name, email, password, role } = await req.json();
  console.log({ name, email, password, role });
  try {
    // Connect to the database
    await connectToDatabase();

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    // Create new user
    const newUser = new User({
      name,
      email,
      password: encryption(password),
      role: role || "user", // Set role or default to "user"
    });

    // Save the user to the database
    // console.log(newUser);
    await newUser.save();

    // Generate JWT token

    // Return the token and user information
    return Response.json(
      {
        //   token,
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
