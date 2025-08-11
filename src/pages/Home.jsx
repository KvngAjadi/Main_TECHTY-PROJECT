import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className='flex flex-col'>
        <div className='bg-[#F0F8FF]'>
        <NavBar/>
        </div>
        <div className='bg-[#F0F8FF]'>
        <Hero/>
        </div>
    </div>
)
}

export default Home