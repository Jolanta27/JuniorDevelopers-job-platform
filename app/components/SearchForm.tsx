'use client';

import { useEffect, useState } from 'react';
import { getResponseData } from '../lib/getLocationData';
import { locations, positions, technologies } from '../utils';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import JobCards from './JobCards';

export type FormState = {
  location: string;
  position: string;
  technology: string;
};
const customStyles = {
  control: (provided) => ({
    ...provided,
    boxShadow: 'none',
    '&:hover': {
      borderColor: 'gray',
    },
  }),
};
const SearchForm = () => {
    const [showJobs, setShowJobs] = useState(false);

    const handleClick = () => {
      setShowJobs(!showJobs);
    }
    const options = technologies.map((tech) => ({
      value: tech,
      label: tech,
    }));

    const animatedComponent = makeAnimated();
  return (
    <div className='flex flex-col h-screen mt-24'>
        <div className="flex flex-col justify-center items-center py-10 gap-2">
        <h1 className="text-4xl font-bold">Launch Your Career in Tech</h1>
        <p className="text-2xl">Empowering Junior Developers</p>
        <p className="text-xl">Your Gateaway To Exciting Tech Opportunities</p>
    </div>
      <form className="flex justify-center space-x-7">
        <select
          name="location"
          className="w-1/5 py-2 rounded-xl text-center"
        >
          <option value="">Location</option>
          {locations?.map((location, index) => (
            <option key={`location-${index}`} value={location}>
              {location}
            </option>
          ))}
        </select>
        <select
          name="position"
          className="w-1/5 py-2 rounded-xl text-center"
        >
          <option value="">Position</option>
          {positions.map((position, index) => (
            <option key={`position-${index}`} value={position}>
              {position}
            </option>
          ))}
        </select>
        <Select 
        styles={customStyles}
        isMulti
        name="technology"
        components={animatedComponent}
        options={options}
        className="w-1/5 py-2 rounded-xl text-center text-black"
        />
        <button
          className="text-center rounded-xl px-4 bg-black text-white hover:bg-black/65 transition duration-300 ease-in-out"
          type="submit"
          onClick={handleClick}
        >
          Find Job
        </button>
      </form>
      {showJobs ? (
        <JobCards />
      ) : (
        <div className='flex flex-col items-center mt-12 gap-5'>
        <h1 className='text-5xl'>Take the first step step towards your dream job </h1>
        <h2 className='text-2xl'>Click on button to explore available opportunities and kickstart your IT journey today!</h2>
    </div>
      )}
     
  </div>
  );
};
export default SearchForm;
