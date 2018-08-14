// document.body.innerHTML = "";
// let name = "송가은";
// const age = 18;

function printf(contents) {
  document.body.innerHTML += contents;
  document.body.innerHTML += "<br>";
}

// printf(name);
// printf(age);
// printf(typeof name);
// printf(typeof age);
// printf(age + 1);

// document.body.innerHTML += name;
// document.body.innerHTML += "<br>";
// document.body.innerHTML += age;
// document.body.innerHTML += "<br>";
// document.body.innerHTML += typeof name;
// document.body.innerHTML += "<br>";
// document.body.innerHTML += typeof age;
// document.body.innerHTML += "<br>";
// document.body.innerHTML += age + 1;
// document.body.innerHTML += "<br>";
// document.body.innerHTML += age;
// document.body.innerHTML += "<br>";
// document.body.innerHTML += age * 2;
// document.body.innerHTML += "<br>";
// document.body.innerHTML += age / 4;
// document.body.innerHTML += "<br>";
// name = [
//   "김효진",
//   "한건호",
//   "송가은",
//   "이지호1",
//   "이지호2",
//   "이서연",
//   "윤지영",
//   "최윤하"
// ];

// for (let i = 0; i < name.length; i++) {
//   if (i % 2 === 2) {
//     document.body.innerHTML += name[i];
//     document.body.innerHTML += "<br>";
//     printf(name)
//   }
// }

const button = document.getElementById("button");
const input = document.getElementById("input");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const result = document.getElementById("result");
let list = [];

button.onclick = function() {
  list.push(input.value);
  if (list[1] === "+") {
    printf(Number(list[0]) + Number(list[2]));
  } else if (list[1] === "-") {
    printf(Number(list[0]) - Number(list[2]));
  } else if (list[1] === "/") {
    printf(Number(list[0]) / Number(list[2]));
  } else if (list[1] === "*") {
    printf(Number(list[0]) * Number(list[2]));
  }

  list = [];
};
plus.onclick = function() {
  list.push(input.value);
  list.push("+");
  input.value = "";
};
minus.onclick = function() {
  list.push(input.value);
  list.push("-");
  input.value = "";
};
multiply.onclick = function() {
  list.push(input.value);
  list.push("*");
  input.value = "";
};
divide.onclick = function() {
  list.push(input.value);
  list.push("/");
  input.value = "";
};
