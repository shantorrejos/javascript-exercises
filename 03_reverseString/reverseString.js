const reverseString = function(str) {
    const arr = str.split("");
    const reversedString = [];
    for (let index = 0; index = arr.length; index++) {
        reversedString.push(arr.pop());
    }
    return reversedString.join("");

    // I didnt know reverse method existed XDXDXDXDXD
    
};

// Do not edit below this line
module.exports = reverseString;
