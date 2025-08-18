import React from 'react'
import Button from './Button'

const Footer = () => {
  return (
    <div className='flex flex-col justify-between p-4'>
        <div className="flex justify-between pl-20 mt-30">
        <h1 className="text-white font-space font-bold text-5xl">
          Ready to take your business<br />
          to the next level?
        </h1>
        <Button
          name="Request a Free Demo"
          style={
              "bg-black hover:bg-[#28D08A] text-white text-[15px] items-center flex justify-center rounded-md w-60 font-space h-13 font-semibold"
            }
            />
            </div>
        <hr className='text-gray-500 mt-20' />
        <div className='flex justify-between mt-30'>
            <div className='flex flex-col pl-20'>
                <div className='flex items-center'>
        <img src="/public/svg-662123605_1698 (1).png" alt="" />
            <h1 className='text-2xl text-white font-bold font-space'>Techty</h1>
            </div>
            <div className='flex mt-20'>
                <img src="/twitter-x-line.png" alt="" />
                <img src="/facebook-fill.png" alt="" />
                <img src="/instagram-line.png" alt="" />
                <img src="/github-fill.png" alt="" />
            </div>
            <div className='text-white font-space mt-5'>
                Copyright
                &copy; 2025 Techty. <br />
                All Right Reserved.
            </div>
        </div>
        <div className='font-space text-white'>
        <h1 className='text-2xl font-semibold'>Quick Link</h1>
        <p className='mt-10'>About</p>
        <p className='text-[17px] font-space'>Service</p>
        <p className='text-[15px] font-space'>Blog</p>
        <p className='text-[15px] font-space'>Contact</p>
        </div>
        <div className='font-space text-white'>
        <h1 className='text-2xl font-semibold'>Socials</h1>
        <p className='mt-10'>Twitter</p>
        <p className=''>LinkedIn</p>
        <p className=''>Facebook</p>
        </div>
        <div className='font-space text-white pr-10'>
        <h1 className='text-2xl font-semibold'>Our Newletter</h1>
        <p className='mt-10 font-normal'>subscribe to our newsletter to <br />get our news delivered to you.</p>
        <form className='relative'>
        <input type="text" placeholder='Email address' className='font-space font-normal w-90 h-13 rounded-md mt-5 p-4 border-1 border-gray-400' />
        <Button name='John' style={`bg-black absolute top-[21px] py-[12px] px-[15px] right-[1px] rounded-xl text-white hover:bg-[#28D08A]`}/>
        </form>
        </div>
        <div>
          
        </div>
        </div>
      </div>
  )
}

export default Footer