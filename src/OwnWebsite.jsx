import React from "react";
import "./OwnWebsite.css";

function OwnWebSite() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark bg-danger">
        <div className="d-flex flex-row">
          <div>
            <input type="search" className="mt-2 mx-1 p-1" />
          </div>
          <div>
            <button className="btn btn-primary w-100">Search</button>
          </div>
        </div>
        <div className="col-12 col-md-4"></div>

        <div class="container-fluid">
          <a class="navbar-brand" href="javascript:void(0)">
            Logo
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="d-flex flex-row mt-4">
        <div className="col-12 col-md-4">
          <div className="d-flex flex-column">
            <div className="card p-2">
              <div className="d-flex flex-row">
                <div>
                  <img
                    src="https://img.freepik.com/premium-photo/black-white-image-man-with-circle-middle_745528-2665.jpg?w=360"
                    alt="Picture"
                    className="images12"
                  />
                </div>
                <div className="mt-5">
                  <h4>B.Siva Koteswara Rao </h4>
                  <h6>
                    Software Developer <br />
                    <span className="text-primary">
                      at Perfex Technologies
                    </span>{" "}
                  </h6>
                </div>
              </div>
              <div className="text-start">
                <i class="fa-solid fa-phone mx-4">
                  <span className="mx-3">9912762975</span>
                </i>
              </div>
              <div className="text-start">
                <i class="fa-regular fa-envelope mx-4 mt-2">  
                  <span className="mx-3">9912762975</span>
                </i>
              </div>
              <div className="text-start">
                <i class="fa-solid fa-phone mx-4 mt-2">
                  <span className="mx-3">9912762975</span>
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7"></div>
      </div>
    </div>
  );
}
export default OwnWebSite;
