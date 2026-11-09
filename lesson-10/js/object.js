console.log("==========================================");
console.log("🟢 1-Р ТҮВШИН: СУУРЬ ДАСГАЛУУД");
console.log("==========================================");

// Дасгал 1.1: Миний танилцуулга объект
const myProfile = {
    name: "Цэлмэг",
    age: 16,
    profession: "Сурагч / Программист",
    isStudent: true
};
console.log(`[Дасгал 1.1] Миний нэр ${myProfile.name}, би ${myProfile.age} настай.`);


// Дасгал 1.2: Объект руу утга нэмэх болон шинэчлэх
const car = {
    brand: "Toyota",
    model: "Prius",
    year: 2015
};
car.color = "Цагаан"; // Шинэ утга нэмэх
car.year = 2020;      // Утга шинэчлэх
console.log("[Дасгал 1.2] Шинэчлэгдсэн машин объект:", car);


// Дасгал 1.3: Объект доторх метод (Method)
const calculator = {
    a: 10,
    b: 5,
    sum: function() {
    return this.a + this.b;
    }
};
console.log(`[Дасгал 1.3] Хоёр тооны нийлбэр: ${calculator.sum()}`);


console.log("\n==========================================");
console.log("🟡 2-Р ТҮВШИН: ДУНД ДАСГАЛУУД");
console.log("==========================================");

// Дасгал 2.1: Бүх түлхүүр болон утгуудыг салгаж авах
const book = {
    title: "Болор Мандал",
    author: "Д.Нацагдорж",
    pages: 250,
    price: 20000
};
console.log("[Дасгал 2.1] Номын түлхүүрүүд:", Object.keys(book));
console.log("[Дасгал 2.1] Номын утгууд:", Object.values(book));


// Дасгал 2.2: Давхар объект (Nested Object) руу хандах
const user = {
    name: "Тэмүүлэн",
    address: {
    city: "Улаанбаатар",
    street: "Сөүлийн гудамж"
    }
};
console.log(`[Дасгал 2.2] Хэрэглэгчийн амьдарч буй хот: ${user.address.city}`);


// Дасгал 2.3: for...in давталт ашиглах
const product = {
    name: "Ухаалаг утас",
    price: 1200000,
    quantity: 5,
    category: "Цахим хэрэгсэл"
};
console.log("[Дасгал 2.3] Бүтээгдэхүүний мэдээлэл (for...in):");
for (let key in product) {
    console.log(`  ${key}: ${product[key]}`);
}


console.log("\n==========================================");
console.log("🔴 3-Р ТҮВШИН: АХИСАН ДАСГАЛУУД");
console.log("==========================================");

// Дасгал 3.1: Объектуудын массивтай ажиллах (for...of)
const students = [
    { name: "Ану", score: 85 },
    { name: "Тэмүүлэн", score: 78 },
    { name: "Хулан", score: 92 }
];
console.log("[Дасгал 3.1] Сурагчдын жагсаалт:");
for (let student of students) {
    console.log(`  Сурагч: ${student.name}, Оноо: ${student.score}`);
}


// Дасгал 3.2: Давталт ашиглан нөхцөлөөр шүүх (for...of ба .push)
const topStudents = [];
for (let student of students) {
    if (student.score > 80) {
    topStudents.push(student.name);
    }
}
console.log("[Дасгал 3.2] 80-аас дээш оноотой сурагчид:", topStudents);


// Дасгал 3.3: Давталт ашиглан нийт дүн олох (for...of loop)
const cart = [
    { name: "Үзэг", price: 1000, quantity: 3 },
    {  name: "Дэвтэр", price: 3500, quantity: 4 },
    { name: "Цүнх", price: 45000, quantity: 1 }
];
let totalAmount = 0;
for (let item of cart) {
  totalAmount += item.price * item.quantity;
}
console.log(`[Дасгал 3.3] Сагс дахь нийт дүн: ${totalAmount}₮`);
console.log("==========================================");