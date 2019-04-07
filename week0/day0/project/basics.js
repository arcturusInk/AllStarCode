const str = "Hello";
const bool = true;
const int = 25;

/*
console.log(str);
console.log(bool);
console.log(int);
*/

/*------------------------------------------------------------------------------*/

// We're going to earn a profit by reselling tickets
// We bought some tickets to see SZA!

const regTickets = 45;
const frontRow = 75;
const regTickFourPeople = 4 * regTickets;
const frontRowTwoPeople = 2 * frontRow;

const sum = regTickFourPeople + frontRowTwoPeople;
const sum50PerMore = sum * 1.5;
const sellerFee = sum50PerMore * 0.2;
/*
// 4 regular tickets for $45 each and 2 front row tickets for $75 each
console.log('Cost: ' + (45 * 4 + 75 * 2));
console.log('Cost: ' + (sum));

// we're selling them for 50% more lol.
console.log('Selling price: ' + (45 * 4 + 75 * 2) * 1.5);
console.log('Selling price: ' + sum50PerMore);

// But StubHub, the online ticket selling platform, charges a 20% seller fee...
console.log('Seller fee: ' + (45 * 4 + 75 * 2) * 1.5 * 0.2);
console.log('Seller fee: ' + sellerFee);

// So here's our total profit:
console.log('Total profit: ' + ((45 * 4 + 75 * 2) * 1.5  - (45 * 4 + 75 * 2) * 1.5 * 0.2 - (45 * 4 + 75 * 2)));
console.log('Total profit: ' + (sum50PerMore  - sellerFee - sum));
*/

/*------------------------------------------------------------------------------*/

let x = 10;
x = x + 2;
x = x + x;
console.log(x);

// let pizza = 5;
// let burger = 10;
// burger = pizza;
// pizza = 10;
// console.log(burger + " " + pizza);

let pizza = 5;
let burger = 10;
burger = pizza;
pizza++;
burger--;
pizza /= 2;
pizza = burger % pizza;
console.log(burger + " " + pizza);
