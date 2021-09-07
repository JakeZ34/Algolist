// 1)
function myArray() {
    var arr = [];
    for (var i = 1; i < 256; i++) {
        arr.push(i);
    }
    return arr;
}
// 2)
function sumEven() {
    var sum = 0;
    for (var i = 1; i < 1001; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
// 3)
function sumOdd() {
    var sum = 0;
    for (var i = 1; i <= 5000; i++) {
        if (i % 2 == 1) {
            sum = sum + i;
        }
    }
    return sum;
}
// 4)
function sumArr(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
// 5)
function arrayMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max;
}
// 6)
function arrayAverage(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}
// 7)
function arrayOdd() {
    var array = [];
    for (var i = 1; i < 50; i++) {
        if (i % 2 !== 0) {
            array.push(i);
        }
    }
    return array;
}
// 8)
function greaterthanY(arr, Y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            count++
        }
    }
    return count;
}
// 9)
function valDouble(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i]
    }
    return arr;
}
// 10)
function replaceNeg(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
// 11)
function newArray(arr) {
    //your array
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    var avg = sum / arr.length;
    var arrnew = [max, min, avg];
    return arrnew;
}
// 12)
function change(arr) {
    //your array
    var holder = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = holder;
    return arr;
}
// 13)
function replaceNeg(arr) {
    //your code here 
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}