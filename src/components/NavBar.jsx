import React, { useState } from "react";
import Button from "./Button";
import { NavLink, useLocation } from "react-router-dom";
import { AlignRight } from "lucide-react";



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const bgMap = {
    "/": "bg-white",
    "/about": "bg-gray-100",
    "/service": "bg-green-50",
    "/blog": "bg-yellow-50",
    "/contact": "bg-red-50",
  };

      // Button style per page
  let buttonStyle =
    "rounded-md font-semibold px-4 py-2 transition-colors duration-200";
  if (location.pathname === "/about") {
    buttonStyle += " bg-green-600 text-white hover:bg-green-700";
  } else if (location.pathname === "/service") {
    buttonStyle += " bg-blue-600 text-white hover:bg-blue-700";
  } else {
    buttonStyle += " bg-black text-white hover:bg-gray-800";
  }
  return (
    <div>
      <nav className="flex flex-row font-space justify-between items-center w-full px-6 py-5 shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/public/svg-662123605_1698 (1).png" alt="logo" className="w-10 h-10"/>
          <h1 className="text-2xl md:text-3xl text-black font-bold font-space">Techty</h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 font-space font-semibold">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `hover:text-gray-600 ${
                isActive ? "text-green-600 border-b-2 border-green-600 pb-1" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-gray-600 ${
                isActive ? "text-green-600 border-b-2 border-green-600 pb-1" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              `hover:text-gray-600 ${
                isActive ? "text-green-600 border-b-2 border-green-600 pb-1" : ""
              }`
            }
          >
            Service
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `hover:text-gray-600 ${
                isActive ? "text-green-600 border-b-2 border-green-600 pb-1" : ""
              }`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-gray-600 ${
                isActive ? "text-green-600 border-b-2 border-green-600 pb-1" : ""
              }`
            }
          >
            Contact
          </NavLink>

          <Button
            name="Request a Free Demo"
            style={"bg-black text-white rounded-md font-semibold px-4 py-2"}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <AlignRight size={28} /> : <AlignRight size={28} />}
          </button>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <AlignRight size={24} />
          </button>
        </div>
        <div className="flex flex-col gap-6 p-5 font-space font-semibold">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `hover:text-gray-600 ${
                isActive ? "text-green-600 border-l-4 border-green-600 pl-2" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `hover:text-gray-600 ${
                isActive ? "text-green-600 border-l-4 border-green-600 pl-2" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/service"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `hover:text-gray-600 ${
                isActive ? "text-green-600 border-l-4 border-green-600 pl-2" : ""
              }`
            }
          >
            Service
          </NavLink>
          <NavLink
            to="/blog"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `hover:text-gray-600 ${
                isActive ? "text-green-600 border-l-4 border-green-600 pl-2" : ""
              }`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `hover:text-gray-600 ${
                isActive ? "text-green-600 border-l-4 border-green-600 pl-2" : ""
              }`
            }
          >
            Contact
          </NavLink>

          <Button
            name="Request a Free Demo"
            style={"bg-black text-white rounded-md font-semibold py-2"}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
