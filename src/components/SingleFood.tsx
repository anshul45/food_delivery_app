import React from 'react'
import Image from 'next/image'
import Product1 from "../assets/product_01.jpg"
const SingleFood = () => {
  return (
    <div className='flex flex-col gap-6 items-center w-72 border-[1px] border-[#fde4e4] py-5 px-5'>
        <Image width={110} height={110} src={Product1} alt='products'/>
        <h1 className='font-semibold text-lg'>Burger</h1>
        <div className='flex gap-20 items-center'>
            <h1 className='text-[#df2020] font-semibold text-lg'>₹100</h1>
            <button className='text-white bg-[#df2020] px-4 rounded-md py-1.5'>Add to Cart</button>
        </div>
    </div>
  )
}

export default SingleFood