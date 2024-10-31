const date = new Date();
let year = date.getFullYear();

const findTheOldest = function(arr) {
    return arr.reduce((youngestPerson, currentPerson) => {
        let ageOfYP, ageOfCP;

        ageOfYP = getAge(youngestPerson);
        ageOfCP = getAge(currentPerson);


        if(ageOfCP > ageOfYP){
            youngestPerson = currentPerson
            return youngestPerson;
        } else if (ageOfCP <= ageOfYP){
            return youngestPerson;
        }
    }, arr[0])
};

function getAge(person) {
    let age;
    if (!('yearOfDeath' in person) || (typeof person.yearOfDeath === undefined)){
        age = year - person.yearOfBirth
        return age;
    } else {
        age = person.yearOfDeath - person.yearOfBirth
        return age;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
