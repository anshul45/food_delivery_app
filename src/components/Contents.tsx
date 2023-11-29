import React from 'react'
import Service1 from "../assets/service-01.png";
import Service2 from "../assets/service-02.png";
import Service3 from "../assets/service-03.png";
import Image from 'next/image';

const Contents = () => {
  return (
    <div className='px-36 my-32'>
        <div className='flex flex-col justify-center gap-6  items-center'>
            <h1 className='font-semibold text-2xl text-[#df2020]'>What we serve</h1>
            <h1 className='font-semibold text-4xl'>Just sit back at home</h1>
            <div className='font-semibold text-4xl'>
                <span>we will </span>
                <span className='text-[#df2020]'>take care</span>
            </div>
            <div className='text-gray-500'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, facere.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, necessitatibus!</p>
            </div>
        </div>
        <div className='mt-24 flex justify-between'>
            <div className='flex gap-5 flex-col justify-center w-56 text-center items-center'>
                <Image src={Service1} width={80} height={80} alt='service'/>
                <h2 className='font-bold text-xl'>Quick Delivery</h2>
                <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, sed.</p>
            </div>
            <div className='flex gap-5 flex-col justify-center w-56 text-center items-center'>
            <Image src={Service2} width={80} height={80} alt='service'/>
            <h2 className='font-bold text-xl'>Super Dine in</h2>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, odit?</p>
            </div>
            <div className='flex gap-5 flex-col justify-center w-56 text-center items-center'>
            <Image src={Service3} width={80} height={80} alt='service'/>
            <h2 className='font-bold text-xl'>Easy Pick Up</h2>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, molestiae?</p>
            </div>
        </div>
    </div>
  )
}

export default Contents