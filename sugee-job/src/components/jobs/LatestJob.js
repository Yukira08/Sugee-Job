import React, { Fragment } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import useHttp from "../hooks/use-http";
import LatestJobList from "./LatestJobList";
import {MdKeyboardArrowRight} from "react-icons/md"
import "./LatestJob.css";

export async function fetchLatestJob() {
  const response = await fetch(
    "https://react-http-ae93e-default-rtdb.firebaseio.com/latestjobs.json"
  );
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  const responseData = await response.json();

  const loadedResources = [];
  for (const key in responseData) {
    loadedResources.push({
      id: key,
      title: responseData[key].title,
      location: responseData[key].location,
      posted_at: responseData[key].posted,
      employment: responseData[key].employment_type,
      salary: responseData[key].salary,
      description: responseData[key].description,
    });
  }
  return loadedResources;
}

const LatestJob = () => {
  const { sendRequest, status, data: loadedJobs, error } = useHttp(
    fetchLatestJob,
    true
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return <div className="centered">Loading....</div>;
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedJobs || loadedJobs.length === 0)) {
    return <p>No Jobs Found.</p>;
  }

  return (
    <Fragment>
      <LatestJobList latestjobs={loadedJobs} />
      <div class="container latestjob">
        <p class="text-center">
        <Link
          to="/browsejobs"
          class="nav-link text-uppercase"
          aria-current="page"
        >
          <span>Find More Job <MdKeyboardArrowRight /></span> 
        </Link>
          {/* <button class="text-uppercase px-4">Find More Job <MdKeyboardArrowRight /></button> */}
        </p>
      </div>
    </Fragment>
  );
};

export default LatestJob;
