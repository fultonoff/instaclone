import React from 'react'
import Image from 'next/image'
import {BiSearch} from  'react-icons/bi'
import {AiOutlineHome, AiOutlinePlusCircle} from  'react-icons/ai'

const Header = () => {
  return (
   
      <div className='shadow-sm border-b sticky top-0 bg-white z-30'>


      <div className='flex items-center justify-between px-2 max-w-6xl xl:mx-auto py-4 mx-4'>
          {/* Left */}
            <div className='h-24 w-24 relative hidden lg:inline-grid cursor-pointer'>
                <Image src="https://www.dhphoto.se/wp-content/uploads/2023/03/Instagram-Logo-Black-And-White-Vector.png" alt='' fill className=''/>
            </div>
            <div className='h-10 w-10 relative lg:hidden cursor-pointer'>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Instagram.svg/800px-Instagram.svg.png" alt='' fill className=''/>
            </div>

            {/* Middle */}

            <div className='flex relative'>
                <div className='absolute top-2 left-3'>
                    <BiSearch className=' text-gray-500 text-xl'/>
                </div>
                <input type="text" placeholder='Search' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md'/>
            </div>


            {/* Right */}
            <div className='flex items-center space-x-4'>
            <AiOutlineHome className='hidden md:inline-flex text-2xl cursor-pointer duration-200 hover:scale-125 ease-out'/>
            <AiOutlinePlusCircle className='text-2xl cursor-pointer duration-200 hover:scale-125 ease-out'/>

            <img src={'https://media.licdn.com/dms/image/C4E03AQEuemhDoExlQQ/profile-displayphoto-shrink_800_800/0/1645550396928?e=2147483647&v=beta&t=JBhpct7OftTjaeXlR0LHOD7iihB84w2wYZEyH-L7WXE'}  alt='user image' className='h-10 rounded-full cursor-pointer'/>
            </div>


      </div>

      </div>


    
  )
}

export default Header
