//var
console.log(studentName); //undefinded
var studentName; //declare
studentName = "Aung Aung"; //assign
console.log(studentName);
studentName = "Mg Mg"; //overwrite
console.log(studentName);

//let
let age = 21; //assign
console.log(age);
age = 22; //reassign
console.log(age);

let studentAge = 19;
console.log("Before:", studentAge);
studentAge = 20;
console.log("Befor:", studentAge);

//const
const country = "Myanmar";
console.log(country);

const appName = "My Shopping App";
const taxRate = 0.05;
const apiUrl = "https://example.com/api";

let productPrice = 5000;
console.log("Old Price:", productPrice);
productPrice = 8000;
console.log("New Price:", productPrice);

const productName = "Wireless Mouse";
let productQuantity = 10;
const storeName = "Tech Store";
let isAvailable = true;

console.log("Product Information");
console.log("-------------------");
console.log("Product:", productName);
console.log("Price:", productPrice);
console.log("Quantity:", productQuantity);
console.log("Store:", storeName);
console.log("Available:", isAvailable);
