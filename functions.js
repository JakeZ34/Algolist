// Code snippet 1
function greeting() {
    return "Hello";
    console.log("World");
}
var word = greeting();
console.log(word);
console.log("World");
// Predicted outcome
// Console: Hello

// Code snippet 2
function add(num1, num2) {
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3, 5);
var result2 = add(4, 7);
console.log(result1);
console.log(result2);
// Predicted outcome
// Console: Summing Numbers! num1 is 3, num 2 is 5, Summing Numbers! num1 is 4, num2 is 7, 8, 11

// Code snippet 3
function highFive(num) {
    for (var i = 0; i < num; i++) {
        if (i == 5) {
            console.log("High Five!");
        } else {
            console.log(i);
        }
    }
}
// Predcited outcome - Nothing would print to console?

for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}