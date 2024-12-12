import React from "react";
import Landing from "./images/Landing.png";
import Starting from "./images/Starting.png";
import Noty from "./images/Noty.png";
import Prompts from "./images/Prompts.png";
import Share from "./images/Share.png";
import Instuctions from "./images/ Instuctions.png"

// create a splash component
function Splash() {
  return (
    <div className="flex flex-col items-center h-screen bg-slate-50 container">
      <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-indigo-500 font-pacifico pb-5 m-5"><span className="text-6xl">R</span>emelephant</h1>
      <p className="text-lg text-slate-950 font-staalitches">The app that makes you a better friend!</p>
      
      </div>
      <div className="flex flex-row">
        <img className="w-half h-72 object-cover p-4" src={Landing} />
        <img className="w-half h-72 object-cover p-4" src={Starting} />
        <img className="w-half h-72  object-cover p-4" src={Noty} />
        <img className="w-half h-72 object-cover p-4" src={Instuctions} />
        <img className="w-half h-72 object-cover p-4" src={Prompts} />
        <img className="w-half h-72  object-cover p-4" src={Share} />
      </div>

    </div>
  );
}

export default Splash;