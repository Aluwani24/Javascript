// Exercise 1: Temperature check
// 1. Write a code using if else statements to check the temperature and print a message based on the following conditions:
// a. If the temperature is below 0, print "It's freezing!"
// b. If the temperature is between 0 and 15, print "It's cold."
// c. If the temperature is between 16 and 25, print "It's mild."
// d. If the temperature is above 25, print "It's warm."


let temp = - 1
let classification;

if (temp<0){
    classification = "Its freezing"
    console.log(classification);
    
}else if(temp >= 0 && temp <= 15){
    classification = "Its cold"
    console.log(classification);
    

}else if (temp >=16 && temp <= 25){
    classification = "Its mild"
    console.log(classification);
    
}else {
    classification = "Its warm"
    console.log(classification);   
    
}

// 2. Re-write the code using switch 
let temperature = 16

switch (true){
    case (temperature<0):
        console.log("Its freezing");
    break;

    case (temperature>=0 && temperature<=15):
        console.log("Its cold");
        break;
    
    case (temperature>= 16 && temperature <= 25):
         console.log("Its mild");
         break;

    default:
        console.log("Its warm");
              
}


// Exercise 2: Divisibility Check
// 1. Write a code using if else statements to check if a number is divisible by 2, 3, or both:
// a. • If the number is divisible both by 2 and 3, print
// i. "Divisible by both."
// b. • If the number is divisible by only 2, print"Divisible by 2."
// c. • If the number is divisible by only 3, print"Divisible by 3."
// d. • If the number is not divisible by either, print "Not divisible by 2 or 3."


let number = 6
let message;

if (number % 2===0 && number % 3===0){
    message = "Divisible by both."
    console.log(message);
    
}else if (number % 2 ===0){ 
    message = "Divisible by 2."
    console.log(message);
    
}else if (number % 3 ===0){ 
    message = "Divisible by 3."
    console.log(message);

}else {
    message = "Not divisible by 2 or 3."
    console.log(message);
    
}

// 2. Re-write the code using switch Statements..
let divisibleNumber = 2

switch (true){
    case (divisibleNumber % 2===0 && divisibleNumber % 3===0):
        console.log("Divisible by both.");
        break;

    case (divisibleNumber % 2 ===0):
        console.log("Divisible by 2.");
        break;
    
    case (divisibleNumber % 3 ===0):
        console.log("Divisible by 3.");
        break;

    default:
        console.log("Not divisible by 2 or 3.");     
}

// Exercise 3: For loops
// 1. Print numbers from 1 to 10.

for (let i = 0; i < 10; i++){
    console.log("number:", i );
    
}
// 2. Print all even numbers between 1 and 20.

for (let i = 2; i <= 20; i += 2){
        console.log("Even:", i );

}

// 3. Calculate the sum of all numbers from 1 to 100 and print the result. Hint: ‘+=’
let sum = 0

for (let i = 1; i <= 100; i++){
    sum += i
}
console.log("The sum of numbers from 1 to 100:",sum);


// 4. const numbers = [1, 2, 3, 4, 5]. Given the array of numbers, print each element to the console.
const numbers = [1, 2, 3, 4, 5]

for (let i =0; i < numbers.length; i++){
    console.log("Element in the array:", numbers[i]);

}


// 5. const numbers = [3,7, 2, 5, 10, 6]. Given the array of numbers, find and print the largest number.
const Bnumber = [3,7, 2, 5, 10, 6];

const largestNumber = Math.max(...Bnumber);

console.log(largestNumber);



// Exercise 4: While loops
// 1. Print numbers from 1 to 10.
let j = 1

while(j <= 10){
    console.log(j,"while loop");
    j++   
}
// 2. Print all even numbers between 1 and 20.
let EvenNum = 2

while (EvenNum <=20){
    
    console.log(EvenNum,"Even numbers");
    EvenNum += 2
    
}

// 3. Calculate the sum of all numbers from 1 to 100 and print the result.

let add = 0
let y = 1

while (y <=100){
    add += y
    y++
    
}
console.log(add);

// 4. Print all multiples of 5 less than 50.
// # Hint: ‘%’
let i = 1;

while (i < 50) {
  if (i % 5 === 0) {
    console.log(i, "multiples of 5");
  }
  i++;
}

// Exercise 5: Do While loops
// 1. Print numbers from 1 to 10.

let z = 1

do {
    console.log(z,"do while");
    z++

}while(z <=10)

// 2. Calculate the sum of all numbers from 1 to 100 and print the result.

let sum1 = 0
let s = 1

do{
    sum1 += s
    s++   
}while(s <= 100)
    console.log(sum1);

// 3. Prompt the user to enter a number greater than 10. Keep asking until they enter a valid number.

let userNumber;

do {
  userNumber = prompt("Enter a number greater than 10:");
} while (userNumber <= 10);

console.log("You entered a valid number:", userNumber);

// 4. Create a simple guessing game where the user must guess a number between 1 and 10. The game continues until the user guesses the correct number.