import React from "react";
import Navbar from "./NavBar";
import Splash from "./Splash";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Terms from "./Terms";
import Privacy from "./Privacy";
import Gallery from "./Gallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="flex-grow bg-violet-50">
          <div className="container mx-auto p-8">
            <Routes>
              <Route path="/" element={<Splash />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
