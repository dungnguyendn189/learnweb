var names = ["JS", "PHP"];

names.length = 10;

// for (var i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

var forEachNames = names.forEach((e) => {
  console.log(e);
});

//filter

var names2 = [
  {
    name: "PHP",
    coin: 300,
  },
  {
    name: "JS",
    coin: 400,
  },
  {
    name: "Dart",
    coin: 440,
    isFinish: true,
  },
  {
    name: "React",
    coin: 600,
    isFinish: true,
  },
  {
    name: "ReactJS",
    coin: 980,
    isFinish: false,
  },
];

//filter

var filterName2 = names2.filter((e) => {
  return e.coin > 500;
});

console.log(filterName2);

//some

var someName2 = names2.some((e) => {
  return e.isFinish == true;
});

console.log(someName2);
