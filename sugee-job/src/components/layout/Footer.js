import React from "react";

const Footer = () => {
  return (
    <footer class="w-100">
      <div class="py-4 flex-shrink-0 bg-light">
        <div class="container-fluid my-2">
          <div class="row">
            <div class="col-lg-4 col-md-6 px-5">
              <img
                src={require("../../assets/sugee-logo.png")}
                width="130"
                height="32"
              ></img>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="mb-4">Discover</h5>
              <ul class="list-unstyled text-muted">
                <li class="mb-2">Hiring Process</li>
                <li class="mb-2">FAQ</li>
                <li class="mb-2">Post a Job</li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="mb-4">Company</h5>
              <ul class="list-unstyled text-muted">
                <li class="mb-2">About Company</li>
                <li class="mb-2">Contacts</li>
                <li class="mb-2">Terms and Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6">
              <h5 class="mb-4">Newsletter</h5>
              <p class="text-muted">
                Get notified everytime there's a job available for you!
              </p>
              <form class="row g-2">
                <div class="col-auto">
                  <input
                    type="text"
                    class="form-control"
                    id="inputemail"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary mx-3">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid bg-primary">
        <div class="row">
          <div class="col-lg-8 col-md-6 my-2 px-5 py-3">
            <p class="text-white p-0 m-0">SUGEE All Rights Reserved. © 2021</p>
          </div>
          <div class="col-lg-4 col-md-6 my-2 py-3">
            <ul class="list-group list-group-horizontal-lg text-white list-unstyled">
                <li class="mx-3">Instagram</li>
                <li class="mx-3">Twitter</li>
                <li class="mx-3">Facebook</li>

            </ul>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
