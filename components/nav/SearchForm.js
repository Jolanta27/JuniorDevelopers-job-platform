"use client";

import { useState } from 'react';

const SearchForm = () => {
    const [formState, setFormState] = useState({
        location: '',
        position: '',
        technology: ''
    });
    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    };
    return (
        <form onSubmit={handleSubmit} className='flex space-x-7 justify-center '>
        <input 
        name="location"
        type="text"
        placeholder="Location"
        value={formState.location}
        onChange={handleChange}
        className='w-1/5 py-2 rounded-xl text-center'
        />
        <input 
        name="position"
        type="text"
        placeholder="Position"
        value={formState.position}
        onChange={handleChange}
        className='w-1/5 py-2 rounded-xl text-center'
        />
        <input 
        name="technology"
        type="text"
        placeholder="Technology"
        value={formState.technology}
        onChange={handleChange} className='w-1/5 py-2 rounded-xl text-center'
        />
        <button className='text-center rounded-xl px-4 bg-black text-white' type="submit">Find Job</button>
        </form>
    );
}
export default SearchForm;