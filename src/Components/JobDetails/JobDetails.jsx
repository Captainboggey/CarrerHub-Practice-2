import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CiDollar } from "react-icons/ci";
import { IoFileTrayFull } from "react-icons/io5";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setAppliedJob } from '../../Utility/Utility';

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id}= useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job=> job.id === idInt)

    const handleApplyBtn = ()=>{
        setAppliedJob(idInt)
        toast('You have Applied Successfully')
    }

    console.log( job)
    return (
        <div>
            <h1>This is Job Details</h1>
            {/* divs */}
            <div className='flex px-32 mb-10'>
                {/* job description */}
                <div className='p-20'>
                    <p><span className='text-bold'>Job Description:</span> {job.job_description}</p>
                    <p><span className='text-bold'>Job Responsibility:</span> {job.job_responsibility}</p>
                    <p><span className='text-bold'>Educational Requirement:</span> {job.educational_requirements}</p>
                    <p><span className='text-bold'>Experience:</span> {job.experiences}</p>

                </div>
                {/* job details */}
                <div className='py-8 space-y-3 px-16 bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] rounded-lg'>
                    <h1>Job Details</h1>
                    <hr />
                    <br />
                    <p className='flex items-center gap-2'><CiDollar />Salary:{job.salary}</p>
                    <p className='flex  gap-2'><IoFileTrayFull />Job Title:{job.job_title}</p>
                    <h1>Contact Information</h1>
                    <br />
                    <hr />
                    <br />
                    <p className='flex items-center gap-2'><MdOutlinePhoneEnabled />Phone:{job.contact_information.phone}</p>
                    <p className='flex items-center gap-2'><MdMarkEmailUnread />Email:{job.contact_information.email}</p>
                    <p className='flex items-center gap-2'><IoLocationSharp className='text-3xl' />Address:{job.contact_information.address}</p>
                    <button onClick={handleApplyBtn} className='w-full btn btn-primary bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] rounded-lg'>Apply Now</button>

                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default JobDetails;