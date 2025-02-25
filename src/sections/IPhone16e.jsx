import React from 'react'
import { Link } from 'react-router-dom'

const IPhone16e = () => {

  return (
    <div className="relative">
      <Link to='/iphone16-e'>
      <img 
          src="https://www.apple.com/v/home/cb/images/heroes/iphone-16e/hero_iphone_16e__f5aoann5v1me_large.jpg" 
          className='object-none lg:h-[580px] md:h-auto'  
        />  
      </Link>
         <div className='absolute top-2/7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-1 grid place-items-center '>
            <h1 className='text-5xl font-bold'>iPhone 16<span className='bg-gradient-to-r from-sky-500 via-purple-500 to-amber-600 bg-clip-text text-transparent'>e</span></h1>
            <h2 className='text-3xl'>Latest iPhone. Greatest Price</h2>
            <h3 className='text-stone-600 text-xl'>Available starting 2.28</h3>
            <div className='flex justify-center gap-4 pt-3 mb-2'>
                <button className='bg-blue-600 text-white rounded-full p-3 hover:bg-blue-500 px-5'>Learn More</button>
                <button className='border border-blue-600 text-blue-600 rounded-full p-3 hover:bg-blue-500 hover:text-white px-5'>Pre-order</button>
            </div>
        <h3><span className='bg-gradient-to-r from-sky-500 via-purple-500 to-amber-600 bg-clip-text text-transparent font-bold'>Built for Apple Intelligence.</span></h3>
        
      </div>
    </div>

  )
}

export default IPhone16e
