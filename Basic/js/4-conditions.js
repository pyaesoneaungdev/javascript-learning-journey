const age = 21;
if (age >= 18) {
  console.log("You can register");
} else {
  console.log("You can't register!");
}

const email = "user@gmail.com";
const password = 12345678;

if (email === "user@gmail.com" && password === 12345678) {
  console.log("Login Successful");
} else {
  console.log("Invalid Email or Password");
}

const marks = 70;

if (marks < 0 || marks > 100) {
  console.log("Invalid Marks");
} else if (marks >= 80) {
  console.log("Grade A");
} else if (marks >= 70) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else if (marks >= 50) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}

const username = "";
const passwords = "12345678";

if (!username) {
  console.log("Username is required");
} else if (!passwords) {
  console.log("Password is required");
} else {
  console.log("Form Submitted");
}

const product = {
  name: "Wireless Mouse",
  price: 25000,
  stock: 10,
};

const cart = {
  quantity: 3,
};

if (cart.quantity <= 0) {
  console.log("Your cart is empty");
} else if (cart.quantity > product.stock) {
  console.log("Not enough stock");
} else {
  const totalPrice = product.price * cart.quantity;

  console.log("Product:", product.name);
  console.log("Quantity:", cart.quantity);
  console.log("Total Price:", totalPrice, "MMK");
  console.log("Checkout Successful");
}
