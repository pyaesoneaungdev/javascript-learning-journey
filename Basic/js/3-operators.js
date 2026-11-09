//1-Arithmetic Operators
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//2-Assignment Operators
let score = 10;

score += 5;
console.log(score);

score -= 1;
console.log(score);

score *= 2;
console.log(score);

score -= 10;
console.log(score);

//3-Comparison Operators
console.log(10 != 20);
console.log(10 != 10);
console.log(10 != "10");
console.log(5 == "5");
console.log(5 === "5");

//4-Logical Operators
let age = 22;
let hasID = true;

console.log(age >= 18 && hasID);
console.log(age < 18 || hasID);
console.log(!hasID);

let username = "Pyae";
let password = "123456";

console.log(
  username === "Pyae" && password === "123456"
    ? "Login successful"
    : "Not Login!",
);

//5-String Operator
let firstName = "Pyae";
let lastName = "Sone";

console.log(firstName + " " + lastName);
console.log("10" + 5);
console.log(10 + 5);
console.log("10" - 5);

//6-Ternary Operator
let yourAge = 20;

let result = yourAge >= 18 ? "Adult" : "Minor";

console.log(result);

const isLoggedIn = true;

console.log(isLoggedIn ? "Welcome to Dashboard" : "Please Login First!");

//Nested Ternary
const marks = 85;

const grade =
  marks >= 80 ? "A" : marks >= 60 ? "B" : marks >= 40 ? "C" : "Fail";

console.log(grade);

//Truthy and Falsy
console.log(true ? "It's True" : "It's false");
console.log({} ? "It's True" : "It's false");
console.log([] ? "It's True" : "It's false");
console.log(2 ? "It's True" : "It's false");
console.log(1 ? "It's True" : "It's false");
console.log(0 ? "It's True" : "It's false");
console.log(-1 ? "It's True" : "It's false");
console.log("" ? "It's True" : "It's false");
console.log("a" ? "It's True" : "It's false");
console.log(" " ? "It's True" : "It's false");
console.log("abc" ? "It's True" : "It's false");
console.log(null ? "It's True" : "It's false");
console.log(undefined ? "It's True" : "It's false");
console.log(NaN ? "It's True" : "It's false");

// Product Information
const productName = "Wireless Mouse";
const productPrice = 25000;
let quantity = 3;
let stock = 10;
const discountPercentage = 10;
const deliveryFee = 3000;

const subtotal = productPrice * quantity;

const discountAmount = (subtotal * discountPercentage) / 100;

const finalPrice = subtotal - discountAmount;

const isFreeDelivery = finalPrice >= 50000;

const finalDeliveryFee = isFreeDelivery ? 0 : deliveryFee;

const totalAmount = finalPrice + finalDeliveryFee;

const isAvailable = quantity <= stock;

console.log("===== SHOPPING CART =====");

console.log("Product:", productName);
console.log("Price:", productPrice);
console.log("Quantity:", quantity);

console.log("-------------------------");

console.log("Subtotal:", subtotal);
console.log("Discount:", discountAmount);
console.log("Final Price:", finalPrice);

console.log("Free Delivery:", isFreeDelivery);
console.log("Delivery Fee:", finalDeliveryFee);

console.log("-------------------------");

console.log("Total Amount:", totalAmount);
console.log("Stock Available:", isAvailable);
