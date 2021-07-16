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

/*### Exercise #2

#### Part 1
Ed would like a way to input 3 names of his friends.
The output should be a console greeting to his friends saying: 
`Welcome {name1}, {name2}, {name3}.`
*/

/*
function nameFriends(name1, name2, name3){
    name1=window.prompt("Tell me your name: ","Friend 1" );
    name2=window.prompt("Tell me your name: ","Friend 2" );
    name3=window.prompt("Tell me your name: ","Friend 3" );
    return console.log("Welcome: "+ name1 +", "+ name2+", " + name3+".");
}

nameFriends();
*/

function nameFriends(name){
    name=window.prompt("Tell me your name: ","Friend" );
    return name;
}

console.log("Welcome: "+ nameFriends()+", "+nameFriends()+", "+nameFriends()+".");

/*
#### Part 2
Ed would like to create a function that takes in a birth year and returns the age.

i.e. 1990 returns 30
*/

function actualAge(){
    let year = window.prompt("Tell me your birth year: ","2000" );
    const age = new Date().getFullYear() - year;
    return age;
}

console.log("Your age is: "+ actualAge());

/*
#### Part 3
Ed would like to create a function that prints out,
`Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. 
Welcome {name3}, you are {age3}.`*/

function information(name_2){
    name_2=window.prompt("Tell me your name: ","Name" );
    let year_2 = window.prompt("Tell me your birth year: ","2000" );
    const age_2 = new Date().getFullYear() - year_2;
    return console.log("Welcome "+name_2+" you are "+age_2+".");
}

information()+information()+information();