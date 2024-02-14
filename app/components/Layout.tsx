import Link from 'next/link';
import SearchForm from './nav/SearchForm';

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};
export default Layout;
