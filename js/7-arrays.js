const student = ["Aung Aung", "Su Su", "Mg Mg"];
student[1] = "Mya Mya"; //overwrite

console.log(student);
console.log(student[0]);
console.log(student[1]);

//Important Methods
const fruits = ["Apple", "Banana"];

//first add => Mutable
fruits.unshift("Lemon");
console.log(fruits);

//latest add => Mutable
fruits.push("Orange");
console.log(fruits);

//first remove => Mutable
fruits.shift("Lemon");
console.log(fruits);

//latest remove => Mutable
fruits.pop("Orange");
console.log(fruits);

//Array Iteration
const fruitsLoop = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruitsLoop.length; i++) {
  console.log(fruitsLoop[i]);
}

for (const fruit of fruitsLoop) {
  console.log(fruit);
}

fruitsLoop.forEach((fruit) => {
  console.log(fruit);
});

//spread operator => value တွေကို ဖြန့်ထုတ်
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express"];
const skills = [...frontend, ...backend];
console.log(skills);

const useres = {
  name: "Pyae",
  age: 21,
};
const copy = { ...useres };
console.log(copy);
console.log(useres === copy);

//destructure
const number = [10, 20, 30];
const [a, b, c] = number;
console.log(a);
console.log(b);
console.log(c);

//array method

//forEach => undefined
const fruitsArr = ["Apple", "Banana", "Orange"];

fruitsArr.forEach(function (fruit, i, arr) {
  console.log(i, fruit, arr);
});

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.forEach((number) => number * 2);
console.log(result);

const points = [34, 15, 2, 52, 19, 56, 30, 57];
const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 250,
    },
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: {
      rate: 2.2,
      count: 140,
    },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: {
      rate: 2.6,
      count: 235,
    },
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: {
      rate: 2.9,
      count: 340,
    },
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: {
      rate: 3.8,
      count: 679,
    },
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    rating: {
      rate: 4.5,
      count: 146,
    },
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
];

const filterArray = (arr, callback) => {
  const result = [];
  for (let el of arr) {
    // callback becomes condition
    if (callback(el)) {
      result.push(el);
    }
  }
  return result;
};
console.table(products);
console.table(filterArray(products, (product) => product.price < 50));
console.table(filterArray(products, (product) => product.price > 500));
console.table(filterArray(products, (product) => product.rating.rate > 4));

const modifyArray = function (arr, logic) {
  const result = [];
  for (let el of arr) {
    // ? logic
    result.push(logic(el));
  }
  return result;
};
console.table(
  modifyArray(products, (product) => ({
    ...product,
    price: product.price * 2,
  })),
);

console.table(
  modifyArray(products, (product) => ({
    ...product,
    price: product.price + 10,
  })),
);

console.log(modifyArray(points, (point) => point * 2));

console.log(
  modifyArray(points, function (el) {
    return el + 10;
  }),
);

console.log(
  modifyArray(points, function (el) {
    return el % 2 ? "Odd" : "even";
  }),
);

//map => modified array, new arr
const map = numbers.map((number) => number * 2);
console.log(map);

const students = [
  { id: 1, name: "Aung Aung", marks: 85 },
  { id: 2, name: "Mg Mg", marks: 45 },
  { id: 3, name: "Su Su", marks: 90 },
  { id: 4, name: "Hla Hla", marks: 35 },
  { id: 5, name: "Kyaw Kyaw", marks: 75 },
];

const stuName = students.map((student) => student.name);

const updatedProducts = products.map((product) => ({
  ...product,
  price: product.price * 2,
}));

console.table(updatedProducts);

//filter() => Condition နဲ့ ကိုက်ညီတဲ့ Element တွေကို ရွေးထုတ်ပြီး Array အသစ် Return ပြန်ပေးပါတယ်။

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

const passedStudents = students.filter((student) => student.marks >= 50);
console.table(passedStudents);

const affordableProducts = products.filter(
  (product) => product.price <= 500000,
);
console.table(affordableProducts);

//find() =>  Condition နဲ့ ပထမဆုံးကိုက်ညီတဲ့ Element တစ်ခုကိုပဲ Return ပြန်ပေးပါတယ်။ မတွေ့ရင် undefined ပြန်ပေးပါတယ်။
const stu = students.find((student) => student.id === 6);
console.log(stu);

//filter() vs find()
const res1 = numbers.filter((number) => number === 20);
const res2 = numbers.find((number) => number === 20);

console.log(res1);
console.log(res2);

//findIndex() => Condition နဲ့ ပထမဆုံးကိုက်ညီတဲ့ Element ရဲ့ Index ကို Return ပြန်ပေးပါတယ်။ မတွေ့ရင် -1 ပြန်ပေးပါတယ်။
const index = numbers.findIndex((number) => number === 30);
console.log(index);

//some() => Array ထဲမှာ Condition နဲ့ ကိုက်ညီတဲ့ Element အနည်းဆုံး တစ်ခုရှိရင် true ပြန်ပေးပါတယ်။
const some = numbers.some((number) => number % 2 === 0);
console.log(some);

//every() => Array ထဲက Element အားလုံး Condition နဲ့ ကိုက်ညီမှ true ပြန်ပေးပါတယ်။

const every = numbers.every((number) => number % 2 === 0);
console.log(every);

//some() vs every()
console.log(numbers.some((number) => number % 2 === 0));

console.log(numbers.every((number) => number % 2 === 0));

//reduce() =>  Array ထဲက Data တွေကို စုစည်းပြီး Value တစ်ခုအဖြစ် Return ပြန်ပေးပါတယ်။
const cart = [
  { name: "Laptop", price: 1500000, quantity: 1 },
  { name: "Mouse", price: 30000, quantity: 2 },
  { name: "Keyboard", price: 50000, quantity: 1 },
];

const total = cart.reduce(
  (acc, product) => acc + product.price * product.quantity,
  0,
);
console.log(total);

//includes() => Array ထဲမှာ သတ်မှတ်ထားတဲ့ Value ရှိမရှိ စစ်ဆေးပေးပါတယ်။

const allowedRoles = ["admin", "teacher", "student"];
const userRole = "teacher";

if (allowedRoles.includes(userRole)) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}

//indexOf() => Value ကို တိုက်ရိုက်ရှာတယ်။ သတ်မှတ်ထားတဲ့ Value ရဲ့ ပထမဆုံး Index ကို Return ပြန်ပေးပါတယ်။
console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Mango"));

//slice() => Immutable, Array ထဲက သတ်မှတ်ထားတဲ့ အပိုင်းကို Copy လုပ်ပြီး Array အသစ် Return ပြန်ပေးပါတယ်။ end Index ကို ထည့်မယူပါဘူး။
const slice = fruits.slice(1, 3);
console.log(slice);
console.log(fruits);

//splice() => Mutable
const removed = fruits.splice(1, 2);
console.log(removed);
console.log(fruits);

//sort() => Mutable
const sort = fruits.sort();
console.log(sort);
console.log(fruits);

//reverse() => Mutable
const reverse = numbers.reverse();
console.log(reverse);

//Method Chaining
const studentsForMethodChaning = [
  { id: 1, name: "Aung Aung", marks: 85 },
  { id: 2, name: "Mg Mg", marks: 40 },
  { id: 3, name: "Su Su", marks: 90 },
  { id: 4, name: "Hla Hla", marks: 30 },
  { id: 5, name: "Kyaw Kyaw", marks: 75 },
];

const resultMethodChaining = students
  .filter((student) => student.marks >= 50)
  .map((student) => student.name);

console.log(resultMethodChaining);

const productsForMethodChaning = [
  { name: "Laptop", category: "Electronics", price: 1500000 },
  { name: "Phone", category: "Electronics", price: 800000 },
  { name: "Mouse", category: "Accessories", price: 30000 },
  { name: "Keyboard", category: "Accessories", price: 50000 },
  { name: "Monitor", category: "Electronics", price: 500000 },
];

const resultMethodChain = products
  .filter((product) => product.category === "Electronics")
  .filter((product) => product.price <= 1000000)
  .map((product) => product.name);

console.log(resultMethodChain);

//Show All Students
students.forEach((student) => {
  console.log(student.name);
});

//Get All Student Names
const names = students.map((student) => student.name);

console.log(names);

//Get Passed Students
const passStudents = students.filter((student) => student.marks >= 50);
console.table(passStudents);

//Find Student by ID
const studentFind = students.find((student) => student.id === 3);
console.log(studentFind);

//Calculate Average Marks
const totalMarks = students.reduce(
  (total, student) => total + student.marks,
  0,
);
const average = totalMarks / students.length;
console.log(average);

// Sample Employee Dataset
const employees = [
  { id: 1, name: "bobo", sallery: 900000, department: "IT", DOB: "01/30/1920" },
  {
    id: 2,
    name: "mgmg",
    sallery: 850000,
    department: "Account",
    DOB: "10/15/1992",
  },
  {
    id: 3,
    name: "nono",
    sallery: 70000,
    department: "Finance",
    DOB: "04/09/2001",
  },
  {
    id: 4,
    name: "popo",
    sallery: 700000,
    department: "Design",
    DOB: "04/09/2007",
  },
  {
    id: 5,
    name: "koko aung",
    sallery: 1706000,
    department: "IT",
    DOB: "04/09/2001",
  },
  {
    id: 6,
    name: "koko",
    sallery: 850000,
    department: "Finance",
    DOB: "09/25/1991",
  },
  {
    id: 7,
    name: "aungaung",
    sallery: 850000,
    department: "Finance",
    DOB: "09/25/1981",
  },
  {
    id: 8,
    name: "rose",
    sallery: 2850000,
    department: "Account",
    DOB: "09/25/1895",
  },
  {
    id: 9,
    name: "rose merry",
    sallery: 890000,
    department: "IT",
    DOB: "09/25/1979",
  },
  {
    id: 10,
    name: "pp smith",
    sallery: 890000,
    department: "IT",
    DOB: "09/25/2000",
  },
  {
    id: 11,
    name: "rr smith",
    sallery: 890000,
    department: "IT",
    DOB: "09/25/1995",
  },
  {
    id: 12,
    name: "popo",
    sallery: 900000,
    department: "Account",
    DOB: "09/25/1997",
  },
  {
    id: 13,
    name: "willim",
    sallery: 900000,
    department: "Design",
    DOB: "09/25/1997",
  },
  {
    id: 14,
    name: "ko bo",
    sallery: 3706000,
    department: "IT",
    DOB: "04/09/1960",
  },
  { id: 15, name: "ko nyo", sallery: 200, department: "IT", DOB: "04/09/1990" },
  {
    id: 16,
    name: "ko james",
    sallery: 200400,
    department: "IT",
    DOB: "04/09/1990",
  },
  {
    id: 34,
    name: "koMin",
    sallery: 200400,
    department: "Security",
    DOB: "04/09/1990",
  },
];

// 1. Calculate Total Salary
const totalSalary = employees.reduce(
  (acc, employee) => acc + parseInt(employee.sallery),
  0,
);
console.log("1. Total Salary:", totalSalary);

// 2. Calculate Average Salary
const averageSalary = totalSalary / employees.length;
console.log("2. Average Salary:", averageSalary);

// 3. Find Highest Salary Employee
const highestSalaryEmployee = employees.reduce((highest, employee) =>
  employee.sallery > highest.sallery ? employee : highest,
);
console.log(
  "3. Highest Salary Employee:",
  highestSalaryEmployee.name,
  `($${highestSalaryEmployee.sallery})`,
);

// 4. Find Lowest Salary Employee
const lowestSalaryEmployee = employees.reduce((lowest, employee) =>
  employee.sallery < lowest.sallery ? employee : lowest,
);
console.log(
  "4. Lowest Salary Employee:",
  lowestSalaryEmployee.name,
  `($${lowestSalaryEmployee.sallery})`,
);

// 5. Count Employees by Department (Frequency Counter)
const departmentCount = employees.reduce((acc, employee) => {
  const dept = employee.department;
  acc[dept] = (acc[dept] || 0) + 1;
  return acc;
}, {});
console.log("5. Employee Count by Department:", departmentCount);

// 6. Group Employee Names by Department
const employeesByDepartment = employees.reduce((acc, employee) => {
  const dept = employee.department;
  if (!acc[dept]) {
    acc[dept] = [];
  }
  acc[dept].push(employee.name, employee.sallery);
  return acc;
}, {});
console.table(employeesByDepartment);

// 7. Group Employee Names by Salary
const employeesBySalary = employees.reduce((acc, employee) => {
  const salary = employee.sallery;
  if (!acc[salary]) {
    acc[salary] = [];
  }
  acc[salary].push(employee.name, employee.department);
  return acc;
}, {});
console.table(employeesBySalary);

const employeeDetails = employees.map(
  (employee) =>
    `${employee.name} works in the ${employee.department} department and earns $${employee.sallery / 1000}k per year.`,
);
console.table(employeeDetails);
