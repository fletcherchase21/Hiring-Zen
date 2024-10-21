'use client'
import { faqData } from '@/data'
import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { motion } from 'framer-motion'


const descriptionIncludes = [
  "Job description creation",
  "Candidate sourcing and screening",
  "Interview scheduling and coordination",
  "Offer management and negotiation",
  "Dedicated account manager for personalized service"
]

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className='py-16 md:py-20 xl:py-28 '>
      <div className='px-4 max-w-[684px] mx-auto'>
        <motion.div className='mb-12 md:mb-16'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: .5 }}
        >
          <h2 className='section-title text-center text-sec-1'>{faqData?.title}</h2>
          <p className='text-center max-w-[400px] mx-auto mt-4'>{faqData?.description}</p>
        </motion.div>
        <div className='flex flex-col gap-3 sm:gap-4 xl:gap-5'>
          {
            faqData?.faqs.map((faq, index) => (
              <motion.div key={index} className='bg-white p-5 rounded-lg cursor-pointer'
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: .5 }}
                onClick={() => handleToggle(index)}
              >
                <div className='flex gap-5 justify-between items-center'>
                  <h3 className='text-black font-semibold'>{faq?.question}</h3>
                  <button >
                    {expandedIndex === index ?
                      <AiOutlineMinus className='text-primary text-xl' />
                      :
                      <AiOutlinePlus className='text-primary text-xl' />
                    }
                  </button>
                </div>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: expandedIndex === index ? 1 : 0, height: expandedIndex === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className='text-primary mt-2'>
                    {index === 3 ?
                      <div>
                        <p>Our subscription includes:</p>
                        <ul className='list-disc pl-5 mt-2'>
                          {descriptionIncludes.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      :
                      <span>{faq?.answer}</span>
                    }
                  </div>
                </motion.div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export { FAQ }