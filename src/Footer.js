import React from "react";
import { Link } from "react-router-dom";

// create a footer component
function Footer() {
  return (
    <footer className="w-full sticky bottom-0 font-staalitches bg-indigo-500 text-zinc-100 p-4 text-center">
      <div className="container mx-auto">
        <ul className="flex flex-row justify-around">
          <li>
            <p className="text-center text-xs">
              &copy;{new Date().getFullYear()} Remelephant. All rights reserved.
            </p>
          </li>
          <li>
            <Link to="/terms">
            <p className="text-center text-xs">Terms & Conditions</p>
            </Link>
          </li>
          <li>
            <Link to="/privacy">
            <p className="text-center text-xs">Privacy Policy</p>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
