// import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import Footer from "./Footer";
import React, { useState } from "react";
import axios, { Axios } from "axios";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import image111 from "../src/All Images/sivapic.jpg";

function ProfileCode() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const [fullname, setfullname] = useState("");
  const [radioSection, setradioSection] = useState("Fresher");
  const [State, setState] = useState("");
  const [Currentlocation, setCurrentlocation] = useState("");
  const [mobile, setmobile] = useState("");
  const [emailE1, setemail] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    document.getElementById("imageInput").style.display = "none";

    if (selectedImage) {
      // You can perform additional checks on the selected image here if needed
      setImage(URL.createObjectURL(selectedImage));
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    document.getElementById("experienceDropdown").style.marginRight = "20%";
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [data, setdata] = useState([]);
  console.log(fullname);

  const useData = {
    fullname: fullname,
    radioSection: radioSection,
    State: State,
    Currentlocation: Currentlocation,
    mobile: mobile,
    emailE1: emailE1,
  };
  console.log(useData);

  // const [error, setErrorMessage] = useState([]);
  // const [name, setName] = useState("");
  // const [mobileNumber, setMobileNumber] = useState("");
  // const [nameError, setNameError] = useState("");
  // const [mobileNumberError, setMobileNumberError] = useState("");

  // const validateName = (value) => {
  //   if (!/^[A-Za-z ]+$/.test(value)) {
  //     setNameError("Name should only contain letters");
  //   } else {
  //     setNameError("");
  //   }
  // };

  // const validateMobileNumber = (value) => {
  //   if (!/^\d{10}$/.test(value)) {
  //     setMobileNumberError("Mobile number should be 10 digits");
  //   } else {
  //     setMobileNumberError("");
  //   }
  // };

  // const handleNameChange = (e) => {
  //   const newName = e.target.value;
  //   setName(newName);
  //   validateName(newName);
  // };

  // const handleMobileNumberChange = (e) => {
  //   const newNumber = e.target.value;
  //   setMobileNumber(newNumber);
  //   validateMobileNumber(newNumber);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!nameError && !mobileNumberError && name && mobileNumber) {
  //     // Perform your submit logic here
  //     setErrorMessage("Form submitted successfully");
  //   }
  //      else {
  //     setErrorMessage("Form submission failed. Please check errors.");
  //   }

  //   if (
  //     fullname &&
  //     radioSection &&
  //     State &&
  //     Currentlocation &&
  //     mobile &&
  //     emailE1 !== ""
  //   ) {
  //     const headers = {
  //       token:
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk",
  //     };
  //     axios
  //       .post("http://localhost:4005/register", useData, { headers })
  //       .then((response) => {
  //         setdata(response.data);

  //         console.log(response.data);
  //         if (response.status === 200) {
  //           toast.success("Registration Successfull", {
  //             position: "top-right",
  //             autoClose: 1000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "colored",
  //           });
  //           setTimeout(function () {}, 3000);
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error.message);
  //       });
  //   } else {
  //     toast.warning("Enter the Required Details");
  //   }
  // };

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateInputs = () => {
    let isValid = true;

    if (!fullname.match(/^[a-zA-Z\s]*$/)) {
      setNameError("Name should contain only letters and spaces");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!mobile.match(/^[6789]\d{9}$/)) {
      setPhoneError(
        "Phone number should start with 6, 7, 8, or 9 and have 10 digits"
      );
      isValid = false;
    } else {
      setPhoneError("");
    }
    return isValid;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (validateInputs()) {
  //     const usersData = {
  //       fullname: fullname,
  //       radioSection: radioSection,
  //       State: State,
  //       Currentlocation: Currentlocation,
  //       mobile: mobile,
  //       emailE1: emailE1,
  //     };

  //     axios
  //       .post("http://localhost:4005/register", usersData)
  //       .then((response) => {
  //         console.log(response.data);
  //         if (response.status === 200) {
  //           toast.success("Registration Successful", {
  //             position: "top-right",
  //             autoClose: 1000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "colored",
  //           });
  //         }
  //       })
  //       .catch((error) => {
  //         toast.error("Email Already Exist, Please enter New Email", {
  //           position: "top-right",
  //           autoClose: 1000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "colored",
  //         });

  //         console.log(error.message);
  //       });
  //   } else {
  //     toast.warning("Enter valid details");
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      const useData = {
        fullname: fullname,
        radioSection: radioSection,
        State: State,
        Currentlocation: Currentlocation,
        mobile: mobile,
        emailE1: emailE1,
      };

      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk",
      };
      axios
        .post("http://localhost:4005/register", useData, { headers })
        .then((response) => {
          console.log(response.data);
          if (response.status === 200) {
            toast.success("Registration Successful", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        })
        .catch((error) => {
          toast.error("Email Already Exists, Please enter a New Email", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          console.log(error.message);
        });
    } else {
      toast.warning("Enter valid details");
    }
  };

  console.log(radioSection);
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark shadow mb-3 mt-2 ">
        <div class="container">
          <img src={logo} alt="" width="200px" />
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav mt-4" style={{ marginLeft: "130px" }}>
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
                  href="/PaymentMethod"
                  style={{ color: "black" }}
                >
                  payments
                </a>
              </li>
              <li class="nav-item">
                <i class="fa-solid fa-bell bellicon"></i>
              </li>

              <li class="col-md-3 col-lg nav-item">
                <div>
                  {/* <i class="" data-bs-toggle="dropdown" id="experienceDropdown">
                    <li class="nav-item logosymbol">
                      <Link to="">
                        <a href="">
                          <i class=" fa-sharp fa-solid fa-circle-user dropdown-toggle bellicon11"></i>
                        </a>
                      </Link>
                    </li>
                  </i> */}
                  <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <i
                      className="fa-solid fa-circle-user dropdown-toggle bellicon11 nav-item logosymbol"
                      id="experienceDropdown"
                    ></i>
                    {isHovered && (
                      <div class="card col-md-2 dropdown-menu">
                        <a href="">
                          <button class="p-2 mb-1 profilebutton h-25 text-dark">
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
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* card-Container */}

      <div class="container">
        <div class="row">
          <div class="col-md-3 mb-5">
            <div class="card ">
              {/* <i
                class=" fa-sharp fa-solid fa-circle-user profileicon mb-4 mt-3"
                style={{ fontSize: "200px" }}
              ></i> */}

              <div className="user-profile">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  id="imageInput"
                />

                {image && (
                  <img
                    src={image}
                    alt="User Profile"
                    className="rounded-circle w-100"
                  />
                )}
              </div>

              <a href="">
                <button class="p-2 mb-1 bg-primary profilebutton h-25 text-white">
                  Candidate Profile
                </button>
              </a>
              <a href="/ResumeDetails">
                <button class="p-2 mb-1 profilebutton  ">Resume</button>
              </a>
              <Link to="/AppliedJobs">
                {" "}
                <a href="">
                  <button class="p-2 mb-1 profilebutton  ">Applied Jobs</button>
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
          <div class="col-md-9 text-start">
            <div class="card p-3">
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
              <form onSubmit={handleSubmit}>
                <h5 class="profileh5 text-center">Basic Information</h5>
                <hr />

                <div>
                  <div className="col-md-5">
                    <label className="profilename mb-1">Name:</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="form-control w-100 p-2 m-0"
                      // value={name}
                      // onChange={handleNameChange}
                      style={{ border: "1px solid black" }}
                      onChange={(e) => setfullname(e.target.value)}
                      value={fullname}
                    />
                    {nameError && (
                      <span className="error mes">{nameError}</span>
                    )}
                  </div>
                </div>
                <div>
                  <p class="profileh5">Experience</p>
                  <input
                    type="radio"
                    name="select"
                    value="Fresher"
                    onChange={(e) => setradioSection(e.target.value)}
                  />
                  <label for="" class="m-2">
                    Fresher
                  </label>
                  <input
                    type="radio"
                    name="select"
                    value="Experienced"
                    onChange={(e) => setradioSection(e.target.value)}
                  />
                  <label for="" class="m-2">
                    Experienced
                  </label>
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <label for="" class="profileh5 mb-1">
                      State
                    </label>
                    <br />
                    {/* <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your State"
                      class="form-control w-100 p-2 profileselect m-0"
                      style={{ border: "1px solid black" }}
                      onChange={(e) => setState(e.target.value)}
                      value={State}
                    /> */}
                    {/* <!--- India states --> */}

                    <select
                      id="country-state"
                      name="country-state"
                      className="form-control1 w-100 profileselect m-0"
                      onChange={(e) => setState(e.target.value)}
                      value={State}
                    >
                      <option
                        value=""
                        onChange={(e) => setState(e.target.value)}
                      >
                        Select state
                      </option>
                      <option
                        value="AN"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Andaman and Nicobar Islands
                      </option>
                      <option
                        value="AP"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Andhra Pradesh
                      </option>
                      <option
                        value="AR"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Arunachal Pradesh
                      </option>
                      <option
                        value="AS"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Assam
                      </option>
                      <option
                        value="BR"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Bihar
                      </option>
                      <option
                        value="CH"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Chandigarh
                      </option>
                      <option
                        value="CT"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Chhattisgarh
                      </option>
                      <option
                        value="DN"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Dadra and Nagar Haveli
                      </option>
                      <option
                        value="DD"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Daman and Diu
                      </option>
                      <option
                        value="DL"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Delhi
                      </option>
                      <option
                        value="GA"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Goa
                      </option>
                      <option
                        value="GJ"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Gujarat
                      </option>
                      <option
                        value="HR"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Haryana
                      </option>
                      <option
                        value="HP"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Himachal Pradesh
                      </option>
                      <option
                        value="JK"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Jammu and Kashmir
                      </option>
                      <option
                        value="JH"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Jharkhand
                      </option>
                      <option
                        value="KA"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Karnataka
                      </option>
                      <option
                        value="KL"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Kerala
                      </option>
                      <option
                        value="LA"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Ladakh
                      </option>
                      <option
                        value="LD"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Lakshadweep
                      </option>
                      <option
                        value="MP"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Madhya Pradesh
                      </option>
                      <option
                        value="MH"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Maharashtra
                      </option>
                      <option
                        value="MN"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Manipur
                      </option>
                      <option
                        value="ML"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Meghalaya
                      </option>
                      <option
                        value="MZ"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Mizoram
                      </option>
                      <option
                        value="NL"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Nagaland
                      </option>
                      <option
                        value="OR"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Odisha
                      </option>
                      <option
                        value="PY"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Puducherry
                      </option>
                      <option
                        value="PB"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Punjab
                      </option>
                      <option
                        value="RJ"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Rajasthan
                      </option>
                      <option
                        value="SK"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Sikkim
                      </option>
                      <option
                        value="TN"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Tamil Nadu
                      </option>
                      <option
                        value="TG"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Telangana
                      </option>
                      <option
                        value="TR"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Tripura
                      </option>
                      <option
                        value="UP"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Uttar Pradesh
                      </option>
                      <option
                        value="UT"
                        onChange={(e) => setState(e.target.value)}
                      >
                        Uttarakhand
                      </option>
                      <option
                        value="WB"
                        onChange={(e) => setState(e.target.value)}
                      >
                        West Bengal
                      </option>
                    </select>
                  </div>
                  <div class="col-md-1"></div>
                  <div class="col-md-4">
                    <label for="" class="profileh5 mb-1">
                      Current location
                    </label>
                    <br />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your Location"
                      class="form-control w-100 p-2 profileselect m-0"
                      style={{ border: "1px solid black" }}
                      onChange={(e) => setCurrentlocation(e.target.value)}
                      value={Currentlocation}
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div>
                      <label className="profileh5 mb-1">Mobile Number:</label>
                      {/* <input
                        type="text"
                        // value={mobileNumber}
                        // onChange={handleMobileNumberChange}
                        placeholder="Enter your mobile number"
                        className="form-control w-100 p-2 profileselect m-0"
                        style={{ border: "1px solid black" }}
                        onChange={(e) => setmobile(e.target.value)}
                        value={mobile}
                      />
                      {mobileNumberError && (
                        <span className="error mes">{mobileNumberError}</span>
                      )} */}
                      <input
                        type="text"
                        className={`form-control w-100 p-2 profileselect m-0 ${
                          mobile.length > 10 ? "error-border" : ""
                        }`}
                        placeholder="  Enter your Mobile Number"
                        style={{ border: "1px solid black" }}
                        onChange={(e) => setmobile(e.target.value)}
                        value={mobile}
                      />
                      {mobile.length > 10 ? (
                        <p className="error">
                          Mobile number should be 10 digits
                        </p>
                      ) : (
                        <h6 className="error">{phoneError}</h6>
                      )}
                    </div>
                  </div>
                  <div class="col-md-1"></div>
                  <div class="col-md-4">
                    <label for="" class="profileh5 mb-1">
                      Email
                    </label>
                    <br />
                    {/* <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your Email Address"
                      class="form-control w-100 p-2 profileselect m-0 "
                      style={{ border: "1px solid black" }}
                      onChange={(e) => setemail(e.target.value)}
                      value={emailE1}
                    /> */}
                    <input
                      type="email"
                      className="form-control w-100 p-2 profileselect m-0"
                      placeholder="Enter your Email Address"
                      style={{ border: "1px solid black" }}
                      onChange={(e) => setemail(e.target.value)}
                      value={emailE1}
                    />
                  </div>
                </div>

                {/* <h5 className="message-code">{error}</h5> */}
                <div className="col-12 col-md-4">
                  <button type="submit" className=" mt-4 profilebutton1">
                    Update Details
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default ProfileCode;
