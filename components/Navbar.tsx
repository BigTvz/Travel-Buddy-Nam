import React, { useState } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', page: Page.HOME },
    { label: 'Sleep', page: Page.ACCOMMODATION },
    { label: 'Cars', page: Page.CAR_RENTAL },
    { label: 'Safaris', page: Page.SAFARI },
    { label: 'Activities', page: Page.ACTIVITIES },
    { label: 'Culture', page: Page.CULTURE },
    { label: 'Resources', page: Page.RESOURCES },
  ];

  const handlePageChange = (page: Page) => {
    setPage(page);
    setIsMenuOpen(false);
  };

  return (
    <header id="header" className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Name - Always visible */}
          <div 
            className="flex items-center space-x-2 cursor-pointer shrink-0" 
            onClick={() => handlePageChange(Page.HOME)}
          >
            <i className="fa-solid fa-mountain-sun text-sandy text-2xl sm:text-3xl"></i>
            <span className="text-base sm:text-xl font-extrabold text-deepblue tracking-tight">
              Travel Buddy Nam
            </span>
          </div>

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button 
                key={link.page}
                onClick={() => handlePageChange(link.page)}
                className={`text-sm font-bold transition px-1 py-2 border-b-2 ${
                  currentPage === link.page 
                    ? 'text-sandy border-sandy' 
                    : 'text-gray-500 border-transparent hover:text-deepblue'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* CTA Button - Hidden on small mobile */}
            <button 
              onClick={() => handlePageChange(Page.PLAN)}
              className="hidden sm:block bg-deepblue hover:bg-deepblue/90 text-white text-sm font-bold px-6 py-2.5 rounded-full transition shadow-md transform active:scale-95"
            >
              Plan Trip
            </button>

            {/* Hamburger Button - Visible on mobile/tablet */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-deepblue p-2 hover:bg-gray-100 rounded-xl transition"
              aria-label="Toggle navigation menu"
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Drawer Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden animate-fadeIn bg-white border-b border-gray-100 shadow-xl overflow-hidden">
          <nav className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handlePageChange(link.page)}
                className={`w-full text-left px-4 py-3 rounded-xl font-bold transition ${
                  currentPage === link.page
                    ? 'bg-sandy/10 text-sandy'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-deepblue'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{link.label}</span>
                  {currentPage === link.page && <i className="fa-solid fa-chevron-right text-xs"></i>}
                </div>
              </button>
            ))}
            <div className="pt-4 border-t border-gray-100 mt-4 px-4">
               <button 
                onClick={() => handlePageChange(Page.PLAN)}
                className="w-full bg-deepblue text-white py-4 rounded-2xl font-black shadow-lg"
              >
                Start Planning Itinerary
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;