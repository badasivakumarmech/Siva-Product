function button1() {
    document.getElementById("fullname").textContent = "Fullname";
    document.getElementById("gender1").style.display = "";
    document.getElementById("imagechange").src = "https://img.freepik.com/free-vector/people-work-office-scene-colleagues-look-laptop-screen-manager-employee-tasks-working-project-together_575670-583.jpg?w=740&t=st=1688540160~exp=1688540760~hmac=b42d76f859a8dbd9d4b7d5cd7d037bb19a14f8cabbc526036128a03de297db5e";
    document.getElementById("ib2").style.display = "none";
    document.getElementById("ib1").style.display = "";
    document.getElementById("Jobbtn").style.fontWeight = "bold";
    // document.getElementById("Recruitersbtn").style.fontWeight = "100";
    document.getElementById("Jobbtn").style.backgroundColor = "white";
    document.getElementById("Recruitersbtn").style.backgroundColor = "lightgray";
}

function button2() {
    document.getElementById("fullname").textContent = "Company Name";
    document.getElementById("gender1").style.display = "none";
    document.getElementById("imagechange").src = "https://creativemanpower.in/wp-content/uploads/2022/09/img001.jpg";
    document.getElementById("ib1").style.display = "none";
    document.getElementById("ib2").style.display = "";
    document.getElementById("Recruitersbtn").style.fontWeight = "bold";
    // document.getElementById("Jobbtn").style.fontWeight = "100";
    document.getElementById("Recruitersbtn").style.backgroundColor = "white";
    document.getElementById("Jobbtn").style.backgroundColor = "lightgray";

}
 