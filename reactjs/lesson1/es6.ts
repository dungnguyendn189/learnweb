const logger3 = (log: string) => {
  console.log(log);
};

logger3("Messenger..");

const sum = (a: number, b: number) => ({
  a: a,
  b: b,
});

console.log(sum(3, 4));

class Course {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const tongSo = new Course("Nguyen Duc Dung", 30);

console.log(tongSo);

let language: string[] = ["Javascript", "PHP", "Ruby"];

// var a = array[0];
// var b = array[1];
// var c = array[2];
let array0: string = language[0];

console.log(array0);
