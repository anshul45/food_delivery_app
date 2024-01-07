import React from 'react'

const ReviewCard = () => {
  return (
    <div className='flex flex-col gap-2 pt-9'>
    <h1 className='font-semibold text-lg'>User name</h1>
    <div className='flex gap-5'>
    <div>stars</div>
    <div className='font-semibold'>review title</div>

    </div>
    <p className='font-semibold text-xs text-gray-600'>created at</p>
    <p>Review Desc Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, omnis iste harum eius odio perspiciatis voluptates magnam architecto, nam ad aut! Error aliquam maiores nemo, corrupti architecto dolorum laborum deleniti. </p>
</div>
  )
}

export default ReviewCard