"use client";
import React from "react";
import Banner from "../assets/hero.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter();
  return (
    <div className="my-24 w-full flex items-center px-36 gap-16 justify-between">
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl text-[#212245] font-semibold">
          Easy way to make an order
        </h1>
        <div className="font-semibold text-5xl w-3/4">
          <span className="text-[#df2020]">HUNGRY?</span>
          <span className="text-[#212245]"> Just wait food at </span>
          <span className="text-[#df2020]">your door</span>
        </div>
        <p className="text-gray-400 w-3/4 leading-7">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam minima
          veritatis animi quia
        </p>
        <div className="flex gap-10 items-center">
          <div className="px-4 py-1.5  w-fit rounded-md font-semibold text-white bg-[#df2020]">
            Order Now <i className="ri-arrow-right-s-line"></i>
          </div>
          <div
            className="px-4 py-1.5 border-[1px] border-[#df2020] w-fit rounded-md font-semibold text-[#df2020] cursor-pointer"
            onClick={() => router.push("/foods")}
          >
            See all foods
          </div>
        </div>
        <div className="flex gap-10 items-center">
          <div className="flex gap-2 items-center">
            <i className="px-1.5 py-0.5 text-white bg-[#df2020] rounded-full  ri-car-line"></i>
            <p className="font-semibold text-[#212245]">No shipping charge</p>
          </div>
          <div className="flex gap-2 items-center">
            <i className="px-1.5 py-0.5 text-white bg-[#df2020] rounded-full ri-shield-check-line"></i>
            <p className="font-semibold text-[#212245]">100% secure checkout</p>
          </div>
        </div>
      </div>
      <div>
        <Image src={Banner} alt="banner" width={500} height={500} />
      </div>
    </div>
  );
};

export default LandingPage;
