import Carousel from "@/components/Carousel";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="my-24 mx-32 gap-7 flex flex-col  justify-center items-center">
      <h1 className="font-semibold text-2xl">Contact us :</h1>
      <h1 className="font-semibold text-2xl text-[#df2020]">Get in touch </h1>
      <div className="flex gap-5">
        <Link href="https://github.com/anshul45" target="_blank">
          <i className="text-white text-sm py-2 px-2 bg-[#df2020] rounded-full ri-github-line"></i>
        </Link>

        <Link href="https://www.linkedin.com/in/45ansh" target="_blank">
          <i className="text-white text-sm py-2 px-2 bg-[#df2020] rounded-full ri-linkedin-line"></i>
        </Link>
        <Link href="https://twitter.com/anshul_025" target="_blank">
          <i className="text-white text-sm py-2 px-2 bg-[#df2020] rounded-full ri-twitter-x-line"></i>
        </Link>
      </div>
    </div>
  );
}
