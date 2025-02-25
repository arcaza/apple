import React from 'react'

const IPhone16e = () => {

  return (
    <div className="relative">
        {/* <img src="https://www.apple.com/v/home/cb/images/heroes/iphone-16e/hero_iphone_16e__f5aoann5v1me_large.jpg" className='' /> */}
        {/* <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-center'> */}
        <div className='flex flex-col text-center'>
            <h1>iPhone 16<span>e</span></h1>
            <h2>Latest iPhone. Greatest Price</h2>
            <h3 className='bg-gradient-to-r from-sky-500 via-purple-500 to-amber-600'>Available starting 2.28</h3>
            <p className='bg-gradient-to-r from-sky-500 via-purple-500 to-amber-600'>Test</p>
            <div className='flex justify-center gap-4'>
                <button className='bg-blue-600 text-white rounded-full p-3 hover:bg-blue-500'>Learn More</button>
                <button className='border border-blue-600 text-blue-600 rounded-full p-3 hover:bg-blue-500 hover:text-white'>Pre-order</button>
            </div>
        <h3><span>Built for Apple Intelligence</span></h3>
        
    </div>
    </div>

  )
}

export default IPhone16e
