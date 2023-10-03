import { Link } from "react-router-dom";
import { useState } from "react";


const Auth = () => {

    const [selectedType, setSelectedType] = useState("recruiter")


  

    return (

        <div className="mt-5">
            <div class="container2">
                <div class="row">
                    <div class="col-12 col-md-1">

                    </div>
                    <div class=" col-md-5 maincard">
                        <div class="card mt-5 maincard1">
                            <h1 class="container2heading">Create an account</h1>
                            <p class="container2para">it only takes a couple of minutes to get started!</p>
                            <div class="d-flex flex-row justify-content-center container2button">
                                <Link to="/About"> <a href="loginform.html"> <button class="button shadow" id="" onclick="">Login <i
                                    class="fa-solid f-circle-check  jan1" id=""></i></button></a></Link>
                                <button class="button shadow  " id="" onclick="">Signup <i
                                    class="fa-solid fa-circle-check  jan1" id=""></i></button>
                            </div>
                            
                            </div>
                            <div className="d-flex flex-column">
                            <div className="d-flex flex-row justify-content-center container2button">
                            <div >
                                <button className="button1 shadow " id="taskButton" onclick="taskButton()">Job seekers
                                <input type="radio" name="type" id="icon1" className="jan" value="jobseeker" onChange={((e)=>setSelectedType(e.target.value))} /></button>
                            </div>
                            <span style={{ fontSize: "30px", color: "black" }} >|</span>
                            <div>
                                            <button class="button2 shadow" id="taskButton2" onclick="taskButton2()">Recruiters
                                                <input type="radio" name="type" id="icon2" class="jan" value="recruiter" onChange={((e)=>setSelectedType(e.target.value))}/> </button>
                            </div>
                               
                            <div className=" d-md-none loginsm">
                                <a href="loginform.html"><p class="pabjobs-header-para ">Already Registered?<b class="login">Login</b> here</p></a>
                            </div>
                            </div>
                            {selectedType === "jobseeker" ? (
                                    <div>
                                    
                                        <div class="form">
                                            <label for="" id="fullname" class="loginlabel">Full Name</label>
                                            <input type="text" class=" form-control" placeholder="enter your full name" id="input" />
                                            <label for="" class="loginlabel">Email ID</label>
                                            <input type="email" class="form-control " placeholder="enter your Email ID" id="input" />
                                            <label for="" class="loginlabel">Password</label>
                                            <input type="password" class="form-control " placeholder="minimum 6 charactres" id="input" />
                                            <label for="" class="loginlabel">Mobile Number</label><br />
                                            <div class="d-flex flex-row">
                                                <select name="" id="number">
                                                    <option value="">+91</option>
                                                </select>

                                                <input type="text" class="form-control " placeholder="Enter your mobile number" id="input" />
                                            </div>

                                            <div id="gender">
                                                <b>Gender</b> <br /><input type="radio" name="movie" /> male <input type="radio" name="movie" /> female
                                                <input type="radio" name="gender" /> prefer not to say<br />
                                            </div>
                                            <i class="fa-solid fa-square-check greenbox"></i>
                                            <label for="">I would like to get latest updates on whatsapp</label>

                                            <p class="smallpara">By clicking Register,you agree to the terms and conditions & privacy  pabjobs.com
                                            </p>
                                            <button class="Registerbtn">Register Now</button>
                                        </div>
                                    </div>
                                ) : (
                                <div className="d-flex flex-column p-3 form-control">
                                    <label>Full name</label>
                                    <input type="text"/>
                                    <label>Email </label>
                                    <input type="text"/>
                                    <label>Passowrd </label>
                                    <input type="text"/>
                                    <label>Confirm Password </label>
                                    <input type="text"/>
                                    <button className="bg-primary">Login</button>
                                </div>
                                )}
                        </div>
                        <div class=" col-12 col-lg-4 remove">
                            <div class="card card1" style={{ width: "300px" }}>
                                <img src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg"
                                    width="400px" height="300px" alt="" id="image" />
                            </div>
                            <div class="card1para">
                                <i class="fa-solid fa-circle-check  jan"></i> <span class="iconpara">Build your profile and let
                                    recruitrs find yon</span> <br />
                                <i class="fa-solid fa-circle-check  jan"></i> <span class="iconpara">Get job posting delivered right
                                    to your email</span> <br />
                                <i class="fa-solid fa-circle-check  jan"></i> <span class="iconpara">Find a job and grow your
                                    career</span>

                            </div>
                        </div>


                    </div>
                </div>

            </div>
            </div>

            )
}
            export default Auth;