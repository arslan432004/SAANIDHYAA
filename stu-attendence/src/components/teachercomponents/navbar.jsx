import React, { useState } from "react";
import { Search, User, Menu } from "lucide-react";
import Sidebar from "../teachercomponents/sidebar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 
        transition-all duration-300 
        ${isOpen ? "ml-64" : "ml-0"}`}
    >
      {/* SIDEBAR */}
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />

      {/* NAVBAR (normal, not sticky) */}
      <nav className="flex p-5 gap-4 justify-between items-center bg-white shadow relative z-20">
        
        {/* LEFT - MENU BUTTON */}
        <button onClick={toggleSidebar} className="p-2">
          <Menu />
        </button>

        {/* RIGHT - USER ICON */}
        <div className="user flex mr-8 w-10 h-10">
          <User />
        </div>
      </nav>

      {/* FLOATING SEARCH BAR (always fixed on top) */}
 <div className="fixed top-4 z-30 px-4 pointer-events-none
      sm:right-4 sm:left-auto sm:translate-x-0
       md:left-1/2 md:right-auto md:-translate-x-1/2
    ">
      <div className="flex items-center gap-2 bg-white py-2 px-3 pointer-events-auto rounded-xl shadow max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search here..."
          className="bg-[#333] text-white rounded-full w-full p-2"
        />
        <button className="px-3 py-1">Search</button>
      </div>
    </div>

      {/* PAGE CONTENT */}
      <div className="p-6 mt-4">
        <h1 className="text-3xl font-bold">Your Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Navbar is normal. Only search bar stays fixed at top.
        </p>
      </div>
    </div>
  );
}
