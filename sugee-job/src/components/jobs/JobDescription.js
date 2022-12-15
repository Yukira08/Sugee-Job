import React from "react";

import "./JobDescription.css";

const JobDescription = (props) => {
  return (
    <div className="description">
      <div>
        <h3>Company Overview</h3>
        <p>{props.loadedJob.overview}</p>
      </div>
      <div>
        <h3>Job Description</h3>
        <p>{props.loadedJob.detail}</p>
        <br />
        <p>{props.loadedJob.responsibility[0]}</p>
        {props.loadedJob.responsibility.slice(1).map((res) => (
          <li>{res}</li>
        ))}
      </div>
      <div>
        <h3>Qualifications</h3>
        <p>{props.loadedJob.qualification[0]}</p>
        {props.loadedJob.qualification.slice(1).map((qual) => (
          <li>{qual}</li>
        ))}
      </div>
    </div>
  );
};

export default JobDescription;
