import React from "react";
import { Link } from "react-router-dom";

// create a footer component
function Footer() {
  return (
    <footer className="w-full mt-auto bg-indigo-500 text-zinc-100 p-4 text-center">
      <div className="container mx-auto">
        <ul className="flex flex-col sm:flex-row justify-around items-center gap-2">
          <li>
            <p className="text-center text-xs">
              &copy;{new Date().getFullYear()} Remelephant. All rights reserved.
              Icon by{" "}
              <a
                href="https://www.freepik.com/icon/elephant_4775740"
                target="_blank"
              >
                FreePik
              </a>
              .
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
