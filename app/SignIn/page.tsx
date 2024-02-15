"use client";

import React from 'react';
import { useState } from 'react';
import { FaFacebookF, FaGithub, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

const Signin = () => {
  const [email, setEmail ] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event ) => {
    event.preventDefault();
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
    <form className='flex flex-col items-center gap-3 rounded-2xl w-1/4 bg-white py-7 shadow-xl'
    onSubmit={handleSubmit} 
    noValidate>
      <h1 className='text-3xl font-bold mb-2'>
        Sign In to Account
      </h1>
      <div className='border-2 w-10 mb-2'></div>
      <div className='flex justify-center mx-2'>
      <a href="#" className='border-2 rounded-full m-2 p-1'>
      <FaFacebookF className='m-2 ' />
      </a>
      <a href="#" className='border-2 rounded-full m-2 p-1'>
      <FaGithub className='m-2'/>
      </a>
      <a href="#" className='border-2 rounded-full m-2 p-1'>
      <FaGoogle className='m-2'/>
      </a>
      </div>
      <p className='text-gray-400'>or use your email account</p>
      <label className='flex p-1'>
        <FaRegEnvelope className='m-2'/>
        <input 
          type="email"
          placeholder='Email Address'
          value={email}
          className="outline-none border border-gray-300 rounded-xl p-2 ml-2"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label className='flex'>
        <MdLockOutline className='m-2 size-5'/>
        <input
          type="password"
          placeholder='Password'
          value={password}
          className="outline-none border border-gray-300 rounded-xl p-2 ml-2"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
        <label className='flex gap-1'>
          <input type="checkbox" value="Remember me" />Remember me
          <a href="#" className='text-blue-500 ml-5'>Forgot your password?</a>
        </label>
   
      <button type="submit" className='rounded-xl p-3 bg-black text-white w-32 mt-4'>Sign in</button>
    </form>
    </div>
  );
};

export default Signin;
