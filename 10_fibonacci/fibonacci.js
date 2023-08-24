const fibonacci = function(num) {
    let num1 = 0;
    let num2 = 1;

    for (let i = 0; i < num - 2; i++)
    {
        let next = num1 + num2;
        [num1,num2] = [num2,next];
    }
    return next;
};

// Do not edit below this line
module.exports = fibonacci;
