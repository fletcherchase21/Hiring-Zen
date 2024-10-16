import Image from 'next/image'
import React from 'react'

const HowItWorks = () => {

  const how = {
    right: "https://cdn.prod.website-files.com/5837424ae11409586f837994/65dd2283937c19061858f77d_Group%2076.svg",
    left: "https://cdn.prod.website-files.com/5837424ae11409586f837994/65dd230f503738ef5ddfd8ee_Group%2077.svg"
  }

  const steps = [
    {
      title: 'Subscribe',
      description: "Select a 3, 6, or 12-month plan tailored to your hiring needs.",
      image: "/images/how/subscribe.gif",
      bg: "/images/how/bg-1.svg"
    },
    {
      title: 'Hire',
      description: "Your account manager oversees recruitment, from sourcing to offer extension.",
      image: "/images/how/hire.gif",
      bg: "https://cdn.prod.website-files.com/5837424ae11409586f837994/65de7adeb3387e4c9926e14c_43.svg"
    },
    {
      title: 'Succeed',
      description: "Focus on growth while we secure top talent to drive your business forward.",
      image: "/images/how/succeed-tp.gif",
      bg: "https://cdn.prod.website-files.com/5837424ae11409586f837994/65de7bd8468ed677a5da9a2d_60.svg"
    }
  ]
  return (
    <div className='relative'>
      <div className='py-20 md:py-24 xl:py-28'>
        <div className='layout'>
          <h2 className=' text-center max-w-[800px] mx-auto'>How it works</h2>
          <p className='body-text text-center w-[80%] max-w-[550px] mx-auto'>
            At Hiring Zen, we make recruitment simple and effective with a three-step process
            {/* : <br /> <span className='font-bold'>Subscribe, Hire, Succeed.</span> */}
          </p>
          <div className='mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
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

export { HowItWorks }