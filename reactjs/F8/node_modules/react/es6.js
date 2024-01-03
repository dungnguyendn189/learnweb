//Arrow Function
function MyFunction(log) {
  console.log(log);
}

MyFunction("đệt mợ mài");

const arrowFunc = (log) => {
  console.log(log);
};

arrowFunc("Arrow Function");

const sum = (a, b) => a + b;

console.log(sum(3, 4));

const returnObj = (a, b) => ({ a: a, b: b });

console.log(returnObj(3, 5));

const course = {
  name: "Nguyễn Đức Dũng",
  getName: function () {
    return this.name;
  },
};

console.log(course.getName());

var name = "Javascript";
var age = 1000;

var info = {
  name,
  age,
  getName() {
    return this.name;
  },
};

console.log(info);
console.log(info.getName());

//định nghĩa key cho ob giạng biến

var fieldName = "name";
var fieldPrice = "price";

const khoahoc = {
  [fieldName]: fieldName,
  [fieldPrice]: fieldPrice,
};

console.log(khoahoc);

//DeStructuring

var array = ["JavaScript", "PHP", "Ruby"];

var [a, b, c] = array;

console.log(a, b, c);

//Rest Parameters

var array1 = ["JavaScript", "PHP", "Ruby"];

var [a, ...resst] = array;

console.log(resst);

var info1 = {
  name1: "Java Script",
  price: 1000,
  image: "my Image",
  children: {
    name1: "React JS",
  },
};

var {
  name1: parentName,
  children: { name1 },
  des = "Default Value",
} = info1;

console.log(des);

function logger(...param) {
  console.log(param);
}

console.log(logger(1, 2, 3, 4, 5, 6, 7));

//Spread

var array1 = ["Js", "ruby", "PHP"];
var array2 = ["ReactJS", "dart"];
var array3 = [...array2, ...array1];
console.log(array3);

var oj1 = {
  name: "JS",
};

var oj2 = {
  age: 32,
};

var oj3 = {
  ...oj1,
  ...oj2,
};

console.log(oj3);
