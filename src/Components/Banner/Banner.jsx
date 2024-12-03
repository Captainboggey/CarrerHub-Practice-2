import React from "react";
import bannerImg from '../../assets/images/user.png'

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImg}
            className="max-w-sm rounded-lg "
          />
          <div>
            <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <br /> <span className=" text-[#7E90FE]">Dream Job</span></h1>
            <p className="py-6">
            Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.
            </p>
            <button className="btn btn-primary border-none py-4 px-7 text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
