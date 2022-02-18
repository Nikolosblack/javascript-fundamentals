// task2

const myLastName = "My last name is Chympaiesh";
console.log(myLastName);

// task3

let myNameInUkrainian;
let myNameInEnglish;

myNameInUkrainian = "Микола";
myNameInEnglish = "Nicholas";

alert(myNameInUkrainian);
alert(myNameInEnglish);

myNameInUkrainian = myNameInEnglish;

alert(myNameInUkrainian);
alert(myNameInEnglish);

// task4

const user = {
    name: "Nicholas",
    age: 27,
    likesCat: true,
    hasFavoriteFood: undefined,
    favoriteVegetable: null
}
console.log(
    typeof user.name + " / " +
    typeof user.age + " / " +
    typeof user.likesCat + " / " +
    typeof user.hasFavoriteFood + " / " +
    typeof user.favoriteVegetable
);

// task5

const isAdult = confirm("Are you an adult?");
console.log(isAdult);

// task6

const myName = "Nicholas";
const myAge = 27;
const myGroup = "Lv-678.JS Core";
const yearOfBirth = 1994;
const isMarried = false;

console.log(myAge);
console.log(yearOfBirth);
console.log(isMarried);
console.log(myName);
console.log(myGroup);

const hasChild = null;
const hasCat = undefined;

console.log(hasChild);
console.log(hasCat);

// task7

const userLogin = prompt("Please enter your Login");
const userEmail = prompt("Please enter your Email");
const userPassword = prompt("Please enter your Password");
alert("Dear " + userLogin + " , " + " your email is " + userEmail + " , " + " your password is " + userPassword + "✌️");
document.querySelector(".prompt__result").innerHTML = "Dear " + userLogin + " , " + " your email is " + userEmail + " , " + " your password is " + userPassword + "✌️";  

// task8

const secondInAMinute = 60;
const minuteInAnHour = 60;
const secondsInAnHour = secondInAMinute * minuteInAnHour;
alert(secondsInAnHour); 

const hoursInADay = 24;
const secondsInADay = secondsInAnHour * hoursInADay;
alert(secondsInADay); 

const daysInAMonth = 28; //February
const secondsInAMonth = secondsInADay * daysInAMonth;
alert(secondsInAMonth); 

document.querySelector(".result__seconds").innerHTML = "There are " + secondsInAnHour  + " seconds in an hour⏰ " +  " and " + secondsInADay + " seconds in a day⌚. " + " In 28 days it’s " + secondsInAMonth + " seconds⌛.";





