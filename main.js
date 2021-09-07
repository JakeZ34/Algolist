// Given array

var checkingArr = [6,3,5,1,2,4];

// Print each value and the sum so far

var sum = 0
for(let i=0; i < checkingArr.length; i++){
    sum += checkingArr[i];
    console.log('value;', checkingArr[i], 'sum;', sum);
}

// Multiply each value in the array by its position in the array

var checkingArr = [6,3,5,1,2,4];
for(let i = 0; i <checkingArr.length; i++){
    checkingArr[i] = checkingArr[i] * i;
}
console.log(checkingArr);
