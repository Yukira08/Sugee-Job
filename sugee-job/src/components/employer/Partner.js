import React from "react";

const Partner = () => {
  return (
    <div class="container-fluid mt-5 mb-5">
      <div>
      <p class="text-center bold">They who have been building greatest team with SUGEE Works</p>
        <div class="d-flex justify-content-around">
          <div><img src={require("../../assets/Stripe.png")} /></div>
          <div><img src={require("../../assets/Invision.png")} /></div>
          <div><img src={require("../../assets/Zendesk.png")} /></div>
          <div><img src={require("../../assets/Google.png")} /></div>
          <div><img src={require("../../assets/Rakuten.png")} /></div>
          <div><img src={require("../../assets/Adobe.png")} /></div>
        </div>
      </div>
    </div>
     
  );
};

export default Partner;
