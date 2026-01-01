import { NextResponse } from "next/server";
import connectToDatabase from "../../lib/db";
import Blogs from "../../../models/blogs";
import Category from "../../../models/category";
import Tag from "../../../models/tag";

export async function GET() {
    try {
        await connectToDatabase();

        // Get counts in parallel
        const [blogsCount, categoriesCount, tagsCount] = await Promise.all([
            Blogs.countDocuments(),
            Category.countDocuments(),
            Tag.countDocuments(),
        ]);

        return NextResponse.json(
            {
                blogs: blogsCount,
                categories: categoriesCount,
                tags: tagsCount,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching stats:", error);
        return NextResponse.json(
            { message: "Internal Server Error", error: error.message },
            { status: 500 }
        );
    }
}
