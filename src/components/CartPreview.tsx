import { RootState } from "@/lib/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import CartPreviewItem from "./CartPreviewItem";

const CartPreview = () => {
  const cartData = useSelector((state: RootState) => state.cart.cartData);
  const subTotal = cartData.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="overflow-y-scroll flex flex-col justify-between h-screen">
      <div className="px-3 pt-3">
        <i className="ml-3 px-2 py-2 ri-close-line bg-[#212245] font-semibold text-white rounded-full"></i>
        <div>
          {cartData.length ? (
            <>
              {cartData?.map((data) => (
                <CartPreviewItem data={data} key={data._id} />
              ))}
            </>
          ) : (
            <h1 className="mt-32 font-semibold text-lg flex items-center justify-center">
              No item added to the cart
            </h1>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center bg-[#df2020] px-4 py-7">
        <div className="flex gap-3 items-center text-white">
          <h3 className="font-semibold text-lg">Subtotal:</h3>
          <h1 className="font-semibold text-2xl">{subTotal}</h1>
        </div>
        <button className=" px-2 font-semibold py-1 rounded-md bg-white ">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPreview;
