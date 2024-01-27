"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Checkout() {
  const session = useSession();
  const router = useRouter();
  if (session.status === "unauthenticated") {
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
        Checkout
      </div>
    </div>
  );
}
