const sumAll = function (num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "ERROR";
    }
    let sum = 0;
    if (num1 > num2) {
        [num1,num2] = [num2,num1];
    }
    for (; num1 <= num2; num1++) {
        sum += num1;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
