// LOOP

// for loop 
for (let i = 40; i >= 30; i--) {
    console.log(i);
    
}

for (let i = 1; i <= 3; i++) {
    console.log(`suudliin dugaar:${i}`);
}

//while loop
let battery = 100;
let usage = 20;

while (battery >= usage) {
    console.log(battery);
    battery -= usage;
}

let step = 1;
while (step <= 5) {
    console.log(step);
    step ++;
}

// loop with arrey
let fruits = ["banana", "orange", "waterellow", "mango"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits [i]);
}

for (const fruit of fruits) {
    console.log(fruit);
}

let num = [1, 2, 3, 4, 5];
for (let i = 0; i < num.length; i++) {
    console.log(num [i]);
}

for (const numbers of num) {
    console.log(numbers [i]);
}