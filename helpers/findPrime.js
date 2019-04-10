const list = require('./listOfNumbers')

module.exports = function findPrime(numberToFind) {

    let numberToFindArray = numberToFind.split('')

    return list.find(number => {
        if( number.length < 3 ) return

        const numberString = number.toString()

        if(numberString.includes(numberToFindArray[0])) {
            if(numberString.includes(numberToFindArray[1]) && numberString.indexOf(numberToFindArray[1]) > numberString.indexOf(numberToFindArray[0])) {
                if(numberString.includes(numberToFindArray[2]) && numberString.indexOf(numberToFindArray[2]) > numberString.indexOf(numberToFindArray[1])) {
                    return numberString
                }
            }
        }
    })
}
