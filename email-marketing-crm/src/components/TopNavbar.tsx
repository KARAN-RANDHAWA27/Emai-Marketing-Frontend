"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaBell, FaSun, FaMoon } from "react-icons/fa"; // Using react-icons for icons
import { HiOutlineSearch } from "react-icons/hi"; // Search icon

const TopNavbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State for theme toggle

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Code to actually change theme can go here, e.g., toggling Tailwind's dark mode
  };

  useEffect(() => {
    const root = document.documentElement; // Reference to the root element
    if (isDarkMode) {
      root.classList.add("dark"); // Apply dark mode
    } else {
      root.classList.remove("dark"); // Apply light mode
    }
  }, [isDarkMode]);

  return (
    <header
      className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800"
      style={{ height: "60px", marginBottom: "1px" }}
    >
      {" "}
      {/* Navbar container */}
      {/* Left Section: Logo */}
      <div className="flex items-center">
        {/* Placeholder logo */}
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          Logo {/* You can replace this with an image or custom logo */}
        </div>
      </div>
      {/* Center Section: Search Bar */}
      <div className="flex flex-1 justify-center">
        {" "}
        {/* Takes up significant space */}
        <div className="relative w-3/6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
          <HiOutlineSearch className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 dark:text-gray-400" />{" "}
          {/* Icon indicating search */}
        </div>
      </div>
      {/* Right Section: Notification and Theme Toggle */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <Link href="/notifications">
          <div className="relative p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
            <FaBell className="text-gray-800 dark:text-gray-200" />{" "}
            {/* Notification icon */}
            {/* Optionally add a badge or counter for unread notifications */}
          </div>
        </Link>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {isDarkMode ? (
            <FaSun className="text-gray-800 dark:text-gray-200" />
          ) : (
            <FaMoon className="text-gray-800 dark:text-gray-200" />
          )}
        </button>
      </div>
    </header>
  );
};

export default TopNavbar;
