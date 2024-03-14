const hello = document.getElementById("hello");
console.log(hello);

const btn = document.getElementsByClassName("btn");
console.log(btn);

const btn2 = document.querySelector(".btn");
console.log(btn2);

const btn3 = document.querySelectorAll(".btn");
console.log(btn3);

const hello2 = document.querySelector("#hello");
console.log(hello2);

const btn4 = document.querySelectorAll(".btn");
for (const item of btn4) {
  console.log(item);
}
