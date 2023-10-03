import "./Registration.css";

import { Link } from "react-router-dom";

import React from "react";
import logo from "../src/All Images/pab bottom-logo (1).jpg";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

function LoginPage() {
  let navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const isValidEmail = (email) => {
    // A simple email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  console.log(email);
  const usersData = {
    email: email,
    password: password,
  };
  console.log(usersData);

  // const onSubmitBtn = (e) => {
  //   e.preventDefault();
  //   if (email && validateInputs() && password !== "") {
  //     axios
  //       .post("http://localhost:4005/login", usersData)
  //       .then((response) => {
  //         if (response.status === 200) {
  //           let jwtToken = response.data.token;
  //           localStorage.setItem("token", jwtToken);

  //           toast.success("open Home Page", {
  //             position: "top-right",
  //             autoClose: 5000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "colored",
  //           });

  //           setTimeout(function () {
  //             navigate("/Home");
  //           }, 3000);
  //         }
  //       })
  //       .catch((error) => {
  //                   toast.error("Enter The Correct mail", {
  //                     position: "top-right",
  //                     autoClose: 1000,
  //                     hideProgressBar: false,
  //                     closeOnClick: true,
  //                     pauseOnHover: true,
  //                     draggable: true,
  //                     progress: undefined,
  //                     theme: "colored",
  //                   });

  //                   console.log(error.message);
  //       });
  //   } else {
  //     toast.warning("Enter the Required Details");
  //   }
  // };

  const onSubmitBtn = (e) => {
    e.preventDefault();

    if (email && password !== "") {
      if (!isValidEmail(email, password)) {
        toast.error("Enter a valid email address", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
      const userData = { email, password };

      axios
        .post("http://localhost:4005/login", userData)
        .then((response) => {
          if (response.status === 200) {
            let jwtToken = response.data.token;
            localStorage.setItem("token", jwtToken);

            toast.success("Successfully logged in!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });

            setTimeout(function () {
              navigate("/Home");
            }, 3000);
          }
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 401) {
              if (error.response.data.message === "Email not found") {
                toast.error("Email not found. Please check your email.", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
              } else if (error.response.data.message === "Incorrect password") {
                toast.error("Incorrect password. Please check your password.", {
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
            } else {
              toast.error(
                "An error occurred on the server. Please try again later.",
                {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                }
              );
            }
          } else {
            toast.error(
              "An error occurred. Please check your network connection and try again.",
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              }
            );
            console.error(error);
          }
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };

  // const onSubmitBtn = (e) => {
  //   e.preventDefault();

  //   if (email && password !== "") {
  //     if (!isValidEmail(email)) {
  //       toast.error("Enter a valid email address", {
  //         position: "top-right",
  //         autoClose: 1000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "colored",
  //       });
  //       return;
  //     }

  //     // Data to send to the server
  //     const userData = { email, password };

  //     axios
  //       .post("http://localhost:4005/login", userData)
  //       .then((response) => {
  //         if (response.status === 200) {
  //           // Check the response data to determine success or error
  //           if (response.data.emailExists && response.data.passwordCorrect) {
  //             // Both email and password are correct
  //             let jwtToken = response.data.token;
  //             localStorage.setItem("token", jwtToken);

  //             toast.success("Successfully logged in!", {
  //               position: "top-right",
  //               autoClose: 5000,
  //               hideProgressBar: false,
  //               closeOnClick: true,
  //               pauseOnHover: true,
  //               draggable: true,
  //               progress: undefined,
  //               theme: "colored",
  //             });

  //             // Navigate to the Home page after successful login
  //             setTimeout(function () {
  //               navigate("/Home");
  //             }, 3000);
  //           } else if (!response.data.emailExists) {
  //             // Email does not exist
  //             toast.error("Email not found. Please check your email.", {
  //               position: "top-right",
  //               autoClose: 1000,
  //               hideProgressBar: false,
  //               closeOnClick: true,
  //               pauseOnHover: true,
  //               draggable: true,
  //               progress: undefined,
  //               theme: "colored",
  //             });
  //           } else {
  //             // Password is incorrect
  //             toast.error("Incorrect password. Please check your password.", {
  //               position: "top-right",
  //               autoClose: 1000,
  //               hideProgressBar: false,
  //               closeOnClick: true,
  //               pauseOnHover: true,
  //               draggable: true,
  //               progress: undefined,
  //               theme: "colored",
  //             });
  //           }
  //         }
  //       })
  //       .catch((error) => {
  //         toast.error("An error occurred. Please check your network connection and try again.", {
  //           position: "top-right",
  //           autoClose: 1000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "colored",
  //         });
  //         console.error(error);
  //       });
  //   } else {
  //     toast.warning("Enter the Required Details");
  //   }
  // };
  const [loginpassword, setloginpassword] = useState(false);

  const ShowcomfirmPassword = () => {
    setloginpassword(!loginpassword);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <nav class="navbar navbar-expand-sm ">
            <div class="container">
              <img src={logo} alt="logo" width="200px" />
            </div>
          </nav>
          <div className="container5">
            <div class="container">
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="card shadow logincard1 ">
                    <div class="loginheader">
                      <h2 class="loginheader1">Login</h2>
                      <p class="loginpara">
                        It only takes a couple of minutes to get started!
                      </p>
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
                    <form className="forms2" onSubmit={onSubmitBtn}>
                      <label className="heading123">Email ID</label>
                      <br />
                      <input
                        type="text"
                        className="p1"
                        style={{ border: "1px solid #c9bed7" }}
                        placeholder="  Enter your Email ID"
                        onChange={(e) => setemail(e.target.value)}
                        value={email}
                      />
                      <br />

                      {/* <label className="heading123">Password</label>
                  <br />
                  <input
                    type="password"
                    className="p1"
                    placeholder="  Enter your Password"
                    onChange={(e) => setpassword(e.target.value)}
                    value={password}
                  /> */}
                      <div className="input-with-icon">
                        <label className="heading123">Password</label>
                        <br />
                        <div className="">
                          <input
                            type={loginpassword ? "text" : "password"}
                            className="p10912"
                            style={{ border: "1px solid #c9bed7" }}
                            placeholder="   Minimum 6 characters, starting capital, symbol, and number"
                            onChange={(e) => setpassword(e.target.value)}
                            value={password}
                          />
                          <i
                            class="fa-regular fa-eye icon1"
                            onClick={ShowcomfirmPassword}
                          ></i>
                        </div>
                      </div>

                      <a
                        href="/ForgotPassword"
                        style={{ textDecoration: "none" }}
                      >
                        <span className="forgetpassword1">
                          Forgot password?
                        </span>
                      </a>
                      <button class="Registerbtn11" type="submit">
                        Login
                      </button>
                      <button
                        class="text-center loginvia mt-3"
                        style={{ color: "blue", border: "none",backgroundColor: "white" }}
                      >
                        Login via OTP
                      </button>
                      <br />
                      <span class="logingoogle">
                        <button class="loginbutton2 shadow w-50 mt-3 mb-5">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVDA2e7vaSAfhljLBVppf2X0b0OuAxTQZqjYZcemxu6Umeik13cJI3HYISVRfEz9SMQA&usqp=CAU"
                            alt=""
                            class="googleimg"
                          />
                          Sign in with Google
                        </button>
                      </span>
                    </form>
                  </div>
                  <a href="">
                    <button class="Register shadow  d-md-none">
                      Register for free
                    </button>
                  </a>
                </div>

                <div class="col-12 col-md-1"></div>

                <div class="col-12 col-md-4 d-none d-md-block">
                  <div class="card shadow logincard2">
                    <h2 class="pabjobheading">New to pabjobs?</h2>
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/003/689/228/small/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
                      alt=""
                    />
                  </div>
                  <div class="loginspan1 col-md-10 w-100 text-start">
                    <p class="para4 mx-4 mt-2 w-100">
                      <i class="fa-solid fa-circle-check icon1232"></i> Build
                      your profile and let recruiters find you
                    </p>

                    <p class="para4 mx-4 w-100">
                      <i class="fa-solid fa-circle-check icon1232"></i>
                      Get job posting delivered right to your email
                    </p>

                    <p class="para4 mx-4 w-100">
                      <i class="fa-solid fa-circle-check icon1232"></i> Find a
                      job and grow your career
                    </p>
                    <p class="para4 mx-4 w-100">
                      <i class="fa-solid fa-circle-check icon1232"></i> Find a
                      job and grow your career
                    </p>
                  </div>

                  <Link to="/">
                    {" "}
                    <a href="">
                      <button class="Register shadow mb-5">
                        Register for free
                      </button>
                    </a>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
