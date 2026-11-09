let fruitInput = document.getElementById("fruitInput");
let addBtn = document.getElementById("addBtn");
let fruitList = document.getElementById("fruitList");

// 1. ХАДГАЛАХ МАССИВ: localStorage-оос уншиж авахдаа JSON.parse ашиглана
// Хэрэв санах ойд юу ч байхгүй бол хоосон массив ([]) үүсгэнэ.
let fruits = JSON.parse(localStorage.getItem("myFruits")) || [];

// 2. ДЭЛГЭЦ ДЭЭР ХАРУУЛАХ БОЛОН ШИНЭЧЛЭХ ФУНКЦ (Render)
function renderFruits() {
  fruitList.innerHTML = ""; // Өмнөх жагсаалтыг цэвэрлэх

    fruits.forEach(function(fruitName, index) {
    let li = document.createElement("li");
    li.textContent = fruitName;

    let actionsDiv = document.createElement("div");
    actionsDiv.className = "actions";

    // --- Засварлах товч (Edit) ---
    let editBtn = document.createElement("button");
    editBtn.textContent = "Засах";
    editBtn.className = "edit-btn";
    
    editBtn.addEventListener("click", function() {
        let newValue = prompt("Жимсний нэрийг засах:", fruitName);
        if (newValue !== null && newValue.trim() !== "") {
        // Массив доторх тухайн индексийн утгыг солих
        fruits[index] = newValue.trim();
        
        // localStorage рүү JSON.stringify ашиглан буцааж хадгалах
        localStorage.setItem("myFruits", JSON.stringify(fruits));
        
        renderFruits(); // Дэлгэцийг шинэчлэх
        }
    });

    // --- Устгах товч (Delete) ---
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Устгах";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", function() {
      // Массиваас тухайн индексийг 1 ширхэг хасах
        fruits.splice(index, 1);
      // localStorage руу JSON.stringify ашиглан буцааж хадгалах
        localStorage.setItem("myFruits", JSON.stringify(fruits));
      renderFruits(); // Дэлгэцийг шинэчлэх
    });

    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);
    li.appendChild(actionsDiv);
    fruitList.appendChild(li);
    });
}

// Хуудас ачаалагдах үед жагсаалтыг шууд гаргах
renderFruits();

// 3. ШИНЭЭР ЖИМС НЭМЭХ
addBtn.addEventListener("click", function() {
    let fruitName = fruitInput.value.trim();

    if (fruitName !== "") {
    // Массив руу шинэ утга нэмэх
    fruits.push(fruitName);

    // localStorage руу массивыг бүхэлд нь JSON текст болгож хувиргаад хадгалах
    localStorage.setItem("myFruits", JSON.stringify(fruits));

    // Инпутыг цэвэрлэх
    fruitInput.value = "";

    // Дэлгэцийг шинэчлэх
    renderFruits();
    } else {
    alert("Хоосон утга оруулах боломжгүй!");
    }
});