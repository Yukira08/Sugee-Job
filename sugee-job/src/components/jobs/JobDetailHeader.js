import React from "react";

import "./JobDetailHeader.css";
const JobDetailHeader = (props) => {
  return (
    <div className="container">
      <div className="detail-header">
        <h1>{props.loadedJob.title}</h1>
        <p>{props.loadedJob.company}</p>
        <div className="d-flex justify-content-start">
          <div className="location px-2">
            <h6 class="text-uppercase">Location</h6>
            <span>{props.loadedJob.location}</span>
          </div>
          <div className="detail-employment px-2">
            <h6 class="text-uppercase">Employment Type</h6>
            <span>{props.loadedJob.employment}</span>
          </div>
          <div className="detail-salary px-2">
            <h6 class="text-uppercase">Salary</h6>
            <span className="salary px-3 py-2">{props.loadedJob.salary}</span>
          </div>
        </div>
      </div>
      <hr className="my-5"/>
    </div>
  );
};

export default JobDetailHeader;
