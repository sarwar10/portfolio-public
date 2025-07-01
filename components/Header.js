import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  // State to manage the visibility of the mobile navigation menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu's open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full bg-gradient-to-r from-black to-green-950 bg-opacity-90 z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Name Link */}
          <Link href="/" className="flex items-center cursor-pointer">
            <span className="text-2xl font-bold text-green-400">
              Sarwar Alam
            </span>
            <span className="ml-2 text-xs text-gray-400">Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#skills" className="text-gray-300 hover:text-green-400 transition">
              Skills
            </Link>
            <Link href="#tech-stack" className="text-gray-300 hover:text-green-400 transition">
              Tech Stack
            </Link>
            <Link href="/project" className="text-gray-300 hover:text-green-400 transition">
              Projects
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-green-400 transition">
              Blogs
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-green-400 transition">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <button
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                // Close icon (X) when menu is open
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon when menu is closed
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu (conditionally rendered) */}
      {/* This div slides down/up when the menu button is clicked */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-gray-900 bg-opacity-95 py-4 transition-all duration-300 ease-in-out`}
      >
        <nav className="flex flex-col items-center space-y-4">
          <Link href="#skills" className="text-gray-300 hover:text-green-400 transition" onClick={toggleMenu}>
            Skills
          </Link>
          <Link href="#tech-stack" className="text-gray-300 hover:text-green-400 transition" onClick={toggleMenu}>
            Tech Stack
          </Link>
          <Link href="/project" className="text-gray-300 hover:text-green-400 transition" onClick={toggleMenu}>
            Projects
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-green-400 transition" onClick={toggleMenu}>
            Blog
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-green-400 transition" onClick={toggleMenu}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
