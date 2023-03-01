import React from 'react';

// import data
import { housesData } from '../data';

// import use params
import { useParams } from 'react-router-dom';


// import link
import { Link } from 'react-router-dom';

// import image
import contactUs from '../assets/img/contact-us.avif';


const Contact = () => {
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
    <div className='container mx-auto min-h-fit mt-8 mb-14'>
    
    <div className='grid md:grid-cols-2 lg:grid-cols-2'>
      
    
    <div className=''>
    <img src={contactUs} className="w-full h-full"/>

    </div>
      <div className='flex-1 bg-white mb-0 border border-gray-300 px-6 py-8'>
        {/* form */}
        <form className='flex flex-col gap-y-4 h-full'>
          <input className='border border-gray-300 focus:border-red-500 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='Name*' id='name'/>
          <input className='border border-gray-300 focus:border-red-500 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='Email*' id='email'/>
          <input className='border border-gray-300 focus:border-red-500 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='Phone' id='phone'/>
          <textarea className='border border-gray-300 focus:border-red-500 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400' placeholder='Message*' defaultValue='Hello, I am interested in [Modern apartment]' id='body' onKeyUp={()=> onClick()}></textarea>
          <div className="flex flex-col m-auto justify-center items-center">
          <label>-OR-</label>
          <p className="text-sm text-gray-500">Message us directly at email@email.com</p>
          
          </div>
          <div className='flex gap-x-2'>
            <Link className='bg-red-500 hover:bg-red-600 text-white rounded p-4 text-sm w-full transition' to="mailto:preciousaffiah205@gmail.com?subject='I am interested in buying a house'&body={body}" id='msg'>Send message</Link>
            <button className='border border-red-500 text-red-500 hover:border-red-400 hover:text-red-400 rounded p-4 text-sm w-full transition'>Call</button>
          </div>
        </form>
      
      </div>
    </div>
    </div>
    
  </section>
  );
};

export default Contact;
