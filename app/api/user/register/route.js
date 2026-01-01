import { NextResponse } from "next/server";
import connectDb from "../../../lib/db";
import User from "../../../../models/users";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstname, lastname, email, password } = await body;
    console.log(firstname, lastname, email, password);
    await connectDb();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "Email Already Exists!" },
        { status: 400 }
      );
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hash,
    });
    const userWithoutPassword = user.toObject();
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
