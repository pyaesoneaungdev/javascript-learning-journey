const student = {
  name: "Pyae Sone Aung",
  age: 20,
  university: "UCS Pyay",
  skills: [
    "JavaScript",
    "React",
    "Nextjs",
    "Nodejs",
    "Expressjs",
    "Prisma ORM",
    "PostgreSQL",
  ],
  isGraduated: false,
  info() {
    return `name is ${this.name}, age is ${this.age}`;
  },
};
student.age = 21;

console.log(student);
console.log(student["name"]);
console.log(student.age);

const person = {
  // Properties
  name: "Aung Aung",
  age: 20,
  gender: "Male",

  // Method
  introduce: function () {
    console.log(`My name is ${this.name}`);
  },
};
//student.property က property ဆိုတဲ့ တကယ့် Key ကို ရှာနေတာဖြစ်ပြီး student[property] က property Variable ထဲက "name" ကို အသုံးပြုနေတာကြောင့်ပါ။

//add method
const students = {
  name: "Pyae",
  age: 21,

  introduce() {
    console.log(`My name is ${this.name}`);
  },
};

students.introduce();

//Nested Object
const studentsNested = {
  id: 1,
  name: "Aung Aung",
  age: 20,

  address: {
    city: "Yangon",
    township: "Hlaing",
    country: "Myanmar",
  },

  education: {
    university: "UCS Pyay",
    major: "Computer Science",
    year: 4,
  },
};
console.log(studentsNested.address.city);
console.log(studentsNested.address.township);

console.log(studentsNested.education.university);
console.log(studentsNested.education.year);

//destructure
const studentDestructure = {
  name: "Aung Aung",
  age: 22,
};

const { name: studentName, age: studentAge } = studentDestructure;

console.log(studentName);
console.log(studentAge);

//nested object destructure
const user = {
  id: 1,
  name: "Pyae Sone Aung",
  email: "pyaesone@example.com",
  age: 22,

  skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js"],

  address: {
    city: "Pyay",
    region: "Bago",
    country: "Myanmar",
  },

  education: {
    university: "University of Computer Studies, Pyay",
    major: "Computer Science",
    year: 4,
  },

  projects: [
    {
      id: 1,
      name: "CineScope",
      technology: ["React", "TypeScript"],
    },
    {
      id: 2,
      name: "NovaCart",
      technology: ["Next.js", "Node.js", "PostgreSQL"],
    },
  ],
};

const { name, email, age, address, education } = user;

console.log(name);
console.log(email);
console.log(age);
console.log(address.city);
console.log(education.university);

const stringObj = JSON.stringify(user);
console.log(stringObj);

localStorage.setItem("user", JSON.stringify(user));

const test = JSON.parse(localStorage.getItem("user"));
console.log(test);

//separd operator
const personalInfo = {
  name: "Aung Aung",
  age: 20,
};

const educationInfo = {
  university: "UCS Pyay",
  major: "Computer Science",
};

const studentSepard = {
  ...personalInfo,
  ...educationInfo,
};

console.log(studentSepard);

user.skills.forEach((skill, index) => {
  console.log(`${index + 1}. ${skill}`);
});

const hasReact = user.skills.includes("React");
console.log(hasReact);

const projectNames = user.projects.map((project) => project.name);
console.log(projectNames);

const technologies = user.projects.flatMap((project) => project.technology);
console.log(technologies);

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1500000,
    stock: 5,
  },
  {
    id: 2,
    name: "Phone",
    price: 800000,
    stock: 0,
  },
  {
    id: 3,
    name: "Mouse",
    price: 30000,
    stock: 10,
  },
  {
    id: 4,
    name: "Keyboard",
    price: 50000,
    stock: 3,
  },
];

const availableProducts = products.filter((product) => product.stock > 0);
console.table(availableProducts);

const productNames = availableProducts.map((product) => product.name);
console.log(productNames);

const totalPrice = availableProducts.reduce(
  (total, product) => total + product.price,
  0,
);
console.log(totalPrice);
