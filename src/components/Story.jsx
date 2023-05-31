import React from 'react'

const Story = ({user}) => {


  return (
    <div className=''>
      <img src={user.img} alt="" className='h-14 rounded-full border-2 cursor-pointer hover:scale-110 transition-all border-red-500 p-[1.5px] ease-out '/>
      <p className=' truncate text-xs w-14'>{user.username}</p>
    </div>
  )
}

export default Story
