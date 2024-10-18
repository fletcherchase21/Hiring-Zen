'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Button from './core/button'
import Link from 'next/link'

const CTA = () => {
  return (
    <>
      <div className='py-12 md:py-16 xl:py-24'>
        <motion.div className='layout flex flex-col md:flex-row justify-between gap-y-8'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: .5 }}
        >
          <div className='md:max-w-[60%]'>
            <h2 className='text-2xl md:text-3xl xl:text-4xl font-semibold leading-snug'>Take Control of Your Hiring – Today</h2>
            <p className='mt-2 md:mt-5 xl:mt-6 text-base md:text-lg'>
              It’s time to stop stressing about recruitment. <span className='font-bold'>Hiring Zen</span> is here to streamline the process, save
              you time, and help you succeed. Let us handle your hiring, so you can focus on the parts of your
              business that matter most.</p>
          </div>
          <div className='flex justify-end items-center'>
            <Button
              buttonText="See Plans"
              buttonLink="#pricing"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </motion.div>
      </div>
    </>
  )
}

export { CTA }