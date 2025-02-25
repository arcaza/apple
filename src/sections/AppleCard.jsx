import React from 'react'
import { FaApple } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AppleCard = () => {
  return (
    <div className="relative p-1">
      <Link to='/ipad-pro'>
      <img 
          src="https://www.apple.com/v/home/cb/images/promos/apple-card/promo_apple_card__5cm7draujpey_large.jpg" 
          className='object-none'  
        />  
      </Link>
         <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid place-items-center gap-1 text-black'>
            <h1 className='text-4xl font-bold flex'><FaApple />Card</h1>
            <h3 className='text-xl'>Get up to 3% Daily Cash back <br /> with every purchase.</h3>
            <div className='flex justify-center gap-4 pt-1'>
                <button className='text-white bg-blue-600 rounded-full p-3 hover:bg-blue-500 px-5'>Learn More</button>
                <button className='border border-blue-600 text-blue-600 rounded-full p-3 hover:bg-blue-600 hover:text-white px-5'>Apply now</button>
            </div>        
      </div>
    </div>
  )
}

export default AppleCard
