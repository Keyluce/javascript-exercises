const palindromes = function (string) {
    return string.split('').map(char => char.toLowerCase())
    .filter(char => ((char.codePointAt(0) > 96 && char.codePointAt(0) < 123) 
    || (char.codePointAt(0) > 47 && char.codePointAt(0) < 58))).reverse().join('') == string.split('').map(char => char.toLowerCase())
    .filter(char => ((char.codePointAt(0) > 96 && char.codePointAt(0) < 123) 
    || (char.codePointAt(0) > 47 && char.codePointAt(0) < 58))).join('');
};

// Do not edit below this line
module.exports = palindromes;
