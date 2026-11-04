//medeelel hadgalah
localStorage.setItem("username", "Tselmeg");


let savedUser = localStorage.getItem("username");
console.log(savedUser);

localStorage.removeItem("username");

let welcomeText = document.getElementById("welcomeText");
let nameInput  = document.getElementById("nameInput");
let saveBtn = document.getElementById("saveBtn");
let resetBtn = document.getElementById("resetBtn");

let storedName = localStorage.getItem("mySavedName");
if (storedName !== null) {
    welcomeText.textContent = `tawtai moril, ${storedName}`;
}

saveBtn.addEventListener("click", () => {
    let enterName = nameInput.value.trim();

    if (enterName !== "") {
        localStorage.setItem("mySavedName", enterName);

        welcomeText.textContent = `tawtai moril, ${enterName}`;

        nameInput.value = "";
    }
});

resetBtn.addEventListener("click", () => {
    localStorage.removeItem('mySavedName');
    welcomeText.textContent = "Saina baina uu";
    alert("sanah oi tsewerlegdlee")
});

// object 
let student = {
    name: "Bat", 
    age: 18,
    isEnrolled: true,
    skills: ["HTML", "CSS", "JS"],
    greet: function () {
        return `Saina baina uu. Namaig ${this.name} gedeg.`;
    }
};
console.log(student);

console.log(student.name);
console.log(student["age"]);

student.city = "Ulaanbaatar";
student.age = 19;
console.log(student);

console.log(student.greet());

console.log(Object.keys(student));
console.log(Object.values(student));

