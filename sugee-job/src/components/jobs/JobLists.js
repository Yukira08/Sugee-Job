import React from "react";

import data from "../../constants/data";
import JobItem from "./JobItem";
import LatestJobItem from "../latestjobs/LatestJobItem";
const JobLists = () => {
  return (
    <div className="joblists mt-5">
      <div className="d-flex justify-content-between">
        <h3>579 Job Opportunities</h3>
        <div className="sort d-flex">
          <div class="form-group mx-2">
            <select class="form-control" id="sort_data">
              <option>Sort by (Default)</option>
              <option>Sort by (Date)</option>
            </select>
          </div>
          <div class="form-group">
            <select class="form-control" id="sort_data">
              <option>10 Per Page</option>
              <option>15 Per Page</option>
            </select>
          </div>
        </div>
      </div>
        {data.jobs.map((job) => (
          <JobItem
            key={job.id}
            id={job.id}
            title={job.title}
            posted={job.posted}
            location={job.location}
            employment={job.employment}
            salary = {job.salary}
            skills={job.skills}
            description={job.description}
          />
        ))}
    </div>
  );
};

export default JobLists;
