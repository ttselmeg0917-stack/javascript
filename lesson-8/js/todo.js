let title = document.getElementById("title");
let addBtn = document.getElementById("addBtn");
let resetBtn = document.getElementById("resetBtn");

let count = 0;

addBtn.addEventListener("click", () => {
    count++;
    title.textContent = count;
});



resetBtn.addEventListener("click", () => {
    count = 0;
    title.textContent = count;
})

let taskInput = document.getElementById("taskInput");
let saveBtn = document.getElementById("saveBtn");
let taskList = document.getElementById("taskList");

saveBtn.addEventListener("click", () => {
    let text = taskInput.value;

    if(text !== ""){
        let task = document.createElement("li");
        task.textContent = text;

        taskList.appendChild(task)
    }
})