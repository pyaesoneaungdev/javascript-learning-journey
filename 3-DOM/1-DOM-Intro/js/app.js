// 1. select input,button,heading
const heading = document.getElementById("heading");
const textInput = document.getElementById("textInput");
const setBtn = document.getElementById("setBtn");
const ageInput = document.querySelector("#ageInput");
const dateInput = document.querySelector("#dateInput");
const lists = document.querySelectorAll(".list");

lists.forEach((el) => {
  console.log(el.innerText);
});

// 3. handler
const handleClick = () => {
  console.log("you click");

  console.log(ageInput.valueAsNumber);
  console.dir(dateInput.valueAsDate);

  // 4. get text from input

  console.dir(textInput.value);

  // 5. set text to heading

  heading.innerText = textInput.value;
};

// 2. click btn (event listen)
setBtn.addEventListener("click", handleClick);

const ulList = document.querySelector("#ulList");
console.log(ulList);
console.log(ulList.innerHTML);
console.log(ulList.innerText);

ulList.innerHTML += `<li class='list'>it is new</li>`;
ulList.innerHTML += `<li class='list'>it is 2</li>`;
ulList.innerHTML += `<li class='list'>it is 3</li>`;
ulList.innerHTML += `<li class='list'>it is 4</li>`
