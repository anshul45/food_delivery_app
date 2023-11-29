import Logo from "../assets/res-logo.png";
import Image from "next/image";
const Header = () => {
  return (
    <div className="flex justify-between items-center px-36 py-2 shadow-lg shadow-[#fde4e4]">
      <div className="flex flex-col items-center">
        <Image alt='Logo' width={50} height={50} src={Logo}/>
          <h1 className='font-bold text-xl'>Tasty Treat</h1>
          </div>
      <div className="flex justify-between gap-12 font-semibold">
        <h1>Home</h1>
        <h1>Foods</h1>
        <h1>Cart</h1>
        <h1>Contact</h1>
      </div>
      <div className="flex gap-7 text-lg">
      <i className="ri-shopping-basket-line"></i>
      <i className="ri-user-line"></i>
      </div>
    </div>
  )
}

export default Header