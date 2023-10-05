import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import Footer from "./Footer";

function ReCompanyProfile() {
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
                    <a class="nav-link navstyle2 " href="./ReDashBoard">
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
            <div class="col-12 col-md-3 mt-4">
              <div class="card ">
                <i
                  class=" fa-sharp fa-solid fa-circle-user profileicon mb-4 mt-3"
                  style={{ fontSize: "200px" }}
                ></i>

                <a href="">
                  <button class="p-2 mb-1 shadow profilebutton121 h-25 ">
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
                    <button class="p-2 mb-1  shadow profilebutton12 ">
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
            <div class=" col-12 col-md-8  mb-3 text-start mt-4">
              <div class="card p-3">
                <form>
                  <h5 class="profileh5 text-start m-1">Company Profile</h5>
                  <hr />

                  <div>
                    <div className=" col-12 col-md-10">
                      <label className="profilename mb-1" htmlFor="companyName">
                        Name
                      </label>
                      <input
                        type="text"
                        id="companyName" // Add an ID for the input field
                        placeholder="Enter Company name" // Add a placeholder
                        className="form-control w-100 p-2 m-0"
                        // value={name}
                        // onChange={handleNameChange}
                        style={{
                          border: "1px solid black",
                          //   opacity: "0.8",
                          fontWeight: "bold",
                          border: "1px solid #61428a",
                        }} // Change the border color
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class=" col-12 col-md-4">
                      <label for="" class="profileh5 mt-2 mb-2">
                        Website Link
                      </label>
                      <br />
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter your Website Link"
                        class="form-control w-100 p-2 profileselect m-0"
                        style={{
                          border: "1px solid black",
                          //   opacity: "0.8",
                          fontWeight: "bold",
                          border: "1px solid #61428a",
                        }}
                      />
                    </div>
                    <div class=" col-12 col-md-1"></div>
                    <div class="col-md-4">
                      <label for="" class="profileh5 mt-2 mb-2">
                        Founded Date
                      </label>
                      <br />
                      <input
                        type="date"
                        class="form-control1 w-100 p-2 profileselect m-0"
                        placeholder="mm/dd/yyyy"
                        style={{ border: "1px solid #61428a" }}
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class=" col-12 col-md-4">
                      <label for="" class="profileh5 mb-2 mt-2">
                        Industry Type
                      </label>
                      <br />

                      <input
                        type="email"
                        className="form-control w-100 p-2 profileselect m-0"
                        placeholder="Enter your Industry Type"
                        style={{
                          border: "1px solid black",
                          //   opacity: "0.8",
                          fontWeight: "bold",
                          border: "1px solid #61428a",
                        }}
                      />
                    </div>
                  </div>
                  <div class=" col-12 col-md-4">
                    <label for="" class="profileh5 mb-2 mt-2">
                      Company Discription
                    </label>
                    <br />

                    <textarea
                      cols="80"
                      rows="8"
                      className="text-area11"
                      placeholder="   Enter your Company Discription"
                    ></textarea>
                  </div>

                  <h5 className="information-1 mt-3">Contact Information</h5>
                  <hr />
                  <div class="row">
                    <div class=" col-12 col-md-4">
                      <label for="" class="profileh5 mt-2 mb-2">
                        Phone
                      </label>
                      <br />
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter company phone number"
                        class="form-control w-100 p-2 profileselect m-0"
                        style={{
                          fontWeight: "bold",
                          border: "1px solid #61428a",
                        }}
                      />
                    </div>
                    <div class="col-md-1"></div>
                    <div class=" col-12 col-md-4">
                      <label for="" class="profileh5 mt-2 mb-2">
                        Email
                      </label>
                      <br />
                      <input
                        type="text"
                        placeholder="Enter company mail address"
                        class="form-control w-100 p-2 profileselect m-0"
                        style={{
                          fontWeight: "bold",
                          border: "1px solid #61428a",
                        }}
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 col-md-4">
                      <label for="" class="profileh5 mt-2 mb-2">
                        Country
                      </label>
                      <br />
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter Country"
                        class="form-control w-100 p-2 profileselect m-0"
                        style={{
                          fontWeight: "bold",
                          border: "1px solid #61428a",
                        }}
                      />
                    </div>
                    <div class="col-12 col-md-1"></div>
                    <div class="col-12 col-md-4">
                      <label for="" class="profileh5 mt-2 mb-2">
                        State
                      </label>
                      <br />
                      <input
                        type="text"
                        placeholder="Enter state"
                        class="form-control w-100 p-2 profileselect m-0"
                        style={{
                          fontWeight: "bold",
                          border: "1px solid #61428a",
                        }}
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 col-md-4">
                      <label for="" class="profileh5 mt-2 mb-2">
                        City
                      </label>
                      <br />
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter city name"
                        class="form-control w-100 p-2 profileselect m-0"
                        style={{
                          fontWeight: "bold",
                          border: "1px solid #61428a",
                        }}
                      />
                    </div>
                    <div class="col-12 col-md-1"></div>
                    <div class="col-12 col-md-4">
                      <label for="" class="profileh5 mt-2 mb-2">
                        Pincode
                      </label>
                      <br />
                      <input
                        type="text"
                        placeholder="Enter pincode"
                        class="form-control w-100 p-2 profileselect m-0"
                        style={{
                          fontWeight: "bold",
                          border: "1px solid #61428a",
                        }}
                      />
                    </div>
                  </div>

                  <div class=" col-12 col-md-4">
                    <label for="" class="profileh5 mb-2 mt-2">
                      Address
                    </label>
                    <br />

                    <textarea
                      cols="80"
                      rows="3"
                      className="text-area11"
                      placeholder="   Enter company address - Floor/Plot/Appartment/Colony"
                    ></textarea>
                  </div>

                  <h5 className="information-1 mt-3">Social Media Links</h5>
                  <hr />

                  <div class="row m-4">
                    <div class="col-12 col-md-6">
                      <div class="d-flex align-items-center mt-2">
                        <div>
                          <img
                            src="https://res.cloudinary.com/dzvqo0oeu/image/upload/v1696311397/6WtDIesg_400x400_b4jgdt.png"
                            alt=""
                            class="iconssocial"
                          />
                        </div>
                        <div class=" col-12 col-md-10">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Enter linkedin account link"
                            class="form-control1 w-100 p-2 profileselect mx-1"
                            style={{
                              fontWeight: "bold",
                              fontWeight: "bold",
                              border: "1px solid #61428a",
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-12 col-md-6">
                      <div class="d-flex align-items-center mt-2">
                        <div>
                          <img
                            src="https://res.cloudinary.com/dzvqo0oeu/image/upload/v1696312259/512px-Logo_of_Twitter.svg_cpyhua.png"
                            alt=""
                            class="iconssocial"
                          />
                        </div>
                        <div class="col-12 col-md-10">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Enter twitter account link"
                            class="form-control1 w-100 p-2 profileselect mx-1"
                            style={{
                              fontWeight: "bold",
                              fontWeight: "bold",
                              border: "1px solid #61428a",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row m-4">
                    <div class="col-12 col-md-6">
                      <div class="d-flex align-items-center">
                        <div>
                          <img
                            src="https://res.cloudinary.com/dzvqo0oeu/image/upload/v1696312310/Facebook_f_logo_2019.svg_otulbh.png"
                            alt=""
                            class="iconssocial"
                          />
                        </div>
                        <div class="col-12 col-md-10">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Enter facebook account link"
                            class="form-control1 w-100 p-2 profileselect mx-1"
                            style={{
                              fontWeight: "bold",
                              fontWeight: "bold",
                              border: "1px solid #61428a",
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-12 col-md-6">
                      <div class="d-flex align-items-center mt-2">
                        <div>
                          <img
                            src="https://res.cloudinary.com/dzvqo0oeu/image/upload/v1696312330/2048px-Instagram_logo_2016.svg_ftjuuq.png"
                            alt=""
                            class="iconssocial"
                          />
                        </div>
                        <div class="col-12 col-md-10">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Enter instagram account link"
                            class="form-control1 w-100 p-2 profileselect mx-1"
                            style={{
                              fontWeight: "bold",
                              fontWeight: "bold",
                              border: "1px solid #61428a",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row m-4 ">
                    <div class="col-12 col-md-6">
                      <div class="d-flex align-items-center">
                        <div>
                          <img
                            src="https://res.cloudinary.com/dzvqo0oeu/image/upload/v1696312345/2048px-Google__22G_22_Logo.svg_vxlrxe.png"
                            alt=""
                            class="iconssocial"
                          />
                        </div>
                        <div class="col-12 col-md-10">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Enter google account link"
                            class="form-control1 w-100 p-2 profileselect mx-1"
                            style={{
                              fontWeight: "bold",
                              fontWeight: "bold",
                              border: "1px solid #61428a",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="submit-bntt">
                    <button type="submit" className="mt-3 profilebutton1">
                      Update Details
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default ReCompanyProfile;
