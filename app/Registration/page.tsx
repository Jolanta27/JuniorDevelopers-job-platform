"use client";

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaRegEnvelope, FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { IoPerson } from "react-icons/io5";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

const Registration = () => {

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('First Name is required'),
    lastName: Yup.string()
      .required('Last Name is required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
    acceptTerms: Yup.bool()
      .oneOf([true], 'Accept Ts & Cs is required')
  })

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false
    }
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  }
  
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
      <div className='flex flex-col'>
      <input 
      className="outline-none border border-gray-300 rounded-xl p-2 ml-7"
      placeholder="First Name" {...register("firstName", { required: true, maxLength: 25})} />
      { errors.firstName && <p className='text-red-500 ml-8 mt-2'>{errors.firstName.message}</p>}
      </div>
      </div>
      <div className="flex">
      <IoPerson className='mt-3'/>
      <div className='flex flex-col'>
      <input 
      className="outline-none border border-gray-300 rounded-xl p-2 ml-7"
      placeholder="Last Name" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      {errors.lastName && <p className='text-red-500 ml-8 mt-2'>{errors.lastName.message}</p>}
      </div>
      </div>
      <label className='flex p-1'>
        <FaRegEnvelope className='m-2'/>
        <div className="flex flex-col">
        <input 
        className="outline-none border border-gray-300 rounded-xl p-2 ml-2"
          type="email"
          placeholder='Email Address'
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p className='text-red-500 ml-6 mt-2'>{errors.email.message}</p>}
        </div>
      </label>
      <label className='flex'>
      <MdLockOutline className='m-2 size-5'/>
      <div className='flex flex-col'>
      <input 
      className="outline-none border border-gray-300 rounded-xl p-2 ml-2"
      type="password" 
      placeholder="Password"
      {...register("password", { required: true, minLength: 8 })}
      />
      {errors.password  && <p className='text-red-500 ml-6 mt-2'>{errors.password.message}</p>}
      </div>
      </label>
      <label className='flex'>
      <MdLockOutline className='m-2 size-5'/>
      <div className="flex flex-col">
      <input 
      className="outline-none border border-gray-300 rounded-xl p-2 ml-2"
      type="password" 
      placeholder="Confirm Password"
      {...register("confirmPassword", { 
        required: true,
      'validate': value => value === watch('password') || "The passwords do not match"
      })}
      />
      {errors.confirmPassword && <p className='text-red-500 mt-2'>{errors.confirmPassword.message}</p>}
      </div>
      </label>
      <div>
      <input 
      type="checkbox" 
      {...register("acceptTerms", { required: "You must accept the terms and conditions" })}
      />
      <label className="ml-1">Accept Terms & Conditions</label>
      {errors.acceptTerms && <p className='text-red-500 ml-6 mt-2'>{errors.acceptTerms.message}</p>}
      </div>
      <button 
      className='rounded-xl p-3 bg-black text-white w-32 my-4' type="submit" >Register</button>
    </form>
    </div>
  );
};
export default Registration;
