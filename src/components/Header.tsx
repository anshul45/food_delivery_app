"use client";
import Logo from "../assets/res-logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartPreview from "@/components/CartPreview";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { fetchData } from "@/lib/redux/dataSlice";
import { toast } from "react-toastify";
import { signOut } from "next-auth/react";

const Header = () => {
  const cartData = useSelector((state: RootState) => state.cart.cartData);
  const qty = cartData.reduce((sum, item) => sum + item.quantity, 0);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const session = useSession();
  const [showCart, setShowCart] = useState<boolean>(false);

  const toggleCartPreview = () => {
    setShowCart(!showCart);
  };
  const path = usePathname();
  const id = path.split("/")[2];

  const handleClick = () => {
    if (session.status === "unauthenticated") {
      router.push("/login");
      toast.warning("You need to login");
    } else {
      toggleCartPreview();
    }
  };

  const fetchFoods = async () => {
    const res = await fetch("http://localhost:3000/api/product");
    const foods = await res.json();
    if (foods.data && Array.isArray(foods.data)) {
      dispatch(fetchData(foods.data));
    } else {
      console.error("No data format from the API");
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center px-36 py-2 shadow-lg shadow-[#fde4e4]">
        <div className="flex flex-col items-center">
          <Link href="/">
            <Image alt="Logo" width={50} height={50} src={Logo} />
          </Link>
          <h1 className="font-bold text-xl">Tasty Treat</h1>
        </div>
        <div className="flex justify-between gap-12 font-semibold">
          <Link
            href="/"
            className={`font-semibold ${
              path == "/" ? "text-[#df2020]" : "black"
            }`}
          >
            Home
          </Link>
          <Link
            href="/foods"
            className={`font-semibold ${
              path === "/foods"
                ? "text-[#df2020]"
                : path === `/foods/${id}`
                ? "text-[#df2020]"
                : "black"
            }`}
          >
            Foods
          </Link>
          <Link
            href="/cart"
            className={`font-semibold ${
              path == "/cart" ? "text-[#df2020]" : "black"
            }`}
          >
            Cart
          </Link>
          <Link
            href="/contact"
            className={`font-semibold ${
              path == "/contact" ? "text-[#df2020]" : "black"
            }`}
          >
            Contact
          </Link>
        </div>
        <div className="flex gap-7 text-lg">
          <div>
            <i
              className="ri-shopping-basket-line cursor-pointer"
              onClick={handleClick}
            ></i>
            {qty > 0 && (
              <h3
                className={`absolute top-7 ml-4 text-xs text-white bg-[#df2020] rounded-full ${
                  qty > 9 ? "px-1 py-0.5" : "px-2 py-0.5"
                }`}
              >
                {qty}
              </h3>
            )}
          </div>
          {session.status === "unauthenticated" ? (
            <Link href="/login">
              <i className="ri-user-line"></i>
            </Link>
          ) : (
            <i
              className="ri-logout-circle-r-line cursor-pointer"
              onClick={() => {
                toast.success("Successfully logout");
                signOut();
              }}
            ></i>
          )}
        </div>
      </div>
      {showCart && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-700 opacity-50 z-50"
          onClick={toggleCartPreview}
        ></div>
      )}

      {showCart && (
        <div className="fixed right-0 top-0 z-50 bg-white w-96 h-full flex flex-col justify-between">
          <CartPreview setShowCart={setShowCart} />
        </div>
      )}
    </>
  );
};

export default Header;
