let title = document.getElementById("heading");
console.log(title);

let btn = document.getElementById("myBtn");

btn.addEventListener("click", () => {
    console.log("Towch daragdsan");
    
    title.textContent = "DOM surah.";
    title.style.color = "blue";
})

