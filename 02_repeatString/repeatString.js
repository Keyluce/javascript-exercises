const repeatString = function(string, repeat) {
    let stringResult = "";
    if (repeat < 0)
    {
        return 'ERROR';
    }
    for (let i = 0; i < repeat; i++)
    {
        stringResult += string;
    }
    return stringResult;



};

// Do not edit below this line
module.exports = repeatString;
