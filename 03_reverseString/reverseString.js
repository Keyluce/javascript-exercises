const reverseString = function(string) {
    let arrayOfString = string.split("");
    start = 0;
    end = arrayOfString.length - 1;

    while (start < end)
    {
        let temporary;
        temporary = arrayOfString[start];
        arrayOfString[start] = arrayOfString[end];
        arrayOfString[end] = temporary;
        start++;
        end--;
    }
    string = arrayOfString.join("");
    return string;
};


// Do not edit below this line
module.exports = reverseString;
