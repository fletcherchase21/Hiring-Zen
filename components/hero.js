import React from 'react'
import Button from './core/button'
import CompanyScroller from './company-scroller'

const Hero = () => {
  return (
    <div className='layout pt-20 md:pt-24 xl:pt-28 pb-10 md:pb-12 xl:pb-16'>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl md:text-5xl xl:text-[104px] text-center font-semibold max-w-[800px] mx-auto'>A Hiring agency with a twist</h1>
        <h4 className='text-base md:text-lg xl:text-2xl text-center font-thin mt-4'>Design subscriptions for everyone. Pause or cancel anytime.</h4>
        <>
          <Button
            buttonText='Get Started'
            buttonLink='/'
            className="mt-5"
          />
        </>
        <div className='mt-10 w-full'>
          <CompanyScroller />
        </div>

      </div>
    </div>
  )
}

export { Hero }