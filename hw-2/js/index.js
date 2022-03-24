// task 1

let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1);

let res2 = Boolean(x) + String(y);
console.log(res2);
console.log(typeof res2);

let res3 = x < y;
console.log(res3);
console.log(typeof res3);

let res4 = x + NaN;
console.log(res4);
console.log(typeof res4);

// task-2

let number = prompt("Enter your number", "");
if (number % 2 == 0) {
  console.log("Парне");
} else if (number % 7 == 0) {
  console.log("Кратне 7");
}

// task-3

const arr = [];

arr[0] = 1994;
arr[1] = "Lviv";
arr[2] = true;
arr[3] = null;

console.log(arr);
alert("Length of array is " + arr.length);

const userValue = prompt("Please enter any number here");
arr[4] = userValue;
alert(userValue);
arr.shift();
console.log(arr);

// task 4

let cities = ["Rome", "Lviv", "Warsaw"];
console.log(cities.join("*"));

// task 5

const isAdult = prompt("Are you an adult?");
if (isAdult >= 18) {
  alert("You have come of age");
} else if (isAdult < 18) {
  alert("You are too young");
}

// task 6

const sideOne = parseFloat(prompt("Side one?"));
const sideTwo = parseFloat(prompt("Side two?"));
const sideThree = parseFloat(prompt("Side three?"));

if (
  isNaN(sideOne) ||
  sideOne <= 0 ||
  isNaN(sideTwo) ||
  sideTwo <= 0 ||
  isNaN(sideThree) ||
  sideThree <= 0
) {
  alert("'Incorrect data");
}

const s = (sideOne + sideTwo + sideThree) / 2;
const area = Math.sqrt(s * ((s - sideOne) * (s - sideTwo) * (s - sideThree)));
console.log(area.toFixed(3));
alert(area.toFixed(3));

if (
  Math.pow(sideOne, 2) + Math.pow(sideTwo, 2) == Math.pow(sideThree, 2) ||
  Math.pow(sideThree, 2) + Math.pow(sideOne, 2) == Math.pow(sideTwo, 2) ||
  Math.pow(sideThree, 2) + Math.pow(sideTwo, 2) == Math.pow(sideOne, 2)
) {
  alert("Y");
} else {
  alert("N");
}

// task 7

let date = new Date();
let time = date.getHours();

// if else

if (time > 17 && time <= 23) {
  alert("Good evening Ukraine!");
} else if (time > 5 && time <= 11) {
  alert("Good morning Ukraine!");
} else if (time > 11 && time <= 17) {
  alert("Good afternoon Ukraine!");
} else {
  alert("Good night Ukraine!");
}

// Ternary Operator

function checkTime(time) {
  let message =
    time > 17 && time <= 23
      ? "evening!"
      : time > 5 && time <= 11
      ? "morning!"
      : time > 11 && time <= 17
      ? "day!"
      : "night!";
  alert(message);
}
checkTime(time);

// switch

switch (time) {
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
    alert("morning");
    break;
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    alert("day");
    break;
  case 18:
  case 19:
  case 20:
  case 21:
  case 22:
  case 23:
    alert("evening");
    break;
  default:
    alert("night");
}
