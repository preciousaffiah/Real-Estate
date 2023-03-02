import React from 'react';

// import image
import Image from '../assets/img/house-banner.png';

// import components
import Search from '../components/Search';
const Banner = () => {
  return (
  <section className='h-full max-h-[640px] mb-8 x;Lmb-24'>
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <h1 className='text-4xl lg:text-[58px] font-sem
         leading-none mb-6'><span className='text-red-500'>Buy</span> Your Dream House From Us.</h1>
        <p className='max-w-[480px] mb-8'>
        Welcome to my Casa Reality! Our company is a well-established player in the real estate industry.
        We have a portfolio of properties that includes residential, commercial, and industrial properties,  
        We also have a team of experienced and dedicated professionals who are committed to delivering results for our clients.  
        </p>
      </div>
      {/* image */}
      <div className='hidden flex-1 lg:flex justify-end items-end'>
        <img src={Image} alt=''/>
      </div>
    </div>
    <Search/>
  </section>
  );
};

export default Banner;
