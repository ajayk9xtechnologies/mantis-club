import { NextResponse } from "next/server";
import connectToDatabase from "../../lib/db";
import Category from "../../../models/category";

export async function POST(request) {
    try {
        await connectToDatabase();
        const body = await request.json();
        const { name } = body;

        if (!name) {
            return NextResponse.json(
                { message: "Category name is required." },
                { status: 400 }
            );
        }

        // Check if category already exists
        const existingCategory = await Category.findOne({ name });
        if (existingCategory) {
            return NextResponse.json(
                { message: "Category already exists.", category: existingCategory },
                { status: 200 }
            );
        }

        const newCategory = new Category({ name });
        await newCategory.save();

        return NextResponse.json(
            { message: "Category created successfully!", category: newCategory },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating category:", error);
        return NextResponse.json(
            { message: "Internal Server Error", error: error.message },
            { status: 500 }
        );
    }
}

export async function DELETE(request) {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get('id');

    if (!categoryId) {
        return NextResponse.json(
            { message: "Category ID is required." },
            { status: 400 }
        );
    }

    try {
        await connectToDatabase();
        const deletedCategory = await Category.findByIdAndDelete(categoryId);

        if (!deletedCategory) {
            return NextResponse.json(
                { message: "Category not found." },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: "Category deleted successfully!", category: deletedCategory },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting category:", error);
        return NextResponse.json(
            { message: "Internal Server Error", error: error.message },
            { status: 500 }
        );
    }
}
 
export async function GET() {
    try {
        await connectToDatabase();
        const categories = await Category.find().sort({ name: 1 });

        return NextResponse.json({ categories }, { status: 200 });
    } catch (error) {
        console.error("Error fetching categories:", error);
        return NextResponse.json(
            { message: "Internal Server Error", error: error.message },
            { status: 500 }
        );
    }
}
