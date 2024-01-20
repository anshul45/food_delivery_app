import User from "@/models/userModel";
import { connectDB } from "@/lib/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (req:Request) => {
  const { name, email, password } = await req.json();

  if(!name|| !email || !password )
  {
    return new NextResponse("Please provide all data", {
        status: 404,
      });
  }

  await connectDB();

  const hashedPassword =  bcrypt.hashSync(password, 5);
  console.log(hashedPassword);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (error) {
    // const errorMessage = typeof error === 'string' ? error : JSON.stringify(error);
    return  NextResponse.json({ message: error },
    { status: 500 })
    }
  }
