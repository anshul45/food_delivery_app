"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import user1 from "../assets/ava-2.jpg";
import user2 from "../assets/ava-3.jpg";
import user3 from "../assets/ava-4.jpg";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const users = [
    {
      id: 0,
      name: "Jhon Doe",
      desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, delectus temporibus. Placeat quo id animi dolorem. Blanditiis, deleniti. Nulla officiis omnis ex quibusdam atque facilis minus quam suscipit id ",
      img: user2,
    },
    {
      id: 1,
      name: "Mitchel Marsh",
      desc: "Consectetur earum at cupiditate rem error dolore, fugiat facilis sed dicta. Aut explicabo saepe aliquam quidem doloribus quae tenetur, quas adipisci dicta fuga aliquid debitis quasi quo? Officia, tenetur rerum!",
      img: user1,
    },
    {
      id: 2,
      name: "Steven Crock",
      desc: "  Sequi nisi magni quos, quia expedita fugiat quisquam quidem aliquam impedit officia odio minima corrupti quam facilis eum quis illo placeat voluptas minus voluptates quibusdam. Molestias tenetur tempore quia similique.",
      img: user3,
    },
  ];

  const handleClick = (newIndex: number) => {
    setIndex(newIndex);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const nextIndex = (index + 1) % users.length;
      setIndex(nextIndex);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [index, users.length]);

  return (
    <div className="mt-14 relative overflow-hidden">
      <p className="leading-7 text-gray-400">{users[index].desc}</p>
      <div className="flex items-center gap-5 mt-8">
        <Image
          alt="user"
          src={users[index].img}
          width={50}
          height={50}
          className="rounded-md object-fill"
        />
        <h1 className="font-semibold text-xl text-[#212245]">
          {users[index].name}
        </h1>
      </div>
      <div className="relative bottom-0 left-56">
        {[0, 1, 2].map((idx) => (
          <i
            key={idx}
            className={` text-xs mx-3 cursor-pointer ${
              idx === index ? "ri-circle-fill" : "ri-circle-line"
            }`}
            onClick={() => handleClick(idx)}
          ></i>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
