// var inputElement = document.querySelector('input[type="text"]');

// var inputValue;

// inputElement.oninput = function (e) {
//   inputValue = e.target.value;
// };

// var inputElementCheckbox = document.querySelector('input[type="checkbox"]');

// inputElementCheckbox.onchange = function (e) {
//   console.log(e.target.checked);
// };

// var inputElementSelect = document.querySelector("select");

// inputElementSelect.onchange = function (e) {
//   console.log(e.target.value);
// };

// var elemnts = document.links;
// for (var i = 0; i < elemnts.length; i++) {
//   elemnts[i].onclick = function (e) {
//     if (!e.target.href.startswith("https://www.google.com/")) {
//       e.preventDefault();
//     }
//   };
// }

var ulElement = document.querySelector("ul");

ulElement.onmousedown = function (e) {
  e.preventDefault();
};

document.querySelector(".div").onclick = function () {
  console.log("DiV");
};

document.querySelector("button").onclick = function (e) {
  e.stopPropagation();
  console.log("Click Me");
};
