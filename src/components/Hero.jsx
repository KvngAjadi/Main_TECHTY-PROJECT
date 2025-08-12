import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className='flex'>
    <div className='flex flex-col px-15 mt-35 font-space bg-[]'>
    <h1 className='text-6xl font-bold'>Secure <span className='text-[#28D08A]'>business</span><br />
    with Techty security.</h1>
    <p className='pt-20'>We have considered our solutions to support every stage of your <br /> growth. We are the fastest and easiest way to launch an <br /> attractive and feature-complete SaaS showcase.</p>
    <div className='flex gap-2 mt-5'>
        <Button name='Request a Free Demo' style={"bg-black hover:bg-[#28D08A] text-[12px] font-space p-3 items-center flex justify-center text-white rounded-md w-40 h-10 font-normal"}/>
        <Button name='Hire an Expert' style={"bg-black hover:bg-[#28D08A] text-white text-[12px] items-center flex justify-center rounded-md w-40 h-10 font-semibold"}/>

    </div>
    </div>
    <div className='mt-15 flex flex-col'>
        <img src="/public/image 1.png" alt="" className='rounded-lg shadow-white'/>
    <div className='flex mt-5 items-center'>
        <img src="/public/Star.png" alt=""  className=''/>
        <h3 className='font-semibold text-black ml-2'>Trustpilot</h3>
        <img src="/public/Frame 15.png" alt="" className='ml-7'/>
    </div>
    </div>
    </div>

  )
}

export default Hero