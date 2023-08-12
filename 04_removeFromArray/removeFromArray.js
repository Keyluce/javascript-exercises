const removeFromArray = function (array, ...removeThese) {
    for (const removeThis of removeThese) {
        let index = array.indexOf(removeThis);
        if (index > -1) {
            array.splice(index, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
