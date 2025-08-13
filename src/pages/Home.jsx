import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Advert from '../components/Advert'
import EmpowerComp from '../components/EmpowerComp'
import UnleashComp from '../components/UnleashComp'
import PriorityComp from '../components/PriorityComp'
import PersonalizeComp from '../components/PersonalizeComp'
import TestimonialComp from '../components/TestimonialComp'
import DataFetchComp from '../components/DataFetchComp'

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
        <div className='bg-[#F0F8FF] mt-20 h-100'>
            <UnleashComp/>
        </div>
        <div className='bg-white mt-50 h-140'>
            <PriorityComp/>
        </div>
        <div className='bg-black'>
            <PersonalizeComp/>
        </div>
        <div className='bg-white'>
            <TestimonialComp/>
        </div>
        <div className='w-full h-100 bg-white mt-20'>
            <DataFetchComp/>
        </div>
    </div>
)
}

export default Home