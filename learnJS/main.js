var course = [
  {
    id: 1,
    name: "Khoa Hocj JS",
    coin: 0,
  },
  {
    id: 2,
    name: "Khoa Hocj React",
    coin: 3,
  },
  {
    id: 3,
    name: "Khoa Hocj Dart",
    coin: 5,
  },
];

var numbers = [100, 200, 300, 400, 500];

var totalNumber = numbers.reduce((total, course) => {
  return total + course;
}, 0);

console.log(totalNumber);

var totalCoin = course.reduce((total, course) => {
  return total + course.coin;
}, 0);

console.log(totalCoin);

// var newCourse = course.map((element, index) => {
//   return {
//     id: element.id,
//     name: element.name,
//     coin: `Giá: ${element.coin}`,
//     index: index,
//   };
// });

// var khoaHoc = course.map((element) => element.name);

// console.log(newCourse);
// console.log(khoaHoc);

// var totalcoin = 0;

// for (var course1 of course) {
//   totalcoin += course1.coin;
// }

// console.log(totalcoin);

// var i = 0;

// var totalcoins = course.reduce((element, currentValue) => {
//   i++;
//   console.log(i, element);
//   element + currentValue, 0;
// });

// console.log(totalcoin);
