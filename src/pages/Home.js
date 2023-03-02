import React from 'react';
import { Link } from 'react-router-dom';

// import components
import Image from '../assets/img/house-banner.png';
import Agent1 from '../assets/img/agents/agent1.png';
import Agent2 from '../assets/img/agents/agent2.png';
import Agent3 from '../assets/img/agents/agent3.png';
import Agent4 from '../assets/img/agents/agent4.png';

import homeimage from '../assets/img/homeimage.jpg';
import service1 from '../assets/img/service-1.png';
import { BsArrowRightShort } from 'react-icons/bs';
import { AiOutlineCar } from 'react-icons/ai';
import { MdOutlineWaterDrop, MdSecurity } from 'react-icons/md';
import { CiMedicalCase } from 'react-icons/ci';




const Home = () => {

  const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ]
  const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Sold houses', value: '50+' },
    { name: 'Home environment', value: 'Good' },
    { name: 'Access to internet', value: 'Unlimited' },
  ]

  return ( 
  <div className='min-h-[1800px] pt-8'>

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
  </section>

  <section className='bg-white m-auto text-center justify-center items-center flex flex-col gap-7 py-16'>
      <p className='w-fit px-3 py-1 rounded-full bg-red-100 text-red-600 text-center'>Our Services</p>
      <h2 className='font-bold text-black md:text-4xl text-3xl'>Our Main Focus</h2>
      <div>
        <div className='flex flex-col gap-6 m-auto bg-white py-10 px-6 w-96 lg:w-3/4 shadow-md p-5 rounded-lg rounded-tl-[90px] mx-auto cursor-pointer hover:shadow-lg transition'> 
          <img src={service1} className='w-44 m-auto'/>
          <h1 className='text-2xl font-bold'>Buy a home</h1>
          <p className='text-sm text-gray-600 px-14'>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
          <Link to='/properties' className='text-gray-400 flex items-center m-auto'>Find A Home <BsArrowRightShort className='w-6 h-6'/> </Link>
        </div>
      </div>
    </section>
    <section className='bg-white m-auto text-center justify-center items-center flex flex-col gap-7 py-16'>
      <h2 className='font-bold text-black md:text-4xl text-3xl'>Guaranteed</h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-14'>
        <div className='flex flex-col gap-3 m-auto bg-white py-4 w-80 md:w-full rounded-2xl items-center'> 
          <h1 className='text-lg md:text-xl font-semibold'>Location</h1>
          <p>Our properties are located at prime areas which guarantees return on investment.</p>
        </div>
        <div className='flex flex-col gap-3 m-auto bg-white py-4 w-80 md:w-full rounded-2xl items-center'> 
          <h1 className='text-lg md:text-xl font-semibold'>Affordability</h1>
          <p>Our homes are very affordable, we have something for both the high & middle class earners with flexible payment plans.</p>
        </div>
        <div className='flex flex-col gap-3 m-auto bg-white py-4 w-80 md:w-full rounded-2xl items-center'> 
          <h1 className='text-lg md:text-xl font-semibold'>Trusted</h1>
          <p>We have been in business for over 16 years, for clients in diaspora you can trust us to deliver well finished homes.</p>
        </div>
        
      </div>
      
    </section>
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32" id='about'>
      <img
        src={homeimage}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <svg
        viewBox="0 0 1097 845"
        aria-hidden="true"
        className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
      >
        <path
          fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
          fillOpacity=".2"
          d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
        />
        <defs>
          <linearGradient
            id="10724532-9d81-43d2-bb94-866e98dd6e42"
            x1="1097.04"
            x2="-141.165"
            y1=".22"
            y2="363.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#776FFF" />
            <stop offset={1} stopColor="#FF4694" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1097 845"
        aria-hidden="true"
        className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
      >
        <path
          fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
          fillOpacity=".2"
          d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
        />
        <defs>
          <linearGradient
            id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
            x1="1097.04"
            x2="-141.165"
            y1=".22"
            y2="363.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#776FFF" />
            <stop offset={1} stopColor="#FF4694" />
          </linearGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Why choose us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          At Casa Reality Properties we specialise in the development of residential buildings with the aim to construct luxury homes in cozy and functional estates so as to curb the housing deficit in Lagos and its environments our locations.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    
    <section className='bg-white m-auto text-center justify-center items-center flex flex-col gap-7 py-16'>
      <p className='w-fit px-3 py-1 rounded-full bg-red-100 text-red-600 text-center'>Properties</p>
      <h2 className='font-bold text-black md:text-4xl text-3xl'>Featured Listings</h2>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-14'>
        <div className='flex flex-col gap-6 m-auto bg-white py-8 px-12 w-96 md:w-1/2 w-full rounded-2xl items-center'> 
          <AiOutlineCar className='md:w-28 md:h-28 w-24 h-24 p-6 rounded-full bg-orange-100 text-red-500'/>
          <h1 className='text-lg md:text-xl font-semibold'>Parking Space</h1>
        </div>
        <div className='flex flex-col gap-6 m-auto bg-white py-8 px-12 w-96 md:w-1/2 w-full rounded-2xl items-center'> 
          <MdOutlineWaterDrop className='md:w-28 md:h-28 w-24 h-24 p-6 rounded-full bg-orange-100 text-red-500'/>
          <h1 className='text-lg md:text-xl font-semibold'>Water supply</h1>
        </div>
        <div className='flex flex-col gap-6 m-auto bg-white py-8 px-12 w-96 md:w-1/2 w-full rounded-2xl items-center'> 
          <MdSecurity className='md:w-28 md:h-28 w-24 h-24 p-6 rounded-full bg-orange-100 text-red-500'/>
          <h1 className='text-lg md:text-xl font-semibold'>Security</h1>
        </div>
        <div className='flex flex-col gap-6 m-auto bg-white py-8 px-12 w-96 md:w-1/2 w-full rounded-2xl items-center'> 
          <CiMedicalCase className='md:w-28 md:h-28 w-24 h-24 p-6 rounded-full bg-orange-100 text-red-500'/>
          <h1 className='text-lg md:text-xl font-semibold'>Medical insurance</h1>
        </div>
      </div>
      
    </section>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our top agents</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Our agents have the expertise and knowledge to guide you through every step of the process. Whether you are a first-time homebuyer or an experienced investor.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          <div className="flex items-center gap-x-6">
            <img className="h-16 w-16 rounded-full" src={Agent1} alt="" />
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Patricia Tullert</h3>
              <p className="text-sm font-semibold leading-6 text-red-600">Agent</p>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <img className="h-16 w-16 rounded-full" src={Agent2} alt="" />
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Daryl Hawker</h3>
              <p className="text-sm font-semibold leading-6 text-red-600">Agent</p>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <img className="h-16 w-16 rounded-full" src={Agent3} alt="" />
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Amado Smith</h3>
              <p className="text-sm font-semibold leading-6 text-red-600">Agent</p>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <img className="h-16 w-16 rounded-full" src={Agent4} alt="" />
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Kaitlyn Gonzalez</h3>
              <p className="text-sm font-semibold leading-6 text-red-600">Agent</p>
            </div>
          </div>
        </ul>
      </div>
    </div>
    <section className='lg:p-8 p-8 pt-28 px-0'>
      <div className='flex justify-around w-full bg-red-500 py-11 lg:px-0 px-8'>
        <div className='flex flex-col gap-4'>
          <h1 className='lg:text-4xl text-3xl text-white font-bold'>Looking for a dream home?</h1>
          <p className='text-white text-sm'>We can help you realize your dream of a new home</p>
        </div>
        <div className='flex items-center'>
        <div className='bg-white py-2 px-6'>
          <Link to='/properties' className='text-sm'>Explore Properties</Link>  
        </div>
        </div>

      </div>
    </section>
    
  </div>
  );
};

export default Home;
