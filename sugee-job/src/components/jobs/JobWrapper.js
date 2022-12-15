import React from "react";

import {RiBookmarkLine} from "react-icons/ri";

import "./JobWrapper.css";
const JobWrapper = (props) => {
  return (
    <div className="wrapper my-5">
      <div className="container">
        <div className="d-flex justify-content-between">
          <h1>{props.loadedJob.title}</h1>
          <div>
            <button className="bookmark"> <RiBookmarkLine/> Bookmark</button>
            <button className="apply">Apply Now</button>
          </div>
        </div>
        <p className="mt-3">{props.loadedJob.location}</p>
        <p className="mt-5 text-uppercase text-danger">Apply Before: {props.loadedJob.deadline}</p>
      </div>
    </div>
  );
};

export default JobWrapper;
