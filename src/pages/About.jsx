import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../components/Button'

const About = () => {
  return (
    <nav className='flex flex-row font-space bg-[#F0F8FF] justify-between items-center w-full px-10 py-5'>
        <div className='flex items-center'>
        <img src="/public/svg-662123605_1698 (1).png" alt="" />
            <h1 className='text-3xl text-black font-bold font-space'>Techty</h1>
        </div>
        <div className='flex items-center gap-15 font-space font-semibold'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/service'}>Service</NavLink>
            <NavLink to={'/blog'}>Blog</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
            <Button name='Request a Free Demo' style={"bg-black text-white rounded-md font-semibold"}/>
        </div>
        </nav>
  )
}

export default About