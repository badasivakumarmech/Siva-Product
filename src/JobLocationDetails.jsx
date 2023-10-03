// import React from "react";
// // import { Route } from "react-router-dom";
// // import Header from "./Header";
// import Footer from "./Footer";
// import logo from "../src/All Images/pab bottom-logo (1).jpg";
// import { Link,useNavigate} from "react-router-dom";
// import "./home.css";
// import "./BrowserJobs.css";
// import "./Jobs.css";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function JobLocationDetails() {
//     const elementRefs = {};
//     const [blogslist, setblogslist] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filteredButtons, setFilteredButtons] = useState('');
//     const [filter, setFilter] = useState([]);

//     const [selectLocations, setselectLocations] = useState([]);

//     const allButtons = [
//         'Adoni', 'Amaravati', 'Anantapur', 'Chandragiri', 'Chittoor',
//         'Dowlaiswaram', 'Guntur', 'Eluru', 'Kadapa', 'Kakinada', 'Kurnool',
//         'Machilipatnam', 'Visakhapatnam', 'Bhilai', 'Delhi', 'NewDelhi',
//         'Ahmadabad', 'Dwarka', 'Faridabad', 'Bilaspur', 'Shimla', ' Jammu',
//         'Bengaluru', 'Bhopal', 'Gwalior', 'Ahmadnagar', 'Mumbai', 'Nagpur',
//         'Imphal', 'Kohima', 'Bhubaneshwar', 'Koraput', 'Puri', 'Puducherry', 'Amritsar',
//         'Chennai', 'Hyderabad', ' Nizamabad', 'Sangareddi', 'Warangal', 'Karimnagar', 'Mahbubnagar',
//         'Khammam', 'Kolkata'
//       ];
//       const handleSearch = () => {
//         const filtered = allButtons.filter(button =>
//           button.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         setFilteredButtons(filtered);
//       };

//       const handleButtonOnClick = (buttonName) => {
//         // Handle the click event for each button here
//         setFilter( `${buttonName}`);
//         setSearchTerm(`${buttonName}`);
//         if (elementRefs[buttonName]) {
//             elementRefs[buttonName].style.display = 'none';
//           }
        
//     };
   

 

  
//   return (
//     <div className="">
//       <nav class="navbar navbar-expand-sm">
//         <div class="container">
//           <img src={logo} alt="logo" width="200px" />
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#collapsibleNavbar"
//             style={{ backgroundcolor: "black" }}
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="collapsibleNavbar">
//             <ul class="navbar-nav logostyle">
//               <li class="nav-item">
//                 <a class="nav-link navstyle " href="/Home">
//                   Home
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a
//                   class="nav-link dropdown-toggle navstyle"
//                   href="/BrowserJobs"
//                 >
//                   Browse Jobs
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link dropdown-toggle navstyle" href="">
//                   Jobs
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link dropdown-toggle navstyle" href="#">
//                   services
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link dropdown-toggle navstyle" href="./ ">
//                   payments
//                 </a>
//               </li>
//               <li class="nav-item logosymbol">
//                 <i class="fa-solid fa-bell bellicon"></i>
//               </li>
//               <li class="nav-item logosymbol">
//                 <Link to="/ProfileCode">
//                   {" "}
//                   <a href="">
//                     {" "}
//                     <i class=" fa-sharp fa-solid fa-circle-user dropdown-toggle bellicon"></i>
//                   </a>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div className="container mt-5">
//         <div className="row">
//           <div className="col-12 col-md-2  ">
//             <a href="/Jobs" className="anchar">
//               <button className="card shadow jobbutton ">All Jobs</button>
//             </a>
//           </div>
//           <div className="col-12 col-md-2">
//             <a href="/JobLocationDetails" className="anchar">
//               <button className="card shadow jobbutton  bg-primary">
//                 Job By Location
//               </button>
//             </a>
//           </div>
//           <div className="col-12 col-md-2">
//             <a href="/JobCompanyDetails" className="anchar">
//               {" "}
//               <button className="card shadow jobbutton">
//                 Jobs By Company
//               </button>
//             </a>
//           </div>
//           <div className="col-12 col-md-2">
//             <a href="/JobCategoryDetails" className="anchar">
//               <button className="card shadow jobbutton ">
//                 {" "}
//                 Jobs By Category
//               </button>
//             </a>
//           </div>
//           <div className="col-12 col-md-2">
//             <a href="/JobDesignationDetails" className="anchar">
//               <button className="card shadow jobbutton ">
//                 Jobs By Designation
//               </button>
//             </a>
//           </div>
//           <div className="col-12 col-md-2 ">
//             <a href="/JobSkillsDetails" className="anchar">
//               <button className="card shadow jobbutton ">Jobs By Skills</button>
//             </a>
//           </div>
//         </div>
//       </div>
//       {/* Search */}
//       <div className="container mt-4 ">
//         <div className="row">
//           <div className="col-12 col-md-4">
//             <h5>Featured Jobs By Companies</h5>
//           </div>
//           <div className="col-12 col-md-2"></div>
//           <div className="col-12 col-md-3 mt-2 ">
//             <input
//               type="search"
//               id="form1"
//               class="form-control  "
//               placeholder="search"
//               value={searchTerm} onChange={e =>setSearchTerm(e.target.value)}
//             />
             
//           </div>
//           <div className="col-12 col-md-3">
//             <button type="button" class="btn btn-primary  w-25" onClick={handleSearch}>
//               <i class="fas fa-search"></i>
//             </button>
//           </div>
//         </div>
//         <div></div>
//       </div>
//       {/* search a characters */}
//       <div className="container mt-5">
//         <div className="row">
//           <div className="col-12 col-md-12 d-flex">
//             <button className="buttonalpha card shadow">A</button>
//             <button className="buttonalpha card shadow">B</button>
//             <button className="buttonalpha card shadow">C</button>
//             <button className="buttonalpha card shadow">D</button>
//             <button className="buttonalpha card shadow">E</button>
//             <button className="buttonalpha card shadow">F</button>
//             <button className="buttonalpha card shadow">G</button>
//             <button className="buttonalpha card shadow">H</button>
//             <button className="buttonalpha card shadow">I</button>
//             <button className="buttonalpha card shadow">J</button>
//             <button className="buttonalpha card shadow">K</button>
//             <button className="buttonalpha card shadow">L</button>
//             <button className="buttonalpha card shadow">M</button>
//             <button className="buttonalpha card shadow">N</button>
//             <button className="buttonalpha card shadow">O</button>
//             <button className="buttonalpha card shadow">P</button>
//             <button className="buttonalpha card shadow">Q</button>
//             <button className="buttonalpha card shadow">R</button>
//             <button className="buttonalpha card shadow">S</button>
//             <button className="buttonalpha card shadow">T</button>
//             <button className="buttonalpha card shadow">U</button>
//           </div>
//           <div className="col-12 col-md-12 d-flex w-25">
//             <button className="buttonalpha card shadow">V</button>
//             <button className="buttonalpha card shadow">W</button>
//             <button className="buttonalpha card shadow">X</button>
//             <button className="buttonalpha card shadow">Y</button>
//             <button className="buttonalpha card shadow">Z</button>
//           </div>
//         </div>
//       </div>
//       {/* //card-container */}
 
//       <div className="container">
//         <div className="row">
//           {searchTerm && (
//             <div className="">
//               <div className="d-flex flex-row">
//                 <div className="col-md-2 searchpara" ref={(el) => (elementRefs[allButtons.buttonName] = el)}>
//                   <p className="para61623 mt-5"> {filter}</p>
                  
//                 </div>
               
//                 <div>
               
//                   <button
//                    onClick={(e) => handleButtonOnClick(e.target.value)}
//                     className="cross12 mt-5 btn btn-primary"
//                   >
//                     ✖
//                   </button>
//                 </div>
//               </div>
//               <Link to="/BrowserJobs">
//                 <button className="button618">
//                   filter selected<i class="fas fa-search"></i>
//                 </button>
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="container mt-5">
//         <div className="row mt-2">
//           {filteredButtons.length === 0 ? (
//             <p>No results found.</p>
//           ) : (
//             filteredButtons.map((button, index) => (
//               <div className="col-12 col-md-3" key={index}>
//                 <button
//                   className="buttonlocation card w-100 mb-3"
//                   onClick={() => handleButtonOnClick(button)}
//                 >
//                   {button}
//                 </button>
//               </div>
//             ))
//           )}
//         </div>
//       </div>


       
      
//       <Footer />
//     </div>
//   );
// }
// export default JobLocationDetails;

import React from "react";
// import { Route } from "react-router-dom";
// import Header from "./Header";
import Footer from "./Footer";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import "./BrowserJobs.css";
import "./Jobs.css";
import { useEffect, useState } from "react";
import axios from "axios";
 



function JobLocationDetails() {
  const [blogslist, setblogslist] = useState([]);
  const [selectedblog, setselectedblog] = useState(null);
  const [showContent, setShowContent] = useState(true);

  const [selectCompany, setselectCompany] = useState([]);

  const Navigate = useNavigate();

  useEffect(() => {
    fetchblogs();
  }, []);

  const fetchblogs = async () => {
    const api = "http://localhost:4005/allusers";
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk";
    try {
      const response = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setblogslist(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const onclickblogdetails = async (blogid) => {
    const selectedJobDetails = blogslist.find((each) => each._id === blogid);
    console.log(selectedJobDetails);
    setselectedblog(selectedJobDetails);
    setShowContent(false);
  };

  const handlecompany = (company)=>{
    if(selectCompany.includes(company)){
      setselectCompany((blogslist)=> blogslist.filter((item)=> item!== company));

    }else{
      setselectCompany((blogslist) =>[...blogslist,company]);

    }
  };

  const removeitem = (_id)=>{
    const updateditem = [...selectCompany];
    updateditem.splice(_id , 1);
    setselectCompany(updateditem)

  }
  const handleClick = ()=>{
    Navigate("/BrowserJobs",{state:{location:selectCompany}})
  }

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
                <a
                  class="nav-link dropdown-toggle navstyle"
                  href="/BrowserJobs"
                >
                  Browse Jobs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link dropdown-toggle navstyle" href="">
                  Jobs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link dropdown-toggle navstyle" href="#">
                  services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link dropdown-toggle navstyle" href="/PaymentMethod ">
                  payments
                </a>
              </li>
              <li class="nav-item logosymbol">
                <i class="fa-solid fa-bell bellicon"></i>
              </li>
              <li class="nav-item logosymbol">
                <Link to="/ProfileCode">
                  {" "}
                  <a href="">
                    {" "}
                    <i class=" fa-sharp fa-solid fa-circle-user dropdown-toggle bellicon"></i>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-2  ">
            <a href="/Jobs" className="anchar">
              <button className="card shadow jobbutton ">All Jobs</button>
            </a>
          </div>
          <div className="col-12 col-md-2">
            <a href="/JobLocationDetails" className="anchar">
              <button className="card shadow jobbutton ">
                Job By Location
              </button>
            </a>
          </div>
          <div className="col-12 col-md-2">
            <a href="/JobCompanyDetails" className="anchar">
              {" "}
              <button className="card shadow jobbutton bg-primary">
                Jobs By Company
              </button>
            </a>
          </div>
          <div className="col-12 col-md-2">
            <a href="/JobCategoryDetails" className="anchar">
              <button className="card shadow jobbutton ">
                {" "}
                Jobs By Category
              </button>
            </a>
          </div>
          <div className="col-12 col-md-2">
            <a href="/JobDesignationDetails" className="anchar">
              <button className="card shadow jobbutton ">
                Jobs By Designation
              </button>
            </a>
          </div>
          <div className="col-12 col-md-2 ">
            <a href="/JobSkillsDetails" className="anchar">
              <button className="card shadow jobbutton ">Jobs By Skills</button>
            </a>
          </div>
        </div>
      </div>
      {/* Search */}
      <div className="container mt-4 ">
        <div className="row">
          <div className="col-12 col-md-4">
            <h5>Featured Jobs By Companies</h5>
          </div>
          <div className="col-12 col-md-2"></div>
          <div className="col-12 col-md-3 mt-2 ">
            <input
              type="search"
              id="form1"
              class="form-control  "
              placeholder="search"
            />
          </div>
          <div className="col-12 col-md-3">
            <button type="button" class="btn btn-primary  w-25">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div></div>
      </div>
      {/* search a characters */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-12 d-flex">
            <button className="buttonalpha card shadow">A</button>
            <button className="buttonalpha card shadow">B</button>
            <button className="buttonalpha card shadow">C</button>
            <button className="buttonalpha card shadow">D</button>
            <button className="buttonalpha card shadow">E</button>
            <button className="buttonalpha card shadow">F</button>
            <button className="buttonalpha card shadow">G</button>
            <button className="buttonalpha card shadow">H</button>
            <button className="buttonalpha card shadow">I</button>
            <button className="buttonalpha card shadow">J</button>
            <button className="buttonalpha card shadow">K</button>
            <button className="buttonalpha card shadow">L</button>
            <button className="buttonalpha card shadow">M</button>
            <button className="buttonalpha card shadow">N</button>
            <button className="buttonalpha card shadow">O</button>
            <button className="buttonalpha card shadow">P</button>
            <button className="buttonalpha card shadow">Q</button>
            <button className="buttonalpha card shadow">R</button>
            <button className="buttonalpha card shadow">S</button>
            <button className="buttonalpha card shadow">T</button>
            <button className="buttonalpha card shadow">U</button>
          </div>
          <div className="col-12 col-md-12 d-flex w-25">
            <button className="buttonalpha card shadow">V</button>
            <button className="buttonalpha card shadow">W</button>
            <button className="buttonalpha card shadow">X</button>
            <button className="buttonalpha card shadow">Y</button>
            <button className="buttonalpha card shadow">Z</button>
          </div>
        </div>
      </div>

      <div className="container">
        {/* <div className="row">
          {selectedblog && (
            <div className="">
              <div className="d-flex flex-row">
                <div className="col-md-2 searchpara">
                  <p className="para61623 mt-5">
                    {" "}
                    {selectedblog.companynameE2}
                  </p>
                </div>
                <div>
                  <button
                    onClick={onclickblogdetails}
                    className="cross12 mt-5 btn btn-primary"
                  >
                    ✖
                  </button>
                </div>
              </div>
              <Link to="/BrowserJobs">
                <button className="button618">
                  filter selected<i class="fas fa-search"></i>
                </button>
              </Link>
            </div>
          )}
        </div> */}
        <div className="row">
          {
            selectCompany.length > 0 ?(
              selectCompany.map((location,index)=>(
                <div className="" key={index}>
                  <h2>{location}</h2>
                  <button onClick={handleClick}>Filter Array</button>

                </div>
              ))
            ) :(
              <div className="notFound">

              </div>
            )
          }

        </div>
      </div>
      <div className="mt-5">
        {blogslist.map((blog) => (
          <div key={blog._id}
            className="container"
            onClick={(e) => handlecompany(blog.stateE2)}
          >
            <div className="row">
              <div className="col-12 col-md-3 mb-3">
                <button className="buttonlocation card w-100  ">
                  {blog.stateE2}
                </button>
              </div>
              <div className="col-12 col-md-3 ">
                <button className="buttonlocation card w-100">
                  {blog.stateE2}
                </button>
              </div>
              <div className="col-12 col-md-3 ">
                <button className="buttonlocation card w-100">
                  {blog.stateE2}
                </button>
              </div>
              <div className="col-12 col-md-3 ">
                <button className="buttonlocation card w-100">
                  {blog.stateE2}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default JobLocationDetails;

