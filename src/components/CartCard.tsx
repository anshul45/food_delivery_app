import React from "react";

import Image from "next/image";
interface CartProps {
  data: {
    image: string;
    title: string;
    price: number;
    _id: string;
    quantity: number;
  };
}

const CartCard: React.FC<CartProps> = ({ data }) => {
  return (
    <div className="w-full my-9 grid items-center grid-flow-col">
      <Image
        className="col-span-1"
        alt="product"
        width={50}
        height={50}
        src={data?.image}
      />

      <h1 className="col-span-3">{data?.title}</h1>
      <h1 className="col-span-2">{data?.price}</h1>
      <div className="col-span-1 flex items-center gap-3">
        <i className="ri-subtract-line text-2xl cursor-pointer"></i>
        <h1 className="px-3 py-1 rounded-lg border-2 w-fit">
          {data?.quantity}
        </h1>
        <i className="ri-add-line text-2xl cursor-pointer"></i>
      </div>
      <h1 className="col-span-1">
        <i className="ri-delete-bin-line text-2xl"></i>
      </h1>
    </div>
  );
};

export default CartCard;
