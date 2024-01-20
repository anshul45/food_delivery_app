"use client";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { useState, FormEvent } from "react";

export default function Login() {
  const session = useSession();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    signIn("credentials", {
      email,
      password,
    });
  };

  console.log(session);

  return (
    <div>
      <div className="flex flex-col gap-14  justify-center items-center">
        <div className=" bg-green-400 w-full py-20 pl-32 font-semibold text-4xl text-white">
          Login
        </div>
        <div className="flex flex-col w-96 gap-9 bg-[#fde4e4] px-6 py-7 rounded-sm">
          <input
            type="email"
            value={email}
            placeholder="Email"
            className="bg-inherit w-full border-b-[1px] border-black focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            className="bg-inherit  w-full border-b-[1px] border-black focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-[#df2020] py-2 rounded-md text-white font-semibold"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
        <Link href="/register">
          <div className="mb-14">Don't have an account? Create an account</div>
        </Link>
      </div>
    </div>
  );
}
