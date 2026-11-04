console.log("=====Төсөл 1: Smart Shopping Cart=====");

const calculateCart = (prices, hasDiscountCard) =>{
    let total = 0;
    for (let i = 0; i< prices.length; i++) {
        total += prices[i];
    }
    if (total > 50000 && hasDiscountCard === true) {
        total = total - total * 0.1
    }
    return total;
}
let prices = [ 12000, 45000, 8000, 25000 ];

let result = calculateCart(prices, true);
console.log("Карттай:", result);                        
console.log("Картгүй:", calculateCart(prices, false));  


console.log("===Төсөл 2: Quiz Score Analyzer");

const analyzeScores = (scores) =>{
    let passedCount = 0;
    let maxScore = scores[0]; 
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 60) {
            passedCount++;
        }
        if (scores[i] > maxScore) {
            maxScore = scores[i];
        }
    }
    return `Tentssen suragchdiin too: ${passedCount}, Hamgiin ondor onoo: ${maxScore}`;
    
}
let scores = [45, 82, 90, 60, 35, 75, 95];

console.log(analyzeScores(scores));

console.log("===Төсөл 3: Coffee shop order system");

const orderCoffee = (coffeeType, size, extraSyrup) =>{
    let price = 0;

    if (coffeeType === "latte") {
       price = 6000;
    }else if(coffeeType === "americano"){
        price = 5000;
    }else{
        console.log("Uuchlaarai tanii zahialsan uuh zvil baihgvi.");
    }
    if (size === "large") {
        price += 4000;
    }else if(size === "medium"){
        price += 2000;
    }else if(size === "small"){
        price += 0;
    }else{
        console.log("Uuchlaarai tanii zahialsan hemzee baihgvi.");
    }
    if (extraSyrup === true) {
        price += 1500;
    }
    console.log(`
        ===order===
        torol:    ${coffeeType}
        hemjee:   ${size}
        syrup:    ${extraSyrup}
        niit dvn: ${price}
        `);
    
}
orderCoffee("americano", "small", false);
orderCoffee("latte", "large", true);

console.log("===Төсөл 4: Group Cinema Ticket System");

const calculateGroupCinema = (viewerAges, basePrice) =>{
    let totalAmount = 0;
    for (let i = 0; i < viewerAges.length; i++) {
        const age = viewerAges[i];
        let ticketPrice = 0;

        if (age < 10 || age >= 60) {
            ticketPrice = 0;
        } else if (age < 18) {
            ticketPrice = 10000;
        } else {
            ticketPrice = basePrice;
        }

        totalAmount += ticketPrice;
    }
        discount = 0;
        if (viewerAges.length >= 4) {
            discount = totalAmount * 0.1;
        }
        const finalAmount = totalAmount - discount;
        console.log(`
            ===Cinema Receipt===
            niit hun:      ${viewerAges.length}
            niit dvn:      ${totalAmount}
            hudulult:      -${discount}
            tuluh dvn:     ${finalAmount}
            `);
        
    }
calculateGroupCinema([12, 17, 25, 65, 8], 15000);

console.log("Төсөл 5: Class Performance Analyzer");

const analyzeClassPerformance = (names, scores) => {
    let total = 0;
    let passedCount = 0;
    let failedCount = 0;
    let highestScore = scores[0];
    let topStudent = names[0];

    console.log("--- Сурагч тус бүрийн дүн ---");

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];

        if (scores[i] >= 60) {
            passedCount++;
            console.log(`Нэр: ${names[i]} - Тэнцсэн `);
        } else {
            failedCount++;
            console.log(`Нэр: ${names[i]} - Унасан `);
        }

        if (scores[i] > highestScore) {
            highestScore = scores[i];
            topStudent = names[i];
        }
    }

    const averageScore = total / scores.length;

    console.log("\n=== ТАЙЛАН ===");
    console.log(`Ангийн дундаж оноо: ${averageScore.toFixed(1)}`);
    console.log(`Тэнцсэн сурагчийн тоо: ${passedCount}`);
    console.log(`Унасан сурагчийн тоо: ${failedCount}`);
    console.log(`Шилдэг сурагч: ${topStudent} (${highestScore} оноо)`);
};

const names = ["Бат", "Ану", "Тэмүүлэн", "Хулан", "Энэрэл"];
scores = [85, 48, 92, 70, 95];

analyzeClassPerformance(names, scores);
