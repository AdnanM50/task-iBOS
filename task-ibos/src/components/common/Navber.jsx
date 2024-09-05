import React, { useState } from 'react';
import logo from '../../assets/images/Logo.png';
import { IoBagOutline } from 'react-icons/io5';
import { MenuOutlined } from '@ant-design/icons';
import { Drawer, Button } from 'antd';

const Navber = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <div className="bg-white py-5 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src={logo} alt="Logo" />
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="navtext">Home</a>
            <a href="#" className="navtext">Products</a>
            <a href="#" className="navtext">Categories</a>
            <a href="#" className="navtext">Contact</a>
            <a href="#" className="navtext">Blog</a>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <button className="">
              <IoBagOutline size={33} />
            </button>
            <sub className='bg-slate-900 text-white p-1 text-lg rounded-full'>7</sub>
            <button className="ml-4 bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium">Sign Up</button>
          </div>
          <div className="lg:hidden">
            <Button type="primary" onClick={showDrawer} icon={<MenuOutlined />} />
          </div>
        </div>
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        visible={visible}
      >
        <a href="#" className="block py-2">Home</a>
        <a href="#" className="block py-2">Products</a>
        <a href="#" className="block py-2">Categories</a>
        <a href="#" className="block py-2">Contact</a>
        <a href="#" className="block py-2">Blog</a>
        <div className="flex items-center mt-4">
          <button className="">
            <IoBagOutline size={33} />
          </button>
          <sub className='bg-slate-900 text-white p-1 text-lg rounded-full'>7</sub>
        </div>
        <button className="mt-4 bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium w-full">Sign Up</button>
      </Drawer>
    </div>
  );
};

export default Navber;
