'use client'

import {useState, useEffect} from 'react'
import minifaker from 'minifaker'
import 'minifaker/locales/en'
import Story from './Story'

const Stories = () => {
    const [storyUsers, setStoryUsers]= useState([])

    useEffect(() => {
        const storyUsers = minifaker.array(20 , (i) => ({
            username: minifaker.username({locale: 'en'}).toLowerCase(),
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
            id: i,
        }));
      
        setStoryUsers(storyUsers)

        
      
      }, []);


  return (
    <div className='flex overflow-x-scroll space-x-2 p-6 bg-white mx-auto mt-8 border border-gray-200 rounded-sm scrollbar-none max-w-7xl rouneded-md'>
      {storyUsers.map((user)=>{
        return (
         <Story key={user.id} user={user}/>

        )
      })}
    </div>
  )
}

export default Stories
