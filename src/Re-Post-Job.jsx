import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import { useState } from "react";
import Footer from "./Footer";

function RePostJob() {
  const [selectedColor, setSelectedColor] = useState("lightgray");
  const [selectedColor1, setSelectedColor1] = useState("lightgray");
  const [selectedColor2, setSelectedColor2] = useState("lightgray");
  const [selectedColor3, setSelectedColor3] = useState("lightgray");
  const [selectedColor4, setSelectedColor4] = useState("lightgray");
  const [selectedColor5, setSelectedColor5] = useState("lightgray");
  const [selectedColor6, setSelectedColor6] = useState("lightgray");

  const updateSelectedOptionColor = (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    setSelectedColor(selectedOption.style.color);
  };
  const updateSelectedOptionColor1 = (event) => {
    const selectedOption1 = event.target.options[event.target.selectedIndex];
    setSelectedColor1(selectedOption1.style.color);
  };
  const updateSelectedOptionColor2 = (event) => {
    const selectedOption2 = event.target.options[event.target.selectedIndex];
    setSelectedColor2(selectedOption2.style.color);
  };
  const updateSelectedOptionColor3 = (event) => {
    const selectedOption3 = event.target.options[event.target.selectedIndex];
    setSelectedColor3(selectedOption3.style.color);
  };
  const updateSelectedOptionColor4 = (event) => {
    const selectedOption4 = event.target.options[event.target.selectedIndex];
    setSelectedColor4(selectedOption4.style.color);
  };
  const updateSelectedOptionColor5 = (event) => {
    const selectedOption5 = event.target.options[event.target.selectedIndex];
    setSelectedColor5(selectedOption5.style.color);
  };
  const updateSelectedOptionColor6 = (event) => {
    const selectedOption6 = event.target.options[event.target.selectedIndex];
    setSelectedColor6(selectedOption6.style.color);
  };

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
      <div className="container ">
        <div className="row bg-images1">
          <div className="row">
            <div className="col-12 col-md-1"></div>

            <div class="col-12 col-md-3 mt-4">
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
                  <button class="p-2 mb-1 shadow profilebutton121  ">
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

                <a href="/ReChangePassword">
                  <button class="p-2 mb-1  shadow profilebutton12 ">
                    Change Password
                  </button>
                </a>

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
            <div class=" col-12 col-md-8 mb-3 text-start mt-4">
              <div class="card p-3">
                <form>
                  <h5 class="profileh5 text-start m-1">Post A Job</h5>
                  <hr />
                  <div className="m-4">
                    <div class="row">
                      <div class=" col-12 col-md-4">
                        <label for="" class="profileh5 mt-2 mb-2">
                          Job Title
                        </label>
                        <br />
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Enter job title"
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
                          Positions Available
                        </label>
                        <br />
                        <input
                          type="text"
                          placeholder="Enter no. of positions"
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
                          Job Type
                        </label>
                        <br />

                        <select
                          id="jobTypeSelect"
                          className="form-control1 w-100 p-2 profileselect m-0"
                          style={{
                            color: selectedColor,
                            border: "1px solid #61428a",
                            fontWeight: "bold",
                          }}
                          onChange={updateSelectedOptionColor}
                        >
                          <option value="" disabled selected hidden>
                            Enter job type
                          </option>
                          <option value="IT" style={{ color: "black" }}>
                            IT
                          </option>
                          <option value="Finance" style={{ color: "black" }}>
                            Finance
                          </option>
                        </select>
                      </div>
                      <div class="col-12 col-md-1"></div>
                      <div class="col-12 col-md-4">
                        <label for="" class="profileh5 mt-2 mb-2">
                          Experience
                        </label>
                        <br />
                        <select
                          id="jobTypeSelect"
                          className="form-control1 w-100 p-2 profileselect m-0"
                          style={{
                            color: selectedColor1,
                            border: "1px solid #61428a",
                            fontWeight: "bold",
                          }}
                          onChange={updateSelectedOptionColor1}
                        >
                          <option value="" disabled selected hidden>
                            Select experience
                          </option>
                          <option value="IT" style={{ color: "black" }}>
                            IT
                          </option>
                          <option value="Finance" style={{ color: "black" }}>
                            Finance
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 col-md-4">
                        <label for="" class="profileh5 mt-2 mb-2">
                          Max Salary Per Annum
                        </label>
                        <br />

                        <select
                          id="jobTypeSelect"
                          className="form-control1 w-100 p-2 profileselect m-0"
                          style={{
                            color: selectedColor2,
                            border: "1px solid #61428a",
                            fontWeight: "bold",
                          }}
                          onChange={updateSelectedOptionColor2}
                        >
                          <option value="" disabled selected hidden>
                            Enter job type
                          </option>
                          <option value="IT" style={{ color: "black" }}>
                            IT
                          </option>
                          <option value="Finance" style={{ color: "black" }}>
                            Finance
                          </option>
                        </select>
                      </div>
                      <div class="col-12 col-md-1"></div>
                      <div class="col-12 col-md-4">
                        <label for="" class="profileh5 mt-2 mb-2">
                          Techinical Skills
                        </label>
                        <br />
                        <select
                          id="jobTypeSelect"
                          className="form-control1 w-100 p-2 profileselect m-0"
                          style={{
                            color: selectedColor3,
                            border: "1px solid #61428a",
                            fontWeight: "bold",
                          }}
                          onChange={updateSelectedOptionColor3}
                        >
                          <option value="" disabled selected hidden>
                            Select experience
                          </option>
                          <option value="IT" style={{ color: "black" }}>
                            IT
                          </option>
                          <option value="Finance" style={{ color: "black" }}>
                            Finance
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 col-md-4">
                        <label for="" class="profileh5 mt-2 mb-2">
                          Region
                        </label>
                        <br />

                        <select
                          id="jobTypeSelect"
                          className="form-control1 w-100 p-2 profileselect m-0"
                          style={{
                            color: selectedColor4,
                            border: "1px solid #61428a",
                            fontWeight: "bold",
                          }}
                          onChange={updateSelectedOptionColor4}
                        >
                          <option value="" disabled selected hidden>
                            Select your region
                          </option>
                          <option value="IT" style={{ color: "black" }}>
                            IT
                          </option>
                          <option value="Finance" style={{ color: "black" }}>
                            Finance
                          </option>
                        </select>
                      </div>
                      <div class="col-12 col-md-1"></div>
                      <div class="col-12 col-md-4">
                        <label for="" class="profileh5 mt-2 mb-2">
                          Locations
                        </label>
                        <br />
                        <select
                          id="jobTypeSelect"
                          className="form-control1 w-100 p-2 profileselect m-0"
                          style={{
                            color: selectedColor5,
                            border: "1px solid #61428a",
                            fontWeight: "bold",
                          }}
                          onChange={updateSelectedOptionColor5}
                        >
                          <option value="" disabled selected hidden>
                            Press Enter to add cities
                          </option>
                          <option value="IT" style={{ color: "black" }}>
                            IT
                          </option>
                          <option value="Finance" style={{ color: "black" }}>
                            Finance
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 col-md-4">
                        <label for="" class="profileh5 mt-2 mb-2">
                          Deadline
                        </label>
                        <br />

                        <input
                          type="date"
                          class="form-control1 w-100 p-2 profileselect m-0"
                          placeholder="mm/dd/yyyy"
                          style={{ border: "1px solid #61428a" }}
                        />
                      </div>
                      <div class="col-12 col-md-1"></div>
                      <div class="col-12 col-md-4">
                        <label for="" class="profileh5 mt-2 mb-2">
                          Education
                        </label>
                        <br />
                        <select
                          id="jobTypeSelect"
                          className="form-control1 w-100 p-2 profileselect m-0"
                          style={{
                            color: selectedColor6,
                            border: "1px solid #61428a",
                            fontWeight: "bold",
                          }}
                          onChange={updateSelectedOptionColor6}
                        >
                          <option value="" disabled selected hidden>
                            Education required
                          </option>
                          <option value="IT" style={{ color: "black" }}>
                            IT
                          </option>
                          <option value="Finance" style={{ color: "black" }}>
                            Finance
                          </option>
                        </select>
                      </div>
                    </div>

                    <div class=" col-12 col-md-4">
                      <label for="" class="profileh5 mb-2 mt-2">
                        Job Discription
                      </label>
                      <br />

                      <textarea
                        cols="80"
                        rows="8"
                        className="text-area11"
                        placeholder="   Enter your job discription"
                      ></textarea>
                    </div>

                    <div className="submit-bntt">
                      <button type="submit" className="mt-3 profilebutton1">
                        Post A Job
                      </button>
                    </div>
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
export default RePostJob;
