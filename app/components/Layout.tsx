import React, { ReactNode } from 'react';
import Nav from '../components/nav/Nav';
import SearchForm from './SearchForm';
import JobCards from '../components/JobCards';

interface LayoutProps {
  children: ReactNode;
}


const Layout = ({ children }: LayoutProps) => {
  
  
  return (
    <>
        <Nav />
        <JobCards />
      <footer></footer>
    </>
  );
};
export default Layout;
