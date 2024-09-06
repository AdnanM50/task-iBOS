import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import logoimage from '../assets/images/Frame.png';

const SignUp = () => {
  const { login } = useContext(AuthContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { firstName, lastName, email, password };
    
    // Simulating a successful signup process
    login(userData);
    message.success('User signed up successfully!');
    navigate('/login');
  };

  return (
    <div className='lg:flex'>
      <div className="lg:w-1/2 w-full h-screen flex justify-center items-center bg-white">
        <div className="w-[500px] p-8 bg-[#FAFAFA] shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Welcome To <br /> <span className="text-blue-600 text-[40px]">Furni</span><span className="text-black text-[40px]">Flex</span>
          </h1>
          <p className="text-center text-gray-500 mb-6">Signup for purchasing your desired products</p>
          <form onSubmit={handleSubmit}>
            <div className="flex space-x-5">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4 relative">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <button className="absolute right-3 top-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m0 0l3-3m-3 3l3 3" />
                </svg>
              </button>
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-black font-bold text-[14px]">I agree to the <a href="#" className=" text-black font-bold text-[14px]">Terms & Policy</a></span>
              </label>
            </div>
            <button className="w-full bg-black text-white p-3 rounded-lg mb-4">Signup</button>
            <p className="text-center text-gray-500">
              Have an account? <a href="/login" className="text-blue-600">Sign in</a>
            </p>
          </form>
        </div>
      </div>
      <div className="lg:w-1/2 bg-[url('/chris-lee.png')] bg-center flex-col bg-no-repeat w-full h-screen  hidden lg:flex justify-center items-center">
        <img
          src={logoimage}
          alt="Chair"
          className="w-[180px] h-[139px]"
        />
        <p className='text-white w-[445px] text-center'>
          Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
