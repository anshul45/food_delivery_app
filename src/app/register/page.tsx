"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, FormEvent, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Register() {
  const session = useSession();
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const res = await fetch("https://food-delivery-app-orcin-two.vercel.app/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });


    if (res.status === 201) {
      router.push("/login");
    }
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
          Sign up
        </div>
        <div className="flex flex-col  w-96 gap-9 bg-[#fde4e4] px-6 py-7 rounded-sm ">
          <input
            type="text"
            value={name}
            placeholder="Name"
            className="bg-inherit  w-full border-b-[1px] border-black focus:outline-none"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            placeholder="Email"
            className="bg-inherit  w-full border-b-[1px] border-black focus:outline-none"
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
            Signup
          </button>
        </div>
        <Link href="/login">
          <div className="mb-14">Already have an account? Login</div>
        </Link>
      </div>
    </div>
  );
}
