const list = require('./listOfNumbers')

module.exports = function findPrime(numberToFind) {

    let numberToFindArray = numberToFind.split('')

    const isFirstEqualSecond = numberToFindArray[0] === numberToFindArray[1]
    const isSecondEqualThird = numberToFindArray[1] === numberToFindArray[2]
    const isFirstEqualThird = numberToFindArray[0] === numberToFindArray[2]

    return list.find(number => {

        if( number.toString().length < 3 ) return

        const numberString = number.toString().split('')

        if(numberString.includes(numberToFindArray[0])) {

            if(isFirstEqualSecond && isSecondEqualThird) {

                const indexFirst = numberString.indexOf(numberToFindArray[0])
                let stringWithoutFirst = JSON.parse(JSON.stringify(numberString))
                stringWithoutFirst.splice(indexFirst, 1)

                if(numberString.includes(numberToFindArray[1]) 
                    && (stringWithoutFirst.indexOf(numberToFindArray[1]) + 1) > numberString.indexOf(numberToFindArray[0])) {
                    
                    const indexSecond = numberString.indexOf(numberToFindArray[1])
                    let stringWithoutSecond = JSON.parse(JSON.stringify(stringWithoutFirst)) 
                    stringWithoutSecond.splice(indexSecond, 1)
                    

                    if(numberString.includes(numberToFindArray[2]) 
                        && (stringWithoutSecond.indexOf(numberToFindArray[2]) + 2) > (stringWithoutFirst.indexOf(numberToFindArray[1])+1)) {
                        return numberString.join('')
                    }
                }
            }

            if(isFirstEqualSecond || isSecondEqualThird || isFirstEqualThird) {

                if(isFirstEqualSecond) {

                    const indexFirst = numberString.indexOf(numberToFindArray[0])
                    let stringWithoutFirst = JSON.parse(JSON.stringify(numberString))
                    stringWithoutFirst.splice(indexFirst, 1)
    
                    if(stringWithoutFirst.includes(numberToFindArray[1]) && (stringWithoutFirst.indexOf(numberToFindArray[1]) + 1) > numberString.indexOf(numberToFindArray[0])) {
                        
                        const indexFirst = numberString.indexOf(numberToFindArray[0])
                        let stringWithoutFirst = JSON.parse(JSON.stringify(numberString)) 
                        stringWithoutFirst.splice(indexFirst, 1)
                        
                        if(numberString.includes(numberToFindArray[2]) && (stringWithoutFirst.indexOf(numberToFindArray[2]) + 1) > stringWithoutFirst.indexOf(numberToFindArray[1])+1) {
                            return numberString.join('')
                        }          
                    }
                } else if (isFirstEqualThird) {
                    if(numberString.includes(numberToFindArray[1]) && numberString.indexOf(numberToFindArray[1]) > numberString.indexOf(numberToFindArray[0])) {

                        const indexFirst = numberString.indexOf(numberToFindArray[0])
                        let stringWithoutFirst = JSON.parse(JSON.stringify(numberString)) 
                        stringWithoutFirst.splice(indexFirst, 1)

                        if(numberString.includes(numberToFindArray[2]) && (stringWithoutFirst.indexOf(numberToFindArray[2]) + 1) > numberString.indexOf(numberToFindArray[1])) {
                            return numberString.join('')
                        }
                    }
                } else {
                    if(numberString.includes(numberToFindArray[1]) && numberString.indexOf(numberToFindArray[1]) > numberString.indexOf(numberToFindArray[0])) {
                        const indexSecond = numberString.indexOf(numberToFindArray[1])
                        let stringWithoutSecond = JSON.parse(JSON.stringify(numberString)) 
                        stringWithoutSecond.splice(indexSecond, 1)

                        if(numberString.includes(numberToFindArray[2]) && (stringWithoutSecond.indexOf(numberToFindArray[2]) + 1) > numberString.indexOf(numberToFindArray[1])) {
                            return numberString.join('')
                        }
                    }
                }
            } else {
                if(numberString.includes(numberToFindArray[1]) && numberString.indexOf(numberToFindArray[1]) > numberString.indexOf(numberToFindArray[0])) {
                    if(numberString.includes(numberToFindArray[2]) && numberString.indexOf(numberToFindArray[2]) > numberString.indexOf(numberToFindArray[1])) {
                        return numberString.join('')
                    }
                }
            }
        }
    })
}
