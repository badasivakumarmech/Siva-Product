import "./Registration.css";

import Footer from "./Footer";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Registration() {
  const [Typesection, setSelectedType] = useState("applicant");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [phone, setphone] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  let navigate = useNavigate();
  const [data, setdata] = useState([]);

  const validateInputs = () => {
    let isValid = true;

    if (!name.match(/^[a-zA-Z\s]*$/)) {
      setNameError("Name should contain only letters and spaces");
      isValid = false;
    } else {
      setNameError("");
    }

    // if (!phone.match(/^[6789]\d{9}$/)) {
    //   setPhoneError(
    //     "phone number should start with 6, 7, 8, or 9 and have 10 digits"
    //   );
    //   isValid = false;
    // } else {
    //   setPhoneError("");
    // }
    if (!phone.match(/^[6789]\d{9}$/)) {
      setPhoneError(
        "Phone number should start with 6, 7, 8, or 9 and have 10 digits"
      );
      isValid = false;
    } else {
      setPhoneError("");
    }

    // if (password.length < 6 || password.length > 8) {
    //   setPasswordError("Password should be 6 to 8 characters long");
    //   isValid = false;
    // } else {
    //   setPasswordError("");
    // }
    if (
      !/^(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%^&*])[A-Za-z\d@#$!%^&*]{6,20}$/.test(
        password
      )
    ) {
      setPasswordError(
        "Password should start with a capital letter and contain at least one symbol and one number"
      );
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (password !== confirmpassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    return isValid;
  };

  console.log(name);

  const usersData = {
    Typesection: Typesection,
    name: name,
    email: email,
    contactNumber: phone,
    password: password,
    originalPassword: confirmpassword,
  };

  console.log(usersData);
  const onSubmitForm = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      const usersData = {
        Typesection: Typesection,
        name: name,
        email: email,
        contactNumber: phone,
        password: password,
        originalPassword: confirmpassword,
      };

      axios
        .post("http://localhost:4005/RegistrationDetails", usersData)
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

            setTimeout(function () {
              navigate("/LoginPage");
            }, 3000);
          }
        })
        .catch((error) => {
          toast.error("Email Already Exist, Please enter New Email", {
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
  console.log(Typesection);
  const [buttonOpacity, setButtonOpacity] = useState({
    jobSeekers: 1,
    recruiters: 0.4,
  });
  const handleTypeChange = (e) => {
    const type = e.target.value;
    setSelectedType(type);

    if (type === "applicant") {
      setButtonOpacity({ jobSeekers: 1, recruiters: 0.4 });
    } else if (type === "recruiter") {
      setButtonOpacity({ jobSeekers: 0.4, recruiters: 1 });
    }
  };

  const [vpassword, setvpassword] = useState(false);

  const ShowPassword = () => {
    setvpassword(!vpassword);
  };

  const [cpassword, setcpassword] = useState(false);

  const ShowcomfirmPassword = () => {
    setcpassword(!cpassword);
  };

  return (
    <div>
      {/* <nav class="navbar navbar-expand-sm">
        <div class="container">
          <div className="col-md-1"></div>
          <img src={logo} alt="logo" width="200px" />

          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <div className="col-12 col-sm-12 col-md-7 "></div>
            <ul class="navbar-nav logostyle12">
              <li class="nav-item ">
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
            </ul>
          </div>
        </div>
      </nav> */}
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
            <ul class="navbar-nav logostyle1">
              <li class="nav-item">
                <a
                  class="nav-link dropdown-toggle navstyle"
                  href="/BrowserJobs"
                >
                  Browse Jobs
                </a>
              </li>
              <li class="nav-item">
                {" "}
                <a class="nav-link dropdown-toggle navstyle" href="/Jobs">
                  Jobs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div class=" card container maincontent text-start">
          <div class="row">
            <div class="d-flex flex-row col-12 col-sm-12 col-md-6">
              <div
                class=" card  m-0 my-3 mb-5 col-12"
                style={{ borderRadius: "20px" }}
              >
                <h2 class="heading1 col-12 col-sm-12">Create an account</h2>
                <p class="para2">
                  It only takes a couple of minutes to get started!
                </p>
                {/* <div class="d-flex flex-row">
                    <Link to="/LoginPage">
                      {" "}
                      <a href="">
                        {" "}
                        <button type="button" class="b21 button32123  ">
                          {" "}
                          Login
                        </button>
                      </a>
                    </Link>
                    <button type="button" class="b2 button32123 " id="Jobbtn">
                      Sign Up
                      <i class="fa-solid fa-circle-check mx-2 icon1232"></i>
                    </button>
                  </div> */}

                <div className="d-flex flex-row ">
                  <button
                    type="button"
                    className="b21 button32123 mx-4"
                    id="Jobbtn"
                  >
                    <a
                      href="/LoginPage"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Login
                    </a>
                  </button>
                  <button
                    type="button"
                    className="b2 button32123 mx-0"
                    id="Jobbtn"
                  >
                    Sign Up
                    <input type="radio" checked className="mx-2" />
                  </button>
                </div>

                <div className="d-flex flex-row ">
                  <button
                    type="button"
                    className="b2 button32123 mx-4 "
                    id="Jobbtn"
                    style={{ opacity: buttonOpacity.jobSeekers }}
                  >
                    Job Seekers
                    <input
                      type="radio"
                      name="type"
                      value="applicant"
                      onChange={handleTypeChange}
                      className="mx-2"
                      checked={Typesection === "applicant"}
                    />
                  </button>
                  <button
                    type="button"
                    className="b2 button32123 "
                    id="Jobbtn"
                    style={{ opacity: buttonOpacity.recruiters }}
                  >
                    Recruiters
                    <input
                      type="radio"
                      name="type"
                      value="recruiter"
                      onChange={handleTypeChange}
                      className="mx-2"
                      checked={Typesection === "recruiter"}
                    />
                  </button>
                </div>
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
                  theme="light"
                />
                {/* Same as */}
                <ToastContainer />

                <form className="forms2 px-3" onSubmit={onSubmitForm}>
                  <label className="heading2">
                    {Typesection === "applicant" ? "Fullname" : "Company Name"}
                  </label>
                  <br />

                  <input
                    type="text"
                    className="p121"
                    placeholder={
                      Typesection === "applicant"
                        ? "   Enter your full name"
                        : "   Enter Company Name"
                    }
                    style={{ border: "1px solid#c9bed7" }}
                    onChange={(e) => setname(e.target.value)}
                    value={name}
                  />

                  <h6 className="error">{nameError}</h6>
                  <label className="heading2">Email ID</label>
                  <br />
                  <input
                    type="email"
                    className="p1"
                    placeholder="     Enter your Email ID"
                    onChange={(e) => setemail(e.target.value)}
                    value={email}
                  />
                  <br />
                  <div className="input-with-icon">
                    <label className="heading2">Password</label>
                    <br />
                    <div className="">
                      <input
                        type={vpassword ? "text" : "password"}
                        className={`p109  ${
                          passwordError ? "error-border" : ""
                        }`}
                        style={{ border: "1px solid #c9bed7" }}
                        placeholder="     Enter Password"
                        onChange={(e) => setpassword(e.target.value)}
                        value={password}
                      />
                      <i
                        class="fa-regular fa-eye icon"
                        onClick={ShowPassword}
                      ></i>
                    </div>
                    {passwordError && (
                      <h6 className="error">{passwordError}</h6>
                    )}
                  </div>

                  {/* <label className="heading2">Confirm Password</label>

                    <input
                      type="password"
                      className="p1"
                      placeholder="    Enter your  Confirm Password"
                      onChange={(e) => setconfirmpassword(e.target.value)}
                      value={confirmpassword}
                    />
                    <h6 className="error">{confirmPasswordError}</h6> */}

                  <div className="input-with-icon">
                    <label className="heading2">Confirm Password</label>
                    <br />
                    <div className="">
                      <input
                        type={cpassword ? "text" : "password"}
                        className={`p109  ${
                          passwordError ? "error-border" : ""
                        }`}
                        style={{ border: "1px solid #c9bed7" }}
                        placeholder="     Enter Password"
                        onChange={(e) => setconfirmpassword(e.target.value)}
                        value={confirmpassword}
                      />
                      <i
                        class="fa-regular fa-eye icon"
                        onClick={ShowcomfirmPassword}
                      ></i>
                    </div>
                    {passwordError && (
                      <h6 className="error">{confirmPasswordError}</h6>
                    )}
                  </div>

                  <label className="heading2">Mobile Number</label>
                  <br />
                  <select
                    style={{
                      marginLeft: "10px",
                      padding: "4px",
                      borderRadius: "10px",
                    }}
                  >
                    <option>+91</option>
                    <option>+86</option>
                    <option>+51</option>
                    <option>+44</option>
                    <option>+61</option>
                  </select>
                  {/* <input
                      type="text"
                      className="pp1"
                      placeholder="  Enter your Mobile Number"
                      style={{ border: "1px solid#c9bed7" }}
                      onChange={(e) => setphone(e.target.value)}
                      value={phone}
                    />

                    <h6 className="error">{phoneError}</h6> */}
                  <input
                    type="text"
                    className={`pp1 mt-2 ${
                      phone.length > 10 ? "error-border" : ""
                    }`}
                    placeholder="  Enter your Mobile Number"
                    style={{ border: "1px solid#c9bed7" }}
                    onChange={(e) => setphone(e.target.value)}
                    value={phone}
                  />
                  {phone.length > 10 ? (
                    <p className="error">Mobile number should be 10 digits</p>
                  ) : (
                    <h6 className="error">{phoneError}</h6>
                  )}

                  <p>
                    <i
                      class="fa-sharp fa-solid fa-circle-check"
                      style={{ color: "green" }}
                    />{" "}
                    I would like to get latest updates on Whatsapp
                  </p>
                  <p class="para3" style={{ marginLeft: "3px" }}>
                    By Clicking Register, you agree to the Terms and Conditions
                    & Privacy policy of pabjobs.com
                  </p>
                  <button class="Registerbtn">Register Now</button>
                </form>

                <div>
                  <p class="para1  d-md-none mx-3">
                    Already Registration? <span class="span1">Login</span> here
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 mt-4">
              {/* <img src={logo2} alt="pic" class="image2"  /> */}
              {Typesection === "applicant" ? (
                <div>
                  <img
                    src={
                      "https://img.freepik.com/premium-vector/online-registration-illustration-design-concept-websites-landing-pages-other_108061-939.jpg?w=2000"
                    }
                    alt="Applicant Logo"
                    className="image2"
                  />
                </div>
              ) : (
                <div>
                  <img
                    src={
                      "https://img.freepik.com/premium-vector/online-registration-illustration-design-concept-websites-landing-pages-other_108061-938.jpg?w=2000"
                    }
                    alt="Company Logo"
                    className="image2"
                  />
                </div>
              )}

              <p class="para4 mx-3 mt-4 w-100">
                <i class="fa-solid fa-circle-check icon1232"></i> Build your
                profile and let recruiters find you
              </p>

              <p class="para4 mx-3 w-100">
                <i class="fa-solid fa-circle-check icon1232"></i>
                Get job posting delivered right to your email
              </p>

              <p class="para4 mx-3 w-100">
                <i class="fa-solid fa-circle-check icon1232"></i> Find a job and
                grow your career
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Registration;
