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
         leading-none mb-6'><span className='text-red-500'>Buy</span> Your Dream House With Us.</h1>
        <p className='max-w-[480px] mb-8'>
          lorem Labore id eiusmod magna excepteur enim adipisicing pariatur. Nulla sit aute magna laborum dolore quis. Non ad laborum excepteur nostrud minim consequat ex adipisicing fugiat enim duis aute fugiat ea. Amet veniam officia ipsum minim. Velit est ad pariatur reprehenderit Lorem est elit culpa eiusmod pariatur dolore proident.
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
