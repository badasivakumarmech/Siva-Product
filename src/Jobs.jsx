import React from "react";
// import { Route } from "react-router-dom";
// import Header from "./Header";
import Footer from "./Footer";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import { Link } from "react-router-dom";
import "./home.css";
import "./BrowserJobs.css";
import "./Jobs.css";
import ch1 from "../src/Registration Page/Registrationpage Task-1/home10/jobImages/charminar (1).png";
import ch2 from "../src/Registration Page/Registrationpage Task-1/home10/jobImages/gateway-of-india.png";
import ch3 from "../src/Registration Page/Registrationpage Task-1/home10/jobImages/chennai-central-railway-station.png";
import ch4 from "../src/Registration Page/Registrationpage Task-1/home10/jobImages/surat-municipal-corporation.png";
import ch5 from "../src/Registration Page/Registrationpage Task-1/home10/jobImages/vidhana-soudha.png";
import ch6 from "../src/Registration Page/Registrationpage Task-1/home10/jobImages/gateway-of-india.png";
import m1 from "../src/Registration Page/Registrationpage Task-1/home10/jobImages/harman.jpg";
import m2 from "../src/Registration Page/Registrationpage Task-1/home10/jobImages/genpact.jpg";
import m3 from "../src/Registration Page/Registrationpage Task-1/home10/jobImages/tcs.jpg";
import m4 from "../src/Registration Page/Registrationpage Task-1/home10/jobImages/abb.jpg";
import m5 from "../src/Registration Page/Registrationpage Task-1/home10/jobImages/cognizanr.jpg";
import m6 from "../src/Registration Page/Registrationpage Task-1/home10/jobImages/harman.jpg";
import m7 from "../src/Registration Page/Registrationpage Task-1/home10/jobImages/genpact.jpg";
import m8 from "../src/Registration Page/Registrationpage Task-1/home10/jobImages/tcs.jpg";
import m9 from "../src/Registration Page/Registrationpage Task-1/home10/jobImages/abb.jpg";
import m10 from "../src/Registration Page/Registrationpage Task-1/home10/jobImages/cognizanr.jpg";
import m11 from "../src/Registration Page/Registrationpage Task-1/home10/jobImages/genpact.jpg";
import m12 from "../src/Registration Page/Registrationpage Task-1/home10/jobImages/tcs.jpg";
import m13 from "../src/Registration Page/Registrationpage Task-1/home10/jobImages/abb.jpg";
import m14 from "../src/Registration Page/Registrationpage Task-1/home10/jobImages/cognizanr.jpg";

function Jobs() {
  return (
    <div className="">
      <nav class="navbar navbar-expand-sm">
        <div class="container">
          <img src={logo} alt="logo" width="200px" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
            style={{ backgroundcolor: "black" }}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav logostyle">
              <li class="nav-item">
                <a class="nav-link navstyle " href="/Home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link dropdown-toggle navstyle"
                  href="/BrowserJobs"
                >
                  Browse Jobs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link dropdown-toggle navstyle1" href=" ">
                  Jobs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link dropdown-toggle navstyle" href="#">
                  services
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link dropdown-toggle navstyle"
                  href="/PaymentMethod"
                >
                  payments
                </a>
              </li>
              <li class="nav-item logosymbol">
                <i class="fa-solid fa-bell bellicon11 mx-2"></i>
              </li>
              <li class="nav-item logosymbol">
                <Link to="/ProfileCode">
                  {" "}
                  <a href="">
                    {" "}
                    <i class=" fa-sharp fa-solid fa-circle-user dropdown-toggle bellicon11"></i>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div class="container8">
        <div class="row">
          <div class="col-12">
            <h6 class="homepara1 mt-4">
              Home <i class="fa-solid fa-greater-than"></i>Jobs
            </h6>
          </div>
          <div class="col-12 homebutton">
            <button class=" subhomebutton shadow w-25">
              <i class="fa-solid fa-magnifying-glass p-3 "></i>job Title or
              company<i class="fa-solid fa-sort-down p-3 "></i>
            </button>
            <button class=" subhomebutton shadow w-25">
              <i class="fa-solid fa-location-dot p-3"></i>city,province or
              Region<i class="fa-solid fa-sort-down p-3 "></i>
            </button>
          </div>
          <div class="homebutton1">
            <button class="subbutton1">Search</button>
          </div>
        </div>
      </div> */}

      <div class="container8">
        <div class="row">
          <div class="col-12">
            <h6 class="homepara1 mt-4">
              Home <i class="fa-solid fa-greater-than"></i>Jobs
            </h6>
          </div>
          <div class="col-12 homebutton">
            <div class="text-center align-items-center justify-content-center d-flex row m-2">
              <div class="d-flex p-1 align-items-center seacrhMainContainer m-2 col-md-4">
                <div class="">
                  <i class="fa-solid fa-magnifying-glass p-2"></i>
                  <input
                    type="text"
                    placeholder="Job title skills or company"
                    class=" p-1 searchBox "
                    style={{ fontWeight: "bold" }}
                  />
                </div>
                <div>
                  <i class="fa-solid fa-sort-down p-2 "></i>
                </div>
              </div>
              <div class="d-flex p-1 align-items-center seacrhMainContainer m-2 col-md-4">
                <div class="">
                  <i class="fa-solid fa-location-dot p-3"></i>
                  <input
                    type="text"
                    placeholder="City, Province or region "
                    class=" p-1 searchBox "
                    style={{ fontWeight: "bold" }}
                  />
                </div>
                <div>
                  <i class="fa-solid fa-sort-down p-2 "></i>
                </div>
              </div>
            </div>
          </div>
          <div class="homebutton1 mb-3">
            <button class="subbutton1">Search</button>
          </div>
        </div>
      </div>
      {/* //Container3 */}

      <div class="thirdContainer row p-4">
        <div class=" col-12 row parent-container1">
          <div className="col-12 col-md-1"></div>
          <div class="fixed-container d-flex flex-column p-3 col-12 col-md-3 categoryBtnContainer">
            <button class=" categoryButton m-1 ">All Jobs</button>
            <Link to="/JobLocationDetails">
              <button class="categoryBtn m-1"> Jobs By location</button>
            </Link>
            <Link to="/JobCompanyDetails">
              {" "}
              <button class="categoryBtn m-1"> Jobs By Company</button>{" "}
            </Link>
            <Link to="/JobCategoryDetails">
              {" "}
              <button class="categoryBtn m-1"> Jobs By Category</button>
            </Link>
            <Link to="/JobDesignationDetails">
              {" "}
              <button class="categoryBtn m-1"> Jobs By Designation</button>
            </Link>
            <Link to="/JobSkillsDetails">
              {" "}
              <button class="categoryBtn m-1"> Jobs By Skills</button>
            </Link>
          </div>

          <div class="col-md-8 p-4 allJobsContainer">
            <div class="row  mt-3">
              <div class="">
                <h6 class="indus">Jobs By Locations</h6>
              </div>
              <div class="row">
                <div class="col-md p-1 m-1">
                  {/* <!-- <button class="indBtn w-100 p-2 m-1"> ABAP Consultant</button> --> */}
                  <button class="locationBtn  w-100 p-1 m-1">
                    {" "}
                    <img src={ch1} class="w-25 " alt="" /> Hyderabad
                  </button>
                </div>
                <div class="col-md p-1 m-1 ">
                  <button class="locationBtn locationBtn  w-100 p-1 m-1 ">
                    {" "}
                    <img src={ch2} class="w-25 " alt="" />
                    Mumbai
                  </button>
                </div>
                <div class="col-md p-1 m-1">
                  <button class="locationBtn locationBtn  w-100 p-1 m-1 ">
                    {" "}
                    <img src={ch3} class="w-25 " alt="" />
                    Chennai
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-md p-1 m-1">
                  <button class="locationBtn locationBtn  w-100 p-1 m-1 ">
                    {" "}
                    <img src={ch4} class="w-25 " alt="" />
                    Pune
                  </button>
                </div>
                <div class="col-md p-1 m-1">
                  <button class="locationBtn locationBtn  w-100 p-1 m-1 ">
                    {" "}
                    <img src={ch5} class="w-25 " alt="" /> Bengaluru
                  </button>
                </div>
                <div class="col-md p-1 m-1">
                  <button class="locationBtn locationBtn  w-100 p-1 m-1 ">
                    {" "}
                    <img src={ch6} class="w-25 " alt="" /> Delhi
                  </button>
                </div>
              </div>
              <div class="row  m-2">
                <div class="col-8"></div>
                <div class="col-4 ">
                  <a href="#" class="textContent">
                    <i class="fa-solid fa-arrow-right-long"></i> View All
                    locations
                  </a>
                </div>
              </div>
            </div>
            <hr />
            <section>
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="d-flex flex-column">
                      <div>
                        <h3 class="indus">Jobs By Companies</h3>
                      </div>
                      <marquee
                        behavior="scroll"
                        scrollamount="4"
                        direction="left"
                        class="m-2"
                      >
                        <div class="logo">
                          <img src={m1} class="w-50" alt="Company 1" />
                        </div>
                        <div class="logo">
                          <img src={m2} class="w-50" alt="Company 2" />
                        </div>
                        <div class="logo">
                          <img src={m3} class="w-50" alt="Company 3" />
                        </div>
                        <div class="logo">
                          <img src={m4} class="w-50" alt="Company6" />
                        </div>
                        <div class="logo">
                          <img src={m5} class="w-50" alt="Company5" />
                        </div>
                        <div class="logo">
                          <img src={m6} class="w-50" alt="Company 1" />
                        </div>
                        <div class="logo">
                          <img src={m7} class="w-50" alt="Company 2" />
                        </div>
                        <div class="logo">
                          <img src={m8} class="w-50" alt="Company 3" />
                        </div>
                        <div class="logo">
                          <img src={m9} class="w-50" alt="Company6" />
                        </div>
                        <div class="logo">
                          <img src={m10} class="w-50" alt="Company5" />
                        </div>
                        <div class="logo">
                          <img src={m11} class="w-50" alt="Company 2" />
                        </div>
                        <div class="logo">
                          <img src={m12} class="w-50" alt="Company 3" />
                        </div>
                        <div class="logo">
                          <img src={m13} class="w-50" alt="Company6" />
                        </div>
                        <div class="logo">
                          <img src={m14} class="w-50" alt="Company5" />
                        </div>
                      </marquee>
                    </div>
                    <div class="row  m-2">
                      <div class="col-8"></div>
                      <div class="col-4 ">
                        <a href="#" class="textContent">
                          <i class="fa-solid fa-arrow-right-long"></i> View All
                          locations
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <hr />

            <div class="d-flex flex row">
              <div>
                <h3 class="indus">Job By Category</h3>
              </div>
              <div class="row">
                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>
                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>
                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>
                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>
                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>

                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>
                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>
              </div>
              <div class="row  m-2">
                <div class="col-8"></div>
                <div class="col-4 ">
                  <a href="#" class="textContent">
                    <i class="fa-solid fa-arrow-right-long"></i> View All
                    locations
                  </a>
                </div>
              </div>
            </div>
            <hr />

            <div class="d-flex flex row">
              <div>
                <h3 class="indus">Job By Designation</h3>
              </div>
              <div class="row">
                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>
                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>
                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>
                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>
                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>

                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>
                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>
              </div>
              <div class="row  m-2">
                <div class="col-8"></div>
                <div class="col-4 ">
                  <a href="#" class="textContent">
                    <i class="fa-solid fa-arrow-right-long"></i> View All
                    locations
                  </a>
                </div>
              </div>
            </div>
            <hr />

            <div class="d-flex flex row">
              <div>
                <h3 class="indus">Job By Skills</h3>
              </div>
              <div class="row">
                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>
                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>
                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>
                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>
                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>

                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>
                <div class="col-md p-1 m-1">
                  <button class="locationBtn w-100 p-2 m-1">
                    {" "}
                    <i class="fa-solid fa-plane-departure p-2"></i>
                    Airline
                  </button>
                </div>
              </div>
              <div class="row  m-2">
                <div class="col-8"></div>
                <div class="col-4 ">
                  <a href="#" class="textContent">
                    <i class="fa-solid fa-arrow-right-long"></i> View All
                    locations
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Jobs;
