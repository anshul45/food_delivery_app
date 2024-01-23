"use client";
import React, { useState } from "react";
import SingleFood from "@/components/SingleFood";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

type FilterDataType = "Default" | "A-Z" | "Z-A" | "Low to High" | "High to Low";

export default function Food() {
  const allFoods = useSelector((state: RootState) => state.data.initialData);
  const filterData: FilterDataType[] = [
    "Default",
    "A-Z",
    "Z-A",
    "Low to High",
    "High to Low",
  ];

  const [value, setValue] = useState<FilterDataType>("Default");
  const [search, setSearch] = useState<String>("");
  const [isvalueOpen, setIsValueOpen] = useState<boolean>(false);

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
      </div>
    </div>
  );
}
