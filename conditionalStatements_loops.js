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

//exercise 2








