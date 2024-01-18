import { connectDB } from '@/lib/db';
import Product from '@/models/productModel';
import  { NextResponse } from 'next/server'
 
export const  GET = async (req:Request,{params}:{params:{productId:string}}) => {
    connectDB()
    try {
        if(!params.productId)
        {
            return  NextResponse.json({ message: "Please Provide id!" },
                { status: 404 })
        }

        const data = await Product.findById(params.productId);
        if(!data){
          return  NextResponse.json({ message: "Sorry no data found!" },
                { status: 404 })
        }
       return NextResponse.json({ data: data },
        { status: 200 })

    } catch (error) {
        if (error instanceof Error && 'message' in error) {
            const errorMessage = error.message;
            return NextResponse.json({ message: errorMessage }, { status: 500 });
        } else {    
            return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
        }
    }
}