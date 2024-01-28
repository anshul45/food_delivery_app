import Link from "next/link";
import Banner from "../../assets/banner-02.jpg";

export default function Contact() {
  return (
    <>
      <div
        className="bg-cover bg-center  w-full py-20 pl-32 font-semibold text-4xl text-white"
        style={{
          backgroundImage:
            "linear-gradient(#212245b2, #212245b2), url(https://res.cloudinary.com/anshul1/image/upload/v1706328351/foodapp/fhzfvnrmqk3dzlylrzyn.jpg)",
        }}
      >
        Contact Us
      </div>

      <div className="my-24 mx-32 gap-7 flex flex-col  justify-center items-center">
        <h1 className="font-semibold text-2xl text-[#212245]">Contact us :</h1>
        <h1 className="font-semibold text-2xl text-[#df2020]">Get in touch </h1>
        <div className="flex gap-5">
          <Link href="https://github.com/anshul45" target="_blank">
            <i className="text-white text-sm py-2 px-2 bg-[#df2020] rounded-full ri-github-line"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
