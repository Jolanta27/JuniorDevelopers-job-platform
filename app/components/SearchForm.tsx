'use client';

import { useEffect, useState } from 'react';
import { getResponseData } from '../lib/getLocationData';
import { locations, positions, technologies } from '../utils';

export type FormState = {
  location: string;
  position: string;
  technology: string;
};
const SearchForm = () => {
  const [formState, setFormState] = useState<FormState>({
    location: '',
    position: '',
    technology: '',
  });
  const handleChange = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option?.value
    );
    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    const getResponsData = async (formState: FormState) =>
      await getResponseData(formState);
    getResponseData({ formState });
  }, [formState]);

  return (
    <div>
        <div className="flex flex-col justify-center items-center py-10 mt-10  gap-2">
        <h1 className="text-4xl font-bold">Launch Your Career in Tech</h1>
        <p className="text-2xl">Empowering Junior Developers</p>
        <p className="text-xl">Your Gateaway To Exciting Tech Opportunities</p>
    </div>
      <form onSubmit={handleSubmit} className="flex justify-center space-x-7">
        <select
          name="location"
          value={formState.location}
          onChange={handleChange}
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
          value={formState.position}
          onChange={handleChange}
          className="w-1/5 py-2 rounded-xl text-center"
        >
          <option value="">Position</option>
          {positions.map((position, index) => (
            <option key={`position-${index}`} value={position}>
              {position}
            </option>
          ))}
        </select>
        <select
          name="technology"
          value={formState.technology}
          onChange={handleChange}
          className="w-1/5 py-2 rounded-xl text-center"
        >
          <option value="">Technology</option>
          {technologies.map((tech, index) => (
            <option key={`tech-${index}`} value={tech}>
              {tech}
            </option>
          ))}
        </select>
        <button
          className="text-center rounded-xl px-4 bg-black text-white hover:bg-black/65 transition duration-300 ease-in-out"
          type="submit"
        >
          Find Job
        </button>
      </form>
      {/* TODO PASS JOBS FETCHED DOWN IN THE COMPONENT  FOR NOW PASSING IN EMPTY ARRAY*/}
    </div>
  );
};
export default SearchForm;
