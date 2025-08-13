import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Advert from '../components/Advert'
import EmpowerComp from '../components/EmpowerComp'
import UnleashComp from '../components/UnleashComp'

const Home = () => {
  return (
    <div className='flex flex-col'>
        <div className='bg-[#F0F8FF]'>
        <NavBar/>
        </div>
        <div className='bg-[#F0F8FF] h-150'>
        <Hero/>
        </div>
        <div className='bg-[#F0F8FF] h-70'>
        <Advert/>
        </div>
        <div className='bg-white h-auto flex flex-col'>
            <EmpowerComp/>
        </div>
        <div className='bg-[#F0F8FF] mt-20 h-auto'>
            <UnleashComp/>
        </div>
    </div>
)
}

export default Home