import React from 'react'
import { Link } from 'react-router-dom'

const IPadPro = () => {
  return (
    <div className="relative p-1">
      <Link to='/ipad-pro'>
      <img 
          src="https://www.apple.com/v/home/cb/images/promos/ipad-pro/promo_ipadpro_avail__s271j89g8kii_large.jpg" 
          className='object-none lg:h-[580px] md:h-auto'  
        />  
      </Link>
      <div className='text-white absolute top-2/7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-1 grid place-items-center '>
            <h1 className='text-4xl font-bold flex'>iPad Pro</h1>
            <h3 className='text-xl'>Unbelievably thin. Incredibly powerful.</h3>
            <div className='flex justify-center gap-4 pt-1 mb-2'>
                <button className='text-white bg-blue-600 rounded-full p-2 hover:bg-blue-500 px-4 mt-3'>Learn More</button>
                <button className='border border-blue-600 text-blue-600 rounded-full p-2 hover:bg-blue-600 hover:text-white px-5 mt-3'>Buy</button>
            </div>

            <h3><span className='bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent'>Hello, Apple Intelligence.</span></h3>
      </div>
    </div>
  )
}

export default IPadPro
