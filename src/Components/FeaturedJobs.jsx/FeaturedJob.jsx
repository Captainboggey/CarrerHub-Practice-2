import React, { useEffect, useState } from 'react';
import JobCart from '../JobCart/JobCart';

const FeaturedJob = () => {
    const [jobs,setJobs]= useState([]);
    const [display,setDisplay]=useState(4)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])

    const showAllBtn =()=>{

    }
    return (
        <div>
            <h1 className='text-center '>Featured Jobs</h1>
            <p className='text-center '>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-2'>
            {
                jobs.slice(0,display).map(job=><JobCart key={job.id} job={job}></JobCart>)
            }
            </div>
            <div className={display === jobs.length &&'hidden'}>
                <button onClick={()=> setDisplay(jobs.length)} className='btn btn-primary'>Show All</button>
            </div>

        </div>
    );
};

export default FeaturedJob;