import React from 'react'

const Hero = () => {
  return (
    <div className='bg-blue h-[70vh] text-[#f5f5f5] flex flex-col justify-evenly items-center md:flex-row'>
      <div>
        <h1 className='text-center md:text-start'>Buy & sell gold</h1>
        <p>Dukia Gold, your trustworthy refinery & bullion merchant.</p>
      </div>
      <img src="https://res.cloudinary.com/dcu3hr3eo/image/upload/v1675706558/1-Gram-Philoro-Gold-Minted-Bar_xdylig.jpg" alt="banner icon" className='h-[15rem] w-[10rem] md:h-[20rem] md:w-[15rem] opacity-75' />
    </div>
  )
}

export default Hero