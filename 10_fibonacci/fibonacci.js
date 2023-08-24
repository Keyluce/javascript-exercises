const fibonacci = function(num) {
    let num1 = 1;
    let num2 = 1;
    if (num < 0) return 'OOPS';
    for (let i = 0; i < num - 2; i++)
    {
        [num1,num2] = [num2,num1 + num2];
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
