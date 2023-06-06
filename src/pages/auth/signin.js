import {getProviders, signIn} from 'next-auth/react'
import Header from '@/components/Header'

const signin = ({providers}) => {
  return (
    <div>
        <Header/>
      <div className='flex justify-center space-x-7 mt-20'>
        <img className='hidden object-cover rotate-6 md:inline-flex md:w-48' src="https://superviral.com.au/wp-content/uploads/2021/10/Buy-Instagram-Followers-Australia.png" alt="instagram image" />
        <div>
            {Object.values(providers).map((provider, index)=>{
                return (
                    <div key={index} className='flex flex-col items-center '>
                        <img className='w-32 object-cover' src="https://socodigital.com/wp-content/uploads/2021/03/Instagram.png" alt="" />
                        <p className='text-sm italic my-10 text-center'>This App is created for learning purposes</p>
                        <button onClick={()=> signIn(provider.id, {callbackUrl: '/'})} className='text-white bg-red-400 rounded-lg p-3 hover:bg-red-500 transition-all'>Sign in with {provider.name}</button>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default signin


export async function getServerSideProps(context){
    const providers = await getProviders()
    return {
        props: {providers}
    }

}
