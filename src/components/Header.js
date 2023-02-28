import React from 'react';

// import link
import { Link } from 'react-router-dom';
// import logo
import Logo from '../assets/img/logo.svg';


const MyHeader = () => {
  return <header className='py-6 mb-12 border-b'>
  
  <nav class="navbar navbar-expand-lg">
  <div class="container py-2 text-lg font-bold">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <Link to='/' class="navbar-brand">
        <img src={Logo} alt='' />
      </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse visible justify-content-end" id="navbarTogglerDemo02">
     
      <form class="d-flex" role="search">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 flex gap-4">
        <li class="nav-item">
          <Link className='nav-link text-red-500 hover:text-red-600 transition' to=''>Home</Link>          
        </li>
        <li class="nav-item">
          <Link className='nav-link text-red-500 hover:text-red-600 transition' to=''>About</Link>
        </li>
        <li class="nav-item">
          <Link className='nav-link text-red-500 hover:text-red-600 transition' to='/properties'>Properties</Link>
        </li>
        <li class="nav-item">
          <Link className='nav-link text-red-500 hover:text-red-600 transition' to=''>Contact</Link>
        </li>
        {/* <li class="nav-item">
          <Link className='nav-link hover:text-red-500 transition' to=''>Log in</Link>
        </li>
        <li class="nav-item">
          <Link className='nav-link bg-red-500 text-white px-4 py-3 rounded-lg transition' to=''>Sign up</Link>
        </li> */}
      </ul>
      </form>
    </div>
  </div>
</nav>

    {/* <div className='container mx-auto flex justify-between items-center'>
      <Link to='/'>
        <img src={Logo} alt='' />
      </Link>
      <div className='flex items-center gap-6'>
        <Link className='hover:text-red-500 transition' to=''>Log in</Link>
        <Link className='bg-red-500 text-white px-4 py-3 rounded-lg transition' to=''>Sign up</Link>
        <Link className='bg-red-500 text-white px-4 py-3 rounded-lg transition' to='/properties'>Properties</Link>
      </div>
    </div> */}
  </header>;
};

export default MyHeader;
