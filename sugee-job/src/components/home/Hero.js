import React from "react";
import { BiSearch } from "react-icons/bi";

import "./style.css";
const Hero = () => {
  return (
    <div class="container-fluid">
      <div class="hero">
        {/* <img
        src={require("../../assets/sugee-hero.png")}
        class="w-100"
      ></img> */}
        <div class="row d-flex justify-content-center align-items-center">
            <div class="text-center text-white">
                <h1 class=" mt-5">Places for Foreigner to <br/> Find Job. Fast.</h1>
                <p>Set up your profile. Discover your opportunities. Choose jobs you like.</p>
            </div>
          <div class="col-lg-10 col-md-10">
            <form>
              <div class="search">
                <BiSearch class="search-icon"/>
                <input
                  type="text"
                  class="form-control py-3"
                  placeholder="Find Job Title"
                ></input>
                <button class="btn btn-primary px-5">Find Job</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
