import React from "react";

import { RiBookmarkFill , RiTimerLine,RiMoneyDollarBoxLine, RiBriefcase2Line} from "react-icons/ri";
import {AiTwotoneCalendar} from "react-icons/ai";
import {MdWorkOutline} from "react-icons/md";
import {GiGraduateCap} from "react-icons/gi";
import {TbWorld} from "react-icons/tb";

import "./JobRequirement.css";
const JobRequirement = (props) => {
  return (
    <div className="requirement">
      <div>
        <p className="text-center">
          Application End on <span className="text-danger">3 Days</span>
        </p>
        <button className="apply">Apply Now</button>
        <button className="bookmark">
          <RiBookmarkFill />
        </button>
      </div>
      <div className="info-container my-3">
        <div className="d-flex justify-content-start align-items-center mb-4">
          <AiTwotoneCalendar size={25} color={"#6E5FD2"}/>
          <div className="info">
            <span className="d-block mb-1">Date Posted</span>
            <span>{props.loadedJob.posted_at}</span>
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center mb-3">
          <RiTimerLine size={25} color={"#6E5FD2"}/>
          <div className="info">
            <span className="d-block mb-1">Deadline</span>
            <span>{props.loadedJob.deadline}</span>
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center mb-3">
          <RiMoneyDollarBoxLine size={25} color={"#6E5FD2"}/>
          <div className="info">
            <span className="d-block mb-1">Annual Salary</span>
            <span>{props.loadedJob.salary}</span>
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center mb-3">
          <MdWorkOutline size={25} color={"#6E5FD2"}/>
          <div className="info">
            <span className="d-block mb-1">Work Experience</span>
            <span>{props.loadedJob.experience}</span>
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center mb-3">
          <RiBriefcase2Line size={25} color={"#6E5FD2"}/>
          <div className="info">
            <span className="d-block mb-1">Job Industry</span>
            <span>{props.loadedJob.company}</span>
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center mb-3">
          <GiGraduateCap size={25} color={"#6E5FD2"}/>
          <div className="info">
            <span className="d-block mb-1">Education</span>
            <span>{props.loadedJob.education}</span>
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center mb-3">
          <TbWorld size={25} color={"#6E5FD2"}/>
          <div className="info">
            <span className="d-block mb-1">English Skill Level Required</span>
            <span>{props.loadedJob.english}</span>
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center mb-3">
          <TbWorld size={25} color={"#6E5FD2"}/>
          <div className="info">
            <span className="d-block mb-1">Japanese Skill Level Required</span>
            <span>{props.loadedJob.japanese}</span>
          </div>
        </div>
      </div>
      <div className="skill-container">
        <h6>Skills Required</h6>
        <div className="d-flex flex-wrap justify-content-start">
          {props.loadedJob.skills.map(skill => (
            <span>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobRequirement;
