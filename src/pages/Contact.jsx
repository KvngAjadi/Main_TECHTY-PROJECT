import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../components/Button'
import Footer from '../components/Footer'

const Contact = () => {
  return (
      <div className='bg-[#F1F1F1]'>
    <nav className='flex flex-row font-space bg-white justify-between items-center w-full px-10 py-5'>
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
            <Button name='Request A Free Demo' style={"bg-white text-black border-1 border-[#F1F1F1] p-3 rounded-md font-semibold"}/>
        </div>
        </nav>
        <div className='mb-80 h-auto'>
          <div className='font-space text-center pt-20 mb-20'>
            <h1 className='font-bold font-space text-5xl'>Contact Us</h1>
            <p className='text-[20px] text-[#6F7681]'>We constantly pushing the boundaries of what's <br />possible and seeking new ways to improve our <br />services.</p>
          </div>
          <div className=''>
          <div className='relative pt-7 pl-20'>
            <div className='font-space'>
              <h1 className='font-space font-semibold text-2xl'>We're happy to discuss your project <br />and answer any question</h1>
            </div>
            <div>
            <div className='flex gap-40 pt-20'>
              <div className='flex flex-col'>
            <div className='flex flex-col'>
            <div className='flex'>
              <img src="/Frame (1).png" alt="" className='h-7 w-7'/>
              <p className='font-space font-semibold text-[20px] pl-2'>Toll Number</p>
            </div>
            <div>
              <p className='font-space text-[#6F7681]'>+234 801 272 3390</p>
            </div>
            </div>
            <div className='flex flex-col pt-7'>
            <div className='flex'>
              <img src="/Frame (2).png" alt="" className='h-7 w-7'/>
              <p className='font-space font-semibold text-[20px] pl-2'>Working Hours</p>
            </div>
            <div>
              <p className='font-space text-[#6F7681]'>Mon - Friday,</p>
              <p className='font-space text-[#6F7681]'>9a.m - 8 p.m</p>
            </div>
            </div>
              </div>
            <div className='flex flex-col'>
            <div className='flex flex-col'>
            <div className='flex'>
              <img src="/Frame (3).png" alt="" className='h-7 w-7'/>
              <p className='font-space font-semibold text-[20px] pl-2'>Mail Address</p>
            </div>
            <div>
              <p className='font-space text-[#6F7681]'>Info@example.com</p>
            </div>
            </div>
            <div className='flex flex-col pt-7'>
            <div className='flex'>
              <img src="/Frame (4).png" alt="our office address" className='h-7 w-7' />
              <p className='font-space font-semibold text-[20px] pl-2'>Office Address</p>
            </div>
            <div>
              <p className='font-space text-[#6F7681]'>Ikoyi, Lagos.</p>
            </div>
            </div>
            </div>
          </div>
          </div>
          <div>
            <form action="" className='absolute left-200 top-10 bg-white rounded-lg pb-5'>
              <h1 className='text-4xl font-space font-semibold pl-3 pt-3'>Send Us Message</h1>
              <p className='text-[#6F7681] font-space text-[15px] pt-3 pl-3'>Fell free to fill up the form and our team will get back to you <br />within 24 hours.</p>
              <div className='flex flex-col gap-3'>
              <div className='flex gap-3 pt-7 pl-3'>
              <input type="text" placeholder='Name' className='w-full h-7 bg-[#F1F1F1] p-5 rounded-md font-space pl-3' />
              <input type="text" placeholder='Email' className='w-full h-7 bg-[#F1F1F1] p-5 rounded-md font-space mr-3' />
              </div>
              <div className='bg-[#F1F1F1] pl-3 rounded-lg ml-3 mr-3'>
              <textarea name="text" id="" className='font-space p-3 w-full border-none h-60'>Message</textarea>
              </div>
              <div className='pl-3 pr-3'>
                          <Button name='Request a Free Demo' style={"bg-black text-white text-center rounded-lg hover:bg-[#28D08A] p-3 font-semibold"}/>
              </div>
              </div>
            </form>
          </div>
          </div>
          </div>
        </div>
        <div className='bg-[#495460]'>
        <Footer/>
      </div>
        </div>
  )
}

export default Contact