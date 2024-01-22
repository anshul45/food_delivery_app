"use client";
import Image from "next/image";
import productimage from "../../assets/product_01.jpg";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Cart() {
  const router = useRouter();
  const session = useSession();

  console.log(session);

  if (session.status === "unauthenticated") {
    router.push("/login");
  }
  return (
    <div>
      <div className=" bg-green-400 w-full py-20 pl-32 font-semibold text-4xl text-white">
        Your Cart
      </div>
      <div className="mx-32 my-12">
        {true ? (
          <>
            {" "}
            <div className="flex justify-between">
              <h1>Image</h1>
              <h1>Product Title</h1>
              <h1>Price</h1>
              <h1>Quantity</h1>
              <h1>Delete</h1>
            </div>
            <div className="flex justify-between my-8">
              <Image alt="product" width={30} height={30} src={productimage} />
              <h1>Product Title</h1>
              <h1>Price</h1>
              <h1>Quantity</h1>
              <h1>Delete</h1>
            </div>
          </>
        ) : (
          <div className="flex justify-center my-9 font-semibold text-2xl">
            Your cart is empty
          </div>
        )}

        <div className="flex gap-3 items-center">
          <h3 className="font-semibold text-lg">Subtotal:</h3>
          <h1 className="font-semibold text-2xl text-[#df2020]">0</h1>
        </div>

        <div className="flex mt-8 gap-12">
          <button className="bg-[#df2020] font-semibold text-lg text-white px-4 py-1 rounded-md">
            Continue Shoppping
          </button>
          <button className="bg-[#df2020] font-semibold text-lg text-white px-4 py-1 rounded-md">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}
