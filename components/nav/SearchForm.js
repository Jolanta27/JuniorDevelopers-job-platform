"use client";

import { useState } from 'react';
import API from '../../app/API/api';

const SearchForm = () => {
    const [formState, setFormState] = useState({
        location: '',
        position: '',
        technology: ''
    });
    const handleChange = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setFormState({
            ...formState,
            [e.target.name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formState);
    };
    const locations = [
        "Remote", "Warsaw", "Oslo", "Krakow", "Drammen", "Poznan", "Wroclaw", "Gdansk", "Gdynia", "Sopot"];

    const positiones = ["Backend", "Frontend", "Fullstack", "Devops", "QA", "UX", "UI", "Product", "Project", "Analyst", "Security", "Network", "Cloud", "Mobile", "Hardware", "Embedded", "Game", "Blockchain", "Machine learning", "Artificial intelligence", "Cybersecurity", "Ethical hacking", ];

    const technologies = ['HTML', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Python', 'Django', 'Flask', 'PostgreSQL', 'Ruby', 'Rails', 'Java', 'Spring', 'MySQL', 'C#', 'C++', 'C', 'Swift', 'Kotlin', 'Go', 'Rust', 'TypeScript', 'Vue.js', 'Angular', 'Svelte', 'PHP', 'Laravel', 'Symfony', 'WordPress', 'Drupal', 'Joomla', 'Magento', 'Shopify', 'WooCommerce', 'Wix', 'Webflow', 'GraphQL', 'REST', 'API', 'OAuth', 'Docker', 'Kubernetes', 'Jenkins', 'Kubernetes'];

    return (
        <div>
        <form onSubmit={handleSubmit} className='flex justify-center space-x-7'>
        <select 
        name="location"
        value={formState.location}
        onChange={handleChange}
        className='w-1/5 py-2 rounded-xl text-center'>
        <option value="">Location</option>
        {locations.map((location, index) => (
             <option key={`location-${index}`} value={location}>{location}</option>
        ))}
        </select>
        <select 
        name="position"
        value={formState.position}
        onChange={handleChange}
        className='w-1/5 py-2 rounded-xl text-center'>
        <option value="">Position</option>
        {positiones.map((position, index) => (
            <option key={`position-${index}`} value={position}>{position}</option>
        ))}
        </select>
        <select
        name="technology"
        value={formState.technology}
        onChange={handleChange} className='w-1/5 py-2 rounded-xl text-center'>
        <option value="">Technology</option>
        {technologies.map((tech, index) => (
            <option key={`tech-${index}`} value={tech}>{tech}</option> 
        ))}</select>
        <button className='text-center rounded-xl px-4 bg-black text-white' type="submit">Find Job</button>
        </form>
        <API formState={formState}/>
        </div>
    );
}
export default SearchForm;