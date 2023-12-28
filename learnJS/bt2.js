var dethAray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var topics = [
  {
    topic: "Frontend",
    course: [
      {
        id: 1,
        title: "HTML,CSS",
      },
      {
        id: 2,
        title: "Dart",
      },
      {
        id: 3,
        title: "Reacts",
      },
    ],
  },
];

var flatArray = dethAray.reduce((flatOuput, arr) => {
  return flatOuput.concat(arr);
}, []);

console.log(flatArray);
