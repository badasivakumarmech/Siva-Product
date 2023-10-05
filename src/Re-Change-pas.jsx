import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import { useState } from "react";
import Footer from "./Footer";

function ReChangePassword() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <nav class="navbar navbar-expand-sm bg-recruiter shadow">
            <div class="container mt-2 ">
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
              <div class="collapse navbar-collapse mx-4" id="collapsibleNavbar">
                <ul
                  class="navbar-nav logostyle"
                  style={{ marginLeft: "130px" }}
                >
                  <li class="nav-item">
                    <a class="nav-link navstyle2 " href="">
                      Dashboard
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  navstyle2" href="">
                      Search Candidates
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link navstyle2" href="">
                      Buy Services
                    </a>
                  </li>

                  <li class="nav-item logosymbol mx-4 mt-1 ">
                    <i class="fa-solid fa-bell bellicon11"></i>
                  </li>
                  <li class="nav-item logosymbol mt-1">
                    <Link to="">
                      <a href="">
                        <i class=" fa-sharp fa-solid fa-circle-user dropdown-toggle bellicon11 mt-1 "></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="row  bg-images1">
          <div className="row">
            <div className="col-12 col-md-1"></div>

            <div class="col-12 col-md-3 mb-3 mt-4">
              <div class="card ">
                <i
                  class=" fa-sharp fa-solid fa-circle-user profileicon mb-4 mt-3"
                  style={{ fontSize: "200px" }}
                ></i>

                <a href="/ReCompanyProfile">
                  <button class="p-2 mb-1 shadow profilebutton12 h-25 ">
                    Company Profile
                  </button>
                </a>
                <a href="/RePostJob">
                  <button class="p-2 mb-1 shadow profilebutton12  ">
                    Post Your Jobs
                  </button>
                </a>
                <Link to="">
                  {" "}
                  <a href="">
                    <button class="p-2 mb-1 shadow profilebutton12  ">
                      My Jobs
                    </button>
                  </a>
                </Link>
                <Link to="">
                  {" "}
                  <a href="/ReChangePassword">
                    <button class="p-2 mb-1  shadow profilebutton121 ">
                      Change Password
                    </button>
                  </a>
                </Link>
                <a href="">
                  <button class="p-2 mb-1 shadow profilebutton12 ">
                    Logout
                  </button>
                </a>

                {/* {token ? (
                <div>
                  <a href="/LoginPage">
                    <button
                      onClick={handleLogout}
                      class="p-2 mb-1 profilebutton "
                    >
                      Logout
                    </button>
                  </a>
                </div>
              ) : (
                <a href="/LoginPage">
                  <button class="p-2 mb-1 profilebutton ">Logout</button>
                </a>
              )} */}
              </div>
            </div>

            <div className="col-md-7 text-start mt-4">
              <div className="card p-4">
                <h5 className="profileh5">Change Password</h5>
                <hr />
                <label htmlFor="oldPassword" className="profilename mb-1">
                  Old Password
                </label>
                <input
                  type="password"
                  id="oldPassword"
                  placeholder="Enter your Old password"
                  className="form-control m-0 w-100"
                  style={{ border: "1px solid black" }}
                />
                <div className="row mt-2">
                  <div className="col-md-5">
                    <label htmlFor="newPassword" className="profileh5 mb-1">
                      New Password
                    </label>
                    <br />
                    <input
                      type="password"
                      id="newPassword"
                      placeholder="Enter your new Password"
                      className="form-control w-100 p-2 profileselect m-0"
                      style={{ border: "1px solid black" }}
                    />
                  </div>
                  <div className="col-md-1"></div>
                  <div className="col-md-5">
                    <label htmlFor="confirmPassword" className="profileh5 mb-1">
                      Confirm Password
                    </label>
                    <br />
                    <input
                      type="password"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      className="form-control w-100 p-2 profileselect m-0"
                      style={{ border: "1px solid black" }}
                    />
                  </div>
                </div>
                <button className="mt-4 profilebutton1999 ">
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default ReChangePassword;
