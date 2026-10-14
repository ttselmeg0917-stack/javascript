console.log("===Бодлого 1.1: ===");

const storeName = "НоминМаркет";
let itemPrice = "1500";
console.log("Delgvvriin ner:", storeName);
console.log("Baraanii une:", itemPrice);

console.log("===Бодлого 1.2:===");

let price = 2500;
let count = 4;
let totalPrice = price * count;
console.log("Niit dvn:", totalPrice);

console.log("===Бодлого 1.3: ===");

totalPrice = 10000;
const bagPrice = 300;
totalPrice = totalPrice  + bagPrice ;
console.log("Uuttai niit dvn:", totalPrice);


console.log("===Бодлого 1.4:===");

let paidAmount = 20000;
totalPrice = 12500;
let change = paidAmount - totalPrice;
console.log("Hariult mongo:", change);

console.log("===Бодлого 2.1:===");

let paid = 5000;
price = 6000;
if(paid >= price){
    console.log("Amjilttai hudaldan awlalt hiilee"); 
}else{
    console.log("Mongo hvreltsehgvi baina.");  
}

console.log("===Бодлого 2.2:===");

let isMember = true;
let total = 10000;
if(isMember === true){
    total = total - 500;
    console.log(`Gishvvnii hogolttei une: ${total}`);
}else{
    console.log(`Niit dvn: ${total}`);
}

console.log("===Бодлого 2.3:===");

let userAge =16;
const Min_Age = 18;
if(userAge >= Min_Age){
    console.log("Zarah bolomjtoi.");
}else{
    console.log("Uuchlaarai 18 nas hvreegvi bna.");
}

console.log("===Бодлого 2.4: ===");

total = 35000;
if(total >= 30000){
    console.log(`Unegvi hvrgelttei! toloh dvn: ${total}`);
}else{
    total = total + 3000;
    console.log(`Hvrgelttei dvn: ${total}`);   
}

console.log("===Бодлого 3.1: ===");

let isVIP = true;
let itemCount = 5;
total = 50000;
let discount = 0; 
if(isVIP === true && itemCount >=3){
    discount = total * 0.2;
    total = total - discount;
    console.log(`etssiin dvn: ${total}`);
}else{
    console.log(`hongoltgvi dvn: ${total}`);
    
}

console.log("===Бодлого 3.2: ===");

isMember = false;
total = 60000;
let discountRate = 0;

if(isMember === true || total >= 100000){
    discountRate = 0.1;
    console.log(`hongolttei huwi: ${discountRate}`);
}else if(total >= 50000){
    discountRate = 0.05;
    console.log(`hongolttei huwi: ${discountRate}`);
}else{
    discountRate = 0;
    console.log(`hongolt baihgvi ${discountRate}`);
}
let finalAmount = total - (total * discountRate);
console.log(`Etssiin dvn ${finalAmount}`);

console.log("===Бодлого 3.3:===");

let couponCode = "SAVE10";
total = 20000;
if(couponCode === "SAVE10"){
    total = total - 1000;
    console.log(`1000$  hongologdloo ${total}`);
}else if(couponCode === "SAVE20"){
    total = total - 2000;
    console.log(`2000$ hongologdloo ${total}`);
}else{
    console.log(`hvchingvi kupon ${total}`);
}

console.log("===Бодлого 3.4:===");

const unitPrice = 4000;
let quantity = 3;
let isClubMember = true;
let subtotal = unitPrice * quantity;
discount = 0;

if(isClubMember === true && subtotal >= 10000){
    discount = 2000;
}else if(isClubMember === true ){
    discount = 500
}else{
    discount = 0;
}
let finalTotal = subtotal - discount;
console.log(`Etssiin dvn ${finalTotal}`);


