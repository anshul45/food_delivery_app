import React from 'react'
import Bread from "../assets/bread.png"
import Image from 'next/image'
const PopularFoods = () => {
  return (
    <div className='my-20 px-36'>
        <div className='font-semibold text-4xl text-center mb-10'>Popular Foods</div>
        <div className=' bg-[#df2020]  flex gap-20 justify-center py-7 text-white rounded-md'>
            <h1>All</h1>
            <div><Image src={Bread} alt='bread'/>Burger</div>
            <div>Pizza</div>
            <div>Bread</div>
        </div>
        <div></div>
    </div>
  )
}

export default PopularFoods