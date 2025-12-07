import React from "react";
import { FaPenFancy } from "react-icons/fa";
import { X } from "lucide-react";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-white shadow-xl border-r 
        transition-all duration-300 overflow-hidden
        ${isOpen ? "w-64" : "w-0"}
      `}
    >
      {/* HEADER */}
      <div className="flex justify-between items-center p-4 ">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
            <FaPenFancy className="text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold">Mark It</h1>
            <p className="text-xs text-gray-500">Attendance System</p>
          </div>
        </div>

        {/* <button onClick={toggle}>
          <X />
        </button> */}
      </div>

      {/* LINKS */}
      <div className="p-4">
        <p className="p-2 hover:bg-gray-100 rounded">Dashboard</p>
        <p className="p-2 hover:bg-gray-100 rounded">Students</p>
        <p className="p-2 hover:bg-gray-100 rounded">Attendance</p>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 w-full p-4 border-t flex flex-col gap-2">
        <button className="bg-black text-white p-2 rounded-lg">Settings</button>
        <button className="bg-black text-white p-2 rounded-lg">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
