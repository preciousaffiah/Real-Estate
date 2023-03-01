import React from 'react';

const Footer = () => {

  const newDate = new Date();
  const year = newDate.getFullYear();
  // year.getFullYear();

  return <footer className='bg-red-800 py-8 text-center text-white'>
    <div className='container mx-auto'>
      Copyright &copy; {year} Homely. All rights reserved
    </div>
  </footer>;
};

export default Footer;
