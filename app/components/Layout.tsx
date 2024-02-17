import React, { ReactNode } from 'react';
import SearchForm from './SearchForm';
import JobList from './JobList';

interface LayoutProps {
  children: ReactNode;
}
interface JobListProps {
  jobs: Job[];
}

const Layout = ({ children }: LayoutProps) => {
  const jobs = [
    {
      title: 'Junior Developer',
      location: 'New York',
      company: 'Google',
    },
    {
      title: 'Junior Developer',
      location: 'New York',
      company: 'Google',
    },
    {
      title: 'Junior Developer',
      location: 'New York',
      company: 'Google',
    },
  ];
  
  return (
    <>
      <main>{children}</main>
      <SearchForm />
      <JobList jobs={jobs}/>
      <footer></footer>
    </>
  );
};
export default Layout;
