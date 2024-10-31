const fibonacci = function(givenInput) {
    let arr = [];
    let number = Number(givenInput);
    let index = number - 1;

    if(number === 0){
        return 0;
    } else if (number < 0) {
        return 'OOPS';
    }

    for(let i = 0; i < number; i++){
        if (i === 0 || i === 1){
            arr.push(1)
        } else {
          let first = i - 2;
          let second = i - 1;
          let fibonacci = arr[first] + arr[second];
            arr.push(fibonacci)
        }
    }
    
    return arr[index];
};



// Do not edit below this line
module.exports = fibonacci;
