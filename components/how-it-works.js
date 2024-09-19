import Image from 'next/image'
import React from 'react'

const HowItWorks = () => {

  const steps = [
    {
      title: 'Subscribe',
      description: "Choose a subscription plan that fits your hiring needs. With options for 3, 6, or 12 months, you can select the level of service that works best for you.",
      image: "/images/how/subscribe.gif",
      bg: "/images/how/bg-1.svg"
    },
    {
      title: 'Hire',
      description: "Work closely with your dedicated account manager to define the role you need to fill. We’ll manage the entire recruitment process for you, from sourcing candidates to scheduling interviews and extending offers.",
      image: "/images/how/hire.gif",
      bg: "https://cdn.prod.website-files.com/5837424ae11409586f837994/65de7adeb3387e4c9926e14c_43.svg"
    },
    {
      title: 'Succeed',
      description: "With our expert team handling your hiring needs, you can focus on growing your business. Experience the confidence and peace of mind that comes from knowing you have the right talent in place to drive your success.",
      image: "/images/how/succeed-tp.gif",
      bg: "https://cdn.prod.website-files.com/5837424ae11409586f837994/65de7bd8468ed677a5da9a2d_60.svg"
    }
  ]
  return (
    <div className='py-20 md:py-24 xl:py-28'>
      <div className='layout'>
        <h2 className=' text-center max-w-[800px] mx-auto'>Three Simple Steps to Success</h2>
        <p className='body-text text-center w-[80%] max-w-[550px] mx-auto'>
          At Hiring Zen, we make recruitment simple and effective with a three-step process
          {/* : <br /> <span className='font-bold'>Subscribe, Hire, Succeed.</span> */}
        </p>
        <div className='mt-20 grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {
            steps.map((step, index) => (
              <div key={index} className='flex flex-col items-center'>
                <div className='bg-contain bg-center bg-no-repeat p-5 bg-opacity-20 rounded-full bg-orange-500/10'
                  // style={{ backgroundImage: `url(${step.bg})` }}
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
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export { HowItWorks }