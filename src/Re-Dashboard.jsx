import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import Footer from "./Footer";

function ReDashBoard() {
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
                    <a class="nav-link navstyle2 text-primary " href="">
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
                    <a href="./ReCompanyProfile">
                      <i class=" fa-sharp fa-solid fa-circle-user dropdown-toggle bellicon11 mt-1 "></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div class="dashboard ">
            <div class="column text-start ">
              <div class="row">
                <div className="col-12 col-md-2"></div>
                <div class="col-12 col-md-5">
                  <h3 class="dash-heading mt-3">
                    Dashboard
                    <p class="para411 ">
                      Note: Extra Recruiter Login Costs 499 Rupees + GST Maximum
                      3 Recruiter Logins For Package.
                    </p>
                  </h3>

                  <div class="mb-5">
                    <a href="./BuyServices.html">
                      <button class="buttons21 col-12 col-md-3 mx-2">
                        Data Base
                      </button>
                    </a>
                    <a href="./Job-Posting.html">
                      <button class="buttons1 col-12 col-md-3 mx-2">
                        Job Posting
                      </button>
                    </a>
                    <a href="./Combo-Products.html">
                      <button class="buttons1 col-12 col-md-4 mx-2">
                        Combo Products
                      </button>
                    </a>
                  </div>
                </div>
                <div class=" col-12 col-md-3 mt-4  ">
                  <div class="d-flex flex-row card">
                    <div>
                      <i class="fa-solid fa-circle-user mt-4 mx-2 mt-2" />
                    </div>
                    <div class="p-1  mt-3">
                      <h4 class="span11">
                        Company Name
                        <br />
                        <p class="span2">
                          IT&Software
                          <p class="span3">www.companyname.com</p>
                        </p>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-2"></div>
                <div className="col-12 col-md-8">
                  <div class="card">
                    <div>
                      <h3 class="musage mx-4 mt-3">Monthly Usage</h3>
                    </div>
                    <hr class="m-3" />
                    <div class="row ">
                      <div class="card col-12 col-md-2">
                        <div class="d-flex flex-row">
                          <div>
                            <img
                              src="data:image/png;base64,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"
                              alt="Downloads symbol"
                              class="Downloadslogo m-1"
                            />
                          </div>
                          <div class="mt-2">
                            <p class="span131">
                              Excel Downloads
                              <span class="span231">2000</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="card col-12 col-md-2 mx-4 p-2"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "20px",
                          boxShadow: "1px 3px 10px rgb(221, 219, 219)",
                        }}
                      >
                        <div class="d-flex flex-row">
                          <div>
                            <img
                              src="https://static.vecteezy.com/system/resources/previews/014/641/125/non_2x/marketing-budget-line-round-corner-background-icons-vector.jpg"
                              alt="Downloads symbol"
                              class="Downloadslogo m-1"
                            />
                          </div>
                          <div class="mt-2">
                            <p class="span131 mx-3">
                              Profile Views
                              <span class="span231">1000</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="card col-12 col-md-2 mx-4 p-2"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "20px",
                          boxShadow: "1px 3px 10px rgb(221, 219, 219)",
                        }}
                      >
                        <div class="d-flex flex-row">
                          <div>
                            <img
                              src="data:image/png;base64,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"
                              alt="Downloads symbol"
                              class="Downloadslogo m-1"
                            />
                          </div>
                          <div class="mt-2">
                            <p class="span131 mx-3">
                              Messages
                              <span class="span231">100</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="card col-12 col-md-2 mx-5 p-2"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "20px",
                          boxShadow: "1px 3px 10px rgb(221, 219, 219)",
                        }}
                      >
                        <div class="d-flex flex-row">
                          <div>
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_M6SzMy82SMHPAcWvpDIZoTiPKYXvhxnswA&usqp=CAU"
                              alt="Downloads symbol"
                              class="Downloadslogo m-1"
                            />
                          </div>
                          <div class="mt-2">
                            <p class="span131 mx-3">
                              Job Postings
                              <span class="span231">69</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p class="parag1">
                      All the values updating since last month
                    </p>
                    <div>
                      <h3 class="musage">Daily Usage</h3>
                    </div>
                    <hr class="m-3" />
                    <div class="row ">
                      <div
                        class="card col-12 col-md-2 mx-5 p-2"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "20px",
                          boxShadow: "1px 3px 10px rgb(221, 219, 219)",
                        }}
                      >
                        <div class="d-flex flex-row">
                          <div>
                            <img
                              src="data:image/png;base64,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"
                              alt="Downloads symbol"
                              class="Downloadslogo m-1"
                            />
                          </div>
                          <div class="mt-2">
                            <p class="span131">
                              Excel Downloads
                              <span class="span231">200</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="card col-12 col-md-2 mx-4 p-2"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "20px",
                          boxShadow: "1px 3px 10px rgb(221, 219, 219)",
                        }}
                      >
                        <div class="d-flex flex-row">
                          <div>
                            <img
                              src="https://static.vecteezy.com/system/resources/previews/014/641/125/non_2x/marketing-budget-line-round-corner-background-icons-vector.jpg"
                              alt="Downloads symbol"
                              class="Downloadslogo m-1"
                            />
                          </div>
                          <div class="mt-2">
                            <p class="span131 mx-3">
                              Profile Views
                              <span class="span231">150</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="card col-12 col-md-2 mx-4 p-2"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "20px",
                          boxShadow: "1px 3px 10px rgb(221, 219, 219)",
                        }}
                      >
                        <div class="d-flex flex-row">
                          <div>
                            <img
                              src="data:image/png;base64,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"
                              alt="Downloads symbol"
                              class="Downloadslogo m-1"
                            />
                          </div>
                          <div class="mt-2">
                            <p class="span131 mx-4">
                              Messages
                              <span class="span231">25</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="card col-12 col-md-2 mx-5 p-2"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "20px",
                          boxShadow: "1px 3px 10px rgb(221, 219, 219)",
                        }}
                      >
                        <div class="d-flex flex-row">
                          <div>
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_M6SzMy82SMHPAcWvpDIZoTiPKYXvhxnswA&usqp=CAU"
                              alt="Downloads symbol"
                              class="Downloadslogo m-1"
                            />
                          </div>
                          <div class="mt-2">
                            <p class="span131 mx-3">
                              Job Postings
                              <span class="span231">00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p class="parag1">
                      All the values updating since last month
                    </p>
                    <hr class="m-3" />

                    <div class="section-3 m-3">
                      <div class="row">
                        <h2 class="p-2 mx-4 rpofile">
                          Recruiter Profiles
                          <button class="button41">+ Create Admin</button>
                        </h2>
                      </div>
                    </div>
                    <div class="card">
                      <div>
                        <div
                          class="section-4 m-3 p-2"
                          style={{
                            boxShadow: "1px 3px 10px rgb(221, 219, 219)",
                          }}
                        >
                          <div class="d-flex flex-row p-2">
                            <p class="info">Name</p>
                            <p class="info2">Date</p>
                            <p class="info2">Position</p>
                            <p class="info2">Employee ID</p>
                            <p class="info2">Action</p>
                          </div>
                        </div>
                        <div class="section-41 m-3 p-2">
                          <div class="d-flex flex-row p-2">
                            <p class="info31">
                              {" "}
                              <i
                                class="fa-solid fa-circle-user  "
                                style={{ color: "rgb(231, 225, 225)" }}
                              ></i>
                              Ashokini
                            </p>
                            <p class="info231">Date</p>
                            <p class="info231">Position</p>
                            <p class="info231">12346969</p>
                            <p class="info23121">
                              {" "}
                              <button class="info2331">Log In</button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="section-3 m-3">
                      <div class="row">
                        <h2 class="p-2 mx-4 rpofile">
                          Recruiter Profiles
                          <button class="button41">+ Create Admin</button>
                        </h2>
                      </div>
                    </div>
                    <div class="card shadow">
                      <div class="section-4 m-3 p-2">
                        <div class="d-flex flex-row p-2">
                          <p class="info">Name</p>
                          <p class="info2">Date</p>
                          <p class="info2">Position</p>
                          <p class="info2">Employee ID</p>
                          <p class="info2">Action</p>
                        </div>
                      </div>
                      <div class="section-41 m-3 p-2">
                        <div class="d-flex flex-row p-2">
                          <p class="info31">
                            {" "}
                            <i
                              class="fa-solid fa-circle-user  "
                              style={{ color: "rgb(231, 225, 225)" }}
                            ></i>
                            Ashokini
                          </p>
                          <p class="info231">Date</p>
                          <p class="info231">Position</p>
                          <p class="info231">12346969</p>
                          <p class="info23121">
                            {" "}
                            <button class="info2331">Log In</button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
export default ReDashBoard;
