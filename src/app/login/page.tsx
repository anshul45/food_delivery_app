"use client";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const session = useSession();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    signIn(
      "credentials",
      {
        email,
        password,
      },
      { callbackUrl: "/" }
    );
  };

  useEffect(() => {

    if (session.status !== "unauthenticated") {
      router.push("/");
    }
  }, [session.status])

  return (
    <div>
      <div className="flex flex-col gap-14  justify-center items-center">
        <div
          className="bg-cover bg-center  w-full py-20 pl-32 font-semibold text-4xl text-white"
          style={{
            backgroundImage:
              "linear-gradient(#212245b2, #212245b2), url(https://res.cloudinary.com/anshul1/image/upload/v1706328351/foodapp/fhzfvnrmqk3dzlylrzyn.jpg)",
          }}
        >
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
          <button
            className="bg-[#df2020] py-2 rounded-md text-white font-semibold"
            onClick={() => {
              signIn("google", { callbackUrl: "/" });
            }}
          >
            Login With Google
          </button>
        </div>
        <Link href="/register">
          <div className="mb-14">New here? Sign up now!</div>
        </Link>
      </div>
    </div>
  );
}
