import React from 'react';

const Sidebar = () => {
  return (
    <div className="lg:w-[20%] w-full h-fit lg:h-screen  p-4">
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        <li>
          <a href="#" className="text-green-600 font-semibold">Rocking chair</a>
        </li>
        <li>
          <a href="#" className="text-gray-700">Side chair</a>
        </li>
        <li>
          <a href="#" className="text-gray-700">Lounge chair</a>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;