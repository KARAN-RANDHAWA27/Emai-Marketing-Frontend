"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaHome,
  FaEnvelope,
  FaUsers,
  FaFileAlt,
  FaChartBar,
  FaCog,
  FaUser,
  FaLockOpen,
  FaLock,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleStatic } from "@/redux/slices/sidebarSlice";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isStatic, setIsStatic] = useState(false); // State to control sidebar behavior

  const toggleStatic = () => {
    setIsStatic(!isStatic); // Toggle sidebar static/dynamic state
  };

  return (
    <>
      <aside
        className={`fixed left-0 z-40 h-screen transition-all duration-300 ${
          isExpanded || isStatic ? "w-48" : "w-16"
        }`}
        onMouseEnter={!isStatic ? () => setIsExpanded(true) : undefined} // Expand on hover
        onMouseLeave={!isStatic ? () => setIsExpanded(false) : undefined} // Collapse when cursor leaves
        aria-label="Sidebar"
      >
        <div className="h-5/6 flex flex-col justify-between overflow-x-hidden bg-gray-50 dark:bg-gray-800">
          {/* Top section for primary content */}
          <ul className="space-y-2 p-2">
            {/* Dashboard */}
            <li>
              <Link href="/">
                <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <FaHome className="w-6 h-6" />
                  {isExpanded && <span className="ml-2">Home</span>}
                </div>
              </Link>
            </li>

            {/* Campaigns */}
            <li>
              <Link href="/campaigns">
                <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <FaEnvelope className="w-6 h-6" />
                  {isExpanded && <span className="ml-2">Campaigns</span>}
                </div>
              </Link>
            </li>

            {/* Contacts */}
            <li>
              <Link href="/contacts">
                <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <FaUsers className="w-6 h-6" />
                  {isExpanded && <span className="ml-2">Contacts</span>}
                </div>
              </Link>
            </li>

            {/* Templates */}
            <li>
              <Link href="/templates">
                <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <FaFileAlt className="w-6 h-6" />
                  {isExpanded && <span className="ml-2">Templates</span>}
                </div>
              </Link>
            </li>

            {/* Reports */}
            <li>
              <Link href="/reports">
                <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <FaChartBar className="w-6 h-6" />
                  {isExpanded && <span className="ml-2">Reports</span>}
                </div>
              </Link>
            </li>
          </ul>

          {/* Bottom section for settings and profile */}
          <ul className="space-y-2 p-2">
            {" "}
            {/* This section stays at the bottom */}
            {/* Settings */}
            <li>
              <Link href="/settings">
                <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <FaCog className="w-6 h-6" />
                  {isExpanded && <span className="ml-2">Settings</span>}
                </div>
              </Link>
            </li>
            {/* Profile */}
            <li>
              <Link href="/profile">
                <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <FaUser className="w-6 h-6" />
                  {isExpanded && <span className="ml-2">Profile</span>}
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
