import React from "react";

const Step = () => {
  return (
       <div class="container pt-5">
        <p class="text-center text-primary bold">How SUGEE Works works?</p>
        <h2 class="text-center text-dark bold">Small steps to build your greatest team, ever!</h2>
      <h1 class="text-center">Set Up Profile. Apply. Sign. Work.</h1>
      <div class="row">
      <div class="col-lg-3">
          <div class="text-center">
            <h3 class="mb-3">Set Up Profile</h3>
            <div><img src={require("../../assets/Image1.png")} /></div>
            <h2 class="text-left text-primary bold">#1</h2>
            <h2 class="text-left text-dark bold">Post your job ad.</h2>

            <p class="text-muted">Post your job ad, fill up the required form. And then just sit back and wait for SUGEE Works team contact you.</p>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="text-center">
            <h3 class="mb-3">Set Up Profile</h3>
            <div><img src={require("../../assets/Image2.png")} /></div>
            <h2 class="text-left text-primary bold">#2</h2>
            <h2 class="text-left text-dark bold">Relax and Let us do the job.</h2>


            <p class="text-muted">We will screen, interview and handpick the most suitable candidate, for you.</p>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="text-center">
            <h3 class="mb-3">Apply</h3>
            <div><img src={require("../../assets/Image3.png")} /></div>
            <h2 class="text-left text-primary bold">#3</h2>
            <h2 class="text-left text-dark bold">Interview your candidate.</h2>

            <p class="text-muted">Have your candidate interview with you, see if the candidates is the best for you.</p>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="text-center">
            <h3 class="mb-3">Work</h3>
            <div><img src={require("../../assets/Image4.png")} /></div>
            <h2 class="text-left text-primary bold">#4</h2>
            <h2 class="text-left text-dark bold">Talent Onboard</h2>

            <p class="text-muted">Welcome your new team, and start building your greatest product, ever!</p>
          </div>
        </div>
      </div>
    </div>
     
  );
};

export default Step;
