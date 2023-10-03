import React, { useState } from "react";
import "./Practice123.css";
import Profile from "./Practice123profile";
import data from "./PracticeData";

function GetData() {
  // 1st

  // const [count, setCount] = useState(0);

  // const increase = () => {
  //   setCount(count + 1);
  // };
  // const decrease = () => {
  //   setCount(count - 1);
  // };

  // 3rd

  // const initialArray = [
  //   {
  //     id: "1",
  //     firstName: "siva",
  //     lastName: "koti",
  //     age: "24",
  //   },
  //   {
  //     id: "2",
  //     firstName: "siva",
  //     lastName: "koti",
  //     age: "24",
  //   },
  //   {
  //     id: "3",
  //     firstName: "siva",
  //     lastName: "koti",
  //     age: "24",
  //   },
  //   {
  //     id: "4",
  //     firstName: "siva",
  //     lastName: "koti",
  //     age: "24",
  //   },
  // ];

  // const [data, setData] = useState(initialArray);
  // // console.log(data);

  // const HandleDelete = (displayID) => {
  //   const filterData = data.filter((eachItem) => {
  //     return eachItem.id !== displayID;
  //   });
  //   setData(filterData);
  // };

  // 4th

  const [showData, setShowData] = useState(false);

  const handleChange = () => {
    setShowData(!showData);
  };

  return (
    <section className="post-container text-start ">
      {/* 1st */}

      {/* {data.map((eachObj) => {
        const { id, thumbnailUrl, title, url } = eachObj;
        return (
          <Profile
            key={id}
            id={id}
            thumbnailUrl={thumbnailUrl}
            title={title}
            url={url}
          />
        );
      })} */}
      {/* 2nd */}

      {/* <button style={{ fontSize: "30px" }} onClick={decrease} className="w-25">
        -
      </button>
      <h5 style={{ fontSize: "70px" }}>{count}</h5>
      <button style={{ fontSize: "30px" }} onClick={increase} className="w-25">
        +
      </button> */}

      {/* 3rd */}

      {/* <div>
        <ul>
          {data.map((eachItem) => {
            const { firstName, lastName, age, id } = eachItem;
            return (
              <li className="mt-4 p-3 w-100" style={{ fontSize: "20px" }}>
                <div>
                  my FirstName <strong> {firstName}</strong>{" "}
                </div>
                <div>my LastName : {lastName}</div>
                <div>Age: {age}</div>
                <button className="mt-3" onClick={() => HandleDelete(id)}>
                  Delete Me!
                </button>
              </li>
            );
          })}
        </ul>
      </div> */}

      {/* 4th */}

      <div className="container ">
        <button className="mx-5 w-25 mb-5" onClick={handleChange}>
          {showData ? "hide" : "show"}
        </button>
        <br />
        {/* {showData && (
          <div className="container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae
          expedita ex cumque, quo dolorum maxime adipisci ut itaque repellat
          aliquam dignissimos
        </div>
      )} */}

        {showData ? (
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            quos autem? Nostrum in asperiores distinctio repellendus minus
            labore blanditiis ipsa!
          </div>
        ) : (
          <div>
            <h3>data is hide</h3>
          </div>
        )}
      </div>
    </section>
  );
}
export default GetData;
