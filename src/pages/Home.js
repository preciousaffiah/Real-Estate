import React from 'react';
import { Link } from 'react-router-dom';

// import components
import Image from '../assets/img/house-banner.png';
import service1 from '../assets/img/service-1.png';
import { BsArrowRightShort } from 'react-icons/bs';
import { AiOutlineCar } from 'react-icons/ai';
import { MdOutlineWaterDrop, MdSecurity } from 'react-icons/md';
import { CiMedicalCase } from 'react-icons/ci';




const Home = () => {

  
  return ( 
  <div className='min-h-[1800px]'>

    <section className='h-full max-h-[640px] mb-8 x;Lmb-24'>
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <h1 className='text-4xl lg:text-[58px] font-sem
         leading-none mb-6'><span className='text-red-500'>Rent</span> Your Dream House With Us.</h1>
        <p className='max-w-[480px] mb-8'>
          lorem Labore id eiusmod magna excepteur enim adipisicing pariatur. Nulla sit aute magna laborum dolore quis. Non ad laborum excepteur nostrud minim consequat ex adipisicing fugiat enim duis aute fugiat ea. Amet veniam officia ipsum minim. Velit est ad pariatur reprehenderit Lorem est elit culpa eiusmod pariatur dolore proident.
        </p>
      </div>
      {/* image */}
      <div className='hidden flex-1 lg:flex justify-end items-end'>
        <img src={Image} alt=''/>
      </div>
    </div>
  </section>

    <section className='bg-violet-50 m-auto text-center justify-center items-center flex flex-col gap-7 py-16'>
      <p className='w-fit px-3 py-1 rounded-full bg-red-100 text-red-600 text-center'>Our Services</p>
      <h2 className='font-bold text-black md:text-5xl text-3xl'>Our Main Focus</h2>
      <div>
        <div className='flex flex-col gap-6 m-auto bg-white py-10 px-6 w-96 lg:w-3/4 shadow-md p-5 rounded-lg rounded-tl-[90px] mx-auto cursor-pointer hover:shadow-lg transition'> 
          <img src={service1} className='w-44 m-auto'/>
          <h1 className='text-2xl font-bold'>Buy a home</h1>
          <p className='text-sm text-gray-600 px-14'>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
          <Link to='' className='text-gray-400 flex items-center m-auto'>Find A Home <BsArrowRightShort className='w-6 h-6'/> </Link>
        </div>
      </div>
    </section>
    <section className='m-auto text-center justify-center items-center flex flex-col gap-7 py-28'>
      <p className='w-fit px-3 py-1 rounded-full bg-red-100 text-red-600 text-center'>Our Services</p>
      <h2 className='font-bold text-black md:text-5xl text-3xl'>Featured Listings</h2>
      <div>
        <div className='flex flex-col gap-6 m-auto bg-orange-200 py-10 px-6 w-96 lg:w-3/4'> 
          <img src={service1} className='w-44 m-auto'/>
          <h1 className='text-2xl font-bold'>Properties</h1>
          <p className='text-sm text-gray-600 px-14'>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
          <Link to='' className='text-gray-400'>Find A Home</Link>
        </div>
      </div>
    </section>
    <section className='bg-violet-50 m-auto text-center justify-center items-center flex flex-col gap-7 py-16'>
      <p className='w-fit px-3 py-1 rounded-full bg-red-100 text-red-600 text-center'>Properties</p>
      <h2 className='font-bold text-black text-5xl'>Featured Listings</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-14'>
        <div className='flex flex-col gap-6 m-auto bg-white py-8 px-12 w-96 lg:w-full rounded-2xl items-center'> 
          <AiOutlineCar className='w-28 h-28 p-6 rounded-full bg-orange-100 text-red-500'/>
          <h1 className='text-2xl font-semibold'>Parking Space</h1>
        </div>
        <div className='flex flex-col gap-6 m-auto bg-white py-8 px-12 w-96 lg:w-full rounded-2xl items-center'> 
          <MdOutlineWaterDrop className='w-28 h-28 p-6 rounded-full bg-orange-100 text-red-500'/>
          <h1 className='text-2xl font-semibold'>Parking Space</h1>
        </div>
        <div className='flex flex-col gap-6 m-auto bg-white py-8 px-12 w-96 lg:w-full rounded-2xl items-center'> 
          <MdSecurity className='w-28 h-28 p-6 rounded-full bg-orange-100 text-red-500'/>
          <h1 className='text-2xl font-semibold'>Parking Space</h1>
        </div>
        <div className='flex flex-col gap-6 m-auto bg-white py-8 px-12 w-96 lg:w-full rounded-2xl items-center'> 
          <CiMedicalCase className='w-28 h-28 p-6 rounded-full bg-orange-100 text-red-500'/>
          <h1 className='text-2xl font-semibold'>Parking Space</h1>
        </div>
      </div>
      
    </section>
    <section className='lg:p-8 p-8 pt-28 px-0'>
      <div className='flex justify-around w-full bg-red-500 py-11 lg:px-0 px-8'>
        <div className='flex flex-col gap-4'>
          <h1 className='lg:text-4xl text-3xl text-white font-bold'>Looking for a dream home?</h1>
          <p className='text-white text-sm'>We can help you realize your dream of a new home</p>
        </div>
        <div className='flex items-center'>
        <div className='bg-white py-2 px-6'>
          <p className='text-sm'>Explore Properties</p>  
        </div>
        </div>

      </div>
    </section>
    
  </div>
  );
};

export default Home;
