console.log("===== level 1 =====");

console.log("=== dasgal 1 ===");

let myBirthYear = 2007;
let friendBirthYear = 2005;

let ageDifference = myBirthYear - friendBirthYear;
console.log(`bidnii nasnii zorvv ${ageDifference}`);

console.log("=== dasgal 2 ===");

let lastName = "Tumurbaatar";
let firstName = "Tselmeg";
let age = 19;

console.log(`Sain baina uu Namaig ${lastName} ${firstName} gedeg. Bi ${age} nastai`);

console.log("=== dasgal 3 ===");

let minute = 125;
let hours = minute / 60;
let minutes = minute % 60;
console.log(`${minute} minute ni ${hours} tsag ${minutes} minute bolno`);

console.log("===== level 2 =====");

console.log("=== dasgal 1 ===");

let ageNumber= 18;
    if (ageNumber >=18 ) {
    console.log("nasand hvrsen");  
    }else{
        console.log("huuhed baina"); 
    }

console.log("=== dasgal 2 ===");

let temperature = 10;

if (temperature > 25) {
    console.log("Mash haluun baina. Us sain uugaarai");
}else if (temperature >= 10){
    console.log("Taw tuhtai saihan odor baina");
}else{
    console.log("Dulaan hutsaslaarai. Huiten baina");
}

console.log("=== dasgal 3 ===");

let number = 19;

if (number % 2 === 0) {
    console.log("even");
}else{
    console.log("odd");
}

console.log("===== level 3 =====");

console.log("=== dasgal 1 ===");

function multiply (a, b){
    return a * b;
}

console.log(multiply(2, 3));

console.log("=== dasgal 2 ===");

function isAdult(ageNum) {
    if (ageNum >= 18) {
        return true;
    }else{
        return false;
    }
}

console.log(isAdult(12));

console.log("=== dasgal 3 ===");

function checkWord(word) {
    return word.length >= 6;
}

console.log(checkWord("code"));

console.log("===== level 4 =====");

console.log("=== dasgal 1 ===");

let title = document.getElementById ("title");
let btn = document.getElementById ("changeBtn");

btn.addEventListener("click", () => {
    title.textContent = "Sain baina uu, Java script"
});

console.log("=== dasgal 2 ===");

let input = document.getElementById("userInput");
let output = document.getElementById("output");

input.addEventListener("input", () =>{
    output.textContent = event.target.value;
});

console.log("=== dasgal 3 ===");

let redBtn = document.getElementById("red");
let greenBtn = document.getElementById("green");
let yellowBtn = document.getElementById("yellow");

redBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
});

greenBtn.addEventListener("click", () => {
    document.body.style.backgroundColor ="green"
});

yellowBtn.addEventListener("click", () => {
    document.body.style.backgroundColor ="yellow"
});

console.log("===== level 5 =====");

console.log("=== dasgal 1 ===");

let nameInput = document.getElementById("nameInput");
let saveBtn = document.getElementById("saveBtn");

window.addEventListener("DOMContentLoaded", () => {
    let savedName = localStorage.getItem("userName")
    if(savedName){
        nameInput.value = savedName;
    }
});

saveBtn.addEventListener("click", () => {
    let enterName = nameInput.value;
    localStorage.setItem("userName", enterName);
    alert("Ner amjilttai hadgalagdlaa")
});

console.log("=== dasgal 2 ===");

let colors = ["red", "green", "blue"];

localStorage.setItem("myColors", JSON.stringify(colors));
console.log("hadgalsan utga:", localStorage.getItem("myColors"));

console.log("=== dasgal 3 ===");

let storedColors = localStorage.getItem("myColors");
let parsedColors = JSON.parse(storedColors);
parsedColors.push("yellow");
console.log(`shineclegdsen massiv ${parsedColors}`);
