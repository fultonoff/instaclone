import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
      {/* Left */}

      <div className='flex items-center justify-between px-2 max-w-6xl mx-auto'>
            <div className='h-24 w-24 relative hidden lg:inline-grid cursor-pointer'>
                <Image src="https://www.dhphoto.se/wp-content/uploads/2023/03/Instagram-Logo-Black-And-White-Vector.png" alt='' fill className=''/>
            </div>
            <div className='h-10 w-10 relative lg:hidden cursor-pointer'>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Instagram.svg/800px-Instagram.svg.png" alt='' fill className=''/>
            </div>

            <h1>Right side</h1>
      </div>

      {/* Middle */}

      {/* Right */}
    </div>
  )
}

export default Header
