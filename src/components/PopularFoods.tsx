"use client";
import React, { useEffect, useState } from "react";
import Bread from "../assets/bread.png";
import Pizza from "../assets/pizza.png";
import Burger from "../assets/hamburger.png";
import Image from "next/image";
import SingleFood from "./SingleFood";
import { useDispatch } from "react-redux";
import { fetchData } from "@/lib/redux/dataSlice";

interface ApiResponse {
  data: {
    _id: string;
    title: string;
    price: number;
    images: string[];
    category: string;
    desc: string;
    __v: number;
  }[];
}

type FilterData = "All" | "Burger" | "Pizza" | "Bread";

const PopularFoods = () => {
  const dispatch = useDispatch();
  const [allFoods, setAllFoods] = useState<ApiResponse["data"]>();
  const [filterData, setFilterData] = useState<FilterData>("All");

  const fetchFoods = async () => {
    const res = await fetch("http://localhost:3000/api/product");
    const foods: ApiResponse = await res.json();
    if (foods.data && Array.isArray(foods.data)) {
      setAllFoods(foods.data);
      dispatch(fetchData(foods.data));
    } else {
      console.error("No data format from the API");
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);
  return (
    <div className="my-20 px-36">
      <div className="font-semibold text-4xl text-center mb-10">
        Popular Foods
      </div>
      <div className=" bg-[#df2020]  flex gap-20 justify-center py-4 text-white rounded-md">
        <h1
          className={`cursor-pointer py-2 ${
            filterData === "All"
              ? "bg-white text-[#df2020] px-4 py-1 rounded-lg"
              : ""
          }`}
          onClick={() => setFilterData("All")}
        >
          All
        </h1>
        <div
          className={`flex items-center gap-2 cursor-pointer ${
            filterData === "Burger"
              ? "bg-white text-[#df2020] px-4 py-1 rounded-lg"
              : ""
          }`}
          onClick={() => setFilterData("Burger")}
        >
          <Image width={20} height={20} src={Burger} alt="burger" />
          <h1>Burger</h1>
        </div>
        {/* bg-white px-4 py-1 rounded-md */}
        <div
          className={`flex items-center justify-center gap-2 cursor-pointer ${
            filterData === "Pizza"
              ? "bg-white text-[#df2020] px-5 py-1.5 rounded-lg"
              : ""
          }`}
          onClick={() => setFilterData("Pizza")}
        >
          <Image width={20} height={20} src={Pizza} alt="pizza" />
          <h1>Pizza</h1>
        </div>
        <div
          className={`flex items-center gap-2 cursor-pointer ${
            filterData === "Bread"
              ? "bg-white text-[#df2020] px-5 py-1.5 rounded-lg"
              : ""
          }`}
          onClick={() => setFilterData("Bread")}
        >
          <Image width={20} height={20} src={Bread} alt="bread" />
          <h1>Bread</h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-between py-14 gap-20">
        {allFoods &&
          allFoods
            .filter(
              (food) => filterData === "All" || food.category === filterData
            )
            .map((data) => <SingleFood key={data._id} data={data} />)}
      </div>
    </div>
  );
};

export default PopularFoods;
