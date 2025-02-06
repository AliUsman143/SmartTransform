"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname to get the current route

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-100 z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/img/logo.png" className="h-8 sm:h-10" alt="Logo" />
          <p className="pl-2 font-semibold text-gray-500 md:text-3xl text-2xl ">SmartTransform</p>
        </Link>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-controls="navbar"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Menu Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:block`}
          id="navbar"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:mt-0 md:space-x-6">
            <li>
              <Link
                href="/"
                className={`block py-2 ${
                  pathname === "/" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/videoconvertor"
                className={`block py-2 ${
                  pathname === "/videoconvertor"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                SmartVidz
              </Link>
            </li>
            <li>
              <Link
                href="/audioconvertor"
                className={`block py-2 ${
                  pathname === "/audioconvertor"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                SmartSpeak 
              </Link>
            </li>
            <li>
              <Link
                href="/audioconvertor"
                className={`block py-2 ${
                  pathname === "/audioconvertor"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                 SmartScan
              </Link>
            </li>
            <li>
              <Link
                href="/aboutpage"
                className={`block py-2 ${
                  pathname === "/aboutpage"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/loginform"
                className={`block py-2 ${
                  pathname === "/loginform"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Login / Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
