import React, { Fragment } from "react";

const Partner = () => {
  return (
    <Fragment>
      <div class="container my-5">
        <p class="text-center">
          Jobseekers partnering with SUGEE Works worling at
        </p>
        <div class="row">
          <div class="col-lg-2">
            <img
              src={require("../../assets/partner1.jpg")}
              width="130"
              height="48"
            ></img>
          </div>
          <div class="col-lg-2">
            <img
              src={require("../../assets/partner2.jpg")}
              width="160"
              height="48"
              class="d-inline-block align-text-top"
            ></img>
          </div>
          <div class="col-lg-2">
            <img
              src={require("../../assets/partner3.jpg")}
              width="185"
              height="48"
              class="d-inline-block align-text-top"
            ></img>
          </div>
          <div class="col-lg-4 text-center">
            <img
              src={require("../../assets/partner4.jpg")}
              width="286"
              height="48"
              class="d-inline-block align-text-top"
            ></img>
          </div>
          <div class="col-lg-1">
            <img
              src={require("../../assets/partner5.jpg")}
              width="63"
              height="48"
              class="d-inline-block align-text-top"
            ></img>
          </div>
          <div class="col-lg-1">
            <img
              src={require("../../assets/partner6.jpg")}
              width="96"
              height="48"
              class="d-inline-block align-text-top"
            ></img>
          </div>
        </div>
      </div>
      <div class="cta">
        <div class="container-fluid p-5">
          <div class="text-white">
            <h3>Ready to get a job?</h3>
            <p class="mt-4">Set up your profile with SUGEE Works and find opportunities to start <br/> your career journey with list of the best companies in Japan.</p>
            <button class="btn btn-light mt-4 px-4">Get Started</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Partner;
