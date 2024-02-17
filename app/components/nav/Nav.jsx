    import React from 'react';
    import Link from 'next/link';


    const Nav = () => {
    return (
        <div className='bg-white'>
        <nav className="flex justify-between p-8">
        <div>{/*I will insert logo here later*/}</div>
        <div>
        <ul className="flex space-x-4">
            <li className='bg-black rounded-xl text-white p-3'>
            <Link href="/Employer">Employer
            </Link>
            </li>
            <li className='bg-black rounded-xl text-white py-3 px-5'>
            <Link href="/SignIn">Sign In</Link>
            </li>
            <li className='bg-black rounded-xl text-white p-3'>
            <Link href="/Registration">Registration</Link>
            </li>
        </ul>
        </div>
    </nav>
    </div>
    );
    }
    export default Nav;