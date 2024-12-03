import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const JobCart = ({ job }) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary}=job;
  return (
    <div>
      <div className="card bg-base-100 ">
        <figure>
          <img
            src={logo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body space-y-3">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="flex gap-2">
            <button>Remote</button>
            <button>Full Time</button>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2">
            <MdOutlineLocationOn /><p>{location}</p>
            </div>
            <div className="flex gap-2">
            <BiDollarCircle /> <p>{salary}</p>
            </div>
            
          </div>
          <div className="card-actions ">
            <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCart;
