let cartPrices = [1000, 2000, 3000, 4000, 5000];
let customerName = "Tselmeg";
let isVIPMember = true;
let subtotal = 0;
let discount = 0;
let discountAmount = 0;
let finaltotal = 0;

for (let i = 0; i < cartPrices.length; i++) {
    subtotal += cartPrices[i];
}
if (isVIPMember === true && subtotal >= 10000) {
    discount = 20;
}else if (isVIPMember === true) {
    discount = 10;
}else{
    discount = 0;
}
discountAmount = subtotal * discount / 100;
finaltotal = subtotal - discountAmount;

console.log(`
        ========================================
            🛒 ONLINE SHOPPING CART
        ========================================
        Хэрэглэгч:       ${customerName}
        Гишүүний төлөв:  ${isVIPMember}
        Сагсан дахь бараа: ${cartPrices.length}
        ----------------------------------------
        Үндсэн дүн:     ${subtotal}
        Хөнгөлөлт (${discount}%): ${discountAmount}
        ----------------------------------------
        ЭЦСИЙН ТӨЛӨХ:   ${finaltotal}
        ========================================
                Худалдан авалсанд баярлалаа! 
        ========================================
        `);
    