import { GetServerSideProps } from "next";
import { useState, useEffect } from 'react';
import { jobTypes } from "../types/jobTypes";
import { fakeData } from '../app/fakeData';

export const getServerSideProps: GetServerSideProps = async () => {
    try {
    const res = await fetch('http://localhost:3000/api/init'); 
    const data = await res.json();
    console.log(data);

    return {
        props: {
            jobs:data
        },
    };
} catch (error) {
    console.log(error);

    return {
        props: { jobs: [] },
    };
}
};

const JobsPage = () => {
    const [jobs, setJobs] = useState<jobTypes[]>([]);
    const [numJobsToShow, setNumJobsToShow] = useState(4);

    const handleShowMore = () => {
        setNumJobsToShow(numJobsToShow + 4);
    }

    useEffect(() => {
        setJobs(fakeData);
    }, []);

    return (
        <div className="flex flex-col space-y-4 space-x-4 mt-12 max-h-[450px] overflow-auto">
            <h1 className="text-center text-3xl font-bold">Jobs</h1>
            <table>
                <thead>
                    <tr className="text-xl">
                        <th>Position</th>
                        <th>Location</th>
                        <th>Company</th>
                        <th>Salary</th>
                        <th>Description</th>
                        <th>Employment Type</th>        
                    </tr>
                </thead>
                <tbody className="text-center text-xl">
                {jobs.slice(0, numJobsToShow).map(job => (
                <tr key={job.id}>
                    <td className="p-2">{job.title}</td>
                    <td>{job.location}</td>
                    <td>{job.companyName}</td>
                    <td>{job.salary}</td>
                    <td>{job.description}</td>
                    <td>{job.employmentType}</td>
                </tr>
                ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-10">
            <button className="rounded-xl bg-black text-white hover:bg-black/65 transition duration-300 ease-in-out w-1/7 p-4 mb-3"
            onClick={handleShowMore}
            >Show More</button>
            </div>
            </div>
    );
}; 
export default JobsPage;