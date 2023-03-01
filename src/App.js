import React from 'react';

//import routes and route
import { Routes, Route} from 'react-router-dom';

//import components
import Header from './components/Header';
import Footer from './components/Footer';

//import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Properties from './pages/Properties';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

const App = () => {
  return <div className='max-w-[1440px] mx-auto bg-white'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/properties' element={<Properties/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/property/:id' element={<PropertyDetails/>} />
    </Routes>
    <Footer/>
  </div>;
};

export default App;
