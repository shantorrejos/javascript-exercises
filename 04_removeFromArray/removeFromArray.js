const removeFromArray = function(arr, ...values) {
    let removedFromArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (!values.includes(arr[i])) {
            removedFromArray.push(arr[i])
        }

    }

    console.log(removedFromArray)
    return removedFromArray;
};

// Do not edit below this line
module.exports = removeFromArray;
