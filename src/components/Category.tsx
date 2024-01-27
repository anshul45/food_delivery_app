import React from "react";
import Category1 from "../assets/category-01.png";
import Category2 from "../assets/category-02.png";
import Category3 from "../assets/bread-512.png";
import Image from "next/image";

const Category = () => {
  return (
    <div className="flex justify-between my-20 px-32">
      <div className="flex items-center gap-3 bg-[#fde4e4] w-56 px-5 py-7 rounded-md cursor-pointer hover:transform hover:scale-110 transition-transform duration-500 ease-in-out">
        <Image src={Category1} alt="category" />
        <h2 className="font-semibold">FastFood</h2>
      </div>
      <div className="flex items-center gap-3 bg-[#fde4e4] w-56 px-5 py-7 rounded-md cursor-pointer hover:transform hover:scale-110 transition-transform duration-500 ease-in-out">
        <Image src={Category2} alt="category" />
        <h2 className="font-semibold">Pizza</h2>
      </div>
      <div className="flex items-center gap-3 bg-[#fde4e4] w-56 px-5 py-7 rounded-md cursor-pointer hover:transform hover:scale-110 transition-transform duration-500 ease-in-out">
        <div className="w-fit h-fit bg-[#df2020] p-2.5 rounded-full">
          <Image src={Category3} width={40} height={40} alt="category" />
        </div>

        <h2 className="font-semibold">Bread</h2>
      </div>
    </div>
  );
};

export default Category;
