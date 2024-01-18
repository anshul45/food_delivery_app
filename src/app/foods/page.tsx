"use client";
import React, { useState, useEffect } from "react";
import SingleFood from "@/components/SingleFood";

type FilterDataType = "Default" | "A-Z" | "Z-A" | "Low to High" | "High to Low";

export default function Food() {
  const filterData: FilterDataType[] = [
    "Default",
    "A-Z",
    "Z-A",
    "Low to High",
    "High to Low",
  ];

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

  const [value, setValue] = useState<FilterDataType>("Default");
  const [search, setSearch] = useState<String>("");
  const [isvalueOpen, setIsValueOpen] = useState<boolean>(false);
  const [allFoods, setAllFoods] = useState<ApiResponse["data"]>([]);

  const fetchFoods = async () => {
    const res = await fetch("http://localhost:3000/api/product");
    const foods: ApiResponse = await res.json();
    if (foods.data && Array.isArray(foods.data)) {
      setAllFoods(foods.data);
    } else {
      console.error("No data format from the API");
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <div>
      <div className=" bg-green-400 w-full py-20 pl-32 font-semibold text-4xl text-white">
        All Foods
      </div>
      <div className="py-12 mx-32">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 w-2/5 border-[1px] border-[#fde4e4] px-2 py-1 rounded-md">
            <input
              value={search.toString()}
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="I'm looking for....."
              className="w-full outline-none placeholder:text-black"
            />
            <i className="ri-search-line "></i>
          </div>
          <div>
            <div
              className="static flex justify-between items-center gap-2 w-60 border-[1px] border-[#fde4e4] px-4 py-1 rounded-md cursor-pointer"
              onClick={() => setIsValueOpen(!isvalueOpen)}
            >
              {value}
              {!isvalueOpen ? (
                <i className="ri-arrow-down-s-line"></i>
              ) : (
                <i className="ri-arrow-up-s-line"></i>
              )}
            </div>
            {isvalueOpen && (
              <div className="absolute border-[1px] border-black w-60 mt-1  bg-white leading-7 ">
                {filterData.map((data, idx) => (
                  <h2
                    className="px-4 hover:bg-[#fde4e4] hover:text-[#212245] cursor-pointer"
                    key={idx}
                    onClick={() => setValue(data)}
                  >
                    {data}
                  </h2>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="mt-12 flex justify-between items-start gap-12 flex-wrap">
          {allFoods?.map((data) => (
            <SingleFood key={data._id} data={data} />
          ))}
        </div>
        <div className="flex justify-center items-center gap-36 mt-12">
          <div className="text-white bg-[#df2020] px-4 rounded-md py-1.5 cursor-pointer hover:bg-[#fde4e4] hover:text-[#212245]">
            Prev
          </div>
          <div className="text-white bg-[#df2020] px-4 rounded-md py-1.5 cursor-pointer hover:bg-[#fde4e4] hover:text-[#212245]">
            Next
          </div>
        </div>
      </div>
    </div>
  );
}
