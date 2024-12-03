import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getAppliedJob } from '../../Utility/Utility';
import { list } from 'postcss';
import AppliedJobCart from '../AppliedJobCart/AppliedJobCart';

const AppliedJob = () => {
   const loadJobs = useLoaderData();
   const [jobs,setJobs] =useState([]);
    useEffect(()=>{
        const getData = getAppliedJob();
        if(loadJobs.length>0){

            const jobArray = [];
            
            for(const id of getData){
                const foundJob = loadJobs.find(job=> job.id===id)
                if(foundJob){
                    jobArray.push(foundJob)
                    setJobs(jobArray)
                }
            }
        }
        
    },[])     
  
    
    return (
        <div>
             {
                jobs.map(job=><AppliedJobCart key={job.id} job={job}></AppliedJobCart>)
             }
        </div>
    );

};

export default AppliedJob;