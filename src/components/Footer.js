import React from "react";
import ButtonMailto from "./MailTo";

const Footer = () => {
  return (
    <footer class="page-footer font-small unique-color-dark">
      <div>
        <div class="container"></div>
      </div>

      <div
        class="container text-center text-md-left mt-5"
      >
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">Crypto Tracker</h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
            <p>
              Crypto Tracker is a cryptocurrency price-tracking website that allows
              you to monitor the price of any cryptocurrency with accurate data
              and real-time updates.
            </p>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">
              Creaters {<sub><span style={{color:"Green"}}>( Team ) </span></sub>}
            </h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
            <p>
              <a href="https://instagram.com/arshpreet_singh002?igshid=MzMyNGUyNmU2YQ==">Arshpreet Singh</a>
            </p>
            <p>
              <a href="https://instagram.com/bhavdeepsingh38?igshid=MzMyNGUyNmU2YQ==">Bhavdeep Singh</a>
            </p>
            <p>
            <a href="https://instagram.com/inderjeetsingh3115?igshid=MzMyNGUyNmU2YQ==">Inderjeet Singh</a>
            </p>
            <p>
              <a href="https://instagram.com/jasmeets.22?igshid=MzMyNGUyNmU2YQ==">Jasmeet Singh</a>
            </p>{" "}
            
          </div>

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase font-weight-bold">Information</h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
            <p>
              <i class="fas fa-home mr-3 fa fa-location"></i> Guru Tegh Bahadur Institute of Technology , Delhi
            </p>
            <ButtonMailto
              label={
                <i class="fa fa-envelope mr-3 pb-3"> Mail Us</i>
              }
              mailto="mailto:jasmeetsingh2872@gmail.com"
            />

            <p>
              <i class="fa fa-phone mr-3 "></i> 9205272270
            </p>
            <p>
              <i class="fa fa-phone mr-3"></i> 9318366406
            </p>
          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold pb-3">
              Connect With Us{" "}
            </h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />

            <a
              class="fb-ic "
              href="#!"
            >
              <i class="fa fa-facebook px-5 fa-lg white-text mr-md-5 mr-3 fa-2x">
                {" "}
              </i>
            </a>
            <a class="tw-ic" href="#!">
              <i class="fa fa-twitter pt-5 px-5 fa-lg white-text mr-md-5 mr-3 fa-2x">
                {" "}
              </i>
            </a>
            <a class="ins-ic" href="#!">
              <i class="fa fa-instagram pt-5 px-5 fa-lg white-text mr-md-5 mr-3 fa-2x">
                {" "}
              </i>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-copyright text-center py-3">
        © 2023 Copyright:
        <a href="#!"> Crypto Tracker</a>
      </div>
    </footer>
  ); 
};

export default Footer;