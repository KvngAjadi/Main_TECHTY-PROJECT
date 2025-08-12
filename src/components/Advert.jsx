import React from 'react'
import MarqueeComp from './MarqueeComp'

const Advert = () => {
  return (
    <div className='flex flex-col'>
        <div className='h-0.25 bg-gray-300 my-10'> </div>
        <div className='flex pl-15 mt-20'>
            <p className='font-semibold text-[20px] w-70'>Thousands of <br />businesses use Techty</p>
            <MarqueeComp />
        </div>
    </div>
  )
}

export default Advert