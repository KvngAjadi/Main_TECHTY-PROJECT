import React from 'react'

const NewsComp = () => {
  return (
    <div>
        <div className="w-full flex items-center justify-center mt-25">
        <h1 className="text-black font-space font-bold text-5xl px-15">
          Here's our latest <br />
          update from the <span className="text-[#28D08A]">news.</span>
        </h1>
      </div>
      <div className='flex gap-10 p-10'>
        <div className='flex flex-col bg-white rounded-bl-lg rounded-br-lg'>
            <img src="/Work Frame.png" alt="Our news1" />
            <p className='font-space pl-3 mt-5'>May 30</p>
            <p className='font-space pl-3 font-semibold text-[15px] mt-2'>5 reasons why Techty is the go-to <br /> choice for small business.</p>
            <p className='font-space pl-3 mt-2 mb-5'>Let us manage your IT for you so that you can <br /> get back to doing what you do best.</p>
        </div>
        <div className='flex flex-col bg-white rounded-bl-lg rounded-br-lg'>
            <img src="/VR Frame.png" alt="Our news2" />
            <p className='font-space pl-3 mt-5'>May 30</p>
            <p className='font-space pl-3 font-semibold text-[15px] mt-2'>The future is now: Explore Techty's AI- <br /> Powered tools</p>
            <p className='font-space pl-3 mt-2 mb-5'>Let us manage your IT for you so that you can <br /> get back to doing what you do best.</p>
        </div>
        <div className='flex flex-col bg-white rounded-bl-lg rounded-br-lg'>
            <img src="/Type Frame.png" alt="Our news3" />
            <p className='font-space pl-3 mt-5'>May 30</p>
            <p className='font-space font-semibold text-[15px] mt-2'>Cybersecurity threats in 2023: How AI <br /> can keep you protected</p>
            <p className='font-space mt-2 mb-5'>Let us manage your IT for you so that you can <br /> get back to doing what you do best.</p>
        </div>
      </div>
    </div>
  )
}

export default NewsComp