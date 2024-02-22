import React, { ReactNode } from 'react';
import Nav from '../components/nav/Nav';
import SearchForm from './SearchForm';

interface LayoutProps {
  children: ReactNode;
}


const Layout = ({ children }: LayoutProps) => {
  
  
  return (
    <>
        <Nav />
      <footer></footer>
    </>
  );
};
export default Layout;
