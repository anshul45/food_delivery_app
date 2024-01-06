import React from 'react'
import Location from "../assets/location.png"
import Image from 'next/image'
import NetWork from "../assets/network.png"

const WhyContents = () => {
  return (
    <div className='px-36 my-20'>
        <div className='flex  items-center gap-10'>
            <Image src={Location} width={500} height={600} alt='delivery' />
            <div className='flex flex-col gap-7'>
                <h1 className='font-semibold text-4xl'>Why <span className='text-[#df2020]'>Tasty Treat?</span></h1>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique assumenda delectus recusandae, nam, soluta dicta quibusdam, quos deleniti pariatur quis culpa maiores</p>
                <div className='flex flex-col gap-4'>
                    <h2 className='font-semibold'><i className="text-[#df2020] font-light ri-checkbox-circle-line"></i> Fresh and tasty foods</h2>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, vitae.</p>
                </div>
                <div>
                    <h2 className='font-semibold'><i className="text-[#df2020] font-light ri-checkbox-circle-line"></i> Quality support</h2>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ipsum.</p>
                </div>
                <div>
                    <h2 className='font-semibold'><i className="text-[#df2020] font-light ri-checkbox-circle-line"></i> Order from any location</h2>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ipsum.</p>
                </div>
            </div>
        </div>
        <div className='flex mt-20'>
            <div className='flex flex-col gap-5'>
                <h3 className='font-semibold text-2xl text-[#df2020]'>Testimonial</h3>
                <h1 className='font-semibold text-4xl'>What our <span className='text-[#df2020]'>customers</span> are saying</h1>
                <p className='text-gray-600 leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non ipsum quo iusto dolores aliquam sapiente natus! Odio, deserunt nihil?</p>
            </div>
            <Image width={500} height={600} src={NetWork} alt='network'/>
        </div>
    </div>
  )
}

export default WhyContents