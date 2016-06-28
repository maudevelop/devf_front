// * Task: Complete function saleHotdogs, function accept 1 parameters: n,
// * n is the number of customers to buy hotdogs, different numbers have different prices 
// * (refer to the following table), return a number that the customer need to pay how much money.
// * +---------------+-------------+
// * |  numbers n    | price(cents)|
// * +---------------+-------------+
// * |n<5            |    100      |
// * +---------------+-------------+
// * |n>=5 and n<10  |     95      |
// * +---------------+-------------+
// * |n>=10          |     90      |
// * |_______________|_____________|


function saleHotDogs(n){
    var precio;
    n < 5 ? precio = 100 * n: n >=5 && n < 10 ? precio = 95 * n: precio = 90*n;
    return "$" + (precio/100) + " or " + precio + " cents";
}

console.log(saleHotDogs(9));
