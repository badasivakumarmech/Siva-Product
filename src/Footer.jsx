import logo from "../src/All Images/pab bottom-logo (1).jpg";
import "./Home1.css";

function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="container p-1 mx-1">
          <div
            class="row pb-4 
                    
                    "
            style={{ borderBottom: " 1px solid white" }}
          >
            <div class="col-lg-3 col-md-6 text-white">
              <img src={logo} alt="img" class="img-fluid w-50 footer-img" />
              <p class="para1 my-2">
                We provide a direct access to the walk-in apportunities
                available on the site. result can be filterred on work
                experience. venue, from location, employer type, and data range.
              </p>
              <p class="mt-5">Toll Fre Number:</p>
              <i class="fa-solid fa-phone"></i>
              <span class="mx-2">1800 833 9448</span>
            </div>
            <div class="col-lg-3 col-md-6 text-white">
              <h3 class="mt-4 my-3">For Candidates</h3>
              <div class="my-2">
                <i class="fa-solid fa-angle-right"></i>
                <span>Candidate Profile</span>
              </div>
              <div class="my-2">
                <i class="fa-solid fa-angle-right"></i> <span>My Resume</span>
              </div>
              <div class="my-2">
                <i class="fa-solid fa-angle-right"></i>{" "}
                <span>Applied Jobs</span>
              </div>
              <div class="my-2">
                <i class="fa-solid fa-angle-right"></i> <span>Job Alert</span>
              </div>
              <div class="my-2">
                <i class="fa-solid fa-angle-right"></i>
                <span>Change Password</span>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-white">
              <h3 class="mt-4 my-3">Jobs</h3>
              <div class="my-2">
                <i class="fa-solid fa-angle-right"></i> <span>All Jobs</span>
              </div>
              <div class="my-2">
                <i class="fa-solid fa-angle-right"></i>{" "}
                <span>Company Jobs</span>
              </div>
              <div class="my-2">
                <i class="fa-solid fa-angle-right"></i>{" "}
                <span>Category Jobs</span>
              </div>
              <div class="my-2">
                <i class="fa-solid fa-angle-right"></i>
                <span>Locational Jobs</span>
              </div>
              <div class="my-2">
                <i class="fa-solid fa-angle-right"></i>
                <span>Destignation Jobs</span>
              </div>
              <div class="my-2">
                <i class="fa-solid fa-angle-right"></i> <span>Skill Jobs</span>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-white">
              <h3 class="mt-4 my-3">Browse Jobs</h3>
              <div class="my-2">
                <i class="fa-solid fa-angle-right"></i> <span>Companies</span>
              </div>
              <div class="my-2">
                <i class="fa-solid fa-angle-right"></i> <span>Browse Jobs</span>
              </div>
              <div class="my-2">
                <i class="fa-solid fa-angle-right"></i> <span>Jobs</span>
              </div>
              <h3 class="mt-4 my-3">Information</h3>
              <div class="my-2">
                <i class="fa-solid fa-angle-right"></i>
                <span>Terms & Conditions</span>
              </div>
              <div class="my-2">
                <i class="fa-solid fa-angle-right"></i>
                <span>Privacy Policy</span>
              </div>
              <div class="my-2">
                <i class="fa-solid fa-angle-right"></i> <span>Fraud Alert</span>
              </div>
            </div>
          </div>
          <div class="row mt-4 privacy-item">
            <div class="col-lg-4 col-md-4 text-white p-1">
              <p>
                All rigths reserved <i class="fa-solid fa-copyright"></i> 2022
                PABjobs
              </p>
            </div>
            <div class="col-lg-4 col-md-4 p-1">
              <p class="desi">
                Designed by
                <a href="https://www.perfextechnologies.com/" class="Prefer">
                  @PerfexTechnologies
                </a>
              </p>
            </div>
            <div class="col-lg-4 col-md-4 text-white">
              <i class="fa-brands fa-linkedin socail p-2 mx-3"></i>
              <i class="fa-brands fa-instagram socail p-2 mx-3"></i>
              <i class="fa-brands fa-facebook socail p-2 mx-3"></i>
              <i class="fa-brands fa-twitter socail p-2 mx-3"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
