import React from 'react';
import Navbar from './NavBar';
import Splash from './Splash';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Terms from './Terms';
import Privacy from './Privacy';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="w-full bg-violet-50 min-h-screen p-8">
        <div className="container mx-auto">
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Splash />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/terms" element={<Terms />}/>
          <Route path='/privacy' element={<Privacy />} />
      </Routes>
      <Footer />
      </BrowserRouter>
      </div>
      </div>
    </>
  );
}

export default App;
