// import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import Footer from "./Footer";
import React, { useState } from "react";
import image from "./All Images/sivapic.jpg";
 

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangePassword = async () => {
    try {
      // Send a POST request to your backend with the old password, new password, and confirm password
      const response = await fetch("/RegistrationDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "user@example.com", // Replace with the user's email
          originalPassword: oldPassword,
          newPassword,
          confirmPassword,
        }),
      });

      const data = await response.json();

      // Handle the response from the server
      if (response.status === 200) {
        setMessage("Password changed successfully");
      } else {
        setMessage(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
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
              <a href="/jobalert">
                <button class="p-2 mb-1 profilebutton  ">Job Alerts</button>
              </a>
              <a href="/SaveJobs">
                <button class="p-2 mb-1 profilebutton  ">Saved Jobs</button>
              </a>
              <a href="">
                <button class="p-2 mb-1 bg-primary profilebutton h-25 text-white ">
                  Change Password
                </button>
              </a>
              <a href="/LoginPage">
                <button class="p-2 mb-1 profilebutton ">Log Out</button>
              </a>
            </div>
          </div>

          <div class="col-md-1"></div>

          {/* <!-- 2nd part -- > */}
          {/* <div class="col-md-7 text-start">
            <div class="card p-4">
               <h5 class="profileh5">Change Password</h5>
               <hr />
               <label for="" class="profilename mb-1">Old Password</label>
               <input type="text" placeholder="Enter your Old password" class="form-control w-75 m-0" style={{border: "1px solid black"}}/>
               <div class="d-flex flex-row mt-2">
                <div class="col-md-4">
                <label for="" class="profileh5 mb-1">New Password</label><br />
                    <input type="text" name="" id="" placeholder="Enter your new Password" class="form-control w-100 p-2 profileselect m-0 " style={{border: "1px solid black"}}/>
            </div>
            <div class="col-md-1">
                 
            </div>
            <div class="col-md-4">
                <label for="" class="profileh5 mb-1">Confirm Password</label><br />
                <input type="text" name="" id="" placeholder="Confirm Password" class="form-control w-100 p-2 profileselect m-0 " style={{border: "1px solid black"}} />
            </div>
               </div>
               <button class=" mt-4 profilebutton1">Update Password</button>
            </div>
        </div> */}
          <div className="col-md-7 text-start">
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
                className="form-control w-75 m-0"
                style={{ border: "1px solid black" }}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <div className="d-flex flex-row mt-2">
                <div className="col-md-4">
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
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
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
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
              <button
                onClick={handleChangePassword}
                className="mt-4 profilebutton1"
              >
                Update Password
              </button>
              <div className="mt-2">{message}</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default ChangePassword;
