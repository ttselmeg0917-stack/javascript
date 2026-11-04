let title = document.getElementById("title");
let Btn = document.getElementById("changeBtn");

Btn.addEventListener("click", () => {
    title.textContent = "DOM ajillaj baina";
    title.style.color = "blue";
});



let box = document.getElementById("box");
let colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", () =>{
    if (box.style.backgroundColor === "green") {
        box.style.backgroundColor = "red";
    }else{
        box.style.backgroundColor = "green"
    }
});



let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");
let increaseBtn = document.getElementById("increaseBtn");
let counterDisplay = document.getElementById("counter");

let count = 0;

increaseBtn.addEventListener("click", () =>{
    count++;
    counterDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
    count--;
    counterDisplay.textContent = count;
});

resetBtn.addEventListener("click", () => {
    count = 0;
    counterDisplay.textContent = count;
});



let secretText = document.getElementById("secretText");
let toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
    if (secretText.style.display === "none") {
        secretText.style.display = "block"
    }else{
        secretText.style.display = "none"
    }
});



let noteInput = document.getElementById("noteInput");
let addNoteBtn = document.getElementById("addNoteBtn");
let noteList = document.getElementById("noteList");

addNoteBtn.addEventListener("click", () => {
    let noteText = noteInput.value.trim();

    if (noteText !== "") {
        let newli = document.createElement("li");
        newli.textContent = noteText;
        noteList.appendChild(newli); //  Жагсаалт (<ul>) рүү бодит байдлаар нэмнэ
        noteInput.value = ""; // Инпутыг цэвэрлэх
    } else {
        alert("temdeglel hooson baina");
    }
});