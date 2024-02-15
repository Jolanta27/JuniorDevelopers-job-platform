"use client";

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaRegEnvelope, FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { IoPerson } from "react-icons/io5";


interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

const Registration = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    <form  
    className="flex flex-col items-center w-1/3 bg-white rounded-2xl shadow-xl gap-2 pt-3" 
    onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1 className='text-3xl font-bold mb-2'>
        Create Account</h1>
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
      <div className='border-2 w-10 my-2'></div>
      <div className='flex'>
      <IoPerson className='mt-3'/>
      <input 
      className="outline-none border border-gray-300 rounded-xl p-2 ml-7"
      placeholder="First Name" {...register("firstName", { required: true, maxLength: 25})} />
      </div>
      <div className="flex">
      <IoPerson className='mt-3'/>
      <input 
      className="outline-none border border-gray-300 rounded-xl p-2 ml-7"
      placeholder="Last Name" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      </div>
      <label className='flex p-1'>
        <FaRegEnvelope className='m-2'/>
        <input 
        className="outline-none border border-gray-300 rounded-xl p-2 ml-2"
          type="email"
          placeholder='Email Address'
          required
        />
      </label>
      <label className='flex'>
      <MdLockOutline className='m-2 size-5'/>
      <input 
      className="outline-none border border-gray-300 rounded-xl p-2 ml-2"
      type="password" 
      placeholder="Password" />
      </label>
      <label className='flex'>
      <MdLockOutline className='m-2 size-5'/>
      <input 
      className="outline-none border border-gray-300 rounded-xl p-2 ml-2"
      type="password" 
      placeholder="Confirm Password"/>
      </label>
      <button 
      className='rounded-xl p-3 bg-black text-white w-32 my-4' type="submit">Register</button>
    </form>
    </div>
  )
};

export default Registration;
