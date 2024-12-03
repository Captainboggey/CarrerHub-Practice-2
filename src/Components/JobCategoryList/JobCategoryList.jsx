import React, { useEffect, useState } from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';

const JobCategoryList = () => {
    const [jobCategory,setJobCategory]=useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setJobCategory(data))
    },[])
    return (
        <div>
            <h1 className='text-center'>Job Category List</h1>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-4'>
                {
                    jobCategory.map(job=><CategoryCard key={job.id} job={job}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default JobCategoryList;