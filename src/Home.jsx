import React from "react";
// import { Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./home.css";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
    document.getElementById("experienceDropdown").style.marginRight = "20%";
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
            <ul class="navbar-nav logostyle" style={{ marginLeft: "130px" }}>
              <li class="nav-item">
                <a class="nav-link navstyle1 " href="">
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
                <a class="nav-link dropdown-toggle navstyle" href="/jobs">
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
                  href="/PaymentMethod "
                >
                  payments
                </a>
              </li>
              <li class="nav-item logosymbol ">
                <i class="fa-solid fa-bell bellicon11"></i>
              </li>
              <li class="nav-item logosymbol">
                <Link to="/ProfileCode">
                  <a href="">
                    <i class=" fa-sharp fa-solid fa-circle-user dropdown-toggle bellicon11 mt-1 "></i>
                  </a>
                </Link>
              </li>
              {/* <li class="col-md-3 col-lg nav-item">
                <div>
                   
                  <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                     >
                     <Link to = "/ProfileCode"> 
                    <i
                      className="fa-solid fa-circle-user dropdown-toggle bellicon11 nav-item logosymbol"
                      id="experienceDropdown"
                    ></i> </Link>
                    {isHovered && (
                      <div class="card col-md-2 dropdown-menu">
                        <a href="">
                          <button class="p-2 mb-1 profilebutton h-25 text-black">
                            Candidate Profile
                          </button>
                        </a>
                        <a href="/ResumeDetails">
                          <button class="p-2 mb-1 profilebutton  ">
                            Resume
                          </button>
                        </a>
                        <Link to="/AppliedJobs">
                          {" "}
                          <a href="">
                            <button class="p-2 mb-1 profilebutton  ">
                              Applied Jobs
                            </button>
                          </a>
                        </Link>
                        <Link to="/JobAlert">
                          {" "}
                          <a href="">
                            <button class="p-2 mb-1 profilebutton ">
                              Job Alerts
                            </button>
                          </a>
                        </Link>
                        <a href="/SaveJobs">
                          <button class="p-2 mb-1 profilebutton  ">
                            Saved Jobs
                          </button>
                        </a>
                        <a href="/ChangePassword">
                          <button class="p-2 mb-1 profilebutton  ">
                            Change Password
                          </button>
                        </a>
                        <a href="/LoginPage">
                          <button class="p-2 mb-1 profilebutton ">
                            Log Out
                          </button>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      {/* <div class="container8">
        <div class="row">
          <div class="col-12">
            <h2 class="homeh2">Find your dream job here</h2>
            <p class="homepara">5 lakh+ jobs for you to explore</p>
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
            <h2 class="homeh2">Find your dream job here</h2>
            <p class="homepara">5 lakh+ jobs for you to explore</p>
          </div>
          <div class="col-12 homebutton">
            <div class="text-center align-items-center justify-content-center d-flex row m-2">
              <div class="d-flex p-1 align-items-center seacrhMainContainer m-2 col-md-4">
                <div class="">
                  <i class="fa-solid fa-magnifying-glass p-3"></i>
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
          <div class="homebutton1">
            <button class="subbutton1">Search</button>
          </div>
        </div>
      </div>
      {/* card */}

      {/* <div class="container9 mb-5">
        <div class="row">
          <div class="col-12 col-md-5"></div>

          <div class="col-12 col-md-11    ">
            <h6 class="topsearch">Top Searches</h6>
            <div class="card shadow col-12" style={{ marginLeft: "90px" }}>
              <div class="btngroup1 p-2 m-2">
                <button class="btn1" style={{ width: "120px" }}>
                  Banking
                </button>
                <button class="btn1" style={{ width: "120px" }}>
                  Sales
                </button>
                <button class="btn1 " style={{ width: "140px" }}>
                  HR Executive
                </button>
                <button class="btn1" style={{ width: "160px" }}>
                  Manual Testing
                </button>
                <button class="btn1" style={{ width: "120px" }}>
                  IT
                </button>
                <button class="btn1" style={{ width: "180px" }}>
                  Devops Engineer
                </button>
                <button class="btn1 " style={{ width: "180px" }}>
                  Digital Marketing
                </button>
              </div>
              <div class="btngroup2 p-1 m-1">
                <button class="btn1 " style={{ width: "180px" }}>
                  Graphic Desiging
                </button>
                <button class="btn1" style={{ width: "160px" }}>
                  Data Analyst
                </button>
                <button class="btn1 " style={{ width: "140px" }}>
                  Accounting
                </button>
                <button class="btn1 " style={{ width: "140px" }}>
                  Accounting
                </button>
                <button class="btn1 " style={{ width: "190px" }}>
                  Software Engineer
                </button>
                <button class="btn1" style={{ width: "120px" }}>
                  Freshers
                </button>
                <p className="parag2">more..</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-2"></div>
        </div>
      </div> */}

      <h6 class="topsearch mt-3">Top Searches</h6>
      <div class=" container container-fluid container101 mb-5">
        <div class="row">
          {/* <div class="col-12 col-md-3"></div> */}

          <div class="col-12 col-md-12  text-center">
            <div class="btngroup1 p-2 m-2">
              <button class="btn1" style={{ width: "120px" }}>
                Banking
              </button>
              <button class="btn1" style={{ width: "120px" }}>
                Sales
              </button>
              <button class="btn1 " style={{ width: "120px" }}>
                HR Executive
              </button>
              <button class="btn1" style={{ width: "120px" }}>
                Manual Testing
              </button>
              <button class="btn1" style={{ width: "120px" }}>
                IT
              </button>
              <button class="btn1" style={{ width: "180px" }}>
                Devops Engineer
              </button>
              <button class="btn1 " style={{ width: "140px" }}>
                Marketing
              </button>
            </div>
            <div class="btngroup2 p-2 m-2">
              <button class="btn1 " style={{ width: "180px" }}>
                Graphic Desiging
              </button>
              <button class="btn1" style={{ width: "160px" }}>
                Data Analyst
              </button>
              <button class="btn1 " style={{ width: "140px" }}>
                Accounting
              </button>
              <button class="btn1 " style={{ width: "140px" }}>
                Accounting
              </button>
              <button class="btn1 " style={{ width: "190px" }}>
                Software Engineer
              </button>
              <button class="btn1" style={{ width: "120px" }}>
                Freshers
              </button>
              <p className="parag2">more..</p>
            </div>
          </div>
          <div class="col-12 col-md-2"></div>
        </div>
      </div>

      {/* search by location */}

      <div class=" container container-fluid container10 mb-5">
        <div class="row">
          <div class="col-12 col-md-3"></div>

          <div class="col-12 col-md-11  text-center">
            <h6 class="searchlocate text-start mx-5">Search By Location</h6>
            <button class="imgbutton p-1 m-1" style={{ width: "160px" }}>
              <img
                src="https://www.indembassybern.gov.in/docs/1588678396_5.jpg"
                alt=""
                width="30px"
                height="30px"
              />
              Hyderabad
            </button>
            <button class="imgbutton p-1 m-1" style={{ width: "160px" }}>
              <img
                src="https://www.indembassybern.gov.in/docs/1588678396_5.jpg"
                alt=""
                width="50px"
                height="30px"
              />
              Mumbai
            </button>
            <button class="imgbutton p-1 m-1" style={{ width: "160px" }}>
              <img
                src="https://www.indembassybern.gov.in/docs/1588678396_5.jpg"
                alt=""
                width="50px"
                height="30px"
              />
              Chennai
            </button>
            <button class="imgbutton p-1 m-1" style={{ width: "160px" }}>
              <img
                src="https://www.indembassybern.gov.in/docs/1588678396_5.jpg"
                alt=""
                width="50px"
                height="30px"
              />
              Pune
            </button>
            <button class="imgbutton p-1 m-1" style={{ width: "160px" }}>
              <img
                src="https://www.indembassybern.gov.in/docs/1588678396_5.jpg"
                alt=""
                width="50px"
                height="30px"
              />
              Bengaluru
            </button>
            <button class="imgbutton p-1 m-1" style={{ width: "160px" }}>
              <img
                src="https://www.indembassybern.gov.in/docs/1588678396_5.jpg"
                alt=""
                width="50px"
                height="30px"
              />
              Delhi
            </button>

            <p className="parag2">View All Functional Cities</p>
          </div>
          <div class="col-12 col-md-2"></div>
        </div>
      </div>
      {/* Top Companies */}
      <section>
        <div class="container">
          <div class="row ">
            <div>
              <h3 class="indus text-center">Top Companies By Category</h3>
            </div>
            <div class="col-12 col-md-12">
              <div class="row ">
                <div class=" col-12 col-md-2"></div>
                {/* <div
                    class="card-container  mx-3 jobCard  col-12 col-md-6 "
                    style={{ width: "160px" }}
                  > */}
                <div className="card col-12 col-md-2 shadow jobCard1 m-2">
                  <p
                    className="text-start pt-2 "
                    style={({ fontSize: "18px" }, { fontWeight: "700" })}
                  >
                    MNC's{" "}
                  </p>
                  <p
                    className="text-start par21"
                    style={({ fontSize: "10px" }, { color: "blue" })}
                  >
                    1.5k jobs are availabe
                  </p>
                  <div class="d-flex flex-row">
                    <div>
                      <img
                        src="data:image/png;base64,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"
                        class="logoCard"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="data:image/png;base64,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"
                        class="logoCard"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="data:image/png;base64,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"
                        class="logoCard"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0eI_MIAENiYLJlj05dGXUhgxt14UbTy7eHIc5kvUGw&s"
                        class="logoCard"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="card col-12 col-md-2 shadow jobCard1 m-2">
                  <p
                    className="text-start pt-2 banking "
                    style={{ fontWeight: "700" }}
                  >
                    Banking&Finance
                  </p>
                  <p
                    className="text-start par21"
                    style={({ fontSize: "10px" }, { color: "blue" })}
                  >
                    1.5k jobs are availabe
                  </p>
                  <div class="d-flex flex-row">
                    <div>
                      <img
                        src="data:image/png;base64,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"
                        class="logoCard"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="data:image/png;base64,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"
                        class="logoCard"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="data:image/png;base64,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"
                        class="logoCard"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0eI_MIAENiYLJlj05dGXUhgxt14UbTy7eHIc5kvUGw&s"
                        class="logoCard"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="card col-12 col-md-2 shadow jobCard1 m-2">
                  <p
                    className="text-start pt-2 "
                    style={({ fontSize: "18px" }, { fontWeight: "700" })}
                  >
                    FMCG&Retail{" "}
                  </p>
                  <p
                    className="text-start par21"
                    style={({ fontSize: "10px" }, { color: "blue" })}
                  >
                    1.5k jobs are availabe
                  </p>
                  <div class="d-flex flex-row">
                    <div>
                      <img
                        src="data:image/png;base64,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"
                        class="logoCard"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="data:image/png;base64,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"
                        class="logoCard"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="data:image/png;base64,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"
                        class="logoCard"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0eI_MIAENiYLJlj05dGXUhgxt14UbTy7eHIc5kvUGw&s"
                        class="logoCard"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="card col-12 col-md-2 shadow jobCard1 m-2 ">
                  <p
                    className="text-start pt-2 "
                    style={({ fontSize: "18px" }, { fontWeight: "700" })}
                  >
                    Healthcare
                  </p>
                  <p
                    className="text-start par21"
                    style={({ fontSize: "10px" }, { color: "blue" })}
                  >
                    1.5k jobs are availabe
                  </p>
                  <div class="d-flex flex-row">
                    <div>
                      <img
                        src="data:image/png;base64,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"
                        class="logoCard"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="data:image/png;base64,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"
                        class="logoCard"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="data:image/png;base64,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"
                        class="logoCard"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0eI_MIAENiYLJlj05dGXUhgxt14UbTy7eHIc5kvUGw&s"
                        class="logoCard"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8"></div>
            <div class="col-md-3">
              <i class="fa-solid fa-arrow-right-long mx-2"></i>
              View All locations
            </div>
            {/* <div class="col-md-2"></div> */}
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="row">
            <div class=" col-12 col-md-2"></div>
            <div class=" col-12 col-md-9">
              <div class="container skills1">
                <div class="row">
                  <div class="col-12 col-md-4 mt-4">
                    <img
                      className="mt-2"
                      src="https://www.namanhr.com/wp-content/uploads/2019/07/culture-change.png"
                      class="w-75 image111"
                    />
                  </div>
                  <div class="col-md-8 d-flex flex-column">
                    <div>
                      <h3 class="skillHead p-2 text-start">SELL YOUR SKILLS</h3>
                    </div>
                    <div>
                      <p class="skillPara p-2 text-start">
                        what if you could use your skill and talent to earn
                        money? So that you can live the life you love?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2"></div>
          </div>
        </div>
      </section>
      <br />
      <br />

      {/* imags */}

      <section>
        <div class="container">
          <div class="row">
            <div class=" col-12 col-md-3"></div>
            <div class=" col-12 col-md-8 images311">
              <div class="d-flex flex-column">
                <div>
                  <h3 class="indus">Featured Jobs By Companies</h3>
                </div>
                <marquee
                  behavior="alternate"
                  scrollamount="4"
                  direction="left"
                  class="m-2"
                >
                  <div class="logo">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjsqb5HyNTegTYISzbHYomhesOoFds_5ijEuR8W5aYg&s"
                      class="w-50"
                      alt="Company 1"
                    />
                  </div>
                  <div class="logo">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdqxMi9V6pk-hGETHJbP5Iy9ASYfhCEb7K2N1s38MF&s"
                      class="w-50"
                      alt="Company 2"
                    />
                  </div>
                  <div class="logo">
                    <img
                      src="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/05/Capgemini.gif"
                      class="w-50"
                      alt="Company 3"
                    />
                  </div>
                  <div class="logo">
                    <img
                      src="https://1000logos.net/wp-content/uploads/2021/09/Cognizant-Logo.png"
                      class="w-50"
                      alt="Company4"
                    />
                  </div>
                  <div class="logo">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/2560px-ABB_logo.svg.png"
                      class="w-50"
                      alt="Company5"
                    />
                  </div>
                  <div class="logo">
                    <img
                      src="https://cdn-ukwest.onetrust.com/logos/8d84415b-1b52-4bc4-8d5f-ca9a8eccaf8a/f7db8968-fc22-4620-92ac-dc05c5d2aa15/02460a41-565e-4cac-80a7-449bc8f77a72/logo-infosys.png"
                      class="w-50"
                      alt="Company6"
                    />
                  </div>
                </marquee>
                <div class="row">
                  <div class=" col-12 col-8"></div>
                  <div class=" col-12 col-4 ">
                    <a href="#" class="textContent">
                      <i class="fa-solid fa-arrow-right-long"></i> View All
                      locations
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2"></div>
          </div>
        </div>
      </section>

      {/* post */}

      <section class="industry p-5 container">
        <div class="container m-4">
          <div class="row">
            <div class=" col-12 col-md-2"></div>
            <div class=" col-12 col-md-10 card21">
              <div class="d-flex flex row">
                <div>
                  <h3 class="indus">Browse Jobs By Designation</h3>
                </div>
                <div class="row">
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn21   w-100 p-2 m-1">
                      {" "}
                      ABAP Consultant
                    </button>
                  </div>
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn21 btn-10 w-100 p-2 m-1">
                      BPO Executive
                    </button>
                  </div>
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn21 btn-10 w-100 p-2 m-1">
                      Chef
                    </button>
                  </div>
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn21 btn-10 w-100 p-2 m-1">
                      BPO Executive
                    </button>
                  </div>
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn21 btn-10 w-100 p-2 m-1">
                      Chef
                    </button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn21 btn-10 w-100 p-2 m-1">
                      Editor
                    </button>
                  </div>
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn21 btn-10 w-100 p-2 m-1">
                      Finance Manager
                    </button>
                  </div>
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn21 btn-10 w-100 p-2 m-1">
                      Game Designer
                    </button>
                  </div>
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn21 btn-10 w-100 p-2 m-1">
                      Finance Manager
                    </button>
                  </div>
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn21 btn-10 w-100 p-2 m-1">
                      Game Designer
                    </button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn21 btn-10 w-100 p-2 m-1">
                      HR Assistant
                    </button>
                  </div>
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn21 btn-10 w-100 p-2 m-1">
                      IndustrialEngineer
                    </button>
                  </div>
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn21 btn-10 w-100 p-2 m-1">
                      java Developer
                    </button>
                  </div>
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn21 btn-10 w-100 p-2 m-1">
                      FinanceManager
                    </button>
                  </div>
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn21 btn-10 w-100 p-2 m-1">
                      Java Developer
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
            <div class="col-md-2"></div>
          </div>
        </div>
      </section>
      <br />

      {/* <section>
        <div class="container">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-10 images2">
              <div class="container skills1 m-1">
                <div class="row d-flex flex-row">
                  <div class="col-md-3 " style={{ marginRight: "30px" }}>
                    <img
                      className="mt-2"
                      src="https://www.namanhr.com/wp-content/uploads/2019/07/culture-change.png"
                      class="w-100  mt-3"
                    />
                  </div>
                  <div class="col-md-8 d-flex flex-column">
                    <div>
                      <h3 class="whiteText p-3">
                        POST YOUR <span class="blueText">DAY JOB</span>
                      </h3>
                    </div>

                    <p class="skillPara p-3">
                      It's time to work on your flexible day job.
                      <br /> Post your job and get hired!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2"></div>
          </div>
        </div>
      </section> */}
      <section>
        <div class="container">
          <div class="row">
            <div class=" col-12 col-md-2"></div>
            <div class=" col-12 col-md-9">
              <div class="container skills1">
                <div class="row">
                  <div class="col-12 col-md-4 mt-4">
                    <img
                      className="mt-2"
                      src="https://www.namanhr.com/wp-content/uploads/2019/07/culture-change.png"
                      class="w-75 image111"
                    />
                  </div>
                  <div class="col-md-8 d-flex flex-column">
                    <div>
                      <h3 class="whiteText p-3">
                        POST YOUR <span class="blueText">DAY JOB</span>
                      </h3>
                    </div>
                    <div>
                      <p class="skillPara p-2 text-start">
                        what if you could use your skill and talent to earn
                        money? So that you can live the life you love?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2"></div>
          </div>
        </div>
      </section>
      <br />
      <br />

      <section>
        <div class="container">
          <div class="row">
            <div className="col-12 col-md-2"></div>
            <div class="col-12 col-md-9">
              <div class="skills2">
                <div className="col-12">
                  <div className=" d-flex flex-row">
                    <div>
                      <p class=" m-3 text-white text-para">
                        Find better & faster jobs with pab jobs service Call :
                        1800 833 9448 Now!
                      </p>
                    </div>
                    <div>
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Your Mobile Number"
                          class="w-100 pt-1 mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <button class=" mx-1 mt-2 w-100 bg-warning">
                        Get call back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default Home;
