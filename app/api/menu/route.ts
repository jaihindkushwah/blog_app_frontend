import NavMenu from "@/models/NavMenu";

export async function GET() {
  try {
    const navMenu = await NavMenu;
    // console.log(navMenu);
    return Response.json(
      { message: "success", data: navMenu },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }

    return new Response("Something went wrong", { status: 500 });
  }
}
