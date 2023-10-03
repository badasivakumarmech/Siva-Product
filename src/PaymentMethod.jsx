import React from "react";
import Footer from "./Footer";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import { Link } from "react-router-dom";
import "./home.css";
import "./BrowserJobs.css";
import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
function PaymentMethod() {
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
                <a class="nav-link dropdown-toggle navstyle" href="/BrowserJobs">
                  Browse Jobs
                </a>
              </li>
              <li class="nav-item">
                {" "}
                <a class="nav-link dropdown-toggle navstyle" href="/Jobs">
                  Jobs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link dropdown-toggle navstyle" href="#">
                  services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link dropdown-toggle navstyle1" href="./ ">
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

      {/* card section */}

      <div class="container4">
        <div class="container2">
            <div class="row">
                <div class="col-12 col-md-1">

                </div>
                <div class=" col-md-10 maincard mb-5">
                    <div class="card mt-5 maincard1 d-flex flex-row">
                        <div class="col-md-6 ">
                            <h1 class="container2heading mt-3">Payment Request</h1>


                            <div class="mt-4 mx-0">
                                <label  className=" mx-5 loginlabel">Name</label>
                                <input type="text" class=" form-control mx-5" placeholder="enter your full name" id="input" />
                                <label for="" class="loginlabel mx-5">Email ID</label>
                                <input type="email" class="form-control  mx-5 " placeholder="enter your Email ID" id="input" />
                                <label for="" class="loginlabel mx-5 mt-1">Mobile Number</label><br />
                                <div class="d-flex flex-row mt-0">
                                    <select name="" id="number" className="mx-5">
                                        <option value="" >+91</option>
                                        <option value="" >+47</option>
                                        <option value="" >+81</option>
                                        <option value="" >+97</option>
                                        <option value="" >+34</option>
                                    </select>

                                    <input type="text" class="form-control mx-0" style={{height: "45px"}}
                                        placeholder="Enter your mobile number" id="input" />
                                </div>
                                <label for="" class="loginlabel mx-5">Amount</label>
                                <input type="password" class="form-control mx-5 " placeholder="minimum 6 charactres"
                                    id="input" />




                                <button class="Registerbtn paybtn w-50 mt-4">Make Payment</button>
                            </div>
                        </div>
                        <div class=" card1 col-md-3" style={{width: "300px"}}>
                            <img src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg"
                                width="400px" height="300px" alt="" id="image" class="mt-5" />
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
export default PaymentMethod;
