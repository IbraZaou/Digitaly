import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Service from './pages/Service';
import Realisation from './pages/Realisation';
import Contact from './pages/Contact';
import NotFound from './components/NotFound';
import Agence from './pages/Agence';
import Navbar from './components/Navbar';
import REFLECTION1 from './assets/images/Rectangle 9521.png'
import REFLECTION2 from './assets/images/Rectangle 9522.png';



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <img className='reflection' src={REFLECTION1} alt="" />
      <img src={REFLECTION2} className='reflection' alt="" />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/realisations" element={<Realisation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;