import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../components/Button'
import Footer from '../components/Footer'

const Service = () => {
  return (
    <div>
    <nav className='flex flex-row font-space justify-between items-center w-full px-10 py-5'>
        <div className='flex items-center'>
        <img src="/public/svg-662123605_1698 (1).png" alt="" />
            <h1 className='text-3xl text-black font-bold font-space'>Techty</h1>
        </div>
        <div className='flex items-center gap-15 font-space font-normal'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/service'}>Service</NavLink>
            <NavLink to={'/blog'}>Blog</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
            <Button name='Request a Free Demo' style={"bg-white text-black rounded-md border-1 border-black font-semibold"}/>
        </div>
        </nav>
        <div className='mt-20'>
          <div className='text-center font-space'>
          <h1 className='text-5xl font-bold'>We provide the best <span className='text-[#28D08A] text-5xl font-bold'>service</span> solutions.</h1>
          <p className='font-space mt-5 text-[20px] text-gray-600'>We're constantly pushing the boundaries of what's possible and seeking new ways to <br /> improve our services and help our clients achieve their goals.</p>
          </div>
          <div className='flex justify-between p-4'>
          <div className='bg-gray-700 w-70 h-80 p-5 mt-5 rounded-md'>
            <img src="/icon 1.png" alt="" className='mt-3' />
            <h1 className='font-bold mt-3 font-space text-2xl'>Online Marketing</h1>
            <p className='font-space mt-3 text-[20px]'>In the new era of technology <br />we look in the future with <br />certainty and pride.</p>
          </div>
          <div className='bg-gray-700 w-70 h-80 p-3 mt-5 rounded-md'>
            <img src="/icon 1.png" alt="" className='mt-3' />
            <h1 className='font-bold mt-3 font-space text-2xl'>Online Marketing</h1>
            <p className='font-space mt-3'>In the new era of technology <br />we look in the future with <br />certainty and pride.</p>
          </div>
          <div className='bg-gray-700 w-70 h-80 p-3 mt-5 rounded-md'>
            <img src="/icon 1.png" alt="" className='mt-3' />
            <h1 className='font-bold mt-3 font-space text-2xl'>Online Marketing</h1>
            <p className='font-space mt-3'>In the new era of technology <br />we look in the future with <br />certainty and pride.</p>
          </div>
          <div className='bg-gray-700 w-70 h-80 p-3 mt-5 rounded-md'>
            <img src="/icon 1.png" alt="" className='mt-3' />
            <h1 className='font-bold font-space text-2xl mt-5'>Online Marketing</h1>
            <p className='font-space mt-5'>In the new era of technology <br />we look in the future with <br />certainty and pride.</p>
          </div>
          </div>
        </div>
        <div className='bg-[#495460]'>
        <Footer/>
      </div>
        </div>
  )
}

export default Service