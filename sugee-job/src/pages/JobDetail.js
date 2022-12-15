import React, { useState } from "react";
import { useParams } from "react-router-dom";

import data from "../constants/data";
import JobDescription from "../components/jobs/JobDescription";
import JobRequirement from "../components/jobs/JobRequirement";
import JobDetailHeader from "../components/jobs/JobDetailHeader";
import JobWrapper from "../components/jobs/JobWrapper";
import SimilarJob from "../components/jobs/SimilarJob";

const JobDetail = () => {
  const params = useParams();
  const { jobId } = params;
  const job = data.jobs.find((thisJob) => thisJob.id === jobId);
  return (
    <div className="job-detail mt-5">
      <JobDetailHeader loadedJob={job} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <JobDescription loadedJob={job} />
          </div>
          <div className="col-lg-4">
            <JobRequirement loadedJob={job} />
          </div>
        </div>
      </div>
      <JobWrapper loadedJob={job}/>
      <SimilarJob/>
    </div>
  );
};

export default JobDetail;
