import logo from "../src/All Images/pab bottom-logo (1).jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Resume.css";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from "./All Images/sivapic.jpg";
function ResumeDetails() {
  // resume heading
  const [resumeheading, setresumeheading] = useState("");

  const [data, setdata] = useState([]);
  console.log(resumeheading);
  const useData = {
    resumeheading: resumeheading,
  };
  console.log(useData);
  const onSubmitForm1 = (e) => {
    e.preventDefault();

    if (resumeheading !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk",
      };
      axios
        .post("http://localhost:4005/resumeheding1", useData, { headers })
        .then((response) => {
          setdata(response.data);

          console.log(response.data);
          toast.success("Save Data Successfull");
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  console.log(data);

  //profileSummary
  const [profileSummary, setprofileSummary] = useState("");

  const [data1, setdata1] = useState([]);
  console.log(profileSummary);
  const profile = {
    profileSummary: profileSummary,
  };
  console.log(profile);
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (profileSummary !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk",
      };
      axios
        .post("http://localhost:4005/profileSummaryDetails", profile, {
          headers,
        })
        .then((response) => {
          setdata1(response.data);

          console.log(response.data);
          if (response.status === 200) {
            toast.success("Save Data Successfull", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            setTimeout(function () {}, 3000);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  console.log(data1);
  // Skills Profile
  const [KeySkills, setKeySkills] = useState("");

  const [data2, setdata2] = useState([]);
  console.log(KeySkills);
  const skills = {
    KeySkills: KeySkills,
  };
  console.log(skills);
  const onSubmitFormskills = (e) => {
    e.preventDefault();
    if (KeySkills !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk",
      };
      axios
        .post("http://localhost:4005/keySkills", skills, { headers })
        .then((response) => {
          setdata2(response.data);

          console.log(response.data);
          if (response.status === 200) {
            toast.success("Save Data Successfull", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            setTimeout(function () {}, 3000);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  console.log(data2);
  //Employee Details
  const [TotalExperience, setTotalExperience] = useState("");
  const [CurrentCTC, setCurrentCTC] = useState("");
  const [YourDesignation, setYourDesignation] = useState("");
  const [YourOrganizationCategory, setYourOrganizationCategory] =
    useState("corporations");
  const [Type, setType] = useState("No");
  const [StartedWorkingFrom, setStartedWorkingFrom] = useState("");
  const [WorkedTill, setWorkedTill] = useState("");
  const [Describe, setDescribe] = useState("");

  const [data3, setdata3] = useState([]);
  console.log(TotalExperience);
  const Employee = {
    TotalExperience: TotalExperience,
    CurrentCTC: CurrentCTC,
    YourDesignation: YourDesignation,
    YourOrganizationCategory: YourOrganizationCategory,
    Type: Type,
    StartedWorkingFrom: StartedWorkingFrom,
    WorkedTill: WorkedTill,
    Describe: Describe,
  };
  console.log(Employee);
  const onSubmitFormEmployee = (e) => {
    e.preventDefault();
    if (
      TotalExperience &&
      CurrentCTC &&
      YourDesignation &&
      YourOrganizationCategory &&
      StartedWorkingFrom &&
      WorkedTill &&
      Describe !== ""
    ) {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk",
      };
      axios
        .post("http://localhost:4005/EmploymentDetails", Employee, { headers })
        .then((response) => {
          setdata3(response.data);

          console.log(response.data);
          if (response.status === 200) {
            toast.success("Save Data Successfull", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            setTimeout(function () {}, 3000);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  console.log(data3);
  //Eduction Details
  const [Degree, setDegree] = useState("");
  const [University, setUniversity] = useState("");
  const [Year, setYear] = useState("");

  const [data4, setdata4] = useState([]);
  console.log(Degree);
  const Eduction = {
    Degree: Degree,
    University: University,
    Year: Year,
  };
  console.log(Eduction);
  const onSubmitFormEduction = (e) => {
    e.preventDefault();
    if (Degree && University && Year !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk",
      };
      axios
        .post("http://localhost:4005/EducationDetails", Eduction, { headers })
        .then((response) => {
          setdata4(response.data);

          console.log(response.data);
          if (response.status === 200) {
            toast.success("Save Data Successfull", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            setTimeout(function () {}, 3000);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  console.log(data4);

  //Project Details
  const [ProjectTitle, setProjectTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [GitHubLink, setGitHubLink] = useState("");

  const [data5, setdata5] = useState([]);
  console.log(ProjectTitle);
  const Project = {
    ProjectTitle: ProjectTitle,
    Description: Description,
    GitHubLink: GitHubLink,
  };
  console.log(Project);
  const onSubmitFormProject = (e) => {
    e.preventDefault();
    if (ProjectTitle && Description && GitHubLink !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk",
      };
      axios
        .post("http://localhost:4005/ProjectDetails", Project, { headers })
        .then((response) => {
          setdata5(response.data);

          console.log(response.data);
          if (response.status === 200) {
            toast.success("Save Data Successfull", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            setTimeout(function () {}, 3000);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  console.log(data5);
  //Work Sample
  const [WorkSample, setWorkSample] = useState("");

  const [data6, setdata6] = useState([]);
  console.log(WorkSample);
  const work = {
    WorkSample: WorkSample,
  };
  console.log(work);
  const onSubmitFormWorksample = (e) => {
    e.preventDefault();
    if (WorkSample !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk",
      };
      axios
        .post("http://localhost:4005/workSample", work, { headers })
        .then((response) => {
          setdata6(response.data);

          console.log(response.data);
          if (response.status === 200) {
            toast.success("Save Data Successfull", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            setTimeout(function () {}, 3000);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  console.log(data6);

  //Research Details
  const [ResearchTitle, setResearchTitle] = useState("");
  const [Authors, setAuthors] = useState("");
  const [PublicationDate, setPublicationDate] = useState("");

  const [data7, setdata7] = useState([]);
  console.log(ResearchTitle);
  const Research = {
    ResearchTitle: ResearchTitle,
    Authors: Authors,
    PublicationDate: PublicationDate,
  };
  console.log(Research);
  const onSubmitFormResearchDetails = (e) => {
    e.preventDefault();
    if (ResearchTitle && Authors && PublicationDate !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk",
      };
      axios
        .post("http://localhost:4005/ResearchDetails", Research, { headers })
        .then((response) => {
          setdata7(response.data);

          console.log(response.data);
          if (response.status === 200) {
            toast.success("Save Data Successfull", {
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
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  console.log(data7);
  //Presentation Details
  const [PresentationTittle, setPresentationTittle] = useState("");
  const [Speaker, setSpeaker] = useState("");
  const [PresentationDate, setPresentationDate] = useState("");

  const [data8, setdata8] = useState([]);
  console.log(PresentationTittle);
  const Presentation = {
    PresentationTittle: PresentationTittle,
    Speaker: Speaker,
    PresentationDate: PresentationDate,
  };
  console.log(Presentation);
  const onSubmitFormPresentationDetails = (e) => {
    e.preventDefault();
    if (PresentationTittle && Speaker && PresentationDate !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk",
      };
      axios
        .post("http://localhost:4005/PresentationDetails", Presentation, {
          headers,
        })
        .then((response) => {
          setdata8(response.data);

          console.log(response.data);
          if (response.status === 200) {
            toast.success("Save Data Successfull", {
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
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  console.log(data8);
  //Patent
  const [Patent, setPatent] = useState("");

  const [data9, setdata9] = useState([]);
  console.log(Patent);
  const PatentDetails = {
    Patent: Patent,
  };
  console.log(PatentDetails);
  const onSubmitFormPatentDetails = (e) => {
    e.preventDefault();
    if (Patent !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk",
      };
      axios
        .post("http://localhost:4005/PatentDetails", PatentDetails, { headers })
        .then((response) => {
          setdata9(response.data);

          console.log(response.data);
          if (response.status === 200) {
            toast.success("Save Data Successfull", {
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
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  console.log(data9);
  //CertificationDetails
  const [CertificationName, setCertificationName] = useState("");
  const [Organization, setOrganization] = useState("");
  const [Date, setDate] = useState("");

  const [data01, setdata01] = useState([]);
  console.log(CertificationName);
  const CertificationDetails = {
    CertificationName: CertificationName,
    Organization: Organization,
    Date: Date,
  };
  console.log(CertificationDetails);
  const onSubmitFormCertificationDetails = (e) => {
    e.preventDefault();
    if (CertificationName && Organization && Date !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk",
      };
      axios
        .post(
          "http://localhost:4005/CertificationDetails",
          CertificationDetails,
          { headers }
        )
        .then((response) => {
          setdata01(response.data);

          console.log(response.data);
          if (response.status === 200) {
            toast.success("Save Data Successfull", {
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
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  console.log(data01);
  //Desired career Profile
  const [DesireIndustry, setDesireIndustry] = useState("");
  const [Preferedlocation, setPreferedlocation] = useState("");
  const [designation1, setdesignation1] = useState("");
  const [Expectedctcsalary, setExpectedctcsalary] = useState("");
  const [Desiredshift, setDesiredshift] = useState("");
  const [Employmenttype, setEmploymenttype] = useState("");

  const [data02, setdata02] = useState([]);
  console.log(DesireIndustry);
  const careerProfileDetails = {
    DesireIndustry: DesireIndustry,
    Preferedlocation: Preferedlocation,
    designation1: designation1,
    Expectedctcsalary: Expectedctcsalary,
    Desiredshift: Desiredshift,
    Employmenttype: Employmenttype,
  };
  console.log(careerProfileDetails);
  const onSubmitFormcareerProfileDetails = (e) => {
    e.preventDefault();
    if (
      DesireIndustry &&
      Preferedlocation &&
      designation1 &&
      Expectedctcsalary &&
      Desiredshift &&
      Employmenttype !== ""
    ) {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk",
      };
      axios
        .post("http://localhost:4005/careerProfile", careerProfileDetails, {
          headers,
        })
        .then((response) => {
          setdata02(response.data);

          console.log(response.data);
          if (response.status === 200) {
            toast.success("Save Data Successfull", {
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
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  console.log(data02);
  //Personal Details
  const [DateOfBirth, setDateOfBirth] = useState("");
  const [MaritalStatus, setMaritalStatus] = useState("");
  const [Age, setAge] = useState("");
  const [Languages, setLanguages] = useState("");
  const [Gender, setGender] = useState("");
  const [Address, setAddress] = useState("");

  const [data03, setdata03] = useState([]);
  console.log(DateOfBirth);
  const PersonalDetails = {
    DateOfBirth: DateOfBirth,
    MaritalStatus: MaritalStatus,
    Age: Age,
    Languages: Languages,
    Gender: Gender,
    Address: Address,
  };
  console.log(PersonalDetails);
  const onSubmitFormpersonalDetails = (e) => {
    e.preventDefault();

    if (
      DateOfBirth &&
      MaritalStatus &&
      Age &&
      Languages &&
      Gender &&
      Address !== ""
    ) {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk",
      };
      axios
        .post("http://localhost:4005/PersonalDetails", PersonalDetails, {
          headers,
        })
        .then((response) => {
          setdata03(response.data);

          console.log(response.data);
          if (response.status === 200) {
            toast.success("Save Data Successfull", {
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
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  console.log(data03);

  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const allowedFormats = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/rtf",
      ];
      const maxSize = 2 * 1024 * 1024; // 2MB

      if (allowedFormats.includes(file.type) && file.size <= maxSize) {
        setSelectedFile(file);
        setErrorMessage("");
      } else {
        setSelectedFile(null);
        setErrorMessage("Invalid file format or size exceeds 2MB.");
      }
    }
  };
  return (
    <div className="bg-images1">
      <nav class="navbar navbar-expand-sm navbar-dark shadow mb-3 mt-2 bg-white ">
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
                  href="/services"
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
              <li class="nav-item">
                <a href="profile.html">
                  <i
                    class=" fa-sharp fa-solid fa-circle-user dropdown-toggle bellicon"
                    style={{ color: "black" }}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* card-sections */}
      
      <div class="container">
        <div class="row">
          <div class=" col-12 col-md-4 text-start">
            <div class="card p-2">
              {/* <div class="d-flex flex-row py-2">
                <div>
                  <Link to="/ProfileCode">
                    
                    <img src={image}alt="" className="profileicon w-50"style={{borderRadius : "100px"}} />
                  </Link>
                </div>
                 
                <div className="text-start m-0">
                  
                 
                </div>
              </div> */}
              <div className="d-flex flex-row ">
                <div>
                  <Link to="/ProfileCode">
                    <img src={image} alt="" className="w-100 image123" />
                  </Link>
                </div>
                <div className="content12 mx-2">
                  <h4 class="resumeh5">B.SIVA KOTESWARA RAO</h4>
                  <p>
                    Software Developer <br />
                    <span className="text-primary">at Perfex Technologies</span>
                  </p>
                </div>
              </div>
              <div class="p-2">
                <i class="fa-solid fa-phone-volume px-3 resumeicon"></i>
                <span>9912762975</span>
                <i class="fa-solid fa-circle-check janlogin px-3 resumeicon1"></i>
                <br />
                <i class="fa-solid fa-envelope px-3 resumeicon"></i>
                <span>badasiva@gmail.com</span>
                <i class="fa-solid fa-circle-check janlogin px-3 resumeicon1"></i>
                <br />
                <i class="fa-solid fa-briefcase px-3 resumeicon"></i>
                <span>2 years</span>
                <br />
                <i class="fa-solid fa-location-dot px-3 resumeicon"></i>
                <span>Hyderabad</span>
                <br />
                <i class="fa-solid fa-money-bill px-3 resumeicon"></i>
                <span>8,00,000 - 12,00,000</span>
                <br />
                <i class="fa-solid fa-calendar-days px-3 resumeicon"></i>
                <span>10 days notice period</span>
              </div>
              <hr />
              <div>
                <p class="spa85">Your profile updated</p>
                <span class="spa82 p-1 px-4">89%</span>
                <span class="spa83 mx-3">Add 3 missing details</span>
                <p class="spa84 ">Profile last updated -16 feb,2023</p>
              </div>
            </div>
            <div class="mt-3 ">
              <a href="#Resume">
                <button class="w-100 p-2 mt-2 resumebtn shadow">Resume</button>
              </a>
              <a href="#ResumeHeadline">
                <button class="w-100 p-2 mt-2 resumebtn shadow">
                  Resume Headline
                </button>
              </a>
              <a href="#ProfileSummary">
                <button class="w-100 p-2 mt-2 resumebtn shadow">
                  Profile Summary
                </button>
              </a>
              <a href="#KeySkills">
                <button class="w-100 p-2 mt-2 resumebtn shadow">
                  Key skills
                </button>
              </a>
              <a href="#Employment">
                <button class="w-100 p-2 mt-2 resumebtn shadow">
                  Employment
                </button>
              </a>
              <a href="#Education">
                <button class="w-100 p-2 mt-2 resumebtn shadow">
                  Education
                </button>
              </a>
              <a href="#Projects">
                <button class="w-100 p-2 mt-2 resumebtn shadow">
                  Projects
                </button>
              </a>
              <a href="#Accomplishment">
                <button class="w-100 p-2 mt-2 resumebtn shadow">
                  Accomplishment
                </button>
              </a>
              <a href="#DesiredcareerProfile">
                <button class="w-100 p-2 mt-2 resumebtn shadow">
                  Desired career Profile
                </button>
              </a>
              <a href="#Personaldetails">
                <button class="w-100 p-2 mt-2 resumebtn shadow">
                  Personal Details
                </button>
              </a>
            </div>
          </div>

          {/* 2nd-card */}
          <div class="col-md-8 text-start mb-5   ">
            <div class="card p-3 shadow" id="Resume">
              <p>
                <b class="px-2">Resume</b> (Recruiters generally do not look at
                profiles without resumes.)
              </p>
              <hr />
              <div class="resumeUploadbtn">
                <input
                  type="file"
                  accept=".doc, .docx, .rtx, .pdf"
                  onClick={handleFileChange}
                />
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                {selectedFile && (
                  <div>
                    <p>Selected File: {selectedFile.name}</p>
                  </div>
                )}
              </div>
              <p class="resumepara">
                Supported formates : doc,docx,rtf,pdf,upto 2mb{" "}
              </p>
            </div>

            <div class="card p-4 mt-3 shadow">
              <div id="ResumeHeadline">
                <div class="d-flex flex-row">
                  <h5>Resume Headline</h5>
                  <div style={{ marginLeft: "auto" }}>
                    {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                    <button
                      style={{ border: "none", backgroundColor: "white" }}
                    >
                      <i
                        type="button"
                        class="material-symbols-outlined"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                      >
                        edit_square
                      </i>
                    </button>
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

                    <div class="modal" id="myModal">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          {/* <!-- Modal Header --> */}
                          <div class="modal-header">
                            <h4 class="modal-title">Resume Headline</h4>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                          </div>

                          {/* <!-- Modal body --> */}
                          <div class="modal-body ">
                            <div>
                              <label className="heading211">
                                Resume Heading
                              </label>
                              <br />
                              <p>
                                Software Developer currently living in Hyderabad
                              </p>
                              <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="2"
                                placeholder="Describe here"
                                onChange={(e) =>
                                  setresumeheading(e.target.value)
                                }
                                value={resumeheading}
                              ></textarea>

                              {/* <!-- Modal footer --> */}
                              <div class="modal-footer">
                                <button
                                  type="submit"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                  onClick={(e) => onSubmitForm1(e)}
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <p>Software Developer currently living in Hyderabad</p>
              </div>
            </div>

            <div class="card p-4 mt-3 shadow">
              <div id="ProfileSummary">
                <div class="d-flex flex-row">
                  <h5>Profile Summary</h5>
                  <div style={{ marginLeft: "auto" }}>
                    {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                    <button
                      style={{ border: "none", backgroundColor: "white" }}
                    >
                      {" "}
                      <i
                        type="button"
                        class="material-symbols-outlined"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal1"
                      >
                        edit_square
                      </i>
                    </button>
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

                    <div class="modal" id="myModal1">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          {/* <!-- Modal Header --> */}
                          <div class="modal-header">
                            <h4 class="modal-title">Profile Summary</h4>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                          </div>

                          {/* <!-- Modal body --> */}
                          <div class="modal-body">
                            <form onSubmit={onSubmitForm}>
                              <label>Profile Summary</label>
                              <br />
                              <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="2"
                                onChange={(e) =>
                                  setprofileSummary(e.target.value)
                                }
                                value={profileSummary}
                              ></textarea>
                              <div class="modal-footer">
                                <button
                                  type="submit"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Save
                                </button>
                              </div>
                            </form>
                          </div>

                          {/* <!-- Modal footer --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <p>
                  Software Developer specialist with 3+ years of experience in
                  the management of th complete design process from
                  conceptualization to delivery. Skilled with adobe creative
                  suite (photoshop,illustrator,lightroom,aftereffects,charector
                  Animator,adobeanimate).able to stretch the boundaries of
                  digital story telling to support brands standout.{" "}
                </p>
              </div>
            </div>
            <div class="card p-4 mt-3 shadow">
              <div id="KeySkills">
                <div class="d-flex flex-row">
                  <h5>Key Skills</h5>
                  <div style={{ marginLeft: "auto" }}>
                    {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                    <button
                      style={{ border: "none", backgroundColor: "white" }}
                    >
                      {" "}
                      <i
                        type="button"
                        class="material-symbols-outlined"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal2"
                      >
                        edit_square
                      </i>
                    </button>
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

                    <div class="modal" id="myModal2">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          {/* <!-- Modal Header --> */}
                          <div class="modal-header">
                            <h4 class="modal-title">Key Skills</h4>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                          </div>

                          {/* <!-- Modal body --> */}
                          <div class="modal-body">
                            <form action="" onSubmit={onSubmitFormskills}>
                              <div class="resumegroup mb-5 ">
                                <button class="btnresume p-2 px-3 m-1 ">
                                  Photoshop
                                </button>
                                <button class="btnresume1  shadow p-2 px-3 m-1">
                                  aftereffects
                                </button>
                                <button class="btnresume shadow p-2 px-4 m-1">
                                  Editing
                                </button>
                                <button class="btnresume shadow p-2 px-2 m-1 ">
                                  Adobe XD
                                </button>
                                <button class="btnresume shadow p-2 px-2 m-1">
                                  Animation
                                </button>
                              </div>

                              <label>Key Skills</label>
                              <br />
                              <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="2"
                                placeholder="Describe here"
                                onChange={(e) => setKeySkills(e.target.value)}
                                value={KeySkills}
                              ></textarea>
                              <div class="modal-footer">
                                <button
                                  type="submit"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Save
                                </button>
                              </div>
                            </form>
                          </div>

                          {/* <!-- Modal footer --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="resumegroup  ">
                  <button class="btnresume shadow p-2 px-3 m-1 ">Photoshop</button>
                  <button class="btnresume1 shadow p-2 px-3 m-1">
                    aftereffects
                  </button>
                  <button class="btnresume shadow p-2 px-4 m-1">Editing</button>
                  <button class="btnresume shadow p-2 px-2 m-1 ">
                    Adobe XD
                  </button>
                  <button class="btnresume shadow p-2 px-2 m-1">
                    Animation
                  </button>
                </div>
                <div class="resunegroup">
                  <button class="btnresume1 shadow p-2 px-3 m-1">
                    Premire Pro
                  </button>
                  <button class="btnresume shadow p-2 px-4 m-1 ">
                    Blender
                  </button>
                  <button class="btnresume shadow p-2 px-3 m-1 ">
                    illustrator
                  </button>
                  <button class="btnresume shadow p-2 px-4 m-1 ">Canva</button>
                  <button class="btnresume shadow p-2 px-4 m-1 ">Figma</button>
                </div>
              </div>
            </div>
            <div class="card p-4 mt-3 shadow">
              <div id="Employment">
                <div class="d-flex flex-row">
                  <h5>
                    Employment
                    <span style={{ fontSize: "small" }}>
                      (Enter your current and previous Employment details)
                    </span>
                  </h5>
                </div>
                <hr />
                <div class="d-flex flex-row">
                  <div style={{ borderRight: "1px solid gray" }} class="">
                    <h6 class="resumeh6">Software Developer</h6>
                    <p>PerfexTechnologies </p>
                    <p className="mx-2">Fulltime|May 2022 to present (1 year 3 months) </p>
                    <p>1 Month Notice Period</p>
                  </div>
                  <div style={{ marginLeft: "auto" }} class="m-2">
                    {/* <b class="resumeh7 ">+ Add Employment</b> */}
                    <div>
                      {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                      <button
                        style={{ border: "none", backgroundColor: "white" }}
                        className="mx-2"
                      >
                        <i
                          type="button"
                          class="material-symbols-outlined mx-3 mt-4"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal23"
                        >
                          edit_square
                        </i>
                        <b class="resumeh7 row mx-3">+Add</b>
                      </button>
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

                      <div class="modal" id="myModal23">
                        <div class="modal-dialog ">
                          <div class="modal-content">
                            {/* <!-- Modal Header --> */}
                            <div class="modal-header">
                              <h4 class="modal-title">Employment</h4>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                              ></button>
                            </div>

                            {/* <!-- Modal body --> */}
                            <div class="modal-body">
                              <form action="" onSubmit={onSubmitFormEmployee}>
                                <div className="row">
                                  <div className="col-12 col-md-6">
                                    <label>Total Experience</label>
                                    <input
                                      type="text"
                                      className="etotal"
                                      style={{ border: "1px solid black" }}
                                      placeholder="Years"
                                      onChange={(e) =>
                                        setTotalExperience(e.target.value)
                                      }
                                      value={TotalExperience}
                                    />
                                  </div>
                                  <div className="col-12 col-md-6">
                                    <label>Current CTC</label>
                                    <input
                                      type="text"
                                      className="etotal"
                                      style={{ border: "1px solid black" }}
                                      placeholder="Current CTC"
                                      onChange={(e) =>
                                        setCurrentCTC(e.target.value)
                                      }
                                      value={CurrentCTC}
                                    />
                                  </div>
                                </div>

                                <div className="row mt-3">
                                  <div className="col-12 col-md-6">
                                    <label>Your Designation</label>
                                    <select
                                      name=""
                                      id=""
                                      onChange={(e) =>
                                        setYourDesignation(e.target.value)
                                      }
                                      value={YourDesignation}
                                    >
                                      <option
                                        value="Finance"
                                        onChange={(e) =>
                                          setYourDesignation(e.target.value)
                                        }
                                      >
                                        Finance
                                      </option>
                                      <option
                                        value="Accounting"
                                        onChange={(e) =>
                                          setYourDesignation(e.target.value)
                                        }
                                      >
                                        Accounting
                                      </option>
                                      <option
                                        value="Human Resources"
                                        onChange={(e) =>
                                          setYourDesignation(e.target.value)
                                        }
                                      >
                                        Human Resources
                                      </option>
                                      <option
                                        value="Management"
                                        onChange={(e) =>
                                          setYourDesignation(e.target.value)
                                        }
                                      >
                                        Management
                                      </option>
                                    </select>
                                  </div>
                                  <div className="col-12 col-md-6">
                                    <label>Your Organization Category</label>
                                    <select
                                      name=""
                                      id=""
                                      onChange={(e) =>
                                        setYourOrganizationCategory(
                                          e.target.value
                                        )
                                      }
                                      value={YourOrganizationCategory}
                                    >
                                      <option
                                        value="corporations"
                                        onChange={(e) =>
                                          setYourOrganizationCategory(
                                            e.target.value
                                          )
                                        }
                                      >
                                        corporations
                                      </option>
                                      <option
                                        value="governments"
                                        onChange={(e) =>
                                          setYourOrganizationCategory(
                                            e.target.value
                                          )
                                        }
                                      >
                                        governments
                                      </option>
                                      <option
                                        value="armed forces"
                                        onChange={(e) =>
                                          setYourOrganizationCategory(
                                            e.target.value
                                          )
                                        }
                                      >
                                        armed forces
                                      </option>
                                      <option
                                        value="political organizations"
                                        onChange={(e) =>
                                          setYourOrganizationCategory(
                                            e.target.value
                                          )
                                        }
                                      >
                                        {" "}
                                        political organizations
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-12 mt-3">
                                  <p>Is This Your Current Company ?</p>
                                  <input
                                    type="radio"
                                    name="company"
                                    value="No"
                                    onChange={(e) => setType(e.target.value)}
                                  />{" "}
                                  No
                                  <input
                                    type="radio"
                                    name="company"
                                    value="yes"
                                    className="mx-3"
                                    onChange={(e) => setType(e.target.value)}
                                  />{" "}
                                  Yes
                                </div>
                                <div className="row mt-3">
                                  <div className="col-12 col-md-6">
                                    <label>Started Working From</label>
                                    <input
                                      type="date"
                                      onChange={(e) =>
                                        setStartedWorkingFrom(e.target.value)
                                      }
                                      value={StartedWorkingFrom}
                                    />
                                  </div>
                                  <div className="col-12 col-md-6">
                                    <label>Worked Til Now:</label>
                                    <input
                                      type="date"
                                      onChange={(e) =>
                                        setWorkedTill(e.target.value)
                                      }
                                      value={WorkedTill}
                                    />
                                  </div>
                                </div>
                                <div className="col-12">
                                  <p>Describe Your Job Profile</p>
                                  <textarea
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="4"
                                    placeholder="Describe here"
                                    onChange={(e) =>
                                      setDescribe(e.target.value)
                                    }
                                    value={Describe}
                                  ></textarea>
                                </div>
                                <div class="modal-footer mt-3">
                                  <button
                                    type="submit"
                                    class="btn btn-danger"
                                    data-bs-dismiss="modal"
                                  >
                                    Save
                                  </button>
                                </div>
                              </form>
                            </div>

                            {/* <!-- Modal footer --> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card p-4 mt-3 shadow">
              <div id="Education">
                <div class="d-flex flex-row">
                  <h5>
                    Education{" "}
                    <span style={{ fontSize: "small" }}>
                      (Enter your qualification details)
                    </span>
                  </h5>
                </div>
                <hr />
                <div class="d-flex flex-row">
                  <div style={{ borderRight: "1px solid gray" }} class="">
                    <p className="mx-1">Add class x | ADD class XII | Add graduation/Diploma</p>
                    <p className="mx-2">Add masters/Post graduation | Add doctorate/PhD</p>
                  </div>
                  <div style={{ marginLeft: "auto" }} class="m-2">
                    {/* <b class="resumeh7 ">+ Add Employment</b> */}
                    <div style={{ marginLeft: "auto" }}>
                      {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                      <button
                        style={{ border: "none", backgroundColor: "white" }}
                        className="mx-2"
                      >
                        <i
                          type="button"
                          class="material-symbols-outlined  mt-4"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal22"
                        >
                          edit_square
                        </i>
                        <b class="resumeh7 row mx-3">+Add</b>
                      </button>
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

                      <div class="modal" id="myModal22">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            {/* <!-- Modal Header --> */}
                            <div class="modal-header">
                              <h4 class="modal-title">Education</h4>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                              ></button>
                            </div>

                            {/* <!-- Modal body --> */}
                            <div class="modal-body">
                              <form action="" onSubmit={onSubmitFormEduction}>
                                <div>
                                  <label>Degree :</label>
                                  <input
                                    type="text"
                                    style={{ border: "1px solid black" }}
                                    className="mx-3"
                                    onChange={(e) => setDegree(e.target.value)}
                                    value={Degree}
                                  />
                                </div>
                                <div>
                                  <label>University:</label>
                                  <input
                                    type="text"
                                    style={{ border: "1px solid black" }}
                                    className="mx-2 mt-3"
                                    onChange={(e) =>
                                      setUniversity(e.target.value)
                                    }
                                    value={University}
                                  />
                                </div>
                                <div>
                                  <label>Year:</label>
                                  <input
                                    type="text"
                                    style={{ border: "1px solid black" }}
                                    className="mx-2 mt-3"
                                    onChange={(e) => setYear(e.target.value)}
                                    value={Year}
                                  />
                                </div>
                                <div class="modal-footer mt-3">
                                  <button
                                    type="submit"
                                    class="btn btn-danger"
                                    data-bs-dismiss="modal"
                                  >
                                    Save
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card p-4 mt-3 shadow">
              <div id="Projects">
                <div class="d-flex flex-row">
                  <h5>Projects</h5>
                </div>
                <hr />
                <div class="d-flex flex-row">
                  <div style={{ borderRight: "1px solid gray" }} class="px-5">
                    <p>(Add details about projects you have done )</p>
                  </div>
                  <div style={{ marginLeft: "auto" }} class="m-2 mx-5">
                    {/* <b class="resumeh7 ">+ Add Employment</b> */}
                    <div style={{ marginLeft: "auto" }}>
                      {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                      <button
                        style={{ border: "none", backgroundColor: "white" }}
                      >
                        {" "}
                        <i
                          type="button"
                          class="material-symbols-outlined text-start"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal21"
                        >
                          edit_square
                        </i>
                        <b class="resumeh7 row">+Add</b>
                      </button>
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

                      <div class="modal" id="myModal21">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            {/* <!-- Modal Header --> */}
                            <div class="modal-header">
                              <h4 class="modal-title">Projects</h4>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                              ></button>
                            </div>

                            {/* <!-- Modal body --> */}
                            <div class="modal-body">
                              <form action="" onSubmit={onSubmitFormProject}>
                                <div>
                                  <label>Title :</label>
                                  <input
                                    type="text"
                                    style={{ border: "1px solid black" }}
                                    className="mx-3"
                                    onChange={(e) =>
                                      setProjectTitle(e.target.value)
                                    }
                                    value={ProjectTitle}
                                  />
                                </div>
                                <div>
                                  <label>Description :</label>
                                  <input
                                    type="text"
                                    style={{ border: "1px solid black" }}
                                    className="mx-3 mt-3"
                                    onChange={(e) =>
                                      setDescription(e.target.value)
                                    }
                                    value={Description}
                                  />
                                </div>

                                <div>
                                  <label>GitHub Link :</label>
                                  <input
                                    type="text"
                                    style={{ border: "1px solid black" }}
                                    className="mx-3 mt-3"
                                    onChange={(e) =>
                                      setGitHubLink(e.target.value)
                                    }
                                    value={GitHubLink}
                                  />
                                </div>
                                <div class="modal-footer mt-3">
                                  <button
                                    type="submit"
                                    class="btn btn-danger"
                                    data-bs-dismiss="modal"
                                  >
                                    Save
                                  </button>
                                </div>
                              </form>
                            </div>

                            {/* <!-- Modal footer --> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card p-4 mt-3 shadow">
              <div>
                <div class="d-flex flex-row">
                  <h5>Accomplishment</h5>
                  <div style={{ marginLeft: "auto" }}>
                    {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                    {/* <button className="model1">
                      {" "}
                      <i
                        type="button"
                        class="material-symbols-outlined"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal3"
                      >
                        edit_square
                      </i>
                    </button> */}

                    <div class="modal" id="myModal3">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          {/* <!-- Modal Header --> */}
                          <div class="modal-header">
                            <h4 class="modal-title">Accomplishment</h4>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                          </div>

                          {/* <!-- Modal body --> */}
                          <div class="modal-body">
                            <form action="">
                              <div>
                                <label>Title :</label>
                                <input
                                  type="text"
                                  style={{ border: "1px solid black" }}
                                  className="mx-3"
                                />
                              </div>
                              <div>
                                <label>Description :</label>
                                <input
                                  type="text"
                                  style={{ border: "1px solid black" }}
                                  className="mx-3 mt-3"
                                />
                              </div>

                              <div>
                                <label>Date :</label>
                                <input
                                  type="date"
                                  style={{ border: "1px solid black" }}
                                  className="mx-3 mt-3"
                                />
                              </div>
                              <div class="modal-footer mt-3">
                                <button
                                  type="button"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Save
                                </button>
                              </div>
                            </form>
                          </div>

                          {/* <!-- Modal footer --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="d-flex flex-row">
                  <div>
                    <h6>Work Sample</h6>
                    <p>Add links to your projects(e.g. github links etc.)</p>
                  </div>
                  <div style={{ marginLeft: "auto" }}>
                    {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                    <button
                      style={{ border: "none", backgroundColor: "white" }}
                    >
                      {" "}
                      <i
                        type="button"
                        class="material-symbols-outlined"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal4"
                      >
                        edit_square
                      </i>
                    </button>
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

                    <div class="modal" id="myModal4">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          {/* <!-- Modal Header --> */}
                          <div class="modal-header">
                            <h4 class="modal-title">Work Sample</h4>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                          </div>

                          {/* <!-- Modal body --> */}
                          <div class="modal-body">
                            <form action="" onSubmit={onSubmitFormWorksample}>
                              <label>Work Sample</label>
                              <br />
                              <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="2"
                                onChange={(e) => setWorkSample(e.target.value)}
                                value={WorkSample}
                              ></textarea>
                              <div class="modal-footer">
                                <button
                                  type="submit"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Save
                                </button>
                              </div>
                            </form>
                          </div>

                          {/* <!-- Modal footer --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="d-flex flex-row">
                  <div>
                    <h6>White paper/Research publication </h6>
                    <p>Add links to your online publications</p>
                  </div>
                  <div style={{ marginLeft: "auto" }}>
                    {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                    <button
                      style={{ border: "none", backgroundColor: "white" }}
                    >
                      {" "}
                      <i
                        type="button"
                        class="material-symbols-outlined"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal5"
                      >
                        edit_square
                      </i>
                    </button>
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

                    <div class="modal" id="myModal5">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          {/* <!-- Modal Header --> */}
                          <div class="modal-header">
                            <h4 class="modal-title">Research publication</h4>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                          </div>

                          {/* <!-- Modal body --> */}
                          <div class="modal-body">
                            <form
                              action=""
                              onSubmit={onSubmitFormResearchDetails}
                            >
                              <div>
                                <label>Title :</label>
                                <input
                                  type="text"
                                  style={{ border: "1px solid black" }}
                                  className="mx-3"
                                  onChange={(e) =>
                                    setResearchTitle(e.target.value)
                                  }
                                  value={ResearchTitle}
                                />
                              </div>
                              <div>
                                <label>Authors :</label>
                                <input
                                  type="text"
                                  style={{ border: "1px solid black" }}
                                  className="mx-3 mt-3"
                                  onChange={(e) => setAuthors(e.target.value)}
                                  value={Authors}
                                />
                              </div>

                              <div>
                                <label>Publication Date :</label>
                                <input
                                  type="date"
                                  style={{ border: "1px solid black" }}
                                  className="mx-3 mt-3"
                                  onChange={(e) =>
                                    setPublicationDate(e.target.value)
                                  }
                                  value={PublicationDate}
                                />
                              </div>
                              <div class="modal-footer mt-3">
                                <button
                                  type="submit"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Save
                                </button>
                              </div>
                            </form>
                          </div>

                          {/* <!-- Modal footer --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="d-flex flex-row" id="Accomplishment">
                  <div>
                    <h6>Presentation </h6>
                    <p>Add links to your online presentations</p>
                  </div>
                  <div style={{ marginLeft: "auto" }}>
                    {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                    <button
                      style={{ border: "none", backgroundColor: "white" }}
                    >
                      {" "}
                      <i
                        type="button"
                        class="material-symbols-outlined"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal6"
                      >
                        edit_square
                      </i>
                    </button>
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

                    <div class="modal" id="myModal6">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          {/* <!-- Modal Header --> */}
                          <div class="modal-header">
                            <h4 class="modal-title">Presentation</h4>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                          </div>

                          {/* <!-- Modal body --> */}
                          <div class="modal-body">
                            <form
                              action=""
                              onSubmit={onSubmitFormPresentationDetails}
                            >
                              <div>
                                <label>Title :</label>
                                <input
                                  type="text"
                                  style={{ border: "1px solid black" }}
                                  className="mx-3"
                                  onChange={(e) =>
                                    setPresentationTittle(e.target.value)
                                  }
                                  value={PresentationTittle}
                                />
                              </div>
                              <div>
                                <label>Speaker:</label>
                                <input
                                  type="text"
                                  style={{ border: "1px solid black" }}
                                  className="mx-3 mt-3"
                                  onChange={(e) => setSpeaker(e.target.value)}
                                  value={Speaker}
                                />
                              </div>

                              <div>
                                <label>Date:</label>
                                <input
                                  type="date"
                                  style={{ border: "1px solid black" }}
                                  className="mx-3 mt-3"
                                  onChange={(e) =>
                                    setPresentationDate(e.target.value)
                                  }
                                  value={PresentationDate}
                                />
                              </div>
                              <div class="modal-footer mt-3">
                                <button
                                  type="submit"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Save
                                </button>
                              </div>
                            </form>
                          </div>

                          {/* <!-- Modal footer --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="d-flex flex-row">
                  <div>
                    <h6>Patent </h6>
                    <p>Add deatails of patents you have filed</p>
                  </div>
                  <div style={{ marginLeft: "auto" }}>
                    {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                    <button
                      style={{ border: "none", backgroundColor: "white" }}
                    >
                      {" "}
                      <i
                        type="button"
                        class="material-symbols-outlined"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal7"
                      >
                        edit_square
                      </i>
                    </button>
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

                    <div class="modal" id="myModal7">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          {/* <!-- Modal Header --> */}
                          <div class="modal-header">
                            <h4 class="modal-title">Patent</h4>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                          </div>

                          {/* <!-- Modal body --> */}
                          <div class="modal-body">
                            <form
                              action=""
                              onSubmit={onSubmitFormPatentDetails}
                            >
                              <label>Patent</label>
                              <br />
                              <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="2"
                                onChange={(e) => setPatent(e.target.value)}
                                value={Patent}
                              ></textarea>
                              <div class="modal-footer">
                                <button
                                  type="submit"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Save
                                </button>
                              </div>
                            </form>
                          </div>

                          {/* <!-- Modal footer --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="d-flex flex-row">
                  <div>
                    <h6>Certification</h6>
                    <p>
                      Add details of Certifications you have achieved/completed
                    </p>
                  </div>
                  <div style={{ marginLeft: "auto" }}>
                    {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                    <button
                      style={{ border: "none", backgroundColor: "white" }}
                    >
                      {" "}
                      <i
                        type="button"
                        class="material-symbols-outlined"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal8"
                      >
                        edit_square
                      </i>
                    </button>
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

                    <div class="modal" id="myModal8">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          {/* <!-- Modal Header --> */}
                          <div class="modal-header">
                            <h4 class="modal-title">Certification</h4>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                          </div>

                          {/* <!-- Modal body --> */}
                          <div class="modal-body">
                            <form
                              action=""
                              onSubmit={onSubmitFormCertificationDetails}
                            >
                              <div>
                                <label>Name :</label>
                                <input
                                  type="text"
                                  style={{ border: "1px solid black" }}
                                  className="mx-3"
                                  onChange={(e) =>
                                    setCertificationName(e.target.value)
                                  }
                                  value={CertificationName}
                                />
                              </div>
                              <div>
                                <label>Organization:</label>
                                <input
                                  type="text"
                                  style={{ border: "1px solid black" }}
                                  className="mx-3 mt-3"
                                  onChange={(e) =>
                                    setOrganization(e.target.value)
                                  }
                                  value={Organization}
                                />
                              </div>

                              <div>
                                <label>Date:</label>
                                <input
                                  type="date"
                                  style={{ border: "1px solid black" }}
                                  className="mx-3 mt-3"
                                  onChange={(e) => setDate(e.target.value)}
                                  value={Date}
                                />
                              </div>
                              <div class="modal-footer mt-3">
                                <button
                                  type="submit"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Save
                                </button>
                              </div>
                            </form>
                          </div>
                          {/* <!-- Modal footer --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card p-4 mt-3 shadow">
              <div id="DesiredcareerProfile">
                <div class="d-flex flex-row">
                  <h5>Desired career Profile</h5>
                  <div style={{ marginLeft: "auto" }}>
                    {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                    <button
                      style={{ border: "none", backgroundColor: "white" }}
                    >
                      {" "}
                      <i
                        type="button"
                        class="material-symbols-outlined"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal9"
                      >
                        edit_square
                      </i>
                    </button>
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

                    <div class="modal" id="myModal9">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          {/* <!-- Modal Header --> */}
                          <div class="modal-header">
                            <h4 class="modal-title">Desired career Profile</h4>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                          </div>

                          {/* <!-- Modal body --> */}
                          <div class="modal-body">
                            <form
                              action=""
                              onSubmit={onSubmitFormcareerProfileDetails}
                            >
                              <div className="row">
                                <div className=" col-12 col-md-6">
                                  <label>Desire Industry</label>
                                  <input
                                    type="text"
                                    className="etotal"
                                    style={{ border: "1px solid black" }}
                                    placeholder="Enter Desire Industry "
                                    onChange={(e) =>
                                      setDesireIndustry(e.target.value)
                                    }
                                    value={DesireIndustry}
                                  />
                                </div>
                                <div className="col-12 col-md-6">
                                  <label>Prefered location</label>
                                  <input
                                    type="text"
                                    className="etotal"
                                    style={{ border: "1px solid black" }}
                                    placeholder="Enter Prefered location"
                                    onChange={(e) =>
                                      setPreferedlocation(e.target.value)
                                    }
                                    value={Preferedlocation}
                                  />
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className=" col-12 col-md-6">
                                  <label>designation</label>
                                  <input
                                    type="text"
                                    className="etotal"
                                    style={{ border: "1px solid black" }}
                                    placeholder="Enter designation"
                                    onChange={(e) =>
                                      setdesignation1(e.target.value)
                                    }
                                    value={designation1}
                                  />
                                </div>
                                <div className="col-12 col-md-6">
                                  <label>Expected ctc</label>
                                  <input
                                    type="text"
                                    className="etotal"
                                    style={{ border: "1px solid black" }}
                                    placeholder="Enter Expected ctc "
                                    onChange={(e) =>
                                      setExpectedctcsalary(e.target.value)
                                    }
                                    value={Expectedctcsalary}
                                  />
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className=" col-12 col-md-6">
                                  <label>Desired to shift</label>
                                  <input
                                    type="text"
                                    className="etotal"
                                    style={{ border: "1px solid black" }}
                                    placeholder=" Enter Day/night"
                                    onChange={(e) =>
                                      setDesiredshift(e.target.value)
                                    }
                                    value={Desiredshift}
                                  />
                                </div>
                                <div className="col-12 col-md-6">
                                  <label>Employment type</label>
                                  <input
                                    type="text"
                                    className="etotal"
                                    style={{ border: "1px solid black" }}
                                    placeholder="Enter Employment type "
                                    onChange={(e) =>
                                      setEmploymenttype(e.target.value)
                                    }
                                    value={Employmenttype}
                                  />
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="submit"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Save
                                </button>
                              </div>
                            </form>
                          </div>

                          {/* <!-- Modal footer --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />
                <div class="d-flex flex-row">
                  <div style={{ borderRight: "1px solid gray" }} class="px-1">
                    <h6 class="resumeh6">Desire Industry</h6>
                    <p>IT services & conslting</p>
                    <h6 class="resumeh6">designation</h6>
                    <p>Software developer </p>
                    <h6 class="resumeh6">Desired to shift</h6>
                    <p>Day/night</p>
                  </div>
                  <div class=" px-5">
                    <h6 class="resumeh6">Prefered location</h6>
                    <p>Hyderabad</p>
                    <h6 class="resumeh6">Expected ctc</h6>
                    <p>5,00,000 - 7,00,000</p>
                    <h6 class="resumeh6">Employment type</h6>
                    <p>Full time</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card p-4 mt-3 shadow">
              <div id="Personaldetails">
                <div class="d-flex flex-row">
                  <h5>Personal Details</h5>
                  <div style={{ marginLeft: "auto" }}>
                    {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                    <button
                      style={{ border: "none", backgroundColor: "white" }}
                    >
                      {" "}
                      <i
                        type="button"
                        class="material-symbols-outlined"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal91"
                      >
                        edit_square
                      </i>
                    </button>
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

                    <div class="modal" id="myModal91">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          {/* <!-- Modal Header --> */}
                          <div class="modal-header">
                            <h4 class="modal-title">Personal Details :</h4>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                          </div>

                          {/* <!-- Modal body --> */}
                          <div class="modal-body">
                            <form
                              action=""
                              onSubmit={onSubmitFormpersonalDetails}
                            >
                              <div className="row">
                                <div className=" col-12 col-md-6">
                                  <label>Date Of Birth :</label>
                                  <input
                                    type="text"
                                    className="etotal"
                                    style={{ border: "1px solid black" }}
                                    placeholder="Enter Date Of Birth "
                                    onChange={(e) =>
                                      setDateOfBirth(e.target.value)
                                    }
                                    value={DateOfBirth}
                                  />
                                </div>
                                <div className="col-12 col-md-6">
                                  <label>Marital Status :</label>
                                  <input
                                    type="text"
                                    className="etotal"
                                    style={{ border: "1px solid black" }}
                                    placeholder="Enter Marital Status"
                                    onChange={(e) =>
                                      setMaritalStatus(e.target.value)
                                    }
                                    value={MaritalStatus}
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className=" col-12 col-md-6">
                                  <label>Enter The Age :</label>
                                  <input
                                    type="text"
                                    className="etotal "
                                    style={{ border: "1px solid black" }}
                                    placeholder="Enter Age"
                                    onChange={(e) => setAge(e.target.value)}
                                    value={Age}
                                  />
                                </div>
                                <div className="col-12 col-md-6">
                                  <label>Languages :</label>
                                  <input
                                    type="text"
                                    className="etotal"
                                    style={{ border: "1px solid black" }}
                                    placeholder="Enter Languages "
                                    onChange={(e) =>
                                      setLanguages(e.target.value)
                                    }
                                    value={Languages}
                                  />
                                </div>
                              </div>
                              <div className="row ">
                                <div className=" col-12 col-md-6">
                                  <label>Gender :</label>
                                  <input
                                    type="text"
                                    className="etotal"
                                    style={{ border: "1px solid black" }}
                                    placeholder=" Enter Gender"
                                    onChange={(e) => setGender(e.target.value)}
                                    value={Gender}
                                  />
                                </div>
                                <div className="col-12 col-md-6">
                                  <label>Address Details :</label>
                                  <textarea
                                    name=""
                                    id=""
                                    cols="20"
                                    rows="2"
                                    onChange={(e) => setAddress(e.target.value)}
                                    value={Address}
                                  ></textarea>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="submit"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Save
                                </button>
                              </div>
                            </form>
                          </div>

                          {/* <!-- Modal footer --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />
                <div class="d-flex flex-row">
                  <div style={{ borderRight: "1px solid gray" }} class="px-1">
                    <h6 class="resumeh6">Date Of Birth</h6>
                    <p>06 December 1994</p>
                    <h6 class="resumeh6">Age</h6>
                    <p>25 </p>
                    <h6 class="resumeh6">Gender</h6>
                    <p>Male</p>
                  </div>

                  <div class=" px-5">
                    <h6 class="resumeh6">Marital Status</h6>
                    <p>Single</p>
                    <h6 class="resumeh6">Languages</h6>
                    <p>Telugu,English</p>
                    <h6 class="resumeh6">Address</h6>
                    <p>
                      201,plot 82,laxminagar colony,filmnaga
                      <br />
                      hyderabad,TN-500008
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ResumeDetails;
