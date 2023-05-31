import { username } from 'minifaker';
import React from 'react'
import { RxDotsHorizontal } from 'react-icons/rx';
import { BiHeart, BiBookmark } from 'react-icons/bi';
import { BsChatDots, BsEmojiSmile } from 'react-icons/bs';

const Post = ({post}) => {
    const {id, username, title, userImg, img, caption} = post
  return (
    <div className=' bg-white my-7 border rounded-md'>
      {/* Header */}
      <div className='flex items-center p-5 '>
        <img src={userImg} alt={username} className='h-12 w-12 rounded-full object-cover border p-1 mr-3'/>
        <p className='font-bold flex-1'>{username}</p>
        <RxDotsHorizontal/>
      </div>

      {/* post image */}

      <img src={img} alt="" className='object-cover w-full'/>
      {/* post buttons */}
      <div className='flex justify-between px-4 pt-4'>
        <div className='flex space-x-4'>
            <BiHeart className='btn'/>
            <BsChatDots className='btn'/>
        </div>

        <BiBookmark className='btn'/>
      </div>

      {/* Post comment */}

      <p className='p-5 truncate'><span className='font-bold mr-2'>{username}</span>{caption}</p>

      {/* Post input box */}
      <form className='flex items-center p-4'>
        <BsEmojiSmile className='text-3xl'/>
        <input type="text"  placeholder='Enter your comment...' className='flex-1 border-none focus:ring-0'/>
        <button className='text-blue-400 font-bold'>Post</button>
      </form>

    </div>
  )
}

export default Post
