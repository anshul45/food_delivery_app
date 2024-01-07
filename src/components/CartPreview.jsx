import React from "react";

const CartPreview = () => {
  return (
    <>
      <div className="px-3 pt-3">
        <i className="ml-3 px-2 py-2 ri-close-line bg-[#212245] font-semibold text-white rounded-full"></i>
        <div>
          <h1 className="mt-32 font-semibold text-lg flex items-center justify-center">
            No item added to the cart
          </h1>
        </div>
      </div>

      <div className="flex justify-between items-center bg-[#df2020] px-4 py-7">
        <div className="flex gap-3 items-center text-white">
          <h3 className="font-semibold text-lg">Subtotal:</h3>
          <h1 className="font-semibold text-2xl">0</h1>
        </div>
        <button className=" px-2 font-semibold py-1 rounded-md bg-white ">
          Checkout
        </button>
      </div>
    </>
  );
};

export default CartPreview;
