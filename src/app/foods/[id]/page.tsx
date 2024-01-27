"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Review from "@/components/Review";
import SingleFood from "@/components/SingleFood";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

type FoodData = {
  data: {
    category: string;
    desc: string;
    images: string[];
    price: number;
    title: string;
    __v: number;
    _id: string;
  };
};

export default function FoodById() {
  const router = useParams();
  const [isOpenDesc, setIsOpenDesc] = useState(true);
  const [isOpenReview, setIsOpenReview] = useState(false);
  const [foodData, setFoodData] = useState<FoodData["data"] | null>(null);
  const [prevImage, setPrevImage] = useState<string | undefined>("");
  const releventfood = useSelector(
    (state: RootState) => state.data.initialData
  );

  const id = router.id;

  const fetchfood = async () => {
    const data = await fetch(`http://localhost:3000/api/product/${id}`);
    const food: FoodData = await data.json();
    if (food.data) {
      setFoodData(food.data);
      setPrevImage(food.data.images[0]);
    } else {
      console.error("No data format from the API");
    }
  };

  useEffect(() => {
    fetchfood();
  }, [id]);

  return (
    <div>
      <div>
        <div
          className="bg-cover bg-center  w-full py-20 pl-32 font-semibold text-4xl text-white"
          style={{
            backgroundImage:
              "linear-gradient(#212245b2, #212245b2), url(https://res.cloudinary.com/anshul1/image/upload/v1706328351/foodapp/fhzfvnrmqk3dzlylrzyn.jpg)",
          }}
        >
          {foodData?.title}
        </div>
        <div className="flex items-center py-9">
          <div className="flex-[0.3] flex flex-col items-center gap-7">
            {foodData?.images.map((data) => (
              <div
                className="cursor-pointer"
                key={data}
                onClick={() => setPrevImage(data)}
              >
                <Image alt="product" width={75} height={75} src={data} />
              </div>
            ))}
          </div>
          <div className="flex-[0.3] mt-7">
            {prevImage && (
              <Image alt="product" width={300} height={300} src={prevImage} />
            )}
          </div>
          <div className="flex-[0.5] flex flex-col gap-7">
            <h1 className="font-semibold text-4xl">{foodData?.title}</h1>
            <div className="flex gap-3 items-center text-[#df2020]">
              <h3 className="font-semibold text-lg">Price:</h3>
              <h1 className="font-semibold text-2xl">{foodData?.price}</h1>
            </div>
            <div className="flex gap-3 items-center">
              <h3 className="font-semibold text-lg">Category:</h3>
              <h1 className="font-semibold text-lg bg-[#fde4e4] px-3 py-1 rounded-md">
                {foodData?.category}
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
            <div className="py-8 leading-8 text-gray-600">{foodData?.desc}</div>
          ) : (
            <Review />
          )}

          <div>
            <h1 className="font-semibold text-2xl">You May Also Like</h1>
            <div className="mt-16 flex flex-wrap justify-between gap-14">
              {releventfood
                ?.filter((food) => food.category === foodData?.category, 3)
                .slice(0, 3)
                .map((data) => (
                  <SingleFood key={data._id} data={data} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
