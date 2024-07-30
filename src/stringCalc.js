// funtion for string number addition
function add(numbers) {
    //for empty string
    if(numbers === '') {
        return 0;
    }
    // for one length string
    if(numbers.length == 1) {
        return Number(numbers) // type casting
    }

    let delimiter = ','
    let num=""
    let sum = 0
    let n = numbers.length
    let numStartIndex = 0

    // Check for custom delimiter
    if(numbers.startsWith('//')) {
        const delimiterEndIndex = numbers.indexOf('\n');
        delimiter = numbers.substring(2, delimiterEndIndex);    
        numStartIndex = delimiterEndIndex + 1;
    }

    //function to calculate sum
    for(let i = numStartIndex; i < n; i++) {
        if(numbers.slice(i, i + delimiter.length) === delimiter || numbers[i] == '\n') { // comparing delimiters
            sum += Number(num)
            num = ""
            i += delimiter.length - 1; // skip delimiter
        }
        else {
            num += numbers[i]
        }
    }

    sum += Number(num)
    return sum
}

module.exports = { add };