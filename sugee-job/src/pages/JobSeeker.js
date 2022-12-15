import React from "react";
import Category from "../components/category/Category";
import Hero from "../components/home/Hero";
import Partner from "../components/home/Partner";
import Profile from "../components/home/Profile";
import Step from "../components/home/Step";
import LatestJob from "../components/latestjobs/LatestJob";

const JobSeeker = () => {
    return (
        <div>
          <Hero />
          <LatestJob />
          <Step />
          <Category />
          <Profile />
          <Partner />
        </div>
    );
}

export default JobSeeker;