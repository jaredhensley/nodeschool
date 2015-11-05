/*function countWords(inputWords) {

    return inputWords.reduce(function (previousValue, currentValue) {
        previousValue[currentValue] = (previousValue[currentValue]) ? ++previousValue[currentValue] : 1;
        return previousValue;

    }, {});


}

module.exports = countWords*/


function duckCount() {
    // SOLUTION GOES HERE
    var model = {};
    var count = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (Object.hasOwnProperty.call(arguments[i], 'quack')) {
            count++;
        }
    }

    return count;

}

module.exports = duckCount