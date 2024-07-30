function add(numbers) {
    //for empty string
    if (numbers === '') {
        return 0;
    }
    // for one length string
    if(numbers.length == 1) {
        return Number(numbers)
    }
}

module.exports = { add };