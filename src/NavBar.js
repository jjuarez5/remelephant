import React from "react";
import { Link } from "react-router-dom";
import remelly from "./images/remelly.png";

// create a navigation bar component
function NavBar() {
  return (
    <nav className="w-full sticky top-0 z-10 font-semibold bg-indigo-500 text-zinc-100 shadow-lg p-4">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        {/* Brand Name */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            className="w-8 h-8"
            src={remelly}
            alt="elephant logo"
          />
          <h1 className="text-white text-xl font-bold font-pacifico">
            Remelephant
          </h1>
        </Link>

        {/* Navigation Links */}
        <button
          className="block lg:hidden p-2 text-white hover:text-violet-50 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() =>
            document.getElementById("nav-links").classList.toggle("hidden")
          }
        >
          ☰
        </button>
        <ul
          id="nav-links"
          className="hidden lg:flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8 text-lg font-staalitches mt-4 lg:mt-0"
        >
          <li>
            <Link
              to="/"
              className="text-white hover:text-violet-50 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-violet-50 transition-colors"
            >
              About
            </Link>
          </li>
          {/* <li>
            <Link
              to="/gallery"
              className="text-white hover:text-violet-50 transition-colors"
            >
              Gallery
            </Link>
          </li> */}
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-violet-50 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
