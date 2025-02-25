import React from 'react'
import { Link } from 'react-router-dom'
import { FaApple } from "react-icons/fa";

const AppleWatchSeries10 = () => {
  return (
    <div className="relative p-1">
      <Link to='/apple-watch-series-10'>
      <img 
          src="https://www.apple.com/v/home/cb/images/promos/apple-watch-series-10/promo_apple_watch_series_10_avail_lte__c70y29goir42_large.jpg" 
          className='object-none lg:h-[580px] md:h-auto'  
        />  
      </Link>
      <div className='text-black absolute top-2/9 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-1 grid place-items-center '>
            <h1 className='text-4xl font-bold flex'><FaApple />WATCH</h1>
            <h3 className='text-xl'>Series 10</h3>
            <h2 className='text-2xl'>Thinstant classic.</h2>
            <div className='flex justify-center gap-4 pt-1'>
                <button className='text-white bg-blue-600 rounded-full p-2 hover:bg-blue-500 px-4 mt-3'>Learn More</button>
                <button className='border border-blue-600 text-blue-600 rounded-full p-2 hover:bg-blue-600 hover:text-white px-5 mt-3'>Buy</button>
            </div>        
      </div>
    </div>
  )
}

export default AppleWatchSeries10
