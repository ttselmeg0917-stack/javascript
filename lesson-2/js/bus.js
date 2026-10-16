const BUS_FARE = 500;

let passengerName = "Anu";
let passengerAge = 14;
let isStudent = true;
let cardBalance = 1000;

let actualFare = 0;
let newBalance = 0;
let paymentTypeDesc = "";

if(passengerAge < 6 || passengerAge >= 65){
    actualFare = 0;
    paymentTypeDesc = "Үнэгүй";
}else if(isStudent === true){
    actualFare= 200;
    paymentTypeDesc = "Сурагч (200₮)";
}else{
    actualFare =BUS_FARE;
    paymentTypeDesc = "Энгийн (500₮)";
}

if(cardBalance >= actualFare){
    newBalance = cardBalance - actualFare;
    console.log(`
    ==================================
        🚌 U-MONEY BUS PASS
    ==================================
    Зорчигч: ${passengerName} 
    Нас: ${passengerAge}
    Төлбөрийн төрөл: ${paymentTypeDesc}
    ----------------------------------
    Төлсөн дүн: ${actualFare}
    Үлдсэн баланс: ${newBalance}
    ==================================
        Амжилттай дарагдлаа! 
    ==================================
    `);
    console.log(`
    ==================================
        🚌 U-MONEY BUS PASS
    ==================================
    Зорчигч:  ${passengerName}     
    Нас:      ${passengerAge}   
    Төлбөрийн төрөл:${paymentTypeDesc}
    ----------------------------------
    Төлсөн дүн:   ${actualFare}   
    Үлдсэн баланс:${newBalance}
    ==================================
        Амжилттай дарагдлаа! 
    ==================================
        `)
}else{
        console.log(`
            ⚠️ АНХААРУУЛГА:
            ${passengerName}-ийн картын үлдэгдэл хүрэлцэхгүй байна!
            Одоогийн үлдэгдэл: ${cardBalance}
            Шаардлагатай дүн:  ${actualFare}
            `);
}


