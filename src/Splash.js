import React from "react";

// create a splash component
function Splash() {
  return (
    <div className="flex flex-col items-center h-screen bg-slate-50 container mx-auto px-4">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-indigo-500 font-pacifico pb-2 m-5">
          <span className="text-6xl">R</span>emelephant
        </h1>
        <p className="text-lg text-slate-950 font-pacifico">
          The app that makes you a better friend!
        </p>
      </div>
    </div>
  );
}

export default Splash;