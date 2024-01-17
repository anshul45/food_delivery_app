import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Product from "@/models/productModel";

export const GET = async () => {
    connectDB()
    try {
        const data = await Product.find();
        if(!data){
          return  NextResponse.json({ message: "Sorry no data found!" },
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

        const addProducts = new Product(resData);

        await addProducts.save();
       
        return NextResponse.json({ message: "product added sucessfully" },
        { status: 201 })

    } catch (error) {
        const errorMessage = typeof error === 'string' ? error : JSON.stringify(error);
        return  NextResponse.json({ message: error },
        { status: 500 })
    }
}
