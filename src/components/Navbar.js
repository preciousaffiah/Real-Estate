import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-0 md:py-4">
        <div className="relative flex items-center justify-between h-16">
          
          <div className="flex-1 flex items-center justify-between sm:items-stretch px-3">
            <div className="flex-shrink-0">
              <img className="block lg:hidden h-8 w-auto" src={Logo} alt="Workflow" />
              <img className="hidden lg:block h-8 w-auto" src={Logo} alt="Workflow" />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm  font-bold" to=''>Home</Link>
                <Link className="text-black hover:bg-red-600 hover:text-white px-3 py-2 rounded-md text-sm  font-bold" to='/#about'>About</Link>
                <Link className="text-black hover:bg-red-600 hover:text-white px-3 py-2 rounded-md text-sm font-bold" to='/properties'>Properties</Link>
                <Link className="text-black hover:bg-red-600 hover:text-white px-3 py-2 rounded-md text-sm font-bold" to='/contact'>Contact</Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={handleToggle}>
              <span className="sr-only">Open main menu</span>
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
      <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
            
            <div className="block sm:hidden sm:ml-6">
              <div className="flex space-x-4">
                <ul className="flex flex-col justify-end gap-y-4 pb-2">
                    <li><Link className="text-black px-3 py-2 rounded-md text-sm  font-bold" to=''>Home</Link></li>
                    <li><Link className="text-black px-3 py-2 rounded-md text-sm  font-bold" to='/#about'>About</Link></li>
                    <li><Link className="text-black px-3 py-2 rounded-md text-sm font-bold" to='/properties'>Properties</Link></li>
                    <li><Link className="text-black px-3 py-2 rounded-md text-sm font-bold" to='/contact'>Contact</Link></li>
                </ul>
            </div>
            </div>
          </div>
      </div>
</nav>
  );
}

export default Navbar;