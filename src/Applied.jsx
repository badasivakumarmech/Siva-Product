// import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import Footer from "./Footer";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import image from "./All Images/sivapic.jpg";

function AppliedJobs() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const [blogslist, setblogslist] = useState([]);
  useEffect(() => {
    fetchblogs();
  }, []);
  const fetchblogs = async () => {
    const api = " http://localhost:4005/ApplyNowData";
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk";
    try {
      const response = await axios.get(api, {
        headers: {
          token: `${authToken}`,
        },
      });
      setblogslist(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
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

              <a href="/ProfileCode">
                <button class="p-2 mb-1 profilebutton h-25 text-black">
                  Candidate Profile
                </button>
              </a>
              <a href="/ResumeDetails">
                <button class="p-2 mb-1 profilebutton  ">Resume</button>
              </a>
              <Link to="/AppliedJobs">
                {" "}
                <a href="">
                  <button class="p-2 mb-1 profilebutton bg-primary ">
                    Applied Jobs
                  </button>
                </a>
              </Link>
              <Link to="/JobAlert">
                {" "}
                <a href="">
                  <button class="p-2 mb-1 profilebutton ">Job Alerts</button>
                </a>
              </Link>
              <a href="/SaveJobs">
                <button class="p-2 mb-1 profilebutton  ">Saved Jobs</button>
              </a>
              <a href="/ChangePassword">
                <button class="p-2 mb-1 profilebutton  ">
                  Change Password
                </button>
              </a>
              {/* <a href="/LoginPage">
                <button class="p-2 mb-1 profilebutton ">Log Out</button>
              </a> */}

              {token ? (
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
              )}
            </div>
          </div>

          <div class="col-md-8 mb-5 text-start">
            <div class="card p-3">
              <h6 className="text-center">2 Applied Jobs Found</h6>
              <hr />
              {/* <div class="card p-1 mb-3 ">
                          <div class=" d-flex flex-row ">
                              <div class="d-flex flex-row col-md-6 images12">
                                  <div class="mt-3">
                                      <img src="https://w7.pngwing.com/pngs/326/725/png-transparent-harman-international-industries-industry-harman-kardon-harman-professional-solutions-samsung-electronics-samsung-blue-text-logo-thumbnail.png "
                                          alt="" width="50px" />
                                  </div>
                                  <div class="p-3 ">
                                      <h6 class="appliedh2">Graphic Designer</h6>
                                      <p class="small">Angel Broking</p>
                                      <p class="small">Show more jobs in the company</p>
                                  </div>
                              </div>

                              <div class="col-md-5 ">
                                  <h6 class="px-5" style={{fontWeight: "bold"}}>4.5-6 LPA</h6>
                                  <i class="fa-solid fa-location-dot mx-2"></i><span
                                      class="small">Hyderabad/Secundrabad,Telangana</span><br />
                                  <i class="fa-solid fa-briefcase p-3"></i><span class="small">1-3 years</span>
                              </div>
                          </div>
                          <hr />
                          <div class="d-flex flex-row">
                              <div class="col-md-1"></div>
                              <div class="col-md-5">
                                  <p class="small">Posted:few hours ago</p>
                                  <p class="small">Openings 1</p>
                                  <p class="small">job applicants:580</p>
                              </div>
                              <div class="col-md-6">
                                  <button class="domain p-2 w-75 mt-3">Applied</button>
                              </div>
                          </div>
                      </div>

                      <div class="card p-1 ">
                          <div class=" d-flex flex-row ">
                              <div class="d-flex flex-row col-md-6 images12" >
                                  <div class="mt-3">
                                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsHqbVhqmfHIN17U9jSE-U9Xu-kjV5MCOoUt7J7Z1x54RpzWovnr9A3VbKVpKS_RsaDE4&usqp=CAU"
                                          alt="" width="50px" />
                                  </div>
                                  <div class="p-3 ">
                                      <h6 class="appliedh2">Graphic Designer</h6>
                                      <p class="small">TCS</p>
                                      <p class="small">Show more jobs in the company</p>
                                  </div>
                              </div>

                              <div class="col-md-5 ">
                                  <h6 class="px-5" style={{fontWeight: "bold"}}>5-10 LPA</h6>
                                  <i class="fa-solid fa-location-dot mx-2"></i><span
                                      class="small">Hyderabad/Secundrabad,Telangana</span><br />
                                  <i class="fa-solid fa-briefcase p-3"></i><span class="small">1-3 years</span>
                              </div>
                          </div>
                          <hr />
                          <div class="d-flex flex-row">
                              <div class="col-md-1"></div>
                              <div class="col-md-5">
                                  <p class="small">Posted:few hours ago</p>
                                  <p class="small">Openings 1</p>
                                  <p class="small">job applicants:580</p>
                              </div>
                              <div class="col-md-6">
                                  <button class="domain p-2 w-75 mt-3">Applied</button>
                              </div>
                          </div>
                      </div> */}

              {blogslist.map((blog) => (
                <div className="">
                  <div class="col-lg-11 col-md-12 mt-5 m-0">
                    <div class="container">
                      <div class="row">
                        <div class="">
                          <div class="bg-element">
                            <div class="d-flex flex-row row">
                              <div class="wipro-item item-wipro col-md-6 mt-2">
                                <div class="row">
                                  <div class="col-lg-3">
                                    <img
                                      src={blog.ImageE2}
                                      alt="img"
                                      class=" angel-img"
                                      id="imgElement"
                                    />
                                  </div>

                                  <div class="col-lg-9">
                                    <p
                                      class="graphics-item m-0"
                                      style={{ fontSize: "17px" }}
                                    >
                                      {blog.roleE2}
                                    </p>
                                    <p
                                      class="graphics1-item m-0"
                                      style={{ fontSize: "17px" }}
                                    >
                                      {blog.companynameE2}
                                    </p>

                                    <p class="m-0 Show">
                                      Show more jobs in the company
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="wipro-item col-md-6 mt-2">
                                <div>
                                  <p
                                    class="graphics-item m-0"
                                    style={{ fontSize: "20px" }}
                                  >
                                    {blog.salaryE2}
                                    <span class="bookmark">
                                      <i
                                        class="fa-solid fa-bookmark book"
                                        style={{color : "green"}}
                                        id="bookItem"
                                      ></i>
                                    </span>
                                  </p>
                                  <p class="m-0">
                                    <i class="fa-solid fa-location-dot"></i>{" "}
                                    {blog.stateE2}
                                  </p>
                                  <p class="m-0">
                                    <i class="fa-solid fa-location-dot"></i>{" "}
                                    {blog.countryE2}
                                  </p>
                                  <p class="m-0">
                                    <i class="fa-solid fa-briefcase"></i>{" "}
                                    {blog.experienceE2}
                                  </p>
                                  <div className="d-flex flex-row">
                                    <span class="material-symbols-outlined mt-1">
                                      outgoing_mail
                                    </span>
                                    <span className="mx-1">
                                      {" "}
                                      {blog.emailE2}
                                    </span>
                                  </div>
                                  <div></div>
                                </div>
                              </div>
                            </div>
                            <hr />
                            <div class="d-flex flex-row row">
                              <div class="col-md-1"></div>
                              <div class="post col-md-8">
                                <p class="m-0">dateOfPosting:07-11-2001</p>
                                <p class="m-0">Openings:34</p>
                                <p class="m-0">
                                  Job Application:
                                  {blog.no_of_applicationsE2}
                                </p>
                                <p class="m-0">deadline:18-08-2023</p>
                                <p> contact number :{blog.contactnumberE2}</p>
                              </div>
                              <div class="col-md-3">
                                <button class="now-item" id="applyItem">
                                  Apply Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default AppliedJobs;
