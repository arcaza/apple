import React from 'react'
import { Link } from 'react-router-dom'

const MacBookAir = () => {
  return (
    <div className="relative p-1">
      <Link to='/ipad-pro'>
      <img 
          src="https://www.apple.com/v/home/cb/images/promos/macbook-air-m3/promo_macbook_air_m3__e43jegok3wuq_large.jpg" 
          className='object-none lg:h-[580px] md:h-auto'  
        />  
      </Link>
      <div className='text-black absolute top-2/9 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-1 grid place-items-center '>
            <h1 className='text-4xl font-bold flex'>Macbook Air</h1>
            <h3 className='text-xl'>Lean. Mean. M3 Machine.</h3>
            <div className='flex justify-center gap-4 pt-1'>
                <button className='text-white p-2 bg-blue-600 rounded-full hover:bg-blue-500 px-4 mt-3'>Learn More</button>
                <button className='border border-blue-600 text-blue-600 rounded-full p-2 hover:bg-blue-600 hover:text-white px-5 mt-3'>Buy</button>
            </div>        
      </div>
    </div>
  )
}

export default MacBookAir
