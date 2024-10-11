const sumAll = function(firstInt, secondInt) {
    let sum = 0;

    if (firstInt < 0 || secondInt < 0) {
        return "ERROR";
    }

    if (!Number.isInteger(firstInt) || !Number.isInteger(secondInt)) {
        return "ERROR"
    }

    if (firstInt > secondInt) {
        let temp  = secondInt;
        secondInt = firstInt;
        firstInt = temp;
    }

    console.log(firstInt, secondInt)
    for (let index = firstInt; index <= secondInt; index++) {
        sum += index;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
