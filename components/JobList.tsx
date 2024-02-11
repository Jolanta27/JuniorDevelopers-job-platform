import React from 'react';

const JobList = ( { jobs }) => {
    return (
        <div>
            {Array.isArray(jobs) && jobs.map((job, index) => (
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