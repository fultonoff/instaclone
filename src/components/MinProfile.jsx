import React from 'react'

const MinProfile = () => {
  return (
    <div className='flex items-center justify-between mt-[14px] ml-[10px]'>
      
      <img src={'https://media.licdn.com/dms/image/C4E03AQEuemhDoExlQQ/profile-displayphoto-shrink_800_800/0/1645550396928?e=2147483647&v=beta&t=JBhpct7OftTjaeXlR0LHOD7iihB84w2wYZEyH-L7WXE'}  alt='user image' className='h-16 rounded-full border p-[2px] cursor-pointer'/>
      <div className='flex-1'>
        <h2 className='font-bold'>Fulton Kilebe</h2>
        <h3 className='text-sm text-gray-400'>Welcom to Instagram</h3>
      </div>

      <button className='font-semibold text-blue-400 text-sm'>Sign out</button>
    </div>
  )
}

export default MinProfile
