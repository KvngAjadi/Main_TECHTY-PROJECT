import React from 'react'

const PersonalizeComp = () => {
  return (
    <div className='flex gap-10 mt-5'>
        <div>
            <img src="/Rectangle.png" alt="Phone display" className='w-140' />
        </div>
        <div className='flex flex-col gap-7 mt-40'>
            <h1 className='text-white font-space font-bold text-5xl'>Personalize your business <br /><span className='font-space text-[#28D08A]'>strategy </span>to reach out.</h1>
            <p className="text-[20px] text-md font-normal font-space text-white">Our advisors approach each client individually, so each time we <br />select the appropriate insurance for your needs. Thanks to <br />conversation, we will adjust the appropriate cover.</p>
            <div className='flex gap-10'>
                <div>
            <h1 className='text-6xl font-space text-white font-bold'>99.7%</h1>
            <p className='font-space mt-3 text-[20px] text-white'>Customer Satisfaction</p>
            <img src="/Frame 15.png" alt="star rating" className='w-30 mt-3'/>
            </div>
            <div>
            <h1 className='text-6xl font-space text-white font-bold'>4X</h1>
            <p className='font-space mt-3 text-[20px] text-white'>New Visitors</p>
            <img src="/Frame 15.png" alt="star rating" className='w-30 mt-3'/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default PersonalizeComp