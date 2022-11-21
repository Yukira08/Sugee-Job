import React from "react";
import { FaSearch } from 'react-icons/fa';
import { BsPerson } from "react-icons/bs";
import { TbFileArrowRight } from "react-icons/tb";
import { MdWorkOutline } from "react-icons/md"

const Step = () => {
  return (
    <div class="container my-5">
      <h1 class="text-center">Set Up Profile. Apply. Sign. Work.</h1>
      <div class="row mt-5">
        <div class="col-lg-3">
          <div class="text-center">
            <FaSearch color="#6E5FD2" size={25} class="mb-5"/>
            <h3 class="mb-3">Browse Job</h3>
            <p class="text-muted">From Product, Engineer, Operation, HR, you name it!</p>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="text-center">
            <BsPerson color="#6E5FD2" size={30} class="mb-5"/>
            <h3 class="mb-3">Set Up Profile</h3>
            <p class="text-muted">Set up your profile ans job preference, so we can find you the most suitable job for you, quickyl!</p>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="text-center">
            <TbFileArrowRight color="#6E5FD2" size={30} class="mb-5"/>
            <h3 class="mb-3">Apply</h3>
            <p class="text-muted">Just One click away from getting your dream job!</p>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="text-center">
            <MdWorkOutline color="#6E5FD2" size={30} class="mb-5"/>
            <h3 class="mb-3">Work</h3>
            <p class="text-muted">Yeah, we said it, Only one click away, right?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
