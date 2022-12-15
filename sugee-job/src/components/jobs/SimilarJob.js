import React from "react";

import data from "../../constants/data";
import LatestJobItem from "../latestjobs/LatestJobItem";
import LatestJobList from "../latestjobs/LatestJobList";

import "./SimilarJob.css";
const SimilarJob = () => {
  return (
    <div className="container similar-job">
      <h2>Similar Job</h2>
      <div className="row">
        {data.jobs.map((job) => (
          <div className="col-lg-4">
            <LatestJobItem loadedJob={job} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarJob;
