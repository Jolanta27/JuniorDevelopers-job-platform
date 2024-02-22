    import React from 'react';
    import Link from 'next/link';
    import SearchForm from '../SearchForm';


    const Nav = () => {
    return (
        <div>
        <div className='bg-white'>
        <nav className="flex justify-between p-8">
        <div>{/*I will insert logo here later*/}</div>
        <div>
        <ul className="flex space-x-4">
            <li className='bg-black rounded-xl text-white p-3 hover:bg-black/65 transition'>
            <Link href="components/Employer">Employer
            </Link>
            </li>
            <li className='bg-black rounded-xl text-white py-3 px-5 hover:bg-black/65 transition'>
            <Link href="components/SignIn">Sign In</Link>
            </li>
            <li className='bg-black rounded-xl text-white p-3 hover:bg-black/65 transition'>
            <Link href="components/Registration">Registration</Link>
            </li>
        </ul>
        </div>
    </nav>
    </div>
    <SearchForm />
    </div>
    );
    }
    export default Nav;