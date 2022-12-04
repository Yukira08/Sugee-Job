import React from "react";
import './heroes.css';

const Heroes = () => {
  return (
    <div class="hero">
      <div class="container-fluid px-3">
        <div class="row d-flex justify-content-center align-items-center">
            
            <h1 class="centered text-white text-center bold mt-5">Recruit The Best Foreigner.<p> Fast.</p></h1>
      <p class="center-paragraph text-white text-center bold">Ends the tiring process you faced in selecting candidate for your company.
        We help you find the best candidate to join your wonderful journey.</p>         
         
        <button class=" hero-button centered-button rounded p-2 px-4 text-center bold ">Hire Now</button>  

        </div>
      </div>
    </div>
     
  );
};

export default Heroes;
