// class Person{
//     snn: string;
//     firsName:string;
//     lastName:string;
//     constructor(snn:string,firsName:string,lastName:string){
//         this.snn = snn;
//         this.firsName = firsName;
//         this.lastName = lastName;
//     }
//     getFullName():string{
//         return `${this.firsName} ${this.lastName}`;
//     }
// }

// let dungMap = new Person("DungMap","Dung","map");

// console.log(dungMap);

// class Name {
//     public name:string;
//     private age:number;

//     constructor(name:string,age:number){
//         this.name = name;
//         this.age = age;
//     }
// }

// let dungpm = new Name('A' , 30);

// dungpm.name = "Dũng";
// // dungpm.age = 39;

// console.log(dungpm);

//getter setter

// class Person{
//     firstName:string;
//     lastName:string;
//     constructor(firstname:string,lastName:string){
//         this.firstName = firstname;
//         this.lastName = lastName;
//     }
//     getFullName():string {
//         return `${this.firstName} ${this.lastName}`;
//     }
//     desString():string {
//         return `This is ${this.firstName} ${this.lastName}`;
//     }
// }

// let fullName = new Person('Dung','Nguyen');

// console.log(fullName.getFullName());

// class Tuoi extends Person {
//     private age;
//     constructor(
//         firstName:string,
//         lastName:string,
//         age:number,
//     ){
//         super(firstName,lastName);
//         this.age = age;
//     }
//     getFullName():string {
//         return `this is Full Name : ${super.getFullName()} Age ${this.age}`;
//     }

// }

// let fullNameAge = new Tuoi('Dung',"Map",33);

// console.log(fullNameAge.getFullName());

//Bien Static

class Circle {
  static pi: number = 3.14;
  public test: number = 69;

  static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }
}
// abstract class

function getFullName(person: { firstName: string; lastName: string }) {
  return `${person.firstName} ${person.lastName}`;
}

let person40 = {
  firstName: "Toi Dep",
  lastName: "Trai",
};

console.log(getFullName(person40));
