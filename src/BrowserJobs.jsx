import React from "react";
import Footer from "./Footer";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import { Link } from "react-router-dom";
import "./home.css";
import "./BrowserJobs.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function BrowserJobs() {
  const [selectedExperiences, setSelectedExperiences] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedSalary, setSelectedSalary] = useState([]);
  const [blogslist, setblogslist] = useState([]);
  const [selectedblog, setselectedblog] = useState("");
  const [userState, setuserState] = useState("");
  const [userlocation, setUserLocation] = useState("");

  // const [usereperience, setusereperience] = useState("");
  // const [userlocation1, setuserlocation1] = useState("");
  // const [usersalary, setusersalary] = useState("");

  const [selectedCardIndexes, setSelectedCardIndexes] = useState([]);

  // ...

  const toggleCardSelection = (index) => {
    // Clone the selectedCardIndexes array to avoid mutating state directly
    const updatedSelectedCardIndexes = [...selectedCardIndexes];

    // Check if the card is already selected
    const selectedIndex = updatedSelectedCardIndexes.indexOf(index);

    if (selectedIndex === -1) {
      // If it's not selected, add it to the list and set its color
      updatedSelectedCardIndexes.push(index);
    } else {
      // If it's already selected, remove it from the list
      updatedSelectedCardIndexes.splice(selectedIndex, 1);
    }

    setSelectedCardIndexes(updatedSelectedCardIndexes);
  };

  const { state } = useLocation();
  console.log("siva", state);

  useEffect(() => {
    fetchblogs();
  }, [selectedExperiences, selectedSalary]);

  const fetchblogs = async () => {
    const api = " http://localhost:4005/allusers";
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk";
    try {
      const response = await axios.get(api, {
        headers: {
          token: `${authToken}`,
        },
      });
      setblogslist(response.data);
      if (state?.location) {
        handleFilter(state?.location, response.data);
        // handleFilter1(state?.location, response.data)
      }
      if (response.data.length > 0) {
        setselectedblog(response.data[0]);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleApply = async (blog) => {
    try {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk", // Replace with your actual auth token
      };

      const {
        companynameE2,
        contactnumberE2,
        emailE2,
        stateE2,
        countryE2,
        experienceE2,
        salaryE2,
        roleE2,
        no_of_applicationsE2,
        ImageE2,
      } = blog;

      const response = await axios.post(
        "http://localhost:4005/ApplyNow",
        {
          companynameE2,
          contactnumberE2,
          emailE2,
          stateE2,
          countryE2,
          experienceE2,
          salaryE2,
          roleE2,
          no_of_applicationsE2,
          ImageE2,
        },
        { headers }
      );

      if (response.status === 201) {
        // User created successfully
        toast.success("User created successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else if (
        response.status === 400 &&
        response.data.message === "User already exists"
      ) {
        // User already exists
        toast.error("User with the same email already exists", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        // Internal server error or other errors
        toast.error("An error occurred. Please try again later.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("User with the same email already exists.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const SaveJobsApply = async (blog) => {
    // try {

    //   const headers = {
    //     token:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk",
    //   };
    //   const {
    //     companynameE2,
    //     contactnumberE2,
    //     emailE2,
    //     stateE2,
    //     countryE2,
    //     experienceE2,
    //     salaryE2,
    //     roleE2,
    //     no_of_applicationsE2,
    //     ImageE2,
    //   } = blog;
    //   await axios.post("http://localhost:4005/SaveJobsNow", {
    //     companynameE2,
    //     contactnumberE2,
    //     emailE2,
    //     stateE2,
    //     countryE2,
    //     experienceE2,
    //     salaryE2,
    //     roleE2,
    //     no_of_applicationsE2,
    //     ImageE2,
    //   },{headers});
    //   toast.success("Data stored successfully");
    // } catch (error) {
    //   console.error(error);
    // }
    try {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk", // Replace with your actual auth token
      };

      const {
        companynameE2,
        contactnumberE2,
        emailE2,
        stateE2,
        countryE2,
        experienceE2,
        salaryE2,
        roleE2,
        no_of_applicationsE2,
        ImageE2,
      } = blog;

      const response = await axios.post(
        "http://localhost:4005/SaveJobsNow",
        {
          companynameE2,
          contactnumberE2,
          emailE2,
          stateE2,
          countryE2,
          experienceE2,
          salaryE2,
          roleE2,
          no_of_applicationsE2,
          ImageE2,
        },
        { headers }
      );

      if (response.status === 201) {
        // User created successfully
        toast.success("User created successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else if (
        response.status === 400 &&
        response.data.message === "User already exists"
      ) {
        // User already exists
        toast.error("User with the same email already exists", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        // Internal server error or other errors
        toast.error("An error occurred. Please try again later.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("User with the same email already exists.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const onclickblogdetails = async (blogid) => {
    const selectedJobDetails = blogslist.find((each) => each._id === blogid);
    console.log(selectedJobDetails);
    setselectedblog(selectedJobDetails);
  };

  console.log(blogslist);
  console.log(selectedblog);

  const searchBySkills = () => {
    const filteredJobs = blogslist.filter(
      (blog) =>
        blog.companynameE2 &&
        blog.companynameE2
          .toLowerCase()
          .includes(userlocation.toLowerCase().trim()) &&
        blog.stateE2 &&
        blog.stateE2.toLowerCase().includes(userState.toLowerCase().trim())
    );
    setblogslist(filteredJobs);
  };
  // const userExperience = (e) => {
  //   const fillter = blogslist.filter((blog) => blog.experienceE2.includes(e));
  //   setblogslist(fillter);
  //   setusereperience(fillter);
  //   setselectedblog(fillter[0]);
  // };
  const userExperience = (e) => {
    if (e.target.checked) {
      setSelectedExperiences([...selectedExperiences, e.target.value]);
    } else {
      setSelectedExperiences(
        selectedExperiences.filter((exp) => exp !== e.target.value)
      );
    }
  };

  const filterJobsByExperience = () => {
    if (selectedExperiences.length === 0) {
      setblogslist(blogslist);
      setselectedblog(blogslist[0]);
    } else {
      const filteredBlogs = blogslist.filter((blog) =>
        selectedExperiences.includes(blog.experienceE2)
      );
      setblogslist(filteredBlogs);
      setselectedblog(filteredBlogs[0]);
    }
  };

  // const userLocation12 = (e) => {
  //   const filterlocation = blogslist.filter((blog) => blog.stateE2.includes(e));
  //   setblogslist(filterlocation);
  //   setuserlocation1(filterlocation);
  //   setselectedblog(filterlocation[0]);
  // };
  const userLocation122 = (el) => {
    if (el.target.checked) {
      setSelectedLocation([...selectedLocation, el.target.value]);
    } else {
      setSelectedLocation(
        selectedLocation.filter((Loc) => Loc !== el.target.value)
      );
    }
  };

  const filterJobsByLocation = () => {
    if (selectedLocation.length === 0) {
      setblogslist(blogslist);
      setselectedblog(blogslist[0]);
    } else {
      const filteredBlogs1 = blogslist.filter((blog) =>
        selectedLocation.includes(blog.stateE2)
      );
      setblogslist(filteredBlogs1);
      setselectedblog(filteredBlogs1[0]);
    }
  };

  // const userSalary = (e) => {
  //   const fillterSalary = blogslist.filter((blog) => blog.salaryE2.includes(e));
  //   setblogslist(fillterSalary);
  //   setusersalary(fillterSalary);
  //   setselectedblog(fillterSalary[0]);
  // };
  const userSalary122 = (es) => {
    if (es.target.checked) {
      setSelectedSalary([...selectedSalary, es.target.value]);
    } else {
      setSelectedSalary(
        selectedSalary.filter((sal) => sal !== es.target.value)
      );
    }
  };

  const filterJobsBySalary = () => {
    if (selectedSalary.length === 0) {
      setblogslist(blogslist);
      setselectedblog(blogslist[0]);
    } else {
      const filteredBlogs2 = blogslist.filter((blog) =>
        selectedSalary.includes(blog.salaryE2)
      );
      setblogslist(filteredBlogs2);
      setselectedblog(filteredBlogs2[0]);
    }
  };

  const handleFilter = (company, alljobs = blogslist) => {
    company = Array.isArray(company) ? company : [company];
    const filter = alljobs.filter((job) => {
      return company.includes(job.companynameE2);
    });
    console.log(filter);
    setblogslist(filter);
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
            <ul class="navbar-nav logostyle">
              <li class="nav-item">
                <a class="nav-link navstyle " href="/Home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link dropdown-toggle navstyle1" href="">
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
                <a
                  class="nav-link dropdown-toggle navstyle"
                  href="/PaymentMethod "
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

      <div class="container8">
        <div class="row">
          <div class="col-12">
            <h6 class="homepara1 mt-4">
              Home <i class="fa-solid fa-greater-than"></i>Browser Filter List
            </h6>
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
                    value={userlocation}
                    onChange={(e) => setUserLocation(e.target.value)}
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
                    value={userState}
                    onChange={(e) => setuserState(e.target.value)}
                  />
                </div>
                <div>
                  <i class="fa-solid fa-sort-down p-2 "></i>
                </div>
              </div>
            </div>
          </div>
          <div class="homebutton1">
            <button class="subbutton1" onClick={searchBySkills}>
              Search
            </button>
          </div>
        </div>
      </div>
      {/* //heading-cards */}
      <section class="container">
        <div class="row">
          <div class="col-lg-1"></div>
          <div class="col-lg-11">
            <div class="d-flex flex-row row">
              <li class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle location21"
                    data-bs-toggle="dropdown"
                    id="experienceDropdown"
                  >
                    Experience
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          value="2-3years"
                          onChange={userExperience}
                        />
                        2-3years
                      </label>
                    </li>

                    <li>
                      <label>
                        <input
                          type="checkbox"
                          value="3 years"
                          onChange={userExperience}
                        />
                        3 years
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          value="4 years"
                          onChange={userExperience}
                        />
                        4 years
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          value="4-5years"
                          onChange={userExperience}
                        />
                        4-5years
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          value="5 years"
                          onChange={userExperience}
                        />
                        5 years
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          value="6-7years"
                          onChange={userExperience}
                        />
                        6-7years
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          value="15-16 years"
                          onChange={userExperience}
                        />
                        15-16 years
                      </label>
                    </li>

                    <div class="homebutton1">
                      <button
                        class="subbutton1"
                        onClick={filterJobsByExperience}
                      >
                        Search
                      </button>
                    </div>
                  </ul>
                </div>
              </li>

              {/* <li class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle location21"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Location
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={() => {
                          userLocation12("Maharashtra");
                        }}
                      >
                        Maharashtra
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={() => {
                          userLocation12("Tamilnadu");
                        }}
                      >
                        Tamilnadu
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={() => {
                          userLocation12("Telagana");
                        }}
                      >
                        Telagana
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={() => {
                          userLocation12("Bangalore");
                        }}
                      >
                        Bangalore
                      </a>
                    </li>
                  </ul>
                </div>
              </li> */}
              <li class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle location21"
                    data-bs-toggle="dropdown"
                    id="experienceDropdown"
                  >
                    Location
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          value="Maharashtra"
                          onChange={userLocation122}
                        />
                        Maharashtra
                      </label>
                    </li>

                    <li>
                      <label>
                        <input
                          type="checkbox"
                          value="Tamilnadu"
                          onChange={userLocation122}
                        />
                        Tamilnadu
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          value="Telagana"
                          onChange={userLocation122}
                        />
                        Telagana
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          value="Bangalore"
                          onChange={userLocation122}
                        />
                        Bangalore
                      </label>
                    </li>

                    <div class="homebutton1">
                      <button class="subbutton1" onClick={filterJobsByLocation}>
                        Search
                      </button>
                    </div>
                  </ul>
                </div>
              </li>

              {/* <li class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle location21"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Salary
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={() => {
                          userSalary("9-4");
                        }}
                      >
                        9-4 LPA
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={() => {
                          userSalary("10-15");
                        }}
                      >
                        10-15 LPA
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={() => {
                          userSalary("12-16");
                        }}
                      >
                        12-16 LPA
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={() => {
                          userSalary("13-15");
                        }}
                      >
                        13-15 LPA
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={() => {
                          userSalary("15-20");
                        }}
                      >
                        15-20 LPA
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={() => {
                          userSalary("20-25");
                        }}
                      >
                        20-25 LPA
                      </a>
                    </li>
                  </ul>
                </div>
              </li> */}
              <li class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle location21"
                    data-bs-toggle="dropdown"
                    id="experienceDropdown"
                  >
                    Salary
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          value="9-4 LPA"
                          onChange={userSalary122}
                        />
                        9-4 LPA
                      </label>
                    </li>

                    <li>
                      <label>
                        <input
                          type="checkbox"
                          value="10-15 LPA"
                          onChange={userSalary122}
                        />
                        10-15 LPA
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          value="12-16 LPA"
                          onChange={userSalary122}
                        />
                        12-16 LPA
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          value="13-15 LPA"
                          onChange={userSalary122}
                        />
                        13-15 LPA
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          value="15-20 LPA"
                          onChange={userSalary122}
                        />
                        15-20 LPA
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          value="20-25 LPA"
                          onChange={userSalary122}
                        />
                        20-25 LPA
                      </label>
                    </li>

                    <div class="homebutton1">
                      <button class="subbutton1" onClick={filterJobsBySalary}>
                        Search
                      </button>
                    </div>
                  </ul>
                </div>
              </li>

              <li class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle indusrty"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Industry
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Manufacturing
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Construction
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        IT
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Transport
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Food industry
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle indusrty"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Destignation
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Chief Customer Officer
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Chief Financial Officer
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Chief Information Officer
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Chief Human Resources Officer
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Chief Product Officer
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle indusrty"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Education
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Any Postgraduate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Any Graduate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        MBA/PGDM{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        M.Pharma{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        MBBS{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Diploma{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Medical-MS/MD{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle indusrty"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Skills
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Core Java
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Dot Net
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Python
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Testing
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        AWS
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Advance Java
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Frames
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </div>
          </div>
          {/* <!-- <div class="col-md"></div> --> */}
        </div>
        {/* <!-- Card Section --> */}
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        {blogslist.length > 0 ? (
          <div>
            {" "}
            <div></div>
          </div>
        ) : (
          <div>
            <img
              src="https://res.cloudinary.com/dxyifvqon/image/upload/v1693288888/file-not-found-illustration-with-confused-people-holding-big-magnifier-search-no-result-data-not-found-concept-can-be-used-for-website-landing-page-animation-etc-vector_h5ojsb.jpg"
              className="w-50 mx-5"
            ></img>
          </div>
        )}
        <p class="result my-3 text-start text-black">
          Showing no of cards{" "}
          <span className="text-danger" style={{ fontWeight: "bold" }}>
            {blogslist.length}
          </span>
        </p>
        <div class="row text-start">
          <div class="col-lg-1"></div>
          <div class="col-lg-11">
            <div class="row">
              <ul className="col-12 col-md-4">
                {blogslist.map((blog) => (
                  <div
                    className={`active1 ${
                      selectedblog && selectedblog._id === blog._id
                        ? "select"
                        : ""
                    }`}
                    onClick={(e) => onclickblogdetails(blog._id)}
                  >
                    <div>
                      <p class="graphics-item m-0">
                        {blog.companynameE2}
                        <span class="package">{blog.salaryE2}</span>
                      </p>
                      <p class="angel">{blog.stateE2} </p>
                      <p>Angel Broking</p>
                      <p class="m-0">{blog.roleE2} </p>
                      <p class="m-0">{blog.experienceE2} </p>

                      <span class=" publish">Published one day ago</span>
                    </div>
                  </div>
                ))}
              </ul>
              {selectedblog && (
                <div class="col-lg-7 col-md-12" key={selectedblog.id}>
                  <div class="container">
                    <div class="row">
                      <div class="">
                        <div class="bg-element">
                          <div class="d-flex flex-row row">
                            <div class="wipro-item item-wipro col-md-6 mt-2">
                              <div class="row">
                                <div class="col-lg-3">
                                  <img
                                    src={selectedblog.ImageE2}
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
                                    {selectedblog.roleE2}
                                  </p>
                                  <p
                                    class="graphics1-item m-0"
                                    style={{ fontSize: "17px" }}
                                  >
                                    {selectedblog.companynameE2}
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
                                  {selectedblog.salaryE2}

                                  <div
                                   
                                    key={selectedblog}
                                    className={`bookmark ${
                                      selectedCardIndexes.includes(selectedblog)
                                        ? "selected12"
                                        : ""
                                    }`}
                                    onClick={() =>
                                      toggleCardSelection(selectedblog)
                                    }
                                  >
                                    <i
                                      class="fa-solid fa-bookmark book11"
                                      id="bookItem"
                                      onClick={() =>
                                        SaveJobsApply(selectedblog)
                                      }
                                    ></i>
                                    {/* <i
                                      className="fa-solid fa-bookmark book11"
                                      id="bookItem"
                                     
                                      onClick={handleIconClick}
                                    ></i> */}
                                  </div>
                                </p>
                                <p class="m-0">
                                  <i class="fa-solid fa-location-dot"></i>{" "}
                                  {selectedblog.stateE2}
                                </p>
                                <p class="m-0">
                                  <i class="fa-solid fa-location-dot"></i>{" "}
                                  {selectedblog.countryE2}
                                </p>
                                <p class="m-0">
                                  <i class="fa-solid fa-briefcase"></i>{" "}
                                  {selectedblog.experienceE2}
                                </p>
                                <div className="d-flex flex-row">
                                  <span class="material-symbols-outlined mt-1">
                                    outgoing_mail
                                  </span>
                                  <span className="mx-1">
                                    {" "}
                                    {selectedblog.emailE2}
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
                                {selectedblog.no_of_applicationsE2}
                              </p>
                              <p class="m-0">deadline:18-08-2023</p>
                              <p>
                                {" "}
                                contact number :{selectedblog.contactnumberE2}
                              </p>
                            </div>
                            <div class="col-md-3">
                              <button
                                class="now-item"
                                id="applyItem"
                                onClick={() => handleApply(selectedblog)}
                              >
                                Apply Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="bg-element scroll-item p-4 my-5">
                        <h5>Job Description</h5>
                        <h6>Roles and Responsibilities</h6>
                        <p>{selectedblog.descriptionE2}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default BrowserJobs;
