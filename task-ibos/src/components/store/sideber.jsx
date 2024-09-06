import React from 'react';

const Sidebar = () => {
  return (
    <div className="lg:w-[20%] w-full h-fit lg:h-screen  py-4">
      {/* <h2 className="text-lg font-bold mb-4">Categories</h2> */}
      <ul className="space-y-4">
        <li className='hover:text-white text-black hover:bg-[#0E0E0E] text-[22px] py-3 px-6 rounded-lg font-semibold mb-[12px] border-b'>
          <a href="#" className="">Rocking chair</a>
        </li>
        <li className='hover:text-white text-black hover:bg-[#0E0E0E] text-[22px] py-3 px-6 rounded-lg font-semibold mb-[12px] border-b'>
          <a href="#" className="">Side chair</a>
        </li>
        <li className='hover:text-white text-black hover:bg-[#0E0E0E] text-[22px] py-3 px-6 rounded-lg font-semibold mb-[12px] border-b'>
          <a href="#" className="">Lounge chair</a>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;