import React from "react";

// create an about component
function About() {
  return (
    <div className="flex flex-col items-center bg-slate-50 h-screen font-staalitches m-4 p-4">
      <h1 className="text-8xl font-bold text-indigo-500 pb-10">👋🏽Hi, I'm JJ!</h1>
      <p className="text-lg text-slate-950 text-center">
        I created this app with{" "}
        <span className="font-bold">one simple mission</span>: to make
        it easier for all of us to be better friends. Life gets busy, but
        remembering and celebrating the special moments that matter most doesn’t
        have to be.
        <br />
        <br />
        <span className="text-indigo-500">Remelephant</span> is here to help you stay connected, never miss an important
        day, and show your friends how much you care. If you love how it makes
        reaching out a breeze, consider subscribing for less than the price of a caramel machiatto to unlock{" "}
        <span className="font-bold">unlimited</span> events and even
        more ways to make your friendships shine. Thanks for being part of this
        journey.
        {"\n\n"}
        Cheers to meaningful connections! 🎉
      </p>
    </div>
  );
}

export default About;
