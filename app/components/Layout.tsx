import React, { ReactNode } from 'react';
import Nav from '../components/nav/Nav';
import AboutUs from '../../pages/AboutUs';
import Footer from '../../pages/Footer';

interface LayoutProps {
  children: ReactNode;
}


const Layout = ({ children }: LayoutProps) => {
  
  
  return (
    <>
        <Nav />
        <AboutUs />
        <Footer />
    </>
  );
};
export default Layout;
