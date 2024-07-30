function add(numbers) {
    //for empty string
    if (numbers === '') {
        return 0;
    }
    // for one length string
    if(numbers.length == 1) {
        return Number(numbers)
    }

    let num=""
    let sum = 0
    let n = numbers.length
    
    //function to calculate sum
    for(let i = 0; i < n; i++) {
        if(numbers[i] == ',' || numbers[i] == '\n') {
            sum += Number(num)
            num = ""
        }
        else {
            num += numbers[i]
        }
    }
    sum += Number(num)
    return sum
}

module.exports = { add };