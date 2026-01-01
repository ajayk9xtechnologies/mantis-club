import { NextResponse } from "next/server";
import connectDb from "../../../lib/db";
import User from "../../../../models/users";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";

export async function POST(request) {
  const cookieStore = await cookies();
  try {
    const { email, password } = await request.json();
    await connectDb();
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return NextResponse.json(
        { message: "Email Not Found!" },
        { status: 400 }
      );
    }
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Password is wrong please try again!" },
        { status: 400 }
      );
    }
    const generatedToken = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    cookieStore.set("token", generatedToken, {
      httpOnly: true, 
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    const userWithoutPassword = existingUser.toObject();
    delete userWithoutPassword.password;
    return NextResponse.json(
      { message: "User API is working!", user: userWithoutPassword },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error connecting to database:", error);
    return NextResponse.json({ message: "Network Error!" }, { status: 500 });
  }
}
