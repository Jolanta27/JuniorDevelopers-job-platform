import React from 'react';
import ScrollToTopButton from '../app/components/ui/ScrollToTopButton';

const Footer = () => {
  return (
    <div>
        <footer className='bg-black text-white p-10'>
            <p>© {new Date().getFullYear()} <span>JuniorDev Platform. All right reserved.</span></p>
            <p>Developed by Jolanta Galczynska</p>
            <ScrollToTopButton />
        </footer>
    </div>
  );
};
export default Footer;