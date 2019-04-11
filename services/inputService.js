const Input = require('../models/Input')
const findPrime = require('../helpers/findPrime')

function inputService() {

    async function getInputHistory() {
        try {
            const inputList = await Input.find({ })
            return inputList.sort((a,b) => b.date - a.date) 
        }
        catch (err) {
          throw err;
        }
    }

    async function saveNewInput(newInput) {
        try {
            const primeNumber = findPrime(newInput)
            const date = new Date()
            await Input({ input: newInput, date, result: primeNumber }).save({ input: newInput, date, result: primeNumber })         
            return getInputHistory()
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
