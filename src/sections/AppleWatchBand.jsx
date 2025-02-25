import React from 'react'
import { FaApple } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AppleWatchBand = () => {
  return (
    <div className="relative p-1">
      <Link to='/apple-watch-band'>
      <img 
          src="https://www.apple.com/v/home/cb/images/promos/apple-watch-unity/promo_apple_watch_unity__casvx9ysh1le_large.jpg" 
          className='object-none'  
        />  
      </Link>
         <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid place-items-center gap-1 text-white'>
            <h1 className='text-4xl font-bold flex'><FaApple />WATCH</h1>
            <h3 className='text-2xl'>United by rhythm. Discover the new <br />Black Unity watch band and face.</h3>
            <button className='text-black bg-slate-50 rounded-full p-3 hover:bg-white px-5'>Buy</button>
      </div>
    </div>
  )
}

export default AppleWatchBand
