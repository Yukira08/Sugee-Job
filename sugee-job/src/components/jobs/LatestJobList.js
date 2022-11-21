import React, { Fragment } from "react";
import LatestJobItem from "./LatestJobItem";

import "./LatestJobList.css";

const LatestJobList = (props) => {
  return (
    <Fragment>
      <div class="container px-3 m-5">
        <h2>Latest Jobs</h2>
      </div>
      <ul class="list-unstyled cards mx-5">
        {props.latestjobs.map((latestjob) => (
          <LatestJobItem
            key={latestjob.id}
            id={latestjob.id}
            title={latestjob.title}
            location={latestjob.location}
            posted_at={latestjob.posted_at}
            employment={latestjob.employment}
            salary={latestjob.salary}
            description={latestjob.description}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default LatestJobList;
