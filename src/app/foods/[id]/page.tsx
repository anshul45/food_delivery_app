"use client";
import React, { useState } from "react";
import Burger from "../../../assets/product_01.jpg";
import Image from "next/image";
import Review from "@/components/Review";
import SingleFood from "@/components/SingleFood";

const FoodById = () => {
  const [isOpenDesc, setIsOpenDesc] = useState(true);
  const [isOpenReview, setIsOpenReview] = useState(false);

  return (
    <div>
      <div>
        <div className=" bg-green-400 w-full py-20 pl-32 font-semibold text-4xl text-white">
          Product Name
        </div>
        <div className="flex items-center py-9">
          <div className="flex-[0.3] flex flex-col items-center gap-7">
            <Image alt="product" width={75} height={75} src={Burger} />
            <Image alt="product" width={75} height={75} src={Burger} />
            <Image alt="product" width={75} height={75} src={Burger} />
          </div>
          <div className="flex-[0.3]">
            <Image alt="product" width={300} height={300} src={Burger} />
          </div>
          <div className="flex-[0.5] flex flex-col gap-7">
            <h1 className="font-semibold text-4xl">Cheese Burger</h1>
            <div className="flex gap-3 items-center text-[#df2020]">
              <h3 className="font-semibold text-lg">Price:</h3>
              <h1 className="font-semibold text-2xl">500</h1>
            </div>
            <div className="flex gap-3 items-center">
              <h3 className="font-semibold text-lg">Category:</h3>
              <h1 className="font-semibold text-lg bg-[#fde4e4] px-2 py-1 rounded-md">
                Burger
              </h1>
            </div>
            <button className="bg-[#df2020] w-fit px-4 py-2 font-semibold text-lg rounded-md text-white">
              Add to Cart
            </button>
          </div>
        </div>
        <div className=" my-20 mx-32 ">
          <div className="  py-4 flex gap-12 font-semibold text-lg border-b-[1px] border-[#fde4e4]">
            <div
              className={`cursor-pointer ${isOpenDesc ? "text-[#df2020]" : ""}`}
              onClick={() => {
                setIsOpenReview(!isOpenReview);
                setIsOpenDesc(!isOpenDesc);
              }}
            >
              Description
            </div>
            <div
              className={`cursor-pointer ${
                isOpenReview ? "text-[#df2020]" : ""
              }`}
              onClick={() => {
                setIsOpenReview(!isOpenReview);
                setIsOpenDesc(!isOpenDesc);
              }}
            >
              Review
            </div>
          </div>

          {isOpenDesc ? (
            <div className="py-8 leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad
              et est, fugiat repudiandae neque illo delectus commodi magnam
              explicabo autem voluptates eaque velit vero facere mollitia.
              Placeat rem, molestiae error obcaecati enim doloribus impedit
              aliquam, maiores qui minus neque.
            </div>
          ) : (
            <Review />
          )}

          <div>
            <h1 className="font-semibold text-2xl">You May Also Like</h1>
            <div className="mt-16 flex flex-wrap justify-between gap-14">
              <SingleFood />
              <SingleFood />
              <SingleFood />
              <SingleFood />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodById;
