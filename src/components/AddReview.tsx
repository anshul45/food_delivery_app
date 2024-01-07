"use client"
import React, { useState } from 'react'

const AddReview = () => {
    const [review, setReview] = useState("")
    const [desc, setDesc] = useState("")
    const handleSubmit = () => {}
  return (
    <div className='flex  items-center justify-center my-20 '>
        <div className='flex flex-col gap-8 w-2/4 px-10 py-10 bg-[#fde4e4] rounded-lg'>
            <div>Stars</div>
        <input placeholder='Review Title' type='text' value={review} className='bg-inherit focus:outline-none border-b-[1px] border-black' onChange={e=> setReview(e.target.value)}/>
        <input placeholder='Review Desc' type='text' value={desc} className='bg-inherit focus:outline-none border-b-[1px] border-black' onChange={e => setDesc(e.target.value)}/>
        <button className='font-semibold text-lg py-2 rounded-md text-white bg-[#df2020]' onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default AddReview