// import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import Footer from "./Footer";
import React, { useState } from "react";
import image from "./All Images/sivapic.jpg";


function JobAlert() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark shadow mb-3 mt-2 ">
        <div class="container">
          <img src={logo} alt="" width="200px" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
            style={{ backgroundColor: "black" }}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav mt-4" style={{ marginLeft: "auto" }}>
              <li class="nav-item ">
                <a
                  class="nav-link line1"
                  href="/Home"
                  style={{ color: "black" }}
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link dropdown-toggle"
                  href="BrowserJobs"
                  style={{ color: "black" }}
                >
                  Browse Jobs
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link dropdown-toggle"
                  href="/Jobs"
                  style={{ color: "black" }}
                >
                  Jobs
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  style={{ color: "black" }}
                >
                  services
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link dropdown-toggle"
                  href="payment.html"
                  style={{ color: "black" }}
                >
                  payments
                </a>
              </li>
              <li class="nav-item">
                <i class="fa-solid fa-bell bellicon"></i>
              </li>
              <li class="nav-item">
                <a href="profile.html">
                  <i
                    class=" fa-sharp fa-solid fa-circle-user dropdown-toggle bellicon"
                    style={{ color: "Blue" }}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="container">
        <div class="row">
          <div class="col-md-3 mb-5">
            <div class="card ">
              {/* <i
                class=" fa-sharp fa-solid fa-circle-user profileicon mb-4 mt-3"
                style={{ fontSize: "200px" }}
              ></i> */}
              <img src={image} alt="" className="images123" />

              <Link to="/ProfileCode">
                {" "}
                <a href="profile.html">
                  <button class="p-2 mb-1 profilebutton">
                    Candidate Profile
                  </button>
                </a>
              </Link>
              <a href="/ResumeDetails">
                <button class="p-2 mb-1 profilebutton  ">Resume</button>
              </a>
              <Link to="/AppliedJobs">
                {" "}
                <a href="">
                  <button class="p-2 mb-1 profilebutton ">Applied Jobs</button>
                </a>
              </Link>
              <a href="jobalert.html">
                <button class="p-2 mb-1 bg-primary profilebutton h-25 text-white  ">
                  Job Alerts
                </button>
              </a>
              <Link to="/SaveJobs">
                {" "}
                <a href="savedjobs.html">
                  <button class="p-2 mb-1 profilebutton  ">Saved Jobs</button>
                </a>
              </Link>
              <a href="/ChangePassword">
                <button class="p-2 mb-1 profilebutton  ">
                  Change Password
                </button>
              </a>
              <a href="/LoginPage">
                <button class="p-2 mb-1 profilebutton ">Log Out</button>
              </a>
            </div>
          </div>

          <div class="col-md-1"></div>

          {/* <!-- 2nd part --> */}
          <div class="col-md-7">
            <div class="card p-4">
              <div class="d-flex flex-row p-4">
                <h6 class="mt-4">Job Alert</h6>
                <div
                  class="d-flex flex-row p-1 "
                  style={{ marginLeft: "auto" }}
                >
                  <h6 class="mt-4">Sort</h6>
                  <br />
                  <button class="dropdown-toggle mx-4  threebutton shadow ">
                    Last 3 Days
                  </button>
                </div>
              </div>
              <hr />
              <div class="text-center">
                <img
                  src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?size=626&ext=jpg&ga=GA1.1.1792788615.1688462176&semt=ais"
                  alt=""
                  width="200px"
                />
                <h4 class="mb-5">No Applications Found</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default JobAlert;
