"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const AddReview: React.FC<{
  id: string | undefined;
  onReviewSubmit: () => void;
}> = ({ id, onReviewSubmit }) => {
  const session = useSession();
  const router = useRouter();
  const [reviewTitle, setReviewTitle] = useState<string>("");
  const [reviewdesc, setReviewDesc] = useState<string>("");
  const startData = [1, 2, 3, 4, 5];
  const [selectedStar, setSelectedStar] = useState<number>(-1);

  const submitReview = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session?.data?.user?.email,
          productId: id,
          stars: selectedStar + 1,
          title: reviewTitle,
          desc: reviewdesc,
        }),
      });
      if (response.ok) {
        toast.success("Review submitted successfully!");
        onReviewSubmit();
      } else {
        toast.error("Failed to submit review.");
      }
    } catch (error) {
      console.error("An error occurred during review submission:", error);
    }
  };

  const handleSubmit = async () => {
    if (session.status === "unauthenticated") {
      router.push("/login");
    } else {
      submitReview();
    }
  };

  return (
    <div className="flex  items-center justify-center my-20 ">
      <div className="flex flex-col gap-8 w-2/4 px-10 py-10 bg-[#fde4e4] rounded-lg">
        <div className="flex gap-4 justify-center items-center">
          {startData.map((data, idx) => (
            <i
              className={`cursor-pointer ${
                idx <= selectedStar
                  ? "ri-star-fill text-[#df2020]"
                  : "ri-star-line"
              }`}
              key={idx}
              onClick={() => setSelectedStar(idx)}
            ></i>
          ))}
        </div>
        <input
          placeholder="Review Title"
          type="text"
          value={reviewTitle}
          className="bg-inherit focus:outline-none border-b-[1px] border-black"
          onChange={(e) => setReviewTitle(e.target.value)}
        />
        <input
          placeholder="Review Desc"
          type="text"
          value={reviewdesc}
          className="bg-inherit focus:outline-none border-b-[1px] border-black"
          onChange={(e) => setReviewDesc(e.target.value)}
        />
        <button
          className="font-semibold text-lg py-2 rounded-md text-white bg-[#df2020]"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddReview;
