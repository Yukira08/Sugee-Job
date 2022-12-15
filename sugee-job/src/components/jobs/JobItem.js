import React from "react";
import { Link } from 'react-router-dom';


import { BsClockFill } from "react-icons/bs";
import { RiBookmarkFill } from "react-icons/ri";
import {MdKeyboardArrowRight} from "react-icons/md";
import "./JobItem.css";
const JobItem = (props) => {
  return (
    <div className=" mt-3 job-item">
      <div className="card">
        <div className="card-body  ">
          <div className="d-flex justify-content-between">
            <div>
              <h5 class="card-title">{props.title}</h5>
              <p>{props.location}</p>
            </div>
            <p>
              <BsClockFill /> Posted {props.posted} ago
            </p>
          </div>
          <div className="col-lg-9">
            <div className="d-flex justify-content-between">
              <div>
                <h6 class="text-uppercase">Employment Type</h6>
                <span class="employment py-2 px-3">{props.employment}</span>
              </div>
              <div>
                <h6 class="text-uppercase">Annual Salary</h6>
                <span class="salary py-2 px-3">{props.salary}</span>
              </div>
              <div>
                <h6 class="text-uppercase">Skills Required</h6>
                  {props.skills.slice(0,2).map((skill) => (
                    <span class="skill py-2 px-3">{skill}</span>
                  ))}
                <a type="button" className="more-btn text-decoration-none">+ {props.skills.length - 2} More</a>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p>{props.description}</p>
          </div>
          <div>
            <button className="py-2 px-3 bookmark">BookMark <RiBookmarkFill/></button>
            <Link className="btn py-2 px-3 apply" to={`/browsejobs/${props.id}`}>Apply Now <MdKeyboardArrowRight/></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
