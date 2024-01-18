"use client";
import Logo from "../assets/res-logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartPreview from "@/components/CartPreview";
import { usePathname, useParams } from "next/navigation";
const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleCartPreview = () => {
    setShowCart(!showCart);
  };
  const path = usePathname();

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
              path == "/foods" ? "text-[#df2020]" : "black"
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
          <i
            className="ri-shopping-basket-line cursor-pointer"
            onClick={toggleCartPreview}
          ></i>
          <Link href="/login">
            <i className="ri-user-line"></i>
          </Link>
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
          <CartPreview />
        </div>
      )}
    </>
  );
};

export default Header;
