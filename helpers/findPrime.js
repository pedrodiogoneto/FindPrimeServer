const list = require('./listOfNumbers')

module.exports = function findPrime(numberToFind) {

    let numberToFindArray = numberToFind.split('')

    const isFirstEqualSecond = numberToFindArray[0] === numberToFindArray[1]
    const isSecondEqualThird = numberToFindArray[1] === numberToFindArray[2]
    const isFirstEqualThird = numberToFindArray[0] === numberToFindArray[2]

    numIndexExistsInString = (stringToCheck, index) => stringToCheck.includes(numberToFindArray[index])
    
    indexInString = (stringToCheck, index) => stringToCheck.indexOf(numberToFindArray[index])

    stringWithoutRepeatedLetter = (stringToSplice, index) => {
        const indexToSplice = stringToSplice.indexOf(numberToFindArray[index])
        let copyStringToSplice = JSON.parse(JSON.stringify(stringToSplice))
        copyStringToSplice.splice(indexToSplice, 1)
        return copyStringToSplice
    }

    conditionToFindPrimeInString = (stringToCheck1, stringToCheck2, indexCompensationFromSplice1, indexCompensationFromSplice2, numberString ) => {
        if(numIndexExistsInString(stringToCheck1, 1) && numIndexExistsInString(stringToCheck2, 2)
            && (indexInString(stringToCheck1, 1) + indexCompensationFromSplice1) > (indexInString(numberString, 0))
            && (indexInString(stringToCheck2, 2) + indexCompensationFromSplice2) > (indexInString(stringToCheck1, 1) + indexCompensationFromSplice1)) {                
                return numberString.join('') 
            }
    }

    return list.find(number => {

        if( number.toString().length < 3 ) return

        const numberString = number.toString().split('')
        const stringWithoutFirst = stringWithoutRepeatedLetter(numberString, 0)
        const stringWithoutSecond = stringWithoutRepeatedLetter(numberString, 1)
        const stringWithoutFirstAndSecond = stringWithoutRepeatedLetter(stringWithoutFirst, 1)

        if(numIndexExistsInString(numberString, 0)) {
            
            if(isFirstEqualSecond && isSecondEqualThird) return conditionToFindPrimeInString(stringWithoutFirst, stringWithoutFirstAndSecond, 1, 2, numberString)

            if(isFirstEqualSecond || isSecondEqualThird || isFirstEqualThird) {

                if(isFirstEqualSecond) return conditionToFindPrimeInString(stringWithoutFirst, stringWithoutFirst, 1, 1, numberString)
                else if (isFirstEqualThird) return conditionToFindPrimeInString(stringWithoutFirst, stringWithoutFirst, 0, 1, numberString)
                else return conditionToFindPrimeInString(numberString, stringWithoutSecond, 0, 1, numberString)
            
            } else return conditionToFindPrimeInString(numberString, numberString, 0, 0, numberString)
        }
    })
}
