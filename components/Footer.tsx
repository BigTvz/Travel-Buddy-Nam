import React from 'react';
import { Page } from '../types';

interface FooterProps {
  setPage?: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  return (
    <footer id="footer" className="bg-deepblue text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4 cursor-pointer" onClick={() => setPage?.(Page.HOME)}>
              <i className="fa-solid fa-mountain-sun text-sandy text-3xl"></i>
              <span className="text-2xl font-bold tracking-tight">Travel Buddy Nam</span>
            </div>
            <p className="text-white/80 mb-4">Your gateway to unforgettable Namibian adventures</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-sandy transition">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-sandy transition">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-sandy transition">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">For Providers</h3>
            <ul className="space-y-2">
              <li><button onClick={() => setPage?.(Page.PROVIDER_DASHBOARD)} className="text-white/80 hover:text-sandy transition text-left">Provider Dashboard</button></li>
              <li><a href="#" className="text-white/80 hover:text-sandy transition">List Your Service</a></li>
              <li><a href="#" className="text-white/80 hover:text-sandy transition">Partner Support</a></li>
              <li><a href="#" className="text-white/80 hover:text-sandy transition">Advertising</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-sandy transition">Help Center</a></li>
              <li><a href="#" className="text-white/80 hover:text-sandy transition">Contact Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-sandy transition">FAQs</a></li>
              <li><a href="#" className="text-white/80 hover:text-sandy transition">Travel Insurance</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-sandy transition">Terms of Service</a></li>
              <li><a href="#" className="text-white/80 hover:text-sandy transition">Privacy Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-sandy transition">Cookie Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-sandy transition">Cancellation Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">© 2024 Travel Buddy Nam. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <span className="text-white/80 text-sm">Language:</span>
              <select className="bg-white/20 text-white px-4 py-2 rounded-lg border border-white/30 focus:outline-none focus:border-sandy">
                <option>English</option>
                <option>Deutsch</option>
                <option>Français</option>
                <option>Afrikaans</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;