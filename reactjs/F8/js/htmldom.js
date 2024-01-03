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

console.log(getBox3);
//Text
