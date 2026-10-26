console.log("=====LEVEL 1: =====");

console.log("===Бодлого 1: ==== ");

const sayHelloTo = (name) =>{
    console.log(`Sain baina uu ${name}`)
}

sayHelloTo("Tselmeg");

console.log("===Бодлого 2:===");

const squareNumber = (num) =>{
    return num * num;
}

console.log(squareNumber(2));

console.log("===Бодлого 3:===");

const calculateAge = (birthtyear, year) =>{
    return year - birthtyear;
}

console.log(calculateAge(2007, 2026));

console.log("===Бодлого 4:===");

const isEven = (num) =>{
    return num % 2 === 0;
}

console.log(isEven(2));

console.log("=====LEVEL 2: =====");

console.log("===Бодлого 1: ==== ");

const checkAdult = (age) =>{
    if (age > 18) {
        console.log(`Nasand hvrsen ${age}`);
    }else{
        console.log(`Nasand hvreegvi ${age}`);
        
    }
}

checkAdult(19);

console.log("===Бодлого 2:===");

const findMax = (a, b) =>{
    if (a>b) {
        return a;
    }else{
        return b;
    }
}

console.log(findMax(1, 2));

console.log("===Бодлого 3:===");

const dollar = 3400;
const convertToUSD = (cash) =>{
    return cash / dollar;
}

console.log(convertToUSD(34000));

console.log("===Бодлого 4:===");

const getGrade = (score) =>{
    if (score >=  90) {
        console.log("A");
    }else if(score >= 80){
        console.log("B");
    }else if(score >= 70){
        console.log("C");
    }else{
        console.log("F");
    }
}

getGrade(100);

console.log("=====LEVEL 3: =====");

console.log("===Бодлого 1: ==== ");

const sumArray = (numbers) =>{
    let sum = 0;
    for (let i= 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));

console.log("===Бодлого 2:===");

const findMinInArray = (number) =>{
    let min = number[0];
    for (let i = 1; i < number.length; i++) {
        if (number[i] < min) {
            min  = number[i];
        }
    }
    return min;
}

console.log(findMinInArray([1, 2, 0, -1, -2]));

console.log("===Бодлого 3:===");

const filterPositiveNumbers = (numbers) =>{
    let result = [];
    for (let i= 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            result.push(numbers[i])
        }
    }
    return result;
}

console.log(filterPositiveNumbers ([1, -1, 2, -2, 3, -3]));

console.log("===Бодлого 4:===");

const searchWord = (words, target) =>{
    for (let i = 0; i < words.length; i++) {
        if (words[i] === target) {
            return true;
        }
    }
    return false;
}

const words = ["алим", "банана", "лийр", "усан үзэм"];

console.log(searchWord(words, "лийр"));   
console.log(searchWord(words, "жүрж"));   
console.log(searchWord([], "алим"));      