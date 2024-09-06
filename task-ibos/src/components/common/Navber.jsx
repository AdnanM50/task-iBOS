import React, { useState, useContext } from 'react';
import logo from '../../assets/images/Logo.png';
import { IoBagOutline } from 'react-icons/io5';
import { MenuOutlined } from '@ant-design/icons';
import { Drawer, Button, Dropdown, Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext'; 
import { DownOutlined } from '@ant-design/icons';

const Navber = () => {
  const [visible, setVisible] = useState(false);
  const { getCartCount } = useContext(CartContext);
  const { isAuthenticated, user, logout } = useContext(AuthContext); // Use AuthContext
  const navigate = useNavigate(); // Use navigate for redirection

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/signup');
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="logout" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="bg-white py-5 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to={"/"} className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src={logo} alt="Logo" />
          </Link>
          <div className="hidden lg:flex items-center space-x-4">
            <Link to={"/"} className="navtext">Home</Link>
            <Link to={"/"} className="navtext">Products</Link>
            <Link to={"/"} className="navtext">Categories</Link>
            <Link to={"/"} className="navtext">Contact</Link>
            <Link to={"/"} className="navtext">Blog</Link>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/cart" className="">
              <IoBagOutline size={33} />
            </Link>
            <sub className='bg-slate-900 text-white p-1 text-lg rounded-full'>{getCartCount()}</sub>
            {isAuthenticated ? (
              <Dropdown overlay={userMenu} trigger={['click']}>
                <Button>
                  {user?.firstName} <DownOutlined />
                </Button>
              </Dropdown>
            ) : (
              <Link to="/signup" className="ml-4 bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium">Sign Up</Link>
            )}
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
        <Link to={"/"} className="block py-2">Home</Link>
        <Link to={"/"} className="block py-2">Products</Link>
        <Link to={"/"} className="block py-2">Categories</Link>
        <Link to={"/"} className="block py-2">Contact</Link>
        <Link to={"/"} className="block py-2">Blog</Link>
        <div className="flex items-center mt-4">
          <Link to="/cart" className="">
            <IoBagOutline size={33} />
          </Link>
          <sub className='bg-slate-900 text-white p-1 text-lg rounded-full'>{getCartCount()}</sub>
        </div>
        {isAuthenticated ? (
          <div className="mt-4">
            <Button type="primary" onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <Link to={"/signup"} className="mt-4 bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium w-full">Sign Up</Link>
        )}
      </Drawer>
    </div>
  );
};

export default Navber;
