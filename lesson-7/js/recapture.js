let fruits = ["appla", "banana", "grape"];
console.log(`Anhnii massiv: ${fruits}`);

//.push()
fruits.push("peach");
console.log(`.push ("peach") hiisnii daraa: ${fruits}`);

//.pop()
let removedItem = fruits.pop();
console.log(`.pop() hiij hassan elyment: ${removedItem}`);
console.log(`Vldsen massiv: ${fruits}`);

//.includes
let hasBanana = fruits.includes("banana");
let hasOrange = fruits.includes("orange");

console.log(`banana baigaa eseh: ${hasBanana}`);
console.log(`banana baigaa eseh: ${hasOrange}`);

let prices = [10000, 25000, 5000, 40000, 15000]
console.log(`Undsen uniin massiv: ${prices}`);

//.map()- bvh elymentiig huwirgaj Tsoo shine massiv gargah
let pricesWithDelivery = prices.map(function(price){
    return price + 2000;
});
console.log(`.map() vr dvn (hvreglttei une): ${pricesWithDelivery}`);
console.log(`Anhnii prices massiv heweeree baina uu?: ${prices}`);

//.filter() -todorhoi nohtsoloor Shvvj shine massiv gargah
let expensiveItems = prices.filter(function(price){
    return price >= 15000;
});
console.log(`.filter() ur dvn (ondor unetei baraanuud): ${expensiveItems}`);

//.find() - nohtsoliig hangaj bui Ehnii elymentiig oloh
let firstCheapItem = prices.find(function(price){
    return price < 15000;
});
console.log(`.find() vr dvn (ehnii oldson hymd une): ${firstCheapItem}`);

//.reverse() - massiviin daraalliig urwuulah
let letters = ["A", "B", "C", "D"];
console.log(`Ehnii daraallaar : ${letters}`);

letters.reverse();
console.log(`.reverse() hiisnii daraa: ${letters}`);

