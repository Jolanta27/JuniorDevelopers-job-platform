import React from 'react';

type JobListProps = {
  //TO do type this better
  jobs: any[];
};
const JobList = ({ jobs }: JobListProps) => {
  return (
    <div>
      {jobs?.map((job, index) => (
        <div key={index}>
          <h2>{job.title}</h2>
          <p>{job.location}</p>
          <p>{job.company}</p>
        </div>
      ))}
    </div>
  );
};
export default JobList;
