//1. Primitive Data Types

//String
let firstName = "Pyae Sone";
let lastName = "Aung";
let fullName = firstName + " " + lastName; //Concatenation
let city = "Pyay";
console.log(
  `My name is ${fullName} and I'm  ${21 + 1}  years old. Now I live in ${city}.`,
); //Template Literals

const customerName = "Aung Aung";
const orderId = "ORD-1001";
const message = `Hello ${customerName}, your order ${orderId} has been received.`;
console.log(message);

//Number
let studentCount = 50;
let quantity = 10;
let year = 2026;
let age = 22;
console.log(studentCount);
console.log(quantity);
console.log(year);
console.log(`My name is ${fullName} and I am  ${age} years old.`);
console.log(0o16 / 2);

//Boolean
let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn);
console.log(isAdmin);

if (isLoggedIn) {
  console.log("Welcome to  Dashboard");
} else {
  console.log("Please Login First!");
}

//Undefined
let userName;
console.log(userName);

//Null
let selectedProduct = null;
console.log(selectedProduct);

//BigInt
const bigNumber = 900719925474099123456789n;
console.log(bigNumber);
console.log(typeof bigNumber);

//Symbol
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2);

//2. Non-Primitive (Reference) Data Types

//Object
const student = {
  name: "Aung Aung",
  age: 22,
  major: "Computer Science",
  girlFriend: true,
};

console.log(student);
student.age = 21; //overwrite
student.girlFriend = false;
console.log(student);
console.log(student["name"]);
console.log(student.age);

//Array
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);
fruits[1] = "Orange";
console.log(fruits);
console.log(fruits[2]);

//Function
function greet() {
  console.log("Hello! Good Morning");
}
greet();

//typeof
console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof 10.5);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof 100n);
console.log(typeof Symbol("id"));
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});

//memory

//stack memory => Primitive
let x = 5;
let y = x;
console.log(x);
console.log(y);
x = 10;
console.log(x);
console.log(y);

//heap memory => store arr,obj but addrerss store stack memory
const c = ["a", "b", "c"];
const d = c;
console.log(c);
console.log(d);

c[1] = "bbb";
console.log(c);
console.log(d);
