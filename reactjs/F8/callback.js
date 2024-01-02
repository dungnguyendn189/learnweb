function MyFunction(param) {
  if (typeof param === "function") {
    param("Hoc Lap Trinh");
  }
}

function myCallback(value) {
  console.log("Value :", value);
}

MyFunction(myCallback);
