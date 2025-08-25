import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../components/Button'
import Footer from '../components/Footer'
import { AlignRight } from 'lucide-react'

const Blog = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
      <div>
    <nav className="flex flex-row font-space justify-between items-center w-full px-6 py-7 shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/svg-662123605_1698 (1).png"
            alt="logo"
            className="w-10 h-10"
          />
          <h1 className="text-2xl md:text-3xl text-black font-bold font-space">
            Techty
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 font-space font-normal">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `hover:text-gray-600 ${
                isActive
                  ? "text-green-600 border-b-2 border-green-600 pb-1"
                  : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-gray-600 ${
                isActive
                  ? "text-green-600 border-b-2 border-green-600 pb-1"
                  : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              `hover:text-gray-600 ${
                isActive
                  ? "text-green-600 border-b-2 border-green-600 pb-1"
                  : ""
              }`
            }
          >
            Service
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `hover:text-gray-600 ${
                isActive
                  ? "text-green-600 border-b-2 border-green-600 pb-1"
                  : ""
              }`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-gray-600 ${
                isActive
                  ? "text-green-600 border-b-2 border-green-600 pb-1"
                  : ""
              }`
            }
          >
            Contact
          </NavLink>

          <Button
            name="Request a Free Demo"
            style={"bg-white text-black border-1 border-gray-300 rounded-md font-semibold px-4 py-2"}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <AlignRight size={28} />
          </button>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <AlignRight size={24} />
          </button>
        </div>
        <div className="flex flex-col gap-6 p-5 font-space font-semibold">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `hover:text-gray-600 ${
                isActive
                  ? "text-green-600 border-l-4 border-green-600 pl-2"
                  : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `hover:text-gray-600 ${
                isActive
                  ? "text-green-600 border-l-4 border-green-600 pl-2"
                  : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/service"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `hover:text-gray-600 ${
                isActive
                  ? "text-green-600 border-l-4 border-green-600 pl-2"
                  : ""
              }`
            }
          >
            Service
          </NavLink>
          <NavLink
            to="/blog"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `hover:text-gray-600 ${
                isActive
                  ? "text-green-600 border-l-4 border-green-600 pl-2"
                  : ""
              }`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `hover:text-gray-600 ${
                isActive
                  ? "text-green-600 border-l-4 border-green-600 pl-2"
                  : ""
              }`
            }
          >
            Contact
          </NavLink>

          <Button
            name="Request a Free Demo"
            style={"bg-black text-white rounded-md font-semibold py-2"}
          />
        </div>
      </div>
            <div className="w-full flex flex-col items-center justify-center bg-[#F1F1F1]">
        <h1 className="text-black font-space font-bold text-4xl px-15 mt-10">
          Our Blog
        </h1>
        <p className='font-space mt-10 text-[20px] text-gray-400 text-center'>We're constantly pushing the boundaries of what's <br /> possible and seeking new ways to improve our <br /> services.</p>
<div className='flex flex-col md:flex-row p-5 mt-5 transition-none items-center md:transition md:delay-50 md:duration-300 md:ease-in-out md:hover:translate-y-1 md:hover:scale-110'>
        <img src="/blog picture.png" alt="" className='md:h-100 md:w-120 h-100 w-120'/>
        <div className='flex flex-col text-center md:text-left pl-5 h-100 w-150 bg-white rounded-tr-lg rounded-br-lg'>
        <p className='text-[20px] mt-7 font-space'>May 30, 2025</p>
        <h1 className='md:text-5xl text-3xl mt-7 font-bold font-space'>5 reasons why Techty <br /> is the go-to choice for <br /> small business.</h1>
        <p className='font-space mt-7 font-normal md:text-[20px] text-[17px]'>Let us manage your IT for you so that you can get back <br /> to doing what you do best.</p>
        </div>
      </div>
      <hr className='text-white mt-20 border-3 w-full mb-20 text-center'/>
      </div>
      <div className='bg-[#F1F1F1] flex flex-col'>
        <div className='font-space text-center'>
          <h1 className='font-space font-bold text-3xl '>Read All Articles</h1>
                  <p className='font-space mt-10 text-[20px] text-gray-400 text-center'>We're constantly pushing the boundaries of what's <br /> possible and seeking new ways to improve our <br /> services.</p>
        </div>
        <div className='md:flex-row flex flex-col gap-10 p-10'>
        <div className='flex flex-col bg-white rounded-bl-lg rounded-br-lg transition delay-50 duration-300 ease-in-out hover:translate-y-1 hover:scale-110'>
            <img src="/blogpic.png" alt="Our news1" />
            <p className='font-space pl-3 mt-5'>May 30</p>
            <p className='font-space pl-3 font-semibold text-[15px] mt-2'>5 reasons why Techty is the go-to <br /> choice for small business.</p>
            <p className='font-space pl-3 mt-2 mb-5'>Let us manage your IT for you so that you can <br /> get back to doing what you do best.</p>
        </div>
        <div className='flex flex-col bg-white rounded-bl-lg rounded-br-lg transition delay-50 duration-300 ease-in-out hover:translate-y-1 hover:scale-110'>
            <img src="/blogpicVR.png" alt="Our news2" />
            <p className='font-space pl-3 mt-5'>May 30</p>
            <p className='font-space pl-3 font-semibold text-[15px] mt-2'>The future is now: Explore Techty's AI- <br /> Powered tools</p>
            <p className='font-space pl-3 mt-2 mb-5'>Let us manage your IT for you so that you can <br /> get back to doing what you do best.</p>
        </div>
        <div className='flex flex-col bg-white rounded-bl-lg rounded-br-lg transition delay-50 duration-300 ease-in-out hover:translate-y-1 hover:scale-110'>
            <img src="/blogpicAi.png" alt="Our news3" />
            <p className='font-space pl-3 mt-5'>May 30</p>
            <p className='font-space pl-3 font-semibold text-[15px] mt-2'>Cybersecurity threats in 2023: How AI <br /> can keep you protected</p>
            <p className='font-space pl-3 mt-2 mb-5'>Let us manage your IT for you so that you can <br /> get back to doing what you do best.</p>
        </div>
      </div>
        <div className='md:flex-row flex flex-col gap-10 p-10 mb-20'>
        <div className='flex flex-col bg-white rounded-bl-lg rounded-br-lg transition delay-50 duration-300 ease-in-out hover:translate-y-1 hover:scale-110'>
            <img src="/blogpic.png" alt="Our news1" />
            <p className='font-space pl-3 mt-5'>May 30</p>
            <p className='font-space pl-3 font-semibold text-[15px] mt-2'>5 reasons why Techty is the go-to <br /> choice for small business.</p>
            <p className='font-space pl-3 mt-2 mb-5'>Let us manage your IT for you so that you can <br /> get back to doing what you do best.</p>
        </div>
        <div className='flex flex-col bg-white rounded-bl-lg rounded-br-lg transition delay-50 duration-300 ease-in-out hover:translate-y-1 hover:scale-110'>
            <img src="/blogpicVR.png" alt="Our news2" />
            <p className='font-space pl-3 mt-5'>May 30</p>
            <p className='font-space pl-3 font-semibold text-[15px] mt-2'>The future is now: Explore Techty's AI- <br /> Powered tools</p>
            <p className='font-space pl-3 mt-2 mb-5'>Let us manage your IT for you so that you can <br /> get back to doing what you do best.</p>
        </div>
        <div className='flex flex-col bg-white rounded-bl-lg rounded-br-lg transition delay-50 duration-300 ease-in-out hover:translate-y-1 hover:scale-110'>
            <img src="/blogpicAi.png" alt="Our news3" />
            <p className='font-space pl-3 mt-5'>May 30</p>
            <p className='font-space pl-3 font-semibold text-[15px] mt-2'>Cybersecurity threats in 2023: How AI <br /> can keep you protected</p>
            <p className='font-space pl-3 mt-2 mb-5'>Let us manage your IT for you so that you can <br /> get back to doing what you do best.</p>
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