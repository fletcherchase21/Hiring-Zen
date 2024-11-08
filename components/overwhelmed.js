'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Overwhelmed = () => {
  return (
    <div className='layout py-10 xl:py-16'>
      <motion.h2 className='text-center max-w-[900px] mx-auto leading-snug'
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: .5 }}
      >Overwhelmed by Hiring Challenges? Let Our Experts Take Over</motion.h2>
      <motion.div className='flex flex-col lg:flex-row-reverse items-center mt-16 gap-10'
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: .5 }}
      >
        <div className='w-full lg:w-[50%]'>
          <div className='bg-white rounded-lg lg:rounded-xl'>
            <Image
              src="/images/Business mission-pana.svg"
              alt=""
              width={900}
              height={500}
              className='object-contain rounded-lg lg:rounded-xl w-full h-auto'
            />
          </div>
        </div>
        <div className='w-full lg:w-[50%]'>
          <div className=''>
            <p className='body-tex !text-left'>Hiring today is harder than ever. Maybe your talent acquisition team has been
              downsized, or you simply don’t have one at all. Maybe you’ve been burned by
              expensive agencies or left in the dark during critical hiring phases. <span className='font-bold'>At Hiring Zen,</span> we’re
              here to change that.</p>
            <br />
            <p className='body-tex !text-left'>Our experienced team becomes <span className='font-bold'>your</span> recruitment team. We know how to navigate the
              challenges of hiring in industries like <span className='font-bold'>IT, engineering, and finance,</span> helping you
              attract and secure top talent with ease. You gain the expertise and efficiency of a full
              talent acquisition team—<span className='font-bold'>without the heavy price tag.</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export { Overwhelmed }
