import  { NextRequest, NextResponse } from 'next/server'
 
export const  GET = (req:NextRequest,{params}:any) => {
 return NextResponse.json({id:params,data:"hello"})
}