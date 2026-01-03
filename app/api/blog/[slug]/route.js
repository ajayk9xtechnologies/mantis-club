import { NextResponse } from "next/server";
import connectToDatabase from "../../../lib/db";
import Blogs from "../../../../models/blogs";

export async function GET(request, { params }) {
  try {
    await connectToDatabase();

    const { slug } = await params;
    console.log("Slug:", slug);

    const blog = await Blogs.findOne({ slug });

    if (!blog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ blog }, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
