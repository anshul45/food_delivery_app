import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import AddReview from "./AddReview";

type ReviewData = {
  data: {
    _id: string;
    userId: string;
    username: string;
    productId: string;
    stars: number;
    title: string;
    desc: string;
    createdAt: string;
    __v: number;
  }[];
};

const Review: React.FC<{ id: string | undefined }> = ({ id }) => {
  const [reviewData, setReviewData] = useState<ReviewData["data"] | null>(null);

  const fetchReview = async () => {
    try {
      const res = await fetch(
        `https://food-delivery-app-anshul45.vercel.app/api/review/${id}`
      );
      const resData: ReviewData = await res.json();
      console.log(resData);
      setReviewData(resData.data);
    } catch (error) {
      console.error("Error fetching review data:", error);
    }
  };

  const handleReviewSubmit = () => {
    fetchReview();
  };

  useEffect(() => {
    fetchReview();
  }, []);
  return (
    <div>
      {reviewData ? (
        reviewData.map((data) => <ReviewCard key={data?._id} data={data} />)
      ) : (
        <div className="font-semibold text-2xl mt-7 text-[#212245]">
          <p className="mb-3">There are no reviews for this product yet.</p>
          <p>Be the first one to share your thoughts!</p>
        </div>
      )}
      <AddReview id={id} onReviewSubmit={handleReviewSubmit} />
    </div>
  );
};

export default Review;
