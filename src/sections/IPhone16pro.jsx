import React from 'react'
import { Link } from 'react-router-dom'

const IPhone16pro = () => {
  return (
    <div className="relative">
      <Link to='/iphone16-pro'>
      <img 
          src="https://www.apple.com/v/home/cb/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_large.jpg" 
          className='object-none'  
        />  
      </Link>
         <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid place-items-center gap-1 text-white'>
        {/* <div className='grid place-items-center gap-1'> */}
            <h1 className='text-5xl font-bold'>iPhone 16 Pro</h1>
            <h2 className='text-3xl'>Hello, Apple Intelligence.</h2>
            <div className='flex justify-center gap-4 pt-1'>
                <button className='bg-blue-600 rounded-full p-3 hover:bg-blue-500 px-5'>Learn More</button>
                <button className='border border-blue-600 text-blue-600 rounded-full p-3 hover:bg-blue-500 hover:text-white px-5'>Buy</button>
            </div>        
      </div>
    </div>
  )
}

export default IPhone16pro
