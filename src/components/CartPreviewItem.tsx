import Image from "next/image";
import React, { useState } from "react";
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

const CartPreviewItem: React.FC<CartProps> = ({ data }) => {
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
    <div className="flex justify-between items-center py-8">
      <div>
        <div className="flex gap-4">
          <Image alt="product_Image" width={37} height={20} src={data?.image} />
          <div>
            <h1 className="text-[#212245]">{data?.title}</h1>
            <div className="flex justify-between">
              <h3>{data?.quantity}x</h3>
              <h3>{data?.price}</h3>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-2 py-0.5 ml-16 w-fit rounded-lg gap-7 bg-[#fde4e4] mt-5">
          <i
            className="ri-subtract-line  cursor-pointer"
            onClick={handleSubtract}
          ></i>
          <h1>{qty}</h1>
          <i className="ri-add-line cursor-pointer" onClick={handleAdd}></i>
        </div>
      </div>
      <div>
        <i
          className="ri-delete-bin-line cursor-pointer text-[#df2020]"
          onClick={handleDelete}
        ></i>
      </div>
    </div>
  );
};

export default CartPreviewItem;
