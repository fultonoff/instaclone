'use client'

import {useState, useEffect} from 'react'
import minifaker from 'minifaker'
import 'minifaker/locales/en'
import Story from './Story'
import { useSession } from 'next-auth/react'

const Stories = () => {
    const [storyUsers, setStoryUsers]= useState([])
  const {data: session}= useSession()

    useEffect(() => {
        const storyUsers = minifaker.array(20 , (i) => ({
            username: minifaker.username({locale: 'en'}).toLowerCase(),
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
            id: i,
        }));
      
        setStoryUsers(storyUsers)

        
      
      }, []);


  return (
    <div className='flex overflow-x-scroll space-x-2 p-6 bg-white mt-8 border border-gray-200 rounded-sm scrollbar-none rouneded-md'>
      {session && (
        <Story img={session.user.image} username={session.user.username} isUser={true}/>
      )}
      {storyUsers.map((user)=>{
        return (
         <Story key={user.id} username={user.username} img={user.img}/>

        )
      })}
    </div>
  )
}

export default Stories
