import React, { useState } from "react";

import Image from "next/image";
import { useDispatch } from "react-redux";
import { updateCart } from "@/lib/redux/cartSlice";
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
  const [qty, setQty] = useState<number>(data?.quantity);
  const dispatch = useDispatch();

  const handleSubtract = () => {
    const newQty = Math.max(0, qty - 1);
    setQty(newQty);
    dispatch(updateCart({ _id: data._id, qty: newQty }));
  };

  const handleAdd = () => {
    const newQty = qty + 1;
    setQty(newQty);
    dispatch(updateCart({ _id: data._id, qty: newQty }));
  };

  const handleDelete = () => {
    const newQty = 0;
    dispatch(updateCart({ _id: data._id, qty: newQty }));
  };

  return (
    <div className="w-full my-9 grid items-center grid-flow-col grid-cols-6">
      <Image
        className="col-span-1"
        alt="product"
        width={50}
        height={50}
        src={data?.image}
      />

      <h1 className="col-span-2 text-[#212245] font-semibold">{data?.title}</h1>
      <h1 className="col-span-1">₹ {data?.price}</h1>
      <div className="col-span-2 flex items-center justify-between px-2 py-0.5  w-fit rounded-lg gap-7 bg-[#fde4e4]">
        <i
          className="ri-subtract-line text-2xl cursor-pointer"
          onClick={handleSubtract}
        ></i>
        <h1>{qty}</h1>
        <i
          className="ri-add-line text-2xl cursor-pointer"
          onClick={handleAdd}
        ></i>
      </div>
      <h1 className="col-span-1">
        <i
          className="ri-delete-bin-line text-2xl cursor-pointer text-[#df2020]"
          onClick={handleDelete}
        ></i>
      </h1>
    </div>
  );
};

export default CartCard;
