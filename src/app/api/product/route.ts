import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Product from "@/models/productModel";

export const getAllProducts = async (request : NextRequest) => {
    connectDB()
    try {
        return NextResponse.json({data:"data"})
    } catch (error) {
        const errorMessage = typeof error === 'string' ? error : JSON.stringify(error);
        throw new Error(errorMessage)
    }
}
export const postAllProducts = async (request : NextRequest) => {
    connectDB()
    try {
        return NextResponse.json({data:"data"})
    } catch (error) {
        const errorMessage = typeof error === 'string' ? error : JSON.stringify(error);
        throw new Error(errorMessage)
    }
}