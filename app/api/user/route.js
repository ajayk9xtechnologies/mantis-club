import { NextResponse } from "next/server";
import connectDb from "../../lib/db";
import User from "../../../models/users";
import { cookies } from 'next/headers';
import jwt from "jsonwebtoken";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  try {
    await connectDb();
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded)
    const {id} = decoded;
    const user = await User.findById(id).select('-password');
    if (!user) {
      return NextResponse.json(
        { message: "User Not Found!" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: user },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error connecting to database:", error);
    return NextResponse.json({ message: "Network Error!" }, { status: 500 });
  }
}
 