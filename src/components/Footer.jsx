import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-700">Md Rijoan Maruf</h3>
            <p className="text-sm font-[500]">
              A Task Manager website for Ramadan Amal.
            </p>
            <p className="text-sm font-[500]">
              © 2024 Md Rijoan Maruf. All rights reserved.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-700">Follow me</h3>
            <div className="flex space-x-6">
              <a href="https://github.com/mdrijoanmaruf" aria-label="GitHub" className="hover:text-gray-400 transition">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/mdrijoanmaruf/" aria-label="LinkedIn" className="hover:text-gray-400 transition">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/md.rijoanmaruf" aria-label="Facebook" className="hover:text-gray-400 transition">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/rijoanmaruf/" aria-label="Instagram" className="hover:text-gray-400 transition">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-700">Contact me</h3>
            <p className="text-sm font-[500]">Email: rijoanmaruf@gamil.com</p>
            <p className="text-sm font-[500]">Phone: Not Available</p>
            <p className="text-sm font-[500]">Address: Road-7, Block-C, Bahundhara-R/A , Dhaka</p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm font-semibold">
            Developed by <span className="font-bold">
              <a href="https://rijoan.com" className="hover:underline text-green-700">Md Rijoan Maruf</a>
            </span>
          </p>
          <div>
          <p className="text-sm font-[500]">Project built with React , TailwindCSS & Firebase</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;