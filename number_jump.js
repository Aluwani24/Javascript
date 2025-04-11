//number line jump
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    
    if (v1 > v2 && (x2 - x1) % (v1 - v2) === 0) {
        return "YES";
    }
    return "NO";

}

// sales by match
function sockMerchant(n, ar) {
    // Write your code here
let sockCount = {};
    let pairs = 0;

    // Count occurrences of each sock color
    for (let sock of ar) {
        sockCount[sock] = (sockCount[sock] || 0) + 1;
    }

    // Calculate pairs
    for (let color in sockCount) {
        pairs += Math.floor(sockCount[color] / 2);
    }

    return pairs;
}

//bill division
function bonAppetit(bill, k, b) {
    // Write your code here
  // Calculate the correct cost
    let totalCost = bill.reduce((sum, cost) => sum + cost, 0);
    let correctShare = (totalCost - bill[k]) / 2;

    // Compare 
    if (b === correctShare) {
        console.log("Bon Appetit");
    } else {
        console.log(b - correctShare);
    }
}