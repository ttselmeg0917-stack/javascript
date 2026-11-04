console.log("===Дасгал1: Горим санах===");

let darkBtn = document.getElementById("darkBtn");
let lightBtn  = document.getElementById("lightBtn");

let savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = '#ffffff'
}

darkBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = '#ffffff'
    localStorage.setItem('theme', 'dark');
});

lightBtn.addEventListener("click", () =>{
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#000000';
    localStorage.setItem('theme', 'light');
});

console.log("===Дасгал2: Зочны тоолуур ===");

let counterText = document.getElementById('counterText');
let visits = localStorage.getItem('visitCount');

if (visits === null) {
    visits = 0;
}else{
    visits = Number(visits);
}

visits += 1;
localStorage.setItem('visitCount', visits);
counterText.textContent = `ta huudsand ${visits} dahi udaagaa newteresen baina.`;

console.log("===ДАСГАЛ 3: Нэрээ хадгалдаг ===");

let nameInput = document.getElementById("nameInput");
let saveBtn = document.getElementById("saveBtn");

let savedName = localStorage.getItem("myName");

if (savedName !== null) {
    nameInput.value  = savedName;
}
saveBtn.addEventListener("click", () => {
    let enteredName = nameInput.value;
    localStorage.setItem('myName', enteredName);
    alert('amjilttai hadgalagdlaa');
});

console.log("===ДАСГАЛ 4: Тоолуурын утга санах ===");

let numberDisplay = document.getElementById('numberDisplay');
let plusBtn = document.getElementById('plusBtn');
let minusBtn = document.getElementById('minusBtn');

let currentCount = localStorage.getItem("myCount");

if (currentCount === null) {
    currentCount =0;
}else{
    currentCount = Number(currentCount);
}

plusBtn.addEventListener("click", () => {
    currentCount += 1;
    numberDisplay.textContent = currentCount;
    localStorage.setItem('myCount', currentCount);
});

minusBtn.addEventListener("click", () => {
    currentCount -=1;
    numberDisplay.textContent = currentCount;
    localStorage.setItem('myCount', currentCount);
});

console.log("===ДАСГАЛ 5: Дуртай өнгө хадгалах ===");

let savedColor = localStorage.getItem("pageColor");
if (savedColor !== null) {
    document.body.style.background = savedColor;
}

function changeColor(colorName){
    document.body.style.background = colorName;
    localStorage.setItem('pageColor', colorName);
}


