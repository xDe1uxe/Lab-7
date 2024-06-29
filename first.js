function checkNumber(input) {
    if (typeof input === 'number') {
        if (input % 2 === 0) {
            return 'парне';
        } else {
            return 'непарне';
        }
    } else {
        return '';
    }
}


console.log(checkNumber(4));
console.log(checkNumber(7));
console.log(checkNumber('abc'));
console.log(checkNumber(null)); 
