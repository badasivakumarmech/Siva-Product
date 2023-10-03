// import React from "react";
// import { useState } from "react";
// import "./Practice.css"

// function PracticeSection() {
//   const studentDetails = [
//     {
//       id: "1",
//       Name: "Siva koteswara Rao",
//       CollegeName: "Universal College of Engineering And Technologies",
//       RollNo: "19NFA0301",
//       Address: "Guntur",
//       CollegeImage:
//         "https://images.collegedunia.com/public/college_data/images/appImage/28864_UNIVERSAL_APP.jpg",
//     },
//     {
//       id: "2",
//       Name: "Ravi Kumar",
//       CollegeName: "chalapati engineering college",
//       RollNo: "18NF785R2",
//       Address: "Vijayawada",
//       CollegeImage:
//         "https://content.jdmagicbox.com/comp/guntur/p9/9999px863.x863.090610183331.f8p9/catalogue/chalapathi-institute-of-technology-mothadaka-guntur-engineering-colleges-tvevkir59c.jpg?clr=",
//     },
//     {
//       id: "3",
//       Name: "Kishore",
//       CollegeName: "Vignan's Lara Institute of Technology & Science",
//       RollNo: "18JH8D214",
//       Address: "tenali",
//       CollegeImage:
//         "https://media.getmyuni.com/azure/college-image/big/vignans-lara-institute-of-technology-science-guntur.jpg",
//     },
//     {
//       id: "4",
//       Name: "Sai Krishna",
//       CollegeName: "VVIT Guntur",
//       RollNo: "17NH850308",
//       Address: "Guntur",
//       CollegeImage:
//         "https://timess3spore.s3.amazonaws.com/ndata/media/Counsellor/CollegeImage/2023/04/03/1680506268.jpg",
//     },
//     {
//       id: "5",
//       Name: "Bhavana",
//       CollegeName: "KKR AND KSR Institute Of Technology And Sciences",
//       RollNo: "14Nh2A0308",
//       Address: "Visakhapatnam",
//       CollegeImage: "https://www.addressguru.in/images/840767996.jpg",
//     },
//     {
//         id: "6",
//         Name: "Mounika Devi",
//         CollegeName: "Kallam Haranadhareddy Institute of Technology",
//         RollNo: "15UF5F0305",
//         Address: "Kadapa",
//         CollegeImage: "https://images.shiksha.com/mediadata/images/1588244870phpanyulN.jpeg",
//       },
//   ];
//   // const [display, setdisplay] = useState("");

//   // const handleBlogClick = (blog) => {
//   //   setdisplay(blog);
//   // };
//   // console.log(display);
//   // console.log(studentDetails.length);

//   return (
//     <div className="container">
//         <div className="row">
//         <h1>Student Details</h1>
//         <div className="col-md-2"></div>
//             <div className="col-12 col-md-7 mt-5">

//             <div className="row">

//                 {studentDetails.map((blog)=>

//                <div className="card mb-4 cardcontainer1 mx-3 px-3" style={{width : "300px"}}>
//                  <img src={blog.CollegeImage} alt="" className="mt-2"/>

//                 <h1 className="nameh1">{blog.Name}</h1>
//                 <h4 className="text-start mx-2 roll1">{blog.RollNo}</h4>
//                 <h4 className="text-start mx-2 roll1">{blog.CollegeName}</h4>
//                 <h4 className="text-start mx-2 roll1">{blog.Address}</h4>

//                </div>
//                 )}

//             </div>

//             </div>

//         </div>

//     </div>
//   )
// }
// export default PracticeSection;

import React from "react";
import ReactPlayer from "react-player";
function MyPlayer() {
  return (
    <div>
      <h1>Player</h1>

      <ReactPlayer url={"https://www.youtube.com/watch?v=iu-LBY7NXD4&t=98s"}
      height="500px"
      width="500px"
      
      />
    </div>
  );
}
export default MyPlayer;
