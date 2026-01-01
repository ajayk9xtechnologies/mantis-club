import { NextResponse } from "next/server";
import connectToDatabase from "../../lib/db";
import Blogs from "../../../models/blogs";

export async function POST(request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const { _id, title, slug, description, content, category, tags, thumbnail } = body;

    // Validate required fields
    if (!title || !slug || !description || !content || !category) {
      return NextResponse.json(
        { message: "Title, slug, description, content, and category are required." },
        { status: 400 }
      );
    }

    // If _id exists, update the blog (PUT operation)
    if (_id) {
      const updatedBlog = await Blogs.findByIdAndUpdate(
        _id,
        {
          title,
          slug,
          description,
          content,
          category,
          tags: tags || [],
          thumbnail: thumbnail || "",
          updatedAt: Date.now(),
        },
        { new: true, runValidators: true }
      );

      if (!updatedBlog) {
        return NextResponse.json(
          { message: "Blog not found." },
          { status: 404 }
        );
      }

      return NextResponse.json(
        { message: "Blog updated successfully!", blog: updatedBlog },
        { status: 200 }
      );
    }

    // Otherwise, create a new blog (POST operation)
    const newBlog = new Blogs({
      title,
      slug,
      description,
      content,
      category,
      tags: tags || [],
      thumbnail: thumbnail || "",
    });

    await newBlog.save();

    return NextResponse.json(
      { message: "Blog created successfully!", blog: newBlog },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving blog:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}


export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const blogId = searchParams.get("id");

  if (!blogId) {
    return NextResponse.json(
      { message: "Blog ID is required." },
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();
    const deletedBlog = await Blogs.findByIdAndDelete(blogId);

    if (!deletedBlog) {
      return NextResponse.json({ message: "Blog not found." }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Blog deleted successfully!", blog: deletedBlog },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const blogs = await Blogs.find().sort({ createdAt: -1 });

    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
