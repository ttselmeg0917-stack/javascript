console.log("===Бодлого 1===");

let scores = [85, 92, 67, 78, 95, 88, 59, 73, 90, 62];

let excellentCount = 0; 
let goodCount = 0;     
let passCount = 0;      
let failCount = 0;      

for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 90) {
        excellentCount++;
    }else if (scores[i] >= 80) {
        goodCount++;
    }else if (scores[i] >= 70){
        passCount++;
    }else{
        failCount++;
    }
}
console.log(`
    Нийт оюутан:        ${scores.length}
    ----------------------------------------
    Маш сайн (90+):     ${excellentCount}
    Сайн (80-89):       ${goodCount}
    Хангалттай (70-79): ${passCount}
    Унасан (<70):       ${failCount}
    `);

console.log("===Бодлого 2===");

let originalWords = ["JavaScript", "Python", "React", "NodeJS"];
let reverseWords = [];

for (let i = originalWords.length-1; i >= 0;  i--) {
    reverseWords.push(originalWords[i])
}
console.log(`Anhnii massiv: ${originalWords}`);
console.log(`Ergvvlsen massiv: ${reverseWords}`);

console.log("===Бодлого 3:===");

let orderStatuses = ["delivered", "pending", "shipped", "pending", "cancelled", "pending"];
let pendingCount = 0;
for (let i = 0; i < orderStatuses.length; i++) {
    if (orderStatuses[i] === "pending") {
        console.log(`Index ${i}: ${orderStatuses[i]} (${i + 1 }-r zahialga)`);
        pendingCount++;
    }
}
console.log(`Niit hvleegdej bui zahialga: ${pendingCount}`);

console.log("===Бодлого 4:===");

let votes = ["yes", "no", "yes", "yes", "no", "abstain", "yes", "no", "yes"];
let target = "yes";
let count = 0;

for (let i = 0; i < votes.length; i++) {
    if (votes[i] === target) {
        count++;
    }
}
console.log(`"${target}" гэсэн хариу ${count} удаа орсон байна (нийт ${votes.length} санал).`);

console.log("===Бодлого 5:===");

let numbers = [10, 25, 30, 45, 50, 65, 70];
let evenIndexSum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
        evenIndexSum += numbers[i];
    }
}
console.log(`Tegsh index deer elymentvvdiin niilber: ${evenIndexSum}`);
