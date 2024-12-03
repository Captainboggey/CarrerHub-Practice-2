import React from 'react';
import Banner from '../Banner/Banner';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import FeaturedJob from '../FeaturedJobs.jsx/FeaturedJob';

const Home = () => {
    return (
        <div>
                <Banner></Banner>
                <JobCategoryList></JobCategoryList>
                <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;