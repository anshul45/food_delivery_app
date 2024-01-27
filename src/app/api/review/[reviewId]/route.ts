import { connectDB } from "@/lib/db";
import Review from "@/models/reviewModel";
import User from "@/models/UserModel";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { reviewId: string } }
) => {
  connectDB();
  try {
    if (!params.reviewId) {
      return NextResponse.json(
        { message: "Please Provide id!" },
        { status: 404 }
      );
    }

    const data = await Review.find({ productId: params.reviewId });
    if (!data || data.length === 0) {
      return NextResponse.json(
        { message: "Sorry no data found!" },
        { status: 404 }
      );
    }

    const userData = await User.findOne({ email: data[0]?.userId });

    const updatedData = data.map((review) => ({
      ...review.toObject(),
      userId: userData.email,
      username: userData.name,
    }));

    return NextResponse.json({ data: updatedData }, { status: 200 });
  } catch (error) {
    if (error instanceof Error && "message" in error) {
      const errorMessage = error.message;
      return NextResponse.json({ message: errorMessage }, { status: 500 });
    } else {
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500 }
      );
    }
  }
};
