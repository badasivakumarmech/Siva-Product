let wiproElement = document.getElementById("wiproItem");
let activeElement = document.getElementById("activeItem");
let applyElement = document.getElementById("applyItem");


wiproElement.onclick = function () {
    document.getElementById("imgElement").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4cqbXayQ5q6evF0JPq49n5TZcvLHt83MlWA&usqp=CAU";
    document.getElementById("imgElement").style.border = "none";
    document.getElementById("wiproItem").style.border = "2px solid #2c0264";
    document.getElementById("wiproItem").style.backgroundColor = "#f8f2f8";
    document.getElementById("activeItem").style.border = "2px solid  rgba(128, 128, 128, 0.355)";
    document.getElementById("activeItem").style.backgroundColor = "rgb(255, 255, 255)";
    document.getElementById("angelItem").textContent = "Wipro";


}
activeElement.onclick = function () {
    document.getElementById("imgElement").src = "data:image/png;base64,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";
    document.getElementById("imgElement").style.border = "";
    document.getElementById("angelItem").textContent = "Angel Broking";
    document.getElementById("activeItem").style.backgroundColor = "#4805a013";
    document.getElementById("activeItem").style.border = "";
    document.getElementById("wiproItem").style.border = "";
    document.getElementById("wiproItem").style.backgroundColor = "";
    document.getElementById("Section21").style.display = "";

}
function applyBtn() {
    document.getElementById("applyItem").textContent = "Applied";
}
bookItem.onclick = function () {
    document.getElementById("bookItem").style.color = "black";

}
barItem.onclick = function () {
    document.getElementById("listItem").style.display = "block";
    document.getElementById("listItem").style.backgroundColor = "black";
    document.getElementById("listItem").style.color = "white";
    document.getElementById("listItem").style.width = "100%";
    document.getElementById("listItem").style.height = "auto";
    document.getElementById("listItem").style.zIndex = "1";
    document.getElementById("listItem").style.fontSize = "12px";
    document.getElementById("browseItem").style.fontSize = "12px";
    document.getElementById("userId").style.fontSize = "12px";
    document.getElementById("markItem").style.display = "block";
    document.getElementById("barItem").style.display = "none";



}
markItem.onclick = function () {
    document.getElementById("listItem").style.display = "none";
    document.getElementById("barItem").style.display = "block";
    document.getElementById("markItem").style.display = "none";



}