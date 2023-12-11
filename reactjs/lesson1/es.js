const obj1 = arrToObj([
  ["name", "Son Dang"],
  ["age", 21],
  ["address", "Ha Noi"],
]);
// console.log(obj1);

function arrToObj(arr) {
  return arr.reduce((obj, value) => {
    obj[value[0]] = value[1];

    return obj;
  }, {});
}

var array = ["Javascript", "PHP", "Ruby"];

// var a = array[0];
// var b = array[1];
// var c = array[2];
var [a, b, c] = array;

console.log(a, b, c);

let resource = {
  name: "js",
  price: 1000,
  imgage: "Day La image",
  children: {
    name: "react",
  },
};

var {
  name: parrentName,
  children: { name: childrenName },
} = resource;

console.log(parrentName);
console.log(childrenName);

//Spread

function logger(a, ...param) {
  console.log(param);
}

// logger({
//   name: "Javasript",
//   price: 1000,
//   description: "Description content",
// });

// function logger1({ name, price, ...rest }) {
//   console.log(name);
//   console.log(price);
//   console.log(rest);
// }

// logger1(logger);

var arr1 = [1, 2, 3, 4];

var arr2 = [7, 8, 9, 10];

var arr3 = [...arr2, ...arr1];

console.log(arr3);

var ob1 = {
  name: "Dung",
};

var ob2 = {
  age: 33,
};
var obj3 = {
  ...ob1,
  ...ob2,
};

console.log(obj3);

var array13 = ["Js", "Ruby", "PHP"];

function driver(a, b, c) {
  console.log(a, b, c);
}

driver(...array13);

function driverArray(...rest) {
  for (let i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
}

driverArray(array13);

//Modules

import { TYPE_ERROR } from "./constants.js";

logger("Test Message...", TYPE_ERROR);
