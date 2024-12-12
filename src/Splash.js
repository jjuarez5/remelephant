import React from "react";
import Landing from "./images/Landing.png";
import Noty from "./images/Noty.png";
import instructions from "./images/instructions.png";
// create a splash component
function Splash() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-50 container mx-auto px-4">
      {/* Header Section */}
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-indigo-500 font-pacifico m-2">
          <span className="text-6xl">R</span>emelephant
        </h1>
        <p className="text-lg text-slate-950 font-staalitches">
          The app that makes you a better friend!
        </p>
      </div>

      {/* Images Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
        <img
          className="w-full md:w-1/3 h-auto object-cover"
          src={Landing}
          alt="Landing"
        />
        <img
          className="w-full md:w-1/3 h-auto object-cover"
          src={Noty}
          alt="Noty"
        />
        <img
          className="w-full md:w-1/3 h-auto object-cover"
          src={instructions}
          alt="Instuctions"
        />
      </div>
    </div>
  );
}

export default Splash;
