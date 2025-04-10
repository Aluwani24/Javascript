//exercise 1
// numbers
let intNum = 10
let floatNum = 5.5

let sum = intNum + floatNum
let sub = intNum - floatNum
let mult = intNum * floatNum
let mod = intNum % 4
let exp = intNum ** 3

console.log("Addition:",sum);
console.log("Subtraction:",sub);
console.log("Multiplication:",mult);
console.log("Remainder:",mod);
console.log("Exponential:",exp)



//Exercise 2: Boolean and Operators
//1 and 2.Comparison Operators 
let x = 8
let y = 12

console.log("X is greater then Y:",(x>y));
console.log("X less than or equal to Y:",(x<=y));
console.log("X is equal to Y:",(x===y));
console.log("X is not equal to Y:",(x!==y));

//3.Logical operators
let a = true
let b = false

console.log(a && b, "AND");
console.log(a || b, "OR");
console.log(!a, "NOT");


//4. assignment operators

let p = 10

p += 5 //15
p -= 3 //12
p *= 2 //24
p /= 4 //6
p %= 4 //2

console.log(p,"results");
