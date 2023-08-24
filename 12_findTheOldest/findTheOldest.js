const findTheOldest = function(arr) {
    return arr.reduce((totalObj, obj) => {
        let age;
        if (obj.yearOfDeath == undefined) {
            let year = new Date().getFullYear();
            age = year - obj.yearOfBirth;
        } 
        else age = obj.yearOfDeath - obj.yearOfBirth;
        
        if (totalObj.oldest < age)
        {
            totalObj.oldest = age;
            totalObj.name = obj.name;
        }
        return totalObj;
        
    },{name: '', oldest: 0})
};

// Do not edit below this line
module.exports = findTheOldest;
