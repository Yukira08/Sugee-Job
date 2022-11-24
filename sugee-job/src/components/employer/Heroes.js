import React from "react";
import './heroes.css';



const Heroes = () => {
  return (
    <div class="container-fluid">
      <img src={require("../../assets/cover.png")} class="cover" width="100%" height="auto"/>
      <h1 class="centered text-white text-center bold">Recruit The Best Foreigner.<p> Fast.</p></h1>
      <p class="center-paragraph text-white text-center bold">Ends the tiring process you faced in selecting candidate for your company.
We help you find the best candidate to join your wonderful journey.</p>
<button class="centered-button rounded p-2 px-4 text-center bold">Hire Now</button>  
    </div>
     
  );
};

export default Heroes;
