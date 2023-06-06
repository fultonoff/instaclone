import React, {useState, useEffect} from 'react';
import minifaker from 'minifaker';
import 'minifaker/locales/en'

const Suggestions = () => {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(()=>{
        const suggestions = minifaker.array(5, (i)=>({
            username:  minifaker.username({locale: 'en'}).toLowerCase(),
            jobTitle:  minifaker.jobTitle(),
            id: i,
        }))

        setSuggestions(suggestions)
    }, [])
  return (

    <div className='mt-4 ml-10'>

    <div className='flex items-center justify-between mb-5 text-sm'>
      <h3 className='font-bold text-gray-400'>Suggestion for you</h3>
      <button className='text-gray-600 font-semibold'>See all</button>
    </div>

    {suggestions.map((suggestion) =>{
        return(
            <div key={suggestion.id} className='flex items-center justify-between mt-3'>
                <img src={`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`} alt="" className='h-10 rounded-full border p-[2px]'/>
                <div className='flex-1 ml-4'>
                    <h2 className='font-semibold text-sm'>{suggestion.username}</h2>
                    <h3 className='text-gray-400 text-sm truncate w-[239px]'>{suggestion.jobTitle}</h3>
                </div>
            </div>
        )
    })}

    </div>
  )
}

export default Suggestions
