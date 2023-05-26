import React from 'react'
import Image from 'next/image'
import {BiSearch} from  'react-icons/bi'

const Header = () => {
  return (
   
      
      <div className='flex items-center justify-between px-2 max-w-6xl mx-auto py-4'>
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
            <h1>Right side</h1>


      </div>


    
  )
}

export default Header
