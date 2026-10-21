const MONTHLY_FEE = 120000;
const MIN_AGE = 14;

let memberName = "Anar";
let memberAge = 19;
let isStudent = true;
let monthsCount = 3;
let needsPersonalTrainer = true;
let paidAmount = 500000;

let subtotal = MONTHLY_FEE * monthsCount;
let discount = 0;
let trainerFee = 0;
let finalTotal = 0;
let change = 0;

if(memberAge < MIN_AGE){
    console.log("Фитнессээр хичээллэх нас арай хүрээгүй байна"); 
    console.log(`Uuchlaarai, ${memberName} Manai fitness clubiin nasnii dood hyzgaar ${Min_AGE} ym.`);
}else{
    subtotal = MONTHLY_FEE * monthsCount;
    if(monthsCount >= 3){
        discount = 20000;
    }else if(isStudent === true){
        discount = 10000;
    }
    if(needsPersonalTrainer === true){
        trainerFee = 50000 * monthsCount;
    }
    finalTotal = (subtotal - discount) + trainerFee;
    if(paidAmount >= finalTotal){
            change = paidAmount - finalTotal;
            console.log(`
                ==================================
                    🏋️‍♂️ FITLIFE GYM CLUB
                ==================================
                Гишүүн:       ${memberName} (${memberAge}nastai)
                Авсан хугацаа:${monthsCount} sar
                Хувийн багш:  ${needsPersonalTrainer} ${trainerFee}
                ----------------------------------
                Үндсэн суман: ${subtotal}  
                Хөнгөлөлт:    ${discount}
                Багшийн төлбөр:${trainerFee}
                ----------------------------------
                НИЙТ ТӨЛӨХ:   ${finalTotal}   
                Өгсөн мөнгө:  ${paidAmount}  
                Хариулт мөнгө:${change}  
                ==================================
                    Амжилттай бэлтгэл хийгээрэй! 
                ==================================
                `);
            }else{
            console.log("Мөнгө хүрэлцэхгүй байна");
            console.log(`Mongo hvreltsehgvi baina. niit tolbor: ${subtotal}, tand baigaa ni: ${paidAmount}`);
        }
    }
