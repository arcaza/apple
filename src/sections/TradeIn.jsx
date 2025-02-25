import React from 'react'
import { FaApple } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const TradeIn = () => {
  return (
    <div className="relative p-1">
      <Link to='/shop/trade-in'>
      <img 
          src="https://www.apple.com/v/home/cb/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_large.jpg" 
          className='object-none lg:h-[580px] md:h-auto'  
        />  
      </Link>
      <div className='text-black absolute top-2/9 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-1 grid place-items-center '>
            <h1 className='text-4xl font-bold flex text-black'><FaApple />Trade in</h1>
            <h3 className='text-xl pb-1'>Get $180-$650 in credit when <br /> you trade in iPhone 12 or higher.<sup className='text-[10px]'>1</sup></h3>
            <button className='border border-blue-600 text-blue-600 rounded-full p-2 hover:bg-blue-600 hover:text-white px-4 mt-3'>Get your estimate</button>
    
      </div>
    </div>
  )
}

export default TradeIn
