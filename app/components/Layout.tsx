import Link from 'next/link';
import React, { ReactNode } from 'react';
import SearchForm from './nav/SearchForm';

interface LayoutProps {
  children: ReactNode;

}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main>{children}</main>
      <SearchForm />
      <footer></footer>
    </>
  );
};
export default Layout;
