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
  },
  {
    name: "React",
    coin: 600,
  },
  {
    name: "ReactJS",
    coin: 980,
  },
];

//filter

var filterName2 = names2.filter((e) => {
  return e.coin > 500;
});

console.log(filterName2);

//some
