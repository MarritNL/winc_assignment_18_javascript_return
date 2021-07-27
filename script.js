const checkNumber = function(number1){
    if (number1 > 100) {
        return 'true';
    }
    else {
        return 'false';
    };
}

console.log (checkNumber(90));

const answer = function (maxPeople, numPeople, age) {
    if (maxPeople > numPeople && age >= 18) {
        return 'come in';
    }
    if (maxPeople > numPeople && age < 18) {
        return 'this is a club for adults';
    }
    else { 
        return "it's too busy now, come back later";
    }
};

console.log (answer(100,100,100));
console.log (answer(100,99,15));
console.log (answer(100,99,25));


 const average = function (number1, number2, number3, number4, number5){
    let totalNumbers = number1 + number2 + number3 + number4 + number5;
    //console.log (totalNumbers);
    let calculateAverage = totalNumbers / average.length;
    //console.log (calculateAverage);
    //return Math.round (calculateAverage);
    return calculateAverage;
};
average(3,6,7,2,9);
console.log (average(3,6,7,2,9))
