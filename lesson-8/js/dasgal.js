console.log("===dasgal1===");

let title = document.getElementById("title");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    title.textContent = "Bayrtai";
});

console.log("===dasgal2===");

let countEl = document.getElementById("count");
let plus = document.getElementById("plus");

plus.addEventListener("click", () =>{
    let currentCount = Number(countEl.textContent);
    currentCount += 1;
    countEl.textContent = currentCount;
});

console.log("===dasgal3===");

let nameInp = document.getElementById("name");
let helloBtn = document.getElementById("hello");
let resultEl = document.getElementById("result");

helloBtn.addEventListener("click", () =>{
    let name = nameInp.value.trim();
    if (name === "") {
        resultEl.textContent = "neree bichne vv"
    }else{
        resultEl.textContent = `saina uu ${name}`
    }
});

console.log("===dasgal4===");

let lampEl = document.getElementById("lamp");
let switchBtn = document.getElementById("switch");

switchBtn.addEventListener("click", () => {
    // .toggle() нь тухайн класс байвал хасна, байхгүй бол нэмнэ
    lampEl.classList.toggle("on");
});

console.log("===dasgal5===");

let passInp = document.getElementById("pass");
let showCheckbox = document.getElementById("show");

showCheckbox,addEventListener("change", () => {
    // Checkbox чеклэгдсэн эсэхийг шалгаад type шинж чанарыг өөрчилнө
    if (showCheckbox.checked) {
        passInp.type = "text";
    }else{
        passInp.type = "password";
    }
});

console.log("===dasgal6 & 7===");

let fruitInput = document.getElementById("fruit");
let addBtn = document.getElementById("add");
let listEl = document.getElementById("list");

addBtn.addEventListener("click", () => {
    const fruitName = fruitInput.value.trim();

    if (fruitName !== "") {
        // 1. Шинэ <li> элемент үүсгэх
        const li = document.createElement("li");
        li.textContent = fruitName + " "; 

        // 2. Устгах "x" товч үүсгэх
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "x";

        // 3. "x" товч дээр дарахад тухайн <li> элементийг устгах
        deleteBtn.addEventListener("click", () => {
            li.remove();
        });

        // 4. Товчийг <li> дотор хийх, жагсаалтад оруулах
        li.appendChild(deleteBtn);
        listEl.appendChild(li);

        // 5. Input талбарыг хоослох
        fruitInput.value = "";
    }
});

console.log("===dasgal8===");

let clearListEl = document.getElementById("clear-list"); // id-г тааруулж авна
let clearBtn = document.getElementById("clear");
let infoEl = document.getElementById("info");

clearBtn.addEventListener("click", () => {
    clearListEl.innerHTML = "";
    infoEl.textContent = "Жагсаалт хоосон байна";
});

console.log("===dasgal9===");

const inputA = document.getElementById("a");
const inputB = document.getElementById("b");
const sumBtn = document.getElementById("sum");
const sumResultEl = document.getElementById("sum-result");

sumBtn.addEventListener("click", () => {
    // 1. Input-уудаас утгыг нь авч тоон руу хөрвүүлнэ
    const numA = Number(inputA.value);
    const numB = Number(inputB.value);

    // 2. Хоёр тооны нийлбэрийг олох
    const total = numA + numB;

    // 3. Үр дүнг дэлгэцэнд гаргах
    sumResultEl.textContent = `Нийлбэр: ${total}`;
});

console.log("===dasgal10===");

const totalBtn = document.getElementById("total-btn");
const totalResultEl = document.getElementById("total-result");

totalBtn.addEventListener("click", () => {
    // Бүх .price класс бүхий элементүүдийг сонгож авна
    const priceElements = document.querySelectorAll("#cart .price");
    let sum = 0;

    // for...of ашиглан элемент бүрээр гүйж үнийг нэмнэ
    for (let el of priceElements) {
        // textContent-ийг авч тоон руу хөрвүүлнэ
        sum += Number(el.textContent);
    }

    totalResultEl.textContent = `Нийт: ${sum}₮`;
});

console.log("===dasgal11===");

const textEl = document.getElementById("text");
const editBtn = document.getElementById("edit");

editBtn.addEventListener("click", () => {
    // textEl нь одоо засах горимд (contentEditable = true) байгаа эсэхийг шалгана
    if (textEl.isContentEditable) {
        // Хэрэв засах горимд байсан бол Хадгалах үйлдэл хийнэ
        textEl.contentEditable = false; // Бичихийг хориглоно
        editBtn.textContent = "Засах";   // Товчны нэрийг буцааж Засах болгоно
    } else {
        // Хэрэв энгийн байсан бол Засах горимд шилжүүлнэ
        textEl.contentEditable = true;  // Текст рүү бичиж болдог болгоно
        textEl.focus();                 // Текст рүү шууд курсор аваачиж анхаарал хандуулна
        editBtn.textContent = "Хадгалах"; // Товчны нэрийг Хадгалах болгоно
    }
});
