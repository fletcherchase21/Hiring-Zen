'use client'
import React from 'react'
import Button from './core/button'
import CompanyScroller from './company-scroller'

const Hero = () => {
  const hero = {
    left: "https://cdn.prod.website-files.com/5837424ae11409586f837994/65da646706ce29b68e68850c_Group%2075.svg",
    right: "https://cdn.prod.website-files.com/5837424ae11409586f837994/65da64662ed568152b486d2d_25.svg"
  }
  return (
    <div className='relative'>
      <div className='layout pt-20 md:pt-24 xl:pt-28 pb-10 md:pb-12 xl:pb-16'>
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl md:text-5xl xl:text-[104px] text-center font-semibold max-w-[800px] mx-auto'>A Hiring agency with a twist</h1>
          {/* <h4 className='text-base md:text-lg xl:text-2xl text-center font-thin mt-4'>We Recruit for SMEs. Pause or cancel anytime.</h4> */}
          <h4 className='text-base md:text-lg xl:text-2xl text-center font-thin mt-4'>A modern way to hire for the businesses of tomorrow</h4>
          <>
            <Button
              buttonText='See Plans'
              buttonLink='#pricing'
              className="mt-5"
            />
          </>
          <div className='mt-10 w-full'>
            <CompanyScroller />
          </div>

        </div>
      </div>

      <img
        src={hero.left}
        alt=""
        className='absolute bottom-0 md:top-1/2 translate-y-[-50%] left-0 w-20 md:w-32 xl:w-48 object-contain -z-10'
      />
      <img
        src={hero.right}
        alt=""
        className='absolute top-0 md:top-1/2 translate-y-[-50%] right-0 w-20 md:w-32 xl:w-48 object-contain -z-10'
      />
    </div>

  )
}

export { Hero }