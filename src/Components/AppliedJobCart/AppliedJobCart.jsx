import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";

const AppliedJobCart = ({ job }) => {
  const { logo, job_title, company_name, remote_or_onsite, location, salary } =
    job;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={logo}
            alt="logo"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}.</p>
          <div className="flex gap-2">
            <button className="btn bg-transparent border-purple-400 text-white">Remote</button>
            <button className="btn bg-transparent border-purple-400 text-white">Full Time</button>
          </div>
          
          <div className="flex gap-2">
            <div className="flex gap-2 items-center">
            <MdOutlineLocationOn /><p>{location}</p>
            </div>
            <div className="flex gap-2 items-center">
            <BiDollarCircle /> <p>{salary}</p>
            </div>
            
          </div>
          
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobCart;
