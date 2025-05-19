import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSun, FaMoon, FaHome, FaUserPlus, FaSignInAlt, FaGlobe } from 'react-icons/fa';

 const NavbarComponents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
 // ============= Load theme preference from localStorage =========== //
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add('bg-gray-900', 'text-white');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-gray-900', 'text-white');
      document.body.classList.remove('bg-white', 'text-black');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('bg-white', 'text-black');
      document.body.classList.remove('bg-gray-900', 'text-white');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          <Link className=' font-bold text-xl' to={"/"}>Website Form</Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-500 flex items-center gap-1"><FaHome /> Home</Link>
            <Link to="/Registrations" className="hover:text-blue-500 flex items-center gap-1"><FaUserPlus /> Registrations</Link>
            <Link to="/Login" className="hover:text-blue-500 flex items-center gap-1"><FaSignInAlt /> Login</Link>
            <Link to="/WebsiteSubmissionForm" className="hover:text-blue-500 flex items-center gap-1"><FaGlobe /> Submission</Link>

            {/* Theme toggle button */}
            <button onClick={() => setDarkMode(!darkMode)} className="ml-4 focus:outline-none">
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="mr-2 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Theme toggle button (mobile) */}
            <button onClick={() => setDarkMode(!darkMode)} className="focus:outline-none">
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} md:hidden px-4 pb-4 space-y-2`}>
          <Link to="/" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}><FaHome className="inline mr-2" /> Home</Link>
          <Link to="/Registrations" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}><FaUserPlus className="inline mr-2" /> Registrations</Link>
          <Link to="/Login" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}><FaSignInAlt className="inline mr-2" /> Login</Link>
          <Link to="/WebsiteSubmissionForm" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}><FaGlobe className="inline mr-2" /> Submission</Link>
        </div>
      )}
    </nav>
  );
 };

 export default NavbarComponents;
