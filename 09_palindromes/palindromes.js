const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ ';

const palindromes = function (str) {
    let strArrayCleaned = str.split('').filter((item) => {
        if(!(punctuation.includes(item))){
            return item;
        }
    }).join('').toLowerCase()

    let strArrayCleanedReversed = strArrayCleaned.split('').reverse().join('');


    if (strArrayCleaned === strArrayCleanedReversed) {
        return true
    } else {
        return false
    }
};
// Do not edit below this line
module.exports = palindromes;
