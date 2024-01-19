import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Review from "@/models/reviewModel";

export const GET = async () => {
    connectDB()
    try {
        const data = await Review.find();
        if(!data.length){
          return  NextResponse.json({ message: "Sorry no review data found!" },
                { status: 404 })
        }
       return NextResponse.json({ data: data },
        { status: 200 })

    } catch (error) {
        const errorMessage = typeof error === 'string' ? error : JSON.stringify(error);
        return  NextResponse.json({ message: errorMessage },
            { status: 500 })
    }
}

export const POST = async (req : Request) => {
    connectDB()
    try {
        const resData = await req.json();
        if (Object.keys(resData).length === 0) {
            return NextResponse.json({ message: "Please Provide data" },
            { status: 400 })
        }

        const addReview = new Review(resData);

        await addReview.save();
       
        return NextResponse.json({ message: "product added sucessfully" },
        { status: 201 })

    } catch (error) {
        const errorMessage = typeof error === 'string' ? error : JSON.stringify(error);
        return  NextResponse.json({ message: error },
        { status: 500 })
    }
}
