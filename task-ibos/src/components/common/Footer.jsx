import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#0E0E0E] text-white">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:justify-between">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">About Us</h4>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">News</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Investors</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Explore ETC</h4>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Explore</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Products</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Reviews</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Membership</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 md:mt-0">
          <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Community & Support</h4>
          <ul className="mt-4 space-y-4">
            <li><a href="#" className="text-base text-gray-300 hover:text-white">Support</a></li>
            <li><a href="#" className="text-base text-gray-300 hover:text-white">Documentation</a></li>
            <li><a href="#" className="text-base text-gray-300 hover:text-white">Forums</a></li>
            <li><a href="#" className="text-base text-gray-300 hover:text-white">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8">
        <p className="text-base text-gray-400 xl:text-center">© 2024 Your Company, Inc. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Facebook</span></a>
          <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Twitter</span></a>
          <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Instagram</span></a>
        </div>
      </div>
    </div>
  </footer>

  )
}

export default Footer