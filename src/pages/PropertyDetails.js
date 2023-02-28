import React from 'react';

// import data
import { housesData } from '../data';

// import use params
import { useParams } from 'react-router-dom';

// import icons
import { BiBed, BiArea, BiBath } from 'react-icons/bi';

// import link
import { Link } from 'react-router-dom';


const PropertyDetails = () => {
// get the house id
const { id } = useParams();

// get the name based on the id
const house = housesData.find((house) => {
  return house.id === parseInt(id);
});

const onClick = () =>{
  const msg = document.getElementById('msg');
  const email = document.getElementById('email').value;
  const body = document.getElementById('body').value;
  console.log(msg);
  // console.log(email);
  // console.log(body);
  
}

  return (
  <section>
    <div className='container mx-auto min-h-[800px] mb-14'>
    <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
      <div>
        <h2 className='text-2xl font-semibold'>{house.name}</h2>
        <h3 className='text-lg mb-4'>{house.address}</h3>
      </div>
      <div className='mb-4 lg:-0 flex gap-x-2 text-sm'>
        <div className='bg-green-500 text-white px-3 rounded-full'>{house.type}</div>
        <div className='bg-red-500 text-white px-3 rounded-full'>{house.country}</div>
      </div>
      <div className='text-3xl font-semibold text-red-500'>${new Intl.NumberFormat().format(house.price)}</div>
    </div>
    <div className='flex flex-col items-start gap-8 lg:flex-row'>
      <div className='max-w-[768px]'>
        <div className='mb-8'>
          <img src={house.imageLg} alt=''/>
        </div>
        <div className='flex gap-x-6 text-red-500 mb-6'>
          <div className='flex gap-x-2 items-center'>
            <BiBed className='text-2xl'/>
            <div>{house.bedrooms}</div>
          </div>
          <div className='flex gap-x-2 items-center'>
            <BiBath className='text-2xl'/>
            <div>{house.bathrooms}</div>
          </div>
          <div className='flex gap-x-2 items-center'>
            <BiArea className='text-2xl'/>
            <div>{house.surface}</div>
          </div>
        </div>
        <div>{house.description}</div>
      </div>
      <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
        <div className='flex items-center gap-x-4 mb-8'>
          <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
            <img src={house.agent.image} alt=''/>
          </div>
          <div>
            <div className='font-bold text-lg'>{house.agent.name}</div>
            <Link to='' className='text-red-500 text-sm'>
              View Listings
            </Link>
          </div>
        </div>
        {/* form */}
        <form className='flex flex-col gap-y-4'>
          <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='Name*' id='name'/>
          <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='Email*' id='email'/>
          <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='Phone' id='phone'/>
          <textarea className='border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400' placeholder='Message*' defaultValue='Hello, I am interested in [Modern apartment]' id='body' onKeyUp={()=> onClick()}></textarea>
          <div className="flex flex-col m-auto justify-center items-center">
          <label>-OR-</label>
          <p className="text-sm text-gray-500">Message us directly at email@example.com</p>
          
          </div>
          <div className='flex gap-x-2'>
            <Link className='bg-red-500 hover:bg-red-600 text-white rounded p-4 text-sm w-full transition' to="mailto:preciousaffiah205@gmail.com?subject='I am interested in buying a house'&body={body}" id='msg'>Send message</Link>
            <button className='border border-red-500 text-red-500 hover:border-red-400 hover:text-red-400 rounded p-4 text-sm w-full transition'>Call</button>
          </div>
        </form>

<div>
<form action="mailto:preciousaffiah205@gmail.com.com" method="post" enctype="text/plain" className="bg-green-300 w-full flex flex-col">
          <label>name</label>
            <input type="text" name="FirstName"/>
          <label>email</label>
          <input type="text" name="Email"/>
            <input type="submit" name="submit" value="Submit"/>
        </form>
</div>
      
      </div>
    </div>
    </div>
  </section>
  );
};

export default PropertyDetails;
