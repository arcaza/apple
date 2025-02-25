import React from 'react'
import { Link } from 'react-router-dom'

const IPhone16 = () => {
  return (
    <div className="relative">
      <Link to='/iphone16'>
      <img 
          src="https://www.apple.com/v/home/cb/images/heroes/iphone-16/hero_iphone16_avail__euwzls69btea_large.jpg" 
          className='object-none'  
        />  
      </Link>
         <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid place-items-center gap-1 text-white'>
            <h1 className='text-5xl font-bold'>iPhone 16</h1>
            <h2 className='text-3xl'>Hello, Apple Intelligence.</h2>
            <div className='flex justify-center gap-4 pt-1'>
                <button className='text-black bg-slate-50 rounded-full p-3 hover:bg-white px-5'>Learn More</button>
                <button className='border border-white text-white rounded-full p-3 hover:bg-white hover:text-black px-5'>Buy</button>
            </div>        
      </div>
    </div>
  )
}

export default IPhone16
