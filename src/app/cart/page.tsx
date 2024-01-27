"use client";
import CartCard from "@/components/CartCard";
import { RootState } from "@/lib/redux/store";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
export default function Cart() {
  const cartData = useSelector((state: RootState) => state.cart.cartData);
  const router = useRouter();
  const session = useSession();
  const subTotal = cartData.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (session.status === "unauthenticated") {
    toast.warning("You need to login");
    router.push("/login");
  }
  return (
    <div>
      <div
        className="bg-cover bg-center  w-full py-20 pl-32 font-semibold text-4xl text-white"
        style={{
          backgroundImage:
            "linear-gradient(#212245b2, #212245b2), url(https://res.cloudinary.com/anshul1/image/upload/v1706328351/foodapp/fhzfvnrmqk3dzlylrzyn.jpg)",
        }}
      >
        Your Cart
      </div>
      <div
        className={`mx-32 my-12 flex flex-col justify-between ${
          cartData.length ? "" : "h-[calc(100vh-300px)]"
        } `}
      >
        <>
          {cartData.length ? (
            <div className="my-8">
              <div className="grid grid-flow-col grid-cols-6 font-semibold text-xl text-[#df2020]">
                <h1 className="col-span-1">Image</h1>
                <h1 className="col-span-2">Product Title</h1>
                <h1 className="col-span-1 pl-2">Price</h1>
                <h1 className="col-span-2 pl-9">Quantity</h1>
                <h1 className="col-span-1">Delete</h1>
              </div>
              <div className="mt-8">
                {cartData?.map((data) => (
                  <CartCard key={data?._id} data={data} />
                ))}
              </div>
            </div>
          ) : (
            <div className="flex justify-center my-9 font-semibold text-2xl">
              Your cart is empty
            </div>
          )}
        </>
        <div>
          <div className="flex gap-3 items-center ">
            <div>
              <h3 className="font-semibold text-lg">Subtotal:</h3>
              <h1 className="font-semibold text-2xl text-[#df2020]">
                {subTotal}
              </h1>
            </div>
          </div>

          <div className="flex mt-8 gap-12">
            <Link href="/foods">
              <button className="bg-[#df2020] font-semibold text-lg text-white px-4 py-1 rounded-md">
                Continue Shoppping
              </button>
            </Link>
            <Link href="/checkout">
              <button className="bg-[#df2020] font-semibold text-lg text-white px-4 py-1 rounded-md">
                Proceed to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
