import React from 'react';
import Link from 'next/link';
import {jobType } from "@/types/jobTypes";


type Job = {
    id: string;

}
interface JobCardProps {
    job: Job;
}
const JobCard: React.FC<JobCardProps> = ({ job }) => {

  return (
    <div>
        <Link href={`/job/${job.id}`}>
            <div className='border p-3 rounded-md flex flex-col hover:bg-red-500 transition duration-700 hover:text-white'>
                <div className="bg-red-400">
                    
                </div>
            </div>
        </Link>
    </div>
  )
}

export default JobCard;