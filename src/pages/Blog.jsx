import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../components/Button'
import Footer from '../components/Footer'

const Blog = () => {
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
                <Button name='Request a Free Demo' style={"bg-white text-black border-1 border-black rounded-md font-semibold"}/>
            </div>
            </nav>
            <div className="w-full flex flex-col items-center justify-center bg-[#F1F1F1]">
        <h1 className="text-black font-space font-bold text-4xl px-15 mt-10">
          Our Blog
        </h1>
        <p className='font-space mt-15 text-[20px] text-gray-400 text-center'>We're constantly pushing the boundaries of what's <br /> possible and seeking new ways to improve our <br /> services.</p>
      <div className='flex p-5 mt-5'>
        <img src="/blog picture.png" alt="" />
        <div className='flex flex-col pl-5 w-150 bg-white rounded-tr-lg rounded-br-lg'>
        <p className='text-[20px] mt-7 font-space'>May 30, 2025</p>
        <h1 className='text-5xl mt-7 font-bold font-space'>5 reasons why Techty <br /> is the go-to choice for <br /> small business.</h1>
        <p className='font-space mt-7 font-normal text-[20px]'>Let us manage your IT for you so that you can get back <br /> to doing what you do best.</p>
        </div>
      </div>
      </div>
      <div className='bg-[#495460]'>
        <Footer/>
      </div>
            </div>
  )
}

export default Blog