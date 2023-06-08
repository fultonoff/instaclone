import React from 'react'

import { AiOutlinePlus } from 'react-icons/ai';


const Story = ({img, username, isUser}) => {


  return (
    <div className='relative group cursor-pointer'>
      <img src={img} alt="" className='h-14 rounded-full border-2  group-hover:scale-110 transition-all border-red-500 p-[1.5px] ease-out '/>
      {isUser && <AiOutlinePlus className='text-2xl text-white absolute top-4 left-4'/>}
      <p className=' truncate text-xs w-14'>{username}</p>
    </div>
  )
}

export default Story
