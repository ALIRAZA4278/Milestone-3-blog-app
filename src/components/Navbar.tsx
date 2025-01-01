// Navbar.js
import React from 'react';
import Link from 'next/link';
import Menu from './Menu'; // Assuming 'Menu' is the hamburger menu component

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE: Displayed when the screen is small */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">TechVerse</div>
        </Link>
        {/* The 'Menu' component typically contains a hamburger icon for mobile */}
        <Menu />
      </div>

      {/* BIGGER SCREENS: Hidden on mobile (when screen is medium or larger) */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT: Contains the logo and the navigation links */}
        <div className=" w-full flex items-center justify-between gap-12">
          <Link href="/" className="flex items-center gap-3">
            <div className="text-2xl tracking-wide">TechVerse</div>
          </Link>
          
          {/* Navigation Links for larger screens */}
          <div className="hidden md:flex gap-4">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <Link href="/#About" className="hover:text-blue-500">About</Link>  {/* Use absolute path */}
            <Link href="/#Blogs" className="hover:text-blue-500">Blogs</Link>  {/* Use absolute path */}
            <Link href="/#Contact" className="hover:text-blue-500">Contact</Link>  {/* Use absolute path */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
