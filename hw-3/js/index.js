//task-1

// Loop for
const numbersArr1 = [2, 3, 4, 5];
let res = 0;

for (let i = 0; i < numbersArr1.length; i++) {
  res += numbersArr1[i];
}
console.log(res);

// Loop while
const numbersArr2 = [2, 3, 4, 5];
let counter = 0;
let sum = 0;

while (counter < numbersArr2.length) {
  sum += numbersArr2[counter];
  counter++;
}
console.log(sum);

// Method reduce
const arr = [2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result);

//task-2

for (let i = 0; i <= 15; i++) {
  if (i % 2 == 0) {
    console.log(i + " This is an even number");
  } else {
    console.log(i + " This is an odd number");
  }
}

//task-3

function randArray(k) {
  let arr = [];
  for (let i = 0; i < k; i++) {
    arr.push(Math.floor(Math.random() * 500));
  }
  return arr;
}
console.log(randArray(5));

//task-4

let a = prompt("Число?");
let b = prompt("Ступінь?");

function raiseToDegree(a, b) {
  let result = a;

  for (let i = 1; i < b; i++) {
    result *= a;
  }
  return result;
}

if (b < 1) {
  alert("Try to use a positive integer");
} else {
  console.log(raiseToDegree(a, b));
}

//task-5

function findMin() {
  let min = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    if (min > arguments[i]) {
      min = arguments[i];
    }
  }
  return min;
}
console.log(findMin(11, 12, 13, 21, 22, 23, 97, 98, 99, 1));
console.log(findMin(0, 1, -400));
console.log(findMin(1, 6, 0));
console.log(findMin(300, -300, -99999999));

//task-6

let uniqueArray = [1, 2, 3, 4, 5];
let nonUnique = [1, 1, 2, 2];

function findUnique(arr) {
  let valuesAlreadySeen = [];

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (valuesAlreadySeen.indexOf(value) !== -1) {
      return false;
    }
    valuesAlreadySeen.push(value);
  }
  return true;
}

console.log(findUnique(uniqueArray));
console.log(findUnique(nonUnique));

//

function findUniqueSort(arr) {
  arr.sort();
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(findUniqueSort(uniqueArray));
console.log(findUniqueSort(nonUnique));

//task-7

function lastElem(arr, n) {
  if (n == null) return arr.slice(-1);
  let res = arr.slice(-n);
  return res;
}

console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, -5], 2));
console.log(lastElem([3, 4, 10, -5], 8));

//task-8

function FirstLetterToUpperCase(myMsg) {
  let myMsgArr = myMsg.split(" ");
  for (let i = 0; i < myMsgArr.length; i++) {
    myMsgArr[i] = myMsgArr[i][0].toUpperCase() + myMsgArr[i].slice(1);
  }
  return myMsgArr.join(" ");
}
const result = FirstLetterToUpperCase(myMsg);
console.log(result);
