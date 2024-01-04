// Element
var headingNode = document.getElementById("heading");
var headingNodes = document.getElementsByClassName("heading");
var getTagName = document.getElementsByTagName("h1");
console.log(headingNodes);
console.log(getTagName);
var getQuery = document.querySelector(".box .heading-2");
console.log(getQuery);
var listItemNodes = document.querySelectorAll(".box li");
var listItemNodes2 = document.querySelectorAll(".box2 li");
console.log(listItemNodes2);

// Attribute
var getBox3 = document.querySelector(".box3");
getBox3.title = "box3test";
getBox3.setAttribute("href", "http://24h.com.vn");

var getText = document.querySelector(".box3 .heading");
getText.innerText = "newHeading";

//Text

var getBox4 = document.querySelector(".box4");
getBox4.innerHTML = '<h1 class="box4-heading">Cảm ơn quý khách</h1>';

Object.assign(getBox4.style, {
  width: "200px",
  height: "600px",
  backgroundColor: "green",
});

getBox4.classList.add("red", "blue");

getBox4.classList.remove("blue");

setTimeout(function () {
  getBox4.classList.remove("red");
}, 3000);
