'use client';
import Marquee from 'react-fast-marquee';
import 'flag-icons/css/flag-icons.min.css';

const CompanyScroller = () => {
  const companies = [
    { name: 'Ireland', flag: 'ie' },
    { name: 'United Kingdom', flag: 'gb' },
    { name: 'USA', flag: 'us' },
    { name: 'Portugal', flag: 'pt' },
    { name: 'Spain', flag: 'es' },
    { name: 'France', flag: 'fr' },
  ];

  return (
    <div className="relative overflow-hidden md:w-[70%] max-w-[900px] mx-auto rounded-full whitespace-nowrap bg-black text-white py-4 md:py-5">
      <Marquee speed={50} pauseOnHover={true} gradient={false}>
        {companies.map((company, index) => (
          <div key={index} className="flex items-center px-6 py-2 text-lg font-bold">
            <span className={`mr-2 fi fi-${company.flag}`}></span> 
            {company.name}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CompanyScroller;
