"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

export default function Login() {
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    return <div>
        <Header/>
        <div className="flex flex-col gap-14  justify-center items-center">
            <div className=" bg-green-400 w-full py-20 pl-32 font-semibold text-4xl text-white">Login</div>
            <div className="flex flex-col  w-96 gap-9 bg-[#fde4e4] px-6 py-7 rounded-sm ">
            <input type="email" value={email} placeholder="Email" className="bg-inherit  w-full border-b-[1px] border-black focus:outline-none" onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" value={password} placeholder="Password" className="bg-inherit  w-full border-b-[1px] border-black focus:outline-none" onChange={(e)=> setPassword(e.target.value)}/>
            <button className="bg-[#df2020] py-2 rounded-md text-white font-semibold">Login</button>
            </div>
            <div className="mb-14">Don't have an account? Create an account</div>
        </div>
        <Footer/>
    </div>;
}