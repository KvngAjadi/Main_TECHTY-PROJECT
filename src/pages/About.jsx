import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../components/Button'
import Footer from '../components/Footer'

const About = () => {
  return (
      <div>
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
        <div className='flex gap-10 pl-20 bg-[#F0F8FF] h-160'>
          <div className='mt-10'>
          <img src="about pic.png" alt="" className='w-120 h-120'/>
          </div>
          <div className='flex flex-col gap-10 mt-10'>
            <div>
            <h1 className='text-3xl font-space font-bold'><span className='font-space font-bold text-[#28D08A] text-3xl'>About</span> Techty</h1>
            <p className='font-space mt-5 text-[17px]'>We're constantly pushing the boundaries of what's <br /> possible and seeking new ways to improve our services <br /> and help our clients achieve their goals.</p>
            </div>
            <div>
            <h1 className='text-2xl font-space font-bold'> Vision</h1>
            <p className='font-space mt-5 text-[17px]'>We're constantly pushing the boundaries of what's <br /> possible and seeking new ways to improve our services <br /> and help our clients achieve their goals.</p>
            </div>
            <div>
            <h1 className='text-2xl font-space font-bold'> Mission</h1>
            <p className='font-space mt-5 text-[17pxpx]'>We're constantly pushing the boundaries of what's <br /> possible and seeking new ways to improve our services <br /> and help our clients achieve their goals.</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col pl-20 h-180 bg-white'>
          <div>
            <h1 className='font-space font-bold text-3xl mt-30'>Message from <span className='font-space font-bold text-3xl text-[#28D08A]'>Founder</span></h1>
          </div>
          <div className='flex gap-20'>
          <div className='mt-10'>
            <p className='font-space '>I would like to take a moment to express my sincere <br /> gratitude for choosing our IT services. As the founder of <br /> this company, I am proud to say that we are committed to <br /> providing the best possible solutions for your business <br /> needs.</p>
            <p className='font-space mt-5'>We understand the challenges that come with managing <br /> an enterprise in the digital age, and we are dedicated to <br /> delivering innovative and reliable IT services to help you <br /> navigate these challenges with ease.</p>
            <p className='font-space mt-5'>Our team of experts is constantly working to improve our <br /> services and stay up-to-date with the latest <br /> technological advancements. We strive to provide <br /> personalized solutions that cater to your specific <br /> requirements, ensuring that your business operations run <br /> smoothly and efficiently.</p>
            <h1 className='font-bold font-space text-2xl mt-5'>John Williams</h1>
            <p className='font-space text-[20px]'>Founder, Ceo</p>
          </div>
          <div>
            <img src="/founder pic.png" alt="" className='w-120 h-120' />
          </div>
          </div>
        </div>
        <div>
          <div className='text-center text- font-space font-bold mt-30'>
          <h1 className='text-black font-space font-bold text-4xl'>Our <span className='text-[#28D08A] font-space text-4xl'>team</span> behind all <br />the success we have</h1>
          </div>
          <div className='flex justify-between p-10 mt-20 mb-30'>
          <div className='flex flex-col'>
            <img src="/team1.png" alt="" className='rounded-tr-md rounded-tl-md'/>
            <p className='font-space font-bold text-2xl'>Hyeon Vivek</p>
            <p className='font-space text-[20px] text-gray-600'>Financial Consultant</p>
          </div>
          <div className='flex flex-col'>
            <img src="/team 2.png" alt="" />
            <p className='font-space font-bold text-2xl'>Hyeon Vivek</p>
            <p className='font-space text-2xl text-[20px] text-gray-600'>Financial Consultant</p>
          </div>
          <div className='flex flex-col'>
            <img src="/team1.png" alt="" />
            <p className='font-space font-bold text-2xl'>Hyeon Vivek</p>
            <p className='font-space text-[20px] text-gray-600'>Financial Consultant</p>
          </div>
          <div className='flex flex-col'>
            <img src="/team 2.png" alt="" />
            <p className='font-space font-bold text-2xl'>Hyeon Vivek</p>
            <p className='font-space text-[20px] text-gray-600'>Financial Consultant</p>
          </div>
          </div>
        </div>
        <div className='bg-[#495460] h-200'>
          <Footer/>
        </div>
        </div>
  )
}

export default About