import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import logoimage from '../assets/images/Frame.png';
import { FcGoogle } from "react-icons/fc";
import { RiAppleFill } from "react-icons/ri";


const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username, password };
    login(userData);
  };

  return (
// `    <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Login</button>
//     </form>`
<div className='lg:flex'>
<div className="lg:w-1/2 w-full h-screen flex justify-center items-center bg-white">
<div className="w-[500px] p-8 bg-[#FAFAFA] shadow-lg rounded-lg">
  <h1 className="text-2xl font-bold mb-4 text-center">
    Welcome To <br /> <span className="text-blue-600 text-[40px]">Furni</span><span className="text-black text-[40px]">Flex</span>
  </h1>
  <p className="text-center text-gray-500 mb-6">Signup for purchasing your desired products</p>
  <form onSubmit={handleSubmit}>

  
    <div className="mb-4">
      <input
        type="email"
        placeholder="Email address"
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
    </div>
    <div className="mb-4 relative">
      <input
        type="password"
        placeholder="Password"
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
    <div className="flex justify-center space-x-4 mb-4">
      <button className="flex items-center w-full bg-gray-100 text-gray-700 py-[14px] px-4 space-x-3 rounded-lg">
      <FcGoogle size={20} /> <span>Sign in with Google</span>
      </button>
      <button className="flex items-center w-full bg-gray-100 text-gray-700 py-[14px] px-4 space-x-3 rounded-lg">
      <RiAppleFill size={20} />
      <span>Sign in with Apple</span>
      </button>
    </div>
  </form>
  <p className="text-center text-gray-500">
    Have an account? <a href="#" className="text-blue-600">Sign in</a>
  </p>
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

export default Login;
