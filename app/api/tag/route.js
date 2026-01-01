import { NextResponse } from "next/server";
import connectToDatabase from "../../lib/db";
import Tag from "../../../models/tag";

export async function POST(request) {
    try {
        await connectToDatabase();
        const body = await request.json();
        const { name } = body;

        if (!name) {
            return NextResponse.json(
                { message: "Tag name is required." },
                { status: 400 }
            );
        }

        // Check if tag already exists
        const existingTag = await Tag.findOne({ name });
        if (existingTag) {
            return NextResponse.json(
                { message: "Tag already exists.", tag: existingTag },
                { status: 200 }
            );
        }

        const newTag = new Tag({ name });
        await newTag.save();

        return NextResponse.json(
            { message: "Tag created successfully!", tag: newTag },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating tag:", error);
        return NextResponse.json(
            { message: "Internal Server Error", error: error.message },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await connectToDatabase();
        const tags = await Tag.find().sort({ name: 1 });

        return NextResponse.json({ tags }, { status: 200 });
    } catch (error) {
        console.error("Error fetching tags:", error);
        return NextResponse.json(
            { message: "Internal Server Error", error: error.message },
            { status: 500 }
        );
    }
}

export async function DELETE(request) {
    const { searchParams } = new URL(request.url);
    const tagId = searchParams.get('id');

    if (!tagId) {
        return NextResponse.json(
            { message: "Tag ID is required." },
            { status: 400 }
        );
    }

    try {
        await connectToDatabase();
        const deletedTag = await Tag.findByIdAndDelete(tagId);

        if (!deletedTag) {
            return NextResponse.json(
                { message: "Tag not found." },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: "Tag deleted successfully!", tag: deletedTag },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting tag:", error);
        return NextResponse.json(
            { message: "Internal Server Error", error: error.message },
            { status: 500 }
        );
    }
}
 