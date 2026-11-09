//function statement
function greeting() {
  console.log("Welcome to JavaScript");
}
greeting();

greet();
function greet(name) {
  //paramater
  console.log(`Hello ${name}`);
}
greet("Aung Aung"); //argument

function greetingName(name = "Guest") {
  //default parameter
  console.log(`Hello ${name}`);
}
greetingName("Su Su");
greetingName();

function getStudent() {
  return {
    name: "Aung Aung",
    age: 20,
    major: "Computer Science",
  };
}

const student = getStudent();

console.log(student.name);
console.log(student.age);
console.log(student.major);

//Function Expression
const greetWithFunExpression = function () {
  console.log("Hello JavaScript");
};
greetWithFunExpression();

//Arow Function
const arrowFun = () => console.log("Hello Arrow Function");
arrowFun();

const getUser = () => ({
  name: "Pyae Sone",
  age: 21,
});

console.log(getUser());

//rest parameter
function sum(a, b, ...numbers) {
  let total = a + b;

  for (const number of numbers) {
    total += number;
  }

  return total;
}
console.log(sum(10, 20, 30, 40));
console.log(sum(10, 20, 30));
console.log(sum(10, 20, 30, 40, 50));

//Scopes

//global scope
const username = "Aung Aung";

function globalScope() {
  console.log(username);
}
globalScope();
console.log(username);

//functtion scope
function funScope() {
  const message = "Hello";

  console.log(message);
}
funScope();

//block scope
if (true) {
  const name = "Aung Aung";
  let age = 20;

  console.log(name);
  console.log(age);
}

//IIFE => ရေးပြီးတာနဲ့အလုပ်လုပ်
(function () {
  console.log("I'm IIFE!");
})();

//function invoke another function
function x() {
  return "x";
}
function y() {
  return x;
}
console.log(y());

//this
const me = {
  //property
  name: "Ryuu",
  age: 21,
  //method => behavior
  tech() {
    return "I can tech html";
  },
  learn() {
    return "I can leartn Js";
  },
  intro() {
    return `My name is ${this.name}`;
  },
};
console.log(me.intro());

//callback function
//Function တစ်ခုကို နောက် Function တစ်ခုဆီ Argument အနေနဲ့ ပေးလိုက်တာကို Callback Function လို့ခေါ်ပါတယ်။
function greetWithCallbackFun(name, callback) {
  console.log("Hello " + name);

  callback();
}

function sayGoodbye() {
  console.log("Goodbye");
}

greetWithCallbackFun("Aung Aung", sayGoodbye);

//Higher-Order Functions
// Higher-Order Function ဆိုတာ အောက်ပါနှစ်မျိုးထဲက တစ်ခုခု လုပ်နိုင်တဲ့ Function ဖြစ်ပါတယ်။
// 1. Function တစ်ခုကို Argument အနေနဲ့ လက်ခံတယ်။
// 2. Function တစ်ခုကို Return ပြန်ပေးတယ်။
// ဥပမာ Callback Function ကို လက်ခံတဲ့ calculate() က Higher-Order Function ဖြစ်ပါတယ်။

function calculate(a, b, callback) {
  return callback(a, b);
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log(calculate(10, 20, add));
console.log(calculate(10, 20, multiply));

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((number) => {
  return number * 2;
});

console.log(doubled);

//Student Management Functions
const students = [
  { id: 1, name: "Aung Aung", marks: 85 },
  { id: 2, name: "Su Su", marks: 90 },
  { id: 3, name: "Mg Mg", marks: 45 },
  { id: 4, name: "Hla Hla", marks: 75 },
  { id: 5, name: "Mya Mya", marks: 95 },
];

function showStudents() {
  for (const student of students) {
    console.log(student);
  }
}

function calculateAverage() {
  let total = 0;

  for (const student of students) {
    total += student.marks;
  }

  return total / students.length;
}

function getGrade(marks) {
  if (marks >= 80) return "A";
  if (marks >= 70) return "B";
  if (marks >= 60) return "C";
  if (marks >= 50) return "D";

  return "F";
}

function getPassedStudents() {
  const passedStudents = [];

  for (const student of students) {
    if (student.marks >= 50) {
      passedStudents.push(student);
    }
  }

  return passedStudents;
}

function findStudent(name) {
  for (const student of students) {
    if (student.name === name) {
      return student;
    }
  }

  return null;
}

showStudents();
console.log("Average:", calculateAverage());
console.log("Grade:", getGrade(85));
console.log("Passed:", getPassedStudents());
console.log("Search:", findStudent("Su Su"));

const record = [];
let recordIndex = 0;
function areaCalc(width, breath) {
  const result = width * breath;
  record[recordIndex++] = { width, breath, result };
  return `${result} sqft`;
}
console.log(areaCalc(20, 20));
console.table(record);

const rates = {
  usd: 3650,
  sgd: 2850,
  eur: 4100,
};
function toMmk(amount, currency) {
  const rate = rates[currency];
  const result = amount * rate;
  return `${result} mmk`;
}
console.log(toMmk(200, "usd"));

function toCurrency(mmkAmount, currency) {
  const rate = rates[currency];
  const result = mmkAmount / rate;
  return `${result} ${currency}`;
}
console.log(toCurrency(200000, "usd"));

function change(cash, netTotal) {
  return cash - netTotal;
}
function tax(amount, percentage) {
  const result = amount * (percentage / 100);
  return result;
}
const voucher = [];
let voucherIndex = 0;

let total = 0;

const fruits = {
  apple: 500,
  orange: 400,
  mango: 1200,
  banana: 200,
  lime: 50,
};
function buy(item, quantity) {
  const unitPrice = fruits[item];

  const cost = unitPrice * quantity;
  const result = {
    item,
    unitPrice,
    quantity,
    cost,
  };
  voucher[voucherIndex++] = result;
  total += cost;
  return result;
}
console.log(buy("apple", 3));
console.log(buy("orange", 2));
console.log(buy("lime", 5));
console.table(voucher);
console.log(total);
console.log(tax(total, 5));
console.log(total + tax(total, 5));
console.log(change(4400, total + tax(total, 5)));

function createCounter() {
  let count = 0; // 'count' is private! It cannot be accessed or modified directly.
  return {
    increment: function () {
      count++;
      console.log("Incremented:", count);
    },
    decrement: function () {
      count--;
      console.log("Decremented:", count);
    },
    getCount: function () {
      console.log("Current count:", count);
      return count;
    },
    reset: function () {
      count = 0; // re-assign
    },
  };
}
let counter = createCounter();
console.log(counter);
console.log(counter.getCount());
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());
counter.decrement();
counter.decrement();
counter.reset();
console.log(counter.getCount());

function createBankAccount(initialBalance = 0) {
  let balance = initialBalance; // Private variable
  const transactionHistory = []; // Private array
  return {
    deposit: function (amount) {
      if (amount <= 0) {
        console.log("Deposit amount must be positive.");
        return;
      }
      balance += amount;
      transactionHistory.push({ type: "DEPOSIT", amount, date: new Date() });
      console.log(`Deposited: $${amount}. New Balance: $${balance}`);
    },
    withdraw: function (amount) {
      if (amount <= 0) {
        console.log("Withdrawal amount must be positive.");
        return;
      }
      if (amount > balance) {
        console.log(`Insufficient funds! Current Balance: $${balance}`);
        return;
      }
      balance -= amount;
      transactionHistory.push({ type: "WITHDRAW", amount, date: new Date() });
      console.log(`Withdrew: $${amount}. Remaining Balance: $${balance}`);
    },
    getBalance: function () {
      return balance;
    },
    getHistory: function () {
      return [...transactionHistory];
    },
  };
}
// console.log(balance);
let myAccount = createBankAccount(100);

console.log(myAccount.getBalance());
myAccount.deposit(500);
myAccount.deposit(1500);
myAccount.deposit(9000);
console.log(myAccount.getBalance());
myAccount.withdraw(500);
myAccount.withdraw(2500);
console.log(myAccount.getHistory());
console.log(myAccount.getBalance());
myAccount.deposit(50); // Deposited: $50. New Balance: $150
myAccount.withdraw(30); // Withdrew: $30. Remaining Balance: $120
myAccount.withdraw(200); // Insufficient funds! Current Balance: $120
console.log("Final balance:", myAccount.getBalance()); // 120
console.log("Direct access attempt:", myAccount.balance); // undefined (Safe!)
