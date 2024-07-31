const repeatString = function(str, num) {
    let finalText= "";

    if (num >= 0){
        for (let index = 0; index < num ; index++) {
            finalText += str;
        }
    
        return finalText;
    }else{
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = repeatString;
