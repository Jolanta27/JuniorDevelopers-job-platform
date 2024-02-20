import React from 'react';
import { useState } from 'react';
import JobCard from './ui/JobCard';
import {jobType } from "@/types/jobTypes";

interface JobCardProps {
  job: jobType;
}

type JobListProps = {
  //TO do type this better
  jobs: any[];
};
const JobList = ({ jobs }: JobCardProps) => {
  const [visibleJobs, setVisibleJobs] = useState(8);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  return (
    <>
    <div className='w-full'>
      <h1 className='text-3xl text-center bold mt-10 pt-10 font-bold'>Job Listing</h1>   
    </div>
    {filteredJobs.length < 1 ? (
      <div className="w-full text-center">
        <h1 className='text-2xl'>No Jobs Found</h1>
        <span className='text-sm'>Check back later</span>
      </div>
    ) : (
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 w-[90%] mx-auto max-w-[1400px]">
        {filteredJobs.slice(0, visibleJobs).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    )}
    {filteredJobs.length > visibleJobs && (
      <div className="text-center mt-10 text-sm">
        <button onClick={handleShowMore}>Show more</button>
      </div> 
    )}
    </>
  );
};
export default JobList;
