const getAppliedJob = ()=>{
    const appliedJobs = localStorage.getItem('job');
    if(appliedJobs){
        return JSON.parse(appliedJobs);
    }
    return[];
}

const setAppliedJob=(id)=>{
    const appliedJob = getAppliedJob();
    const exist = appliedJob.find(job=>job===id);
    
    if(!exist){
        job.push(id);
        localStorage.setItem('job', JSON.stringify(job))
    }
}
export {getAppliedJob,setAppliedJob}