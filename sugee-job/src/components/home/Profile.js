import React from "react";
import { MdWorkOutline } from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi";
import { BsGlobe, BsPerson } from "react-icons/bs";
import { BiNetworkChart } from "react-icons/bi";


import "./style.css";
const Profile = () => {
  return (
    <div class="container my-5 profile p-5">
      <div class="text-center">
        <p class="text-uppercase">
          <strong>What is sugee?</strong>
        </p>
        <h2>More than just hiring platform</h2>
        <p class="text-muted my-3">
          Quickly remove all barriers to make you ready doing business in
          Kansai, seamlessly
        </p>
      </div>
      <div class="row mt-5 mb-4">
        <div class="col-lg-4">
          <div>
            <a class="profile-active"><MdWorkOutline size={25} class="text-center"/></a>
            
            <span class="mx-4">Business Setup</span>
          </div>
        </div>
        <div class="col-lg-4">
          <div>
            <HiOutlineBookOpen size={25} color="#6E5FD2" />
            <span class="mx-4 text-muted">SUGEE Magazine</span>
          </div>
        </div>
        <div class="col-lg-4">
          <div>
            <BsGlobe size={25} color="#6E5FD2" />
            <span class="mx-4 text-muted">SUGEE Translation</span>
          </div>
        </div>
      </div>
      <hr></hr>
      <div class="row">
        <div class="col-lg-6 px-4">
          <h4 class="mb-3">
            Setting up your business in a <br />
            minutes.
          </h4>
          <p class="mb-3">
            SUGEE will help you set up your business in Japan, from legal,
            insight, consulting, and many more.
          </p>
          <button class="text-uppercase btn btn-primary px-4">
            Learn More
          </button>
        </div>
        <div class="col-lg-6 px-4">
          <div class="row bg-white rounded p-4 mb-3">
            <div class="col-lg-2">
              <BsGlobe size={25} color="#6E5FD2" />
            </div>
            <div class="col-lg-10">
                <h5>Global Start-up Ecosystem</h5>
                <p>We are connected with global start-ups and incubators in Asia Pacific (Japan, Indonesia, Phillipines, etc).</p>
            </div>    
          </div>
          <div class="row bg-white rounded p-4 mb-3">
            <div class="col-lg-2">
              <BsPerson size={25} color="#6E5FD2" />
            </div>
            <div class="col-lg-10">
                <h5>Network with Digital Talents Ecosystem</h5>
                <p>We have our own remote working platform, e-learning platform, and digital communities that hepls you well connected.</p>
            </div>    
          </div>
          <div class="row bg-white rounded p-4 mb-3">
            <div class="col-lg-2">
              <BiNetworkChart size={25} color="#6E5FD2" />
            </div>
            <div class="col-lg-10">
                <h5>Integrated Service</h5>
                <p>We have other services for foreign talents live in Japan such as: SUGEE Business Set-up & Translation.</p>
            </div>    
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Profile;
