import React from 'react'
import Bread from "../assets/bread.png"
import Pizza from "../assets/pizza.png"
import Burger from "../assets/hamburger.png"
import Image from 'next/image'
import SingleFood from './SingleFood'

const PopularFoods = () => {
const array = [1,2,3,4,5,5,6,7,8,9,10,11,12,13,14,15]
  return (
    <div className='my-20 px-36'>
        <div className='font-semibold text-4xl text-center mb-10'>Popular Foods</div>
        <div className=' bg-[#df2020]  flex gap-20 justify-center py-7 text-white rounded-md'>
            <h1>All</h1>
         <div className='flex items-center gap-2 '><Image width={20} height={20} src={Burger} alt='burger'/><h1>Burger</h1></div>     {/* bg-white px-4 py-1 rounded-md */}
            <div className='flex items-center gap-2'><Image width={20} height={20} src={Pizza} alt='pizza'/><h1>Pizza</h1></div>
            <div className='flex items-center gap-2'><Image width={20} height={20} src={Bread} alt='bread'/><h1>Bread</h1></div>
        </div>
        <div className='flex flex-wrap justify-between py-14 gap-20'>
        {array.map((item, index) =>(
          <SingleFood key={index}/>
        ))}
        </div>
    </div>
  )
}

export default PopularFoods