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

    let delimiter = [',']
    let num=""
    let sum = 0
    let n = numbers.length
    let numStartIndex = 0
    let negatives = []

    // Check for custom delimiter
    if(numbers.startsWith('//')) {
        const delimiterEndIndex = numbers.indexOf('\n');
        let delimiterPart = numbers.substring(2, delimiterEndIndex);    
        
        //handle multi delimiter
        if(delimiterPart.startsWith('[') && delimiterPart.endsWith(']')) {
            delimiter = delimiterPart.slice(1, -1).split('][');
        } else {
            delimiter = [delimiterPart];
        }

        numStartIndex = delimiterEndIndex + 1;
    }
    console.log(delimiter)
    let found = false
    //function to calculate sum
    for(let i = numStartIndex; i < n; i++) {

        for(d of delimiter) {
            if(numbers.slice(i, i + d.length) === d) {
                i += d.length - 1; // skip delimiter
                found = true
            }
        }

        if(found || numbers[i] == '\n') { // comparing delimiters
            let temp_num = Number(num)

            if(temp_num < 0) {
                negatives.push(temp_num)
            }
            else if(temp_num <= 1000) {
                sum += temp_num
            }
            
            num = ""
            found = false;
        }
        else {
            num += numbers[i]
        }
    }

     // for last number
     if (num) {
        const lastNum = Number(num);
        if (lastNum < 0) {
            negatives.push(lastNum);
        } else if (lastNum <= 1000) {
            sum += lastNum;
        }
    }

    // return if any one number is negative than return
    if(negatives.length > 0) {
        return `negative numbers not allowed <${negatives.join(', ')}>`
    }

    return sum
}

module.exports = { add };