import React from 'react';
import Frame from '../../assets/images/Frame.png';

const Footer = () => {
  return (
    <footer className="bg-[#0E0E0E] text-white r">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 containe">
        <div className="md:flex md:justify-between">
          <div className="md:grid lg:grid-cols-5 md:gap-8">
            <div className='col-span-2'>
              <img src={Frame} alt="FurniFlex" className="h-10" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">About Us</h4>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Master Plan</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Jobs</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Invest</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Pressroom</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Explore EEVE</h4>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Unlock my Robot Power</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Starlight</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Robot Platform</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">EEVE Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Community & Support</h4>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Willow X Community</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Developer & Maker Access</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Special Cases</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between">
            {/* <p className="text-base text-gray-400">&copy; 2024 FurniFlex. All rights reserved.</p> */}
            <div className="mt-4 md:mt-0 flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                {/* Insert Facebook SVG icon here */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                {/* Insert Twitter SVG icon here */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                {/* Insert Instagram SVG icon here */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                {/* Insert LinkedIn SVG icon here */}
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-col md:flex-row md:justify-between">
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">March22 Recap</a>
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">General Terms</a>
              <a href="#" className="text-gray-400 hover:text-white">Contact</a>
            </div>
            <div className="text-gray-400 flex justify-center">
              <span className="sr-only">Language</span>
              {/* Insert Language selector SVG/icon here */}
              <span className="ml-2">United States (English)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
