import React, { ReactNode } from 'react';
import SearchForm from './SearchForm';
import JobList from './JobList';
import JobCard from './ui/JobCard';

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
      <JobCard />
      <footer></footer>
    </>
  );
};
export default Layout;
