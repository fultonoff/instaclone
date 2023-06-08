import React from 'react'
import { useSession, signOut } from 'next-auth/react'

const MinProfile = () => {
  const {data: session} = useSession()
  
  return (
    <div className='flex items-center justify-between mt-[14px] ml-[10px]'>
      
      <img src={session?.user.image}  alt='user image' className='h-16 rounded-full border p-[2px] cursor-pointer'/>
      <div className='flex-1'>
        <h2 className='font-bold'>{session?.user.username}</h2>
        <h3 className='text-sm text-gray-400'>Welcom to Instagram</h3>
      </div>

      <button className='font-semibold text-blue-400 text-sm' onClick={signOut}>Sign out</button>
    </div>
  )
}

export default MinProfile
