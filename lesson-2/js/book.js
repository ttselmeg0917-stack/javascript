// 🔹 Алхам 1: Ном болон Худалдан авагчийн мэдээлэл (Variables)
const BOOK_PRICE = 25000;
const BASE_DELIVERY_FEE = 5000;

let customerName = "Билгүүн";
let customerAge = 16;
let isMember = true;
let bookCount = 3;
let wantsGiftWrap = true;
let paidAmount = 90000;

// Тооцоолол хийхэд шаардлагатай хувьсагчид
let subtotal = 0;
let discount = 0;
let giftWrapFee = 0;
let actualDeliveryFee = 0;
let finalTotal = 0;
let change = 0;

// 🔹 Алхам 2: Насны шалгалт ба Үнэ бодох (Logic & Math)

// Номны үндсэн дүн
subtotal = BOOK_PRICE * bookCount;

// Хөнгөлөлт тооцох логик
if (isMember === true) {
  discount = subtotal * 0.1; // Гишүүн бол 10% хөнгөлөлт
} else if (bookCount >= 5) {
  discount = 5000; // 5 болон түүнээс дээш ном авбал 5000₮
}

// Бэлгийн боодол (Gift Wrap)
if (wantsGiftWrap === true) {
    giftWrapFee = 3000;
}

// Хүргэлтийн нөхцөл
if (bookCount >= 3) {
  actualDeliveryFee = 0; // 3 болон түүнээс дээш ном авбал үнэгүй
} else {
    actualDeliveryFee = BASE_DELIVERY_FEE;
}

// Эцсийн төлбөр тооцоолох
finalTotal = (subtotal - discount) + giftWrapFee + actualDeliveryFee;

// Өгсөн мөнгө шалгах ба хариулт бодох
if (paidAmount >= finalTotal) {
    change = paidAmount - finalTotal;

  // Гишүүний төлөвийг Монгол хэл рүү хөрвүүлэх
    let memberText = isMember ? "Тийм" : "Үгүй";
    let giftText = wantsGiftWrap ? "Тийм (+3000₮)" : "Үгүй";
    let deliveryText = actualDeliveryFee === 0 ? "Үнэгүй (0₮)" : `${actualDeliveryFee}₮`;
    let discountText = discount > 0 ? `-${discount}₮` : `0₮`;

  // 🔹 Алхам 3: Захиалгын чек хэвлэх (Template String)
    const receipt = `
==================================
    📚 ONLINE BOOK STORE
==================================
Худалдан авагч:  ${customerName} (Гишүүн: ${memberText})
Авсан ном:       ${bookCount} ширхэг
Бэлгийн боодол:  ${giftText}
----------------------------------
Номны үндсэн дүн: ${subtotal}₮
Гишүүний хөнгөлөлт: ${discountText}
Боодлын төлбөр:  +${giftWrapFee}₮
Хүргэлтийн төлбөр: ${deliveryText}
----------------------------------
НИЙТ ТӨЛӨХ:      ${finalTotal}₮
Өгсөн мөнгө:     ${paidAmount}₮
Хариулт мөнгө:   ${change}₮
==================================
        Баярлалаа! 📖✨
==================================
    `;

    console.log(receipt);

} else {
    console.log(`❌ Мөнгө хүрэлцэхгүй байна! Төлөх ёстой дүн: ${finalTotal}₮, Дутуу мөнгө: ${finalTotal - paidAmount}₮`);
}