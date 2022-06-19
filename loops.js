// print odds
for(let i=0; i<20; i++){
    if(i % 2 !== 0)
    console.log(i);
}

// num and sum
var sum=0;
for(let i=0; i<5; i++){
    sum+=i
    console.log('num:', i, 'sum:', sum)
}

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

function sumNums(num1, num2) {
    return num1+num2;
}
console.log(sumNums(2,10))
console.log(sumNums(500,10))