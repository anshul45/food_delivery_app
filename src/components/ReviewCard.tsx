import React from "react";
interface Data {
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
  };
}

const ReviewCard: React.FC<Data> = ({ data }) => {
  const starData = Array.from({ length: data?.stars }, (_, i) => i);

  return (
    <div className="flex flex-col pt-9">
      <h1 className="font-semibold text-sm text-[#212245]">{data?.username}</h1>
      <div className="flex gap-5 text-sm">
        <div>
          {starData.map((data) => (
            <i className="ri-star-fill text-[#df2020]" key={data}></i>
          ))}
        </div>
        <div className="font-semibold text-gray-500">{data?.title}</div>
      </div>
      <p className="text-sm">{data?.desc}</p>
    </div>
  );
};

export default ReviewCard;
