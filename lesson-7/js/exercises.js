console.log("=====Level 1=====");

let fruits = ["Apple", "Banana"];
fruits.push("Usan uzem");
console.log(`Nemsen jims: ${fruits}`);

let numbers  = [10, 20, 30, 40];
numbers.pop();
console.log(`suuliin elyment hassan ${numbers}`);

let colors = ["red", "blue", "green", "yellow"];

let hasBlue = colors.includes("blue");
console.log(`blue baigaa eseh ${hasBlue}`);

let allowedUsers = ["Bat", "Anu", "Temvvlen"];
let name = allowedUsers.includes("Anu");
if (name === true) {
    console.log(`Zowshoorogdson`);
}else{
    console.log(`Handah erhgvi`);
}

console.log("=====Level 2=====");

let number = [2, 4, 6, 8];
let numAdd = number.map(function(num){
    return num * 3;
});
console.log(`Ehnii vr dvn: ${number}`);
console.log(`Svvliin vr dvn: ${numAdd}`);

let names = ["Bat", "Anu", "Hulan"];
let nameBig = names.map(function(nam){
    return nam.toUpperCase();
});
console.log(`huwirgasan ners ${nameBig}`);

let prices = [10000, 25000, 50000];
let pricestotal = prices.map(function(price){
    return price + 5000;
});
console.log(`undsen une ${prices}`);
console.log(`etssiin une ${pricestotal}`);

let users = ["Bat", "Anu"];
let usersHi  = users.map(function(name){
    return console.log(`Saina uu, ${name}`);
});

let numberss = [1, 2, 3, 4, 5, 6, 7, 8];
let numEven = numberss.filter(function(nums){
    return nums % 2 === 0;
});
console.log(`tegsh toonuud ${numEven}`);

let scores = [45, 82, 90, 55, 78, 30];
let scorePass = scores.filter(function(grade){
    return grade >= 60;
});
console.log(`Tentssen onoo ${scorePass}`);

let words = ["cat", "javascript", "dog", "frontend", "sum"];
let wordLong = words.filter(function(letter){
    return letter.length > 5;
})
console.log(`5-aas deesh vsegtei vgs ${wordLong}`);

let ages = [12, 17, 21, 25, 15, 30];
let agesOld = ages.filter(function(age){
    return age >= 18;
})
console.log(`nasan hvrsen hvmvvs ${agesOld}`);

let numbersss = [5, 12, 8, 130, 44];
let numberfirst = numbersss.find(function(numss){
    return numss > 10;
});
console.log(`10-aas anhii ih too ${numberfirst} `);

let namess = ["Bat", "Any", "Hulan", "Temvvlen"];
let nameTemvvlen = namess.find(function(name){
    return name === "Temvvlen";
})
console.log(`baugaa eseh ${nameTemvvlen}`);
console.log(nameTemvvlen ? "Temvvlen baigaa" : "Temvvlen baikhgüi");

let nnumbers = [2, 3, 4, 5, 6];
let numberNew = nnumbers
    .filter(function (num) {
        return num % 2 === 0;  
    })
    .map(function (num) {
        return num * 10;       
    });

console.log(`ur dvn ${numberNew}`);

let scoress = [50, 85, 92, 40, 78];
let scorePasss = scoress
    .filter(function(score){
        return score >= 70;
    })
    .map(function (score) {
        return score + 5;
    });

console.log(scorePass); 