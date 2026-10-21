const MOVIE_NAME = "Avatar 3";
const BASE_TICKET_PRICE = 15000;
const AGE_LIMIT =13;

let viewerName = "Temvvlen";
let viewerAge = 14;
let ticketCount = 2;
let wantsCombo = true;
let paidAmount= 40000;

let subtotal = 0;
let discount = 0;
let comboPrice = 0;
let finalTotal = 0;
let change = 0;

if(viewerAge < AGE_LIMIT){
    console.log("кино үзэх зөвшөөрөлгүй");
    console.log(`
        uuchlaarai, ${viewerName} ${MOVIE_NAME} kino ni 13+ nasniih tul vzeh bolomjgvi.
        `);
}else{
     subtotal = BASE_TICKET_PRICE * ticketCount;
    if(viewerAge < 18){
        discount = 3000 * ticketCount;
    }
    if (wantsCombo === true){
        comboPrice = 10000;
    }
    finalTotal = (subtotal - discount) + comboPrice;
    if(paidAmount >= finalTotal){
        change = paidAmount - finalTotal
        console.log(`
            ==================================
                🎬 UZYE CINEMA TICKET
            ==================================
            Үзэгч:  ${viewerName} ${viewerAge}-nastai        
            Кино:   ${MOVIE_NAME}      
            Тасалбар: ${ticketCount}    
            ----------------------------------
            Тасалбарын дүн:  ${subtotal}
            Насны хөнгөлөлт: ${discount}
            Попкорн комбо:   ${comboPrice}
            ----------------------------------
            НИЙТ ТӨЛӨХ:    ${finalTotal}  
            Өгсөн мөнгө:   ${paidAmount} 
            Хариулт мөнгө: ${change} 
            ==================================
                Сайхан кино үзээрэй! 🍿
            ==================================
            `);
    }
    else{
        console.log("Мөнгө хүрэлцэхгүй байна");
        console.log(`
            Mongo hvreltsehgvi baina. Niit toloh: ${finalTotal} tand baigaa ni ${paidAmount}
            `);
    }
}