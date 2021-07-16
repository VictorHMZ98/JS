/*### Exercise #1

Maria has to calculate the cost of her payments for the month. 
For every transation there is a $3 fee and a 0.1% (0.01) interest fee.
Can you help her calculate her costs?

Return the value of what she should be paying.
*/
// fee, interest, payment, cost

//let transation = 0;
function payment(transation){
    const interest = 0.01;
    const fee = 3;
    let payment = transation+ fee + (transation*interest);
    return payment;
}

console.log("María your payment for the month is: " + payment(20));
console.log("María your payment for the month is: " + payment(35));
console.log("María your payment for the month is: " + payment(350));

