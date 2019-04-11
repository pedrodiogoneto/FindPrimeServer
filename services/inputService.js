const Input = require('../models/Input')
const findPrime = require('../helpers/findPrime')

function inputService() {

    async function getInputHistory() {
        try {
            let inputList = await Input.find({ })
            return inputList
        }
        catch (err) {
          throw err;
        }
    }

    async function saveNewInput(newInput) {
        try {
            
            const primeNumber = findPrime(newInput)
            console.log('>>>>>>>>>>>>>', primeNumber)

            //await Input({ title, content }).save({ title, content })
            //return getInputHistory()
        }
        catch (err) {
          throw err;
        }
    }

    return {
        getInputHistory,
        saveNewInput,
    }

}

module.exports = inputService();
