

       import React, { useState } from "react";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="w-full shadow-md sticky top-0 left-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="hidden md:flex w-full bg-green-700 text-white text-xs md:text-sm py-2">
        <div className="w-full md:w-[85%] 2xl:w-[75%] mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">Follow Us:</span>
            <div className="flex gap-3">
              <FaFacebook size={16} />
              <FaInstagram size={16} />
              <FaLinkedin size={16} />
              <FaYoutube size={16} />
              <FaTwitter size={16} />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone size={14} /> +91 9076734825
            </span>
            <span className="flex items-center gap-1">
              <Mail size={14} /> starindiaenergy@gmail.com
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="w-full md:w-[85%] 2xl:w-[75%] mx-auto px-4 flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-20 h-14 object-contain" />
          </Link>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-green-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 font-medium">
            {/* Nav Item */}
            <li className="group relative">
              <Link to="/" className="nav-item">
                Home
              </Link>
            </li>

            <li className="group relative">
              <Link to="/about" className="nav-item">
                About Us
              </Link>
            </li>

            {/* SERVICES */}
            <li className="relative group">
              <span className="nav-item flex items-center gap-1 cursor-pointer">
                Services <ChevronDown size={16} />
              </span>

              {/* Dropdown */}
              <div className="dropdown-menu">
                <Link to="/services/on-grid" className="dropdown-item">
                  On Grid Solutions
                </Link>
                <Link to="/services/off-grid" className="dropdown-item">
                  Off Grid Solutions
                </Link>
                <Link to="/services/hybrid" className="dropdown-item">
                  Hybrid Solutions
                </Link>
                <Link to="/services/atta-chakki" className="dropdown-item">
                  Solar Aata Chakki
                </Link>
                <Link to="/services/pump" className="dropdown-item">
                  Solar Pump
                </Link>
              </div>
            </li>

            <li>
              <Link to="/gallery" className="nav-item">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/blog" className="nav-item">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-item">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-72  bg-green-700 text-white z-50 transform ${
            open ? "translate-x-0" : "-translate-x-full"
          } transition duration-300 lg:hidden`}
        >
          <div className="p-5">
            <div className="flex justify-between items-center mb-6">
              <img src={logo} className="w-20" />
              <X onClick={() => setOpen(false)} />
            </div>

            <ul className="space-y-4 text-lg">
              <li>
                <Link to="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setOpen(false)}>
                  About
                </Link>
              </li>

              {/* Mobile Services */}
              <li>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex justify-between w-full"
                >
                  Services
                  <ChevronDown
                    className={`${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {servicesOpen && (
                  <div className="pl-4 mt-2 space-y-2 text-sm overflow-hidden transition-all duration-300">
                    <Link
                      to="/services/on-grid"
                      onClick={() => setOpen(false)}
                      className="block py-1 hover:text-green-600 transition"
                    >
                      On-Grid Solutions
                    </Link>

                    <Link
                      to="/services/off-grid"
                      onClick={() => setOpen(false)}
                      className="block py-1 hover:text-green-600 transition"
                    >
                      Off-Grid Solutions
                    </Link>

                    <Link
                      to="/services/hybrid"
                      onClick={() => setOpen(false)}
                      className="block py-1 hover:text-green-600 transition"
                    >
                      Hybrid Solutions
                    </Link>

                    <Link
                      to="/services/atta-chakki"
                      onClick={() => setOpen(false)}
                      className="block py-1 hover:text-green-600 transition"
                    >
                      Solar Aata Chakki
                    </Link>

                    <Link
                      to="/services/pump"
                      onClick={() => setOpen(false)}
                      className="block py-1 hover:text-green-600 transition"
                    >
                      Solar Pump
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/blog">Blogs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
