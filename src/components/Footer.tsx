import React from 'react'
import Image from 'next/image'
import Logo from "../assets/res-logo.png"
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='bg-[#fde4e4] px-32 py-12'>
      <div className='flex justify-between gap-7'>
        <div className='flex flex-col gap-5'>
          <div><Image alt='Logo' width={50} height={50} src={Logo}/>
          <h1 className='font-bold text-xl'>Tasty Treat</h1></div>
          <p className='text-sm break-all'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='font-bold text-xl'>Delivery Time</h1>
          <div>
            <h2 className='font-semibold'>Sunday - Thrusday</h2>
            <h3>10:00am - 11:00pm</h3>
          </div>
          <div>
            <h2 className='font-semibold'>Friday - Saturday</h2>
            <h3>Off day</h3>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
            <h2 className='font-bold text-xl'>Contact</h2>
            <h3>Location: India</h3>
          <div>
          <h2 className='font-semibold'>Phone: 017232346718</h2>
            <h3 className='font-semibold'>Email: example@gmail.com</h3>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='font-bold text-xl'>Newsletter</h1>
          <h3>Subscribe our newsletter</h3>
          <div className='flex border-[1px] rounded-md border-black p-2 flex-nowrap'>
            <input className='bg-inherit outline-none placeholder:text-black' type='email' placeholder='Enter your email'/>
            <div className='px-4 w-fit py-1 bg-[#df2020] rounded-lg'>
            <i className="text-white ri-send-plane-line"></i>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center mt-16'>
        <div className='text-[#df2020] text-sm'>Copyright - 2024, website made by Anshul. All RIghts Reserved.</div>
        <div className='flex gap-4 items-center'>
          <h1 className='text-[#df2020]'>Follow:</h1>
          <Link href="https://github.com/anshul45" target='_blank'>
          <i className="text-white text-sm py-2 px-2 bg-[#df2020] rounded-full ri-github-line"></i>
          </Link>
          
        <Link href="https://www.linkedin.com/in/45ansh" target='_blank'>
          <i className="text-white text-sm py-2 px-2 bg-[#df2020] rounded-full ri-linkedin-line"></i>
        </Link>
        <Link href="https://twitter.com/anshul_025" target='_blank'>
          <i className="text-white text-sm py-2 px-2 bg-[#df2020] rounded-full ri-twitter-x-line"></i>
        </Link>
    
        </div>
      </div>
    </div>
  )
}

export default Footer