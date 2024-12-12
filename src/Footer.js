import React from "react";

// create a footer component
function Footer() {
  return (
    <footer className="w-full sticky bottom-0 font-staalitches bg-indigo-500 text-zinc-100 p-4 text-center">
      <div className="container mx-auto">
      <p className="text-center text-xs">
          &copy;{new Date().getFullYear()} Remelephant. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;