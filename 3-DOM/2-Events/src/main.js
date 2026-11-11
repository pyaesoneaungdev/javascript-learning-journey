console.log("app is running...");

//Mouse Click
// document.addEventListener("click", (e) => {
//   console.log(e);
// });

//Mouse Move
// document.addEventListener("mousemove", (e) => {
//   console.log(e);
// });

//Mouse Element Box ပေါ်ရောက်
// document.querySelector("#box").addEventListener("mouseover", (e) => {
//   console.log("mouseover");
// });

//Mouse Element Box က ထွက်
// document.querySelector("#box").addEventListener("mouseout", (e) => {
//   console.log("mouseout");
// });

//Keyboard Key လွှတ်
// document.querySelector("#textInput").addEventListener("keyup", (e) => {
//   console.log("keyup", e.target.value);
// });

//Keyboard Key နှိပ်
// document.querySelector("#textInput").addEventListener("keydown", (e) => {
//   console.log("keydown");
// });

// document.querySelector("#textInput").addEventListener("keypress", (e) => {
//   console.log("keypress");
// });

// document.querySelector("#textInput").addEventListener("focus", (e) => {
//   console.log("focus");
// });

// document.querySelector("#textInput").addEventListener("blur", (e) => {
//   console.log("blur");
// });

// document.querySelector("#textInput").addEventListener("change", (e) => {
//   console.log("change");
// });

//Value ပြောင်းပြီး Change Event ဖြစ်
document.querySelector("#nation").addEventListener("change", (e) => {
  console.log("change", e.target.value);
});

document.querySelector("#myFile").addEventListener("change", (e) => {
  const selectedFile = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(selectedFile);

  reader.addEventListener("load", (e) => {
    const img = new Image();
    img.src = e.target.result;
    document.body.append(img);
  });
});

const regForm = document.querySelector("#regForm");
regForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(regForm);
  data.append("reg_id", Date.now());

  for (let key of data.keys()) {
    console.log(key, data.get(key));
  }
});

//scroll
// window.addEventListener("scroll", (e) => {
//   console.log(e, window.scrollY);
// });

//Event Bubbling
//Event bubbingဖစ်ပွားတာကdefaultဖစ်တယ် အောက်ကနေ အထက်တက်
document.querySelector("#text").addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("U click Text");
  },
  false,
);

document.querySelector("#div-a").addEventListener(
  "click",
  () => {
    console.log("U click Div a");
  },
  false,
);

document.querySelector("#div-b").addEventListener(
  "click",
  () => {
    console.log("U click Div b");
  },
  false,
);

document.querySelector("#div-c").addEventListener(
  "click",
  () => {
    console.log("U click Div c");
  },
  false,
);

document.querySelector("#div-d").addEventListener(
  "click",
  () => {
    console.log("U click Div d");
  },
  false,
);

// const els = document.querySelectorAll(`.border-4`);

// els.forEach((el) =>
//   el.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("u click ", e.target.id);
//   })
// );

// console.log(els);

// const events = ["click", "mouseover", "mouseout"];

// events.forEach((el) => {
//   document.querySelector("#box").addEventListener(el, (e) => {
//     console.log("u ", e.type);
//   });
// });
