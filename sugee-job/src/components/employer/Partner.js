import React from "react";

const Partner = () => {
  return (       
          <div class="container my-5 ">
          <p class="text-center">
          They who have been building greatest team with SUGEE Works
          </p>
          <div class="row g-3">
            <div class="col-lg-2 text-center">
              <img
                src={require("../../assets/Stripe.png")}
                width="74.4"
                height="32"
              ></img>
            </div>
            <div class="col-lg-2 text-center">
              <img
                src={require("../../assets/Invision.png")}
                width="95.06"
                height="32"
                class="d-inline-block align-text-top"
              ></img>
            </div>
            <div class="col-lg-2 text-center">
              <img
                src={require("../../assets/Zendesk.png")}
                width="165.11"
                height="32"
                class="d-inline-block align-text-top"
              ></img>
            </div>
            <div class="col-lg-2 text-center">
              <img
                src={require("../../assets/Google.png")}
                width="96"
                height="32"
                class="d-inline-block align-text-top"
              ></img>
            </div>
            <div class="col-lg-2 text-center">
              <img
                src={require("../../assets/Rakuten.png")}
                width="105.6"
                height="32"
                class="d-inline-block align-text-top"
              ></img>
            </div>
            <div class="col-lg-2 text-center">
              <img
                src={require("../../assets/Adobe.png")}
                width="133.75"
                height="32"
                class="d-inline-block align-text-top"
              ></img>
            </div>
          </div>
        </div>
     
  );
};

export default Partner;
