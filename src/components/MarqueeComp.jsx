import React from 'react'
import Marquee from 'react-fast-marquee'

const MarqueeComp = () => {
  return (
<Marquee>
      <img
        src="/Logo.png"
        alt="marquee1"
        className="object-cover w-auto h-auto pr-10"
      />
      <img
        src="/Logo (1).png"
        alt="marquee1"
        className="object-cover w-auto h-auto pr-10"
      />
      <img
        src="/Logo (2).png"
        alt="marquee1"
        className="object-cover w-auto h-auto pr-10"
      />
      <img
        src="/Logo (3).png"
        alt="marquee1"
        className="object-cover w-auto h-auto "
      />
</Marquee>
  )
}

export default MarqueeComp