// 1st Topics
{
  var data = "Nayeem";
  //   console.log(data);
}
var data = "Farsit";
// console.log(data);

let x = 10;

x = 20;
// console.log(x);

const y = 30;
// console.log(y);

// 2nd Topics
const age = 20;
// console.log(typeof age);
const name = "Book";
// console.log(typeof name);
const done = true;
// console.log(typeof done);
let xy;
// console.log(typeof xy);
const d = null;
// console.log(typeof d);

const arr = ["A", "B"];
// console.log(typeof arr);
// console.log(Array.isArray(arr));

const ob = {
  name: "A",
  age: 20,
  isActive: true,
};
// console.log(typeof ob);

// Type Conversion

const p = 20;
// console.log(typeof String(p));
const q = "20";
// console.log(typeof Number(q));

// Operators & Conditions
// Op => ( + , - , * , / )  , Conditional Op => ( ==, ===, >, < , <=, >=, !,!=,&&,||)

const marks = 32;
if (marks < 33) {
  //   console.log("Fail");
} else if (marks >= 34 && marks <= 50) {
  //   console.log("B");
} else {
  //   console.log("Pass");
}

const result = marks > 33 ? "Pass" : "Fail";

// const value = 5 === "5";
// if (value) {
//   console.log("True:", value);
// } else {
//   console.log("False:", value);
// }

// console.log(result);

// switch ("Green") {
//   case "Red":
//     console.log("Red");
//     break;
//   case "Black":
//     console.log("Black");
//     break;
//   case "Green":
//     console.log("Green");
//     break;
//   default:
//     console.log("Invalid");
// }

const role = {
  admin: "ADMIN",
  user: "USER",
  modarator: "MODARATOR",
};

let page;

switch (role.user) {
  case role.admin:
    page = "ADMIN";
    break;
  case role.user:
    page = "USER";
    break;
  case role.modarator:
    page = "MODARATOR";
    break;
  default:
    page: "Invalid Page";
}

// console.log(page);

for (let i = 1; i <= 5; i++) {
  //   console.log(`${i} : A`);
}

for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

function greet(name) {
  console.log(name);
}
// greet("Nayeem");

function add(a, b) {
  return a + b;
}

// console.log(add(5, 6));

const learning = (topics, callback) => {
  console.log("Learning..", topics);
  callback();
};

const Done = () => {
  console.log("Done");
};

// learning("Javascript", Done);

// setTimeout(() => {
//   console.log("Pora shesh");
// }, 2000);

let toys = ["Car", "Ball", "Doll"];

// toys.push("Robot");
// console.log(toys);
// toys.pop();
// console.log(toys);
// toys.shift();
// console.log(toys);
// toys.unshift("Train");
// console.log(toys);

let number = [1, 2, 3, 4, 5, 6];

const num1 = number.map((n) => n * 2);
// console.log(num1);
const num2 = number.filter((n) => n % 2 !== 0);
// console.log(num2);

const num3 = number.find((n) => n === 3);
// console.log(num3);

const num4 = number.reduce((a, b) => a + b);
// console.log(num4);

number.splice(1, 1);

number.slice(5, 0);
// console.log(number);

function sum(...numbers) {
  console.log(numbers);
}
// sum("sdfgsdfs", 1513);

const newArray = [...number, ...toys];
// console.log(newArray);

const student = {
  name1: "Rahim",
  age1: 10,
  address: {
    city: "Dhaka",
  },
};

console.log(student?.address?.city);

const { name1, age1 } = student;
// console.log(name1, age1);

for (let key in student) {
  //   console.log(key);
}

let text = "                 Hello JS ";

let text1 = "sfd,sdfs,ssdfs,sdf";

const tr = text.trim();
// console.log(tr);

const tUp = text.trim().toUpperCase();
// console.log(tUp);

text.toLowerCase();
text.includes("JS");
text.slice(1, 5);
tSP = text1.split(",");

console.log(tSP);
