import React from "react";

import { BsClockFill } from "react-icons/bs";
import "./LatestJobItem.css";

const LatestJobItem = (props) => {
  return (
    <div class="container-fluid mb-5 d-flex align-items-stretch">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.location}</p>

          <p class="card-text">
            <BsClockFill />
            <span> Posted {props.posted_at} Hours ago</span> 
          </p>

          <div class="row mb-4">
            <div class="col-4 col-lg-5 col-md-5">
              <h6 class="text-uppercase mb-4">Job Type</h6>
              <span class="employment py-2 px-3">{props.employment}</span>
            </div>
            <div class="col-5 col-lg-6 col-md-6">
              <h6 class="text-uppercase mb-4">Annual Salary</h6>
              <span class="salary py-2 px-3">{props.salary}</span>
            </div>
          </div>
          <p class="card-text mb-5">
            {props.description} <a href="#">Read More</a>
          </p>
          <a href="#" class="btn btn-primary w-100 p-2">
            APPLY NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default LatestJobItem;
// <li class="list-unstyled">
//   <p>{props.title}</p>
//   <p>{props.location}</p>
//   <p>{props.posted_at}</p>
//   <p>{props.employment}</p>
//   <p>{props.salary}</p>
//   <p>{props.description}</p>
// </li>
