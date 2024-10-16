import Image from 'next/image';
import { BsFileText, BsChatSquareDots } from 'react-icons/bs';
import { FaUserCheck, FaRegHandshake } from 'react-icons/fa';

const steps = [
  { icon: <BsFileText />, text: 'Writing the perfect job description' },
  { icon: <FaUserCheck />, text: 'Sourcing quality candidates' },
  { icon: <BsChatSquareDots />, text: 'Managing interviews' },
  { icon: <FaRegHandshake />, text: 'Delivering the final offer' },
];

const AboutUs = () => {
  return (
    <section className="layout-wide py-10 md:py-12 xl:py-16 ">
      <div className='flex flex-col lg:flex-row gap-5 items-center'>
        <div className="w-full lg:w-[45%] flex justify-center mb-6 md:mb-0 bg-white rounded-lg lg:rounded-xl">
          <Image
            src="/images/about.svg"
            alt="Hiring Zen office"
            width={500}
            height={500}
            className="object-contain rounded-lg lg:rounded-xl w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-[55%] md:pl-8 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 max-w-[%] !leading-snug">Meet Hiring Zen: Your Recruitment Partner on Subscription</h2>
          <p className="leading-relaxed">
            We simplify the entire hiring process for you. From start to finish, we take care of
            everything –
          </p>
          <br />
          <div className="flex flex-col space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="bg-primary text-white p-3 rounded-full text-lg">
                  {step.icon}
                </div>
                <span className="text-lg">{step.text}</span>
              </div>
            ))}
          </div>
          <p className="leading-snug">
            <br />
            No stress, no hidden costs, just reliable recruitment delivered straight to your inbox.
            <br />
            <span className='mt-2 inline-block'>
              All you need to do is choose one of our flexible subscription plans—whether it’s 3, 6, or
              12 months—and focus on what matters most: growing your business.
            </span>
            <br />
            <span className='font-bold'>No costly recruitment agencies.</span> <br />
            <span className='font-bold'>No confusion.</span> <br />
            <span></span>
            Just transparent, end-to-end recruitment tailored for your needs, <span className="font-bold">one role at a time</span>

          </p>
        </div>
      </div>
    </section>
  );
};

export { AboutUs };
