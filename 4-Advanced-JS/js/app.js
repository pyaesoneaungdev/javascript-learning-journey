//callback
const calculate = (a, b, callback) => {
  const result = a + b;
  callback(result);
};
calculate(10, 30, (result) => console.log(result));

//Synchronous JavaScript
// console.log("First");
// console.log("Second");
// console.log("Third");

//Asynchronous JavaScript
// console.log("First");
// setTimeout(() => {
//     console.log("Second");
// }, 2000);

// console.log("Third");

//settimeout => callback, delay
// console.log("Saving data...");

// setTimeout(() => {
//     console.log("Data saved successfully!");
// }, 2000);

//setInterval()
// let count = 0;

// const timerId = setInterval(() => {
//     count++;

//     console.log(count);

//     if (count === 5) {
//         clearInterval(timerId);
//         console.log("Timer stopped!");
//     }
// }, 1000);

//Call Stack => Function တွေ Execute လုပ်တဲ့အခါ ဘယ် Function ကို အရင်လုပ်ရမလဲဆိုတာ စီမံပေး (LIFO)
// function first() {
//     console.log("First Start");

//     second();

//     console.log("First End");
// }

// function second() {
//     console.log("Second Start");

//     third();

//     console.log("Second End");
// }

// function third() {
//     console.log("Third Function");
// }

// first();

//Event Loop
// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise");
// });

// console.log("End");

//Promises
// const orderPromise = new Promise((resolve, reject) => {
//     const orderSuccess = false;

//     if (orderSuccess) {
//         resolve("Order placed successfully!");
//     } else {
//         reject("Order failed!");
//     }
// });
// orderPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     }).finally(() => {
//         console.log("Operation finished")
//     });

//async await
// function getUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Pyae Sone");
//         }, 2000);
//     });
// }

// async function displayUser() {
//     const user = await getUser();

//     console.log(user);
// }

// displayUser();

//try...catch...throw
// function checkAge(age) {
//     try {
//         if (age < 18) {
//             throw new Error("You must be 18 or older!");
//         }

//         console.log("Access granted");
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// checkAge(15);
// checkAge(20);

//JSON.stringify() => JavaScript Object ကို JSON String ပြောင်းပေးတယ်။
// const user = {
//     name: "Pyae Sone",
//     age: 23
// };

// const jsonData = JSON.stringify(user);

// console.log(jsonData);
// console.log(typeof jsonData);

//JSON.parse() => JSON String ကို JavaScript Object ပြောင်းပေးတယ်။
// const jsonData = '{"name":"Pyae Sone","age":23}';

// const user = JSON.parse(jsonData);

// console.log(user.name);
// console.log(user.age);

//Fetch API

// async function getComments(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/comments");
//         if(!response.ok){
//             throw new Error("Failed to fetch comments");

//         }
//         const comments = await response.json()
//         comments.forEach((comment) => {
//             console.log(comment.email)

//         })
//     } catch (error) {
//         console.log(error.message)

//     }
// }
// getComments()

// async function getPosts() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (!response.ok) {
//       throw new Error("Failte to fetch posts");
//     }
//     const posts = await response.json();
//     posts.forEach((post) => {
//       console.log(post.title);
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// getPosts();

// async function getUsers() {
//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );

//         if (!response.ok) {
//             throw new Error("Failed to fetch users");
//         }

//         const users = await response.json();

//         users.forEach((user) => {
//             console.log(user.name);
//         });

//     } catch (error) {
//         console.log(error.message);
//     }
// }

// getUsers();

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function loginUser(username, password) {
  await delay(2000);

  if (username === "pyae" && password === "123456") {
    return {
      id: 1,
      username: "pyae",
      role: "student",
    };
  }

  throw new Error("Invalid username or password");
}

async function handleLogin() {
  try {
    console.log("Logging in...");

    const user = await loginUser("pyae", "123456");

    console.log("Login successful!");
    console.log("User:", user);
  } catch (error) {
    console.log("Login failed:", error.message);
  } finally {
    console.log("Login process finished.");
  }
}

handleLogin();
