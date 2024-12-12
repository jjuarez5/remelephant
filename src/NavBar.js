import React from "react";
import { Link } from "react-router-dom";
import elephant from "./images/elephant.png";
// create a navigation bar component
function NavBar() {
  return (
    <nav className="w-full sticky top-0 z-0 font-semibold bg-indigo-500 text-zinc-100 shadow-lg p-2">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <h1 className="text-white text-xl font-bold font-pacifico flex flex-row">Remelephant</h1>
        <ul className="flex justify-center space-x-8 text-lg font-staalitches">
          <li>
            <Link to="/">
            <a href="#" className="text-white hover:text-violet-50 transition-colors">Home</a>
            </Link>
          </li>
          <li>
            <Link to="/about">
            <a href="#" className="text-white hover:text-violet-50 transition-colors">About</a>
            </Link>
          </li>
          <li>
            <Link to="/gallery">
            <a href="#" className="text-white hover:text-violet-50 transition-colors">Gallery</a>
            </Link>
          </li>
          <li>
            <Link to="/contact">
            <a href="#" className="text-white hover:text-violet-50  transition-colors">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
