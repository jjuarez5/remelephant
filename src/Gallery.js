import React from "react";
import Landing from "./images/Landing.png";
import Starting from "./images/Starting.png";
import Noty from "./images/Noty.png";
import Prompts from "./images/Prompts.png";
import Share from "./images/Share.png";
import Instuctions from "./images/ Instuctions.png"
import Footer from "./Footer";

// create a gallery component
function Gallery() {
  return (
    <>
    <div className="flex flex-col items-center h-screen bg-slate-50 container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full">
        <img
          className="w-full h-auto object-cover"
          src={Landing}
          alt="Landing"
        />
        <img className="w-full h-auto object-cover" src={Noty} alt="Noty" />
        <img
          className="w-full h-auto object-cover"
          src={Instuctions}
          alt="Instructions"
        />
        <img className="w-full h-auto object-cover" src={Share} alt="Share" />
      </div>
    </div>
    </>
  );
}

export default Gallery;