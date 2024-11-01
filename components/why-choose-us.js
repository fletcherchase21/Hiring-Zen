'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const WhyChooseUs = () => {

  const how = {
    // right: "https://cdn.prod.website-files.com/5837424ae11409586f837994/65dd2283937c19061858f77d_Group%2076.svg",
    // left: "https://cdn.prod.website-files.com/5837424ae11409586f837994/65dd230f503738ef5ddfd8ee_Group%2077.svg"
  }

  const steps = [
    {
      title: 'Fixed Fee, Full Service',
      description: "We operate on a transparent subscription model, available in 3, 6, or 12-month plans.",
      image: "/images/why/fixed-fee-tp.gif",
      bg: "bg-[#B1D952]/20"
    },
    {
      title: 'End-to-End Recruitment',
      description: "We handle everything from job creation to offer management so you don't have to.",
      image: "/images/why/end-to-end.gif",
      bg: "bg-[#33CCCC]/10"
    },
    {
      title: 'Dedicated Account Manager',
      description: "Your subscription includes a dedicated point of contact, ensuring personalized service tailored to your needs.",
      image: "/images/why/manager.gif",
      bg: "bg-[#33CCCC]/10"
    },
    {
      title: 'Flexible for Growing Businesses',
      description: "Focus on one role at a time with the option to scale as your team grows.",
      image: "/images/why/growing.gif",
      bg: "bg-orange-500/10"
    }
  ]
  return (
    <div className='relative'>
      <div className='py-20 md:py-24 xl:py-28'>
        <motion.div className='layout'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: .5 }}
        >
          <h2 className=' text-center max-w-[800px] mx-auto'>Why Choose Us</h2>
          <p className='body-text text-center w-[80%] max-w-[550px] mx-auto'>
            Hiring Zen offers a fresh approach to recruitment
          </p>
          <div className='mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-x-10 gap-y-16'>
            {
              steps.map((step, index) => (
                <motion.div key={index} className='flex flex-col items-center'
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: .5 }}
                >
                  <div className={`bg-contain bg-center bg-no-repeat p-5 rounded-full ${step.bg}`}
                  // style={{ backgroundColor: `url(${step.bg})` }}
                  >
                    <Image
                      src={step.image}
                      // src={step.bg}
                      alt={step.title}
                      width={150}
                      height={150}
                      className='w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28'
                    />

                  </div>
                  <h3 className='text-xl md:text-2xl xl:text-3xl font-semibold mt-4'>{step.title}</h3>
                  <p className='text-base md:text-lg text-center mt-4'>{step.description}</p>
                </motion.div>
              ))
            }
          </div>
        </motion.div>
      </div>
      <img
        src={how.left}
        alt=""
        className='absolute top-1/4 md:top-1/2 translate-y-[-50%] left-0 w-20 md:w-32 xl:w-48 object-contain -z-10'
      />
      <img
        src={how.right}
        alt=""
        className='absolute top-1/2 md:top-1/4 translate-y-[-50%] right-0 w-20 md:w-32 xl:w-48 object-contain -z-10'
      />
    </div>

  )
}

export { WhyChooseUs }