function MyFunction(param) {
  if (typeof param === "function") {
    param("Hoc Lap Trinh");
  }
}

function myCallback(value) {
  console.log("Value :", value);
}

MyFunction(myCallback);

// callback là hàm
// truyền qua đối số
// được gọi lại ( trong hàm nhận đối số)

var courses = ["Javascript", "php", "Dart"];

var htmls = courses.map((e) => {
  return `<h2>${e}</h2>`;
});

console.log(htmls.join(""));
