const Input = require('../models/Input')
const findPrime = require('../helpers/findPrime')

function inputService() {

    async function getInputHistory() {
        try {
            const inputList = await Input.find({ })
            return inputList.sort((a,b) => b.date - a.date) 
        }
        catch (error) {
            throw new Error( 'Something went wrong saving your search' ) 
        }
    }

    async function saveNewInput(newInput) {
        try {
            const primeNumber = findPrime(newInput)
            if(!primeNumber) {
                throw new Error(", Unfortunatly we couldn't find a match with your number") 
                return
            }
            const date = new Date()
            await Input({ input: newInput, date, result: primeNumber }).save({ input: newInput, date, result: primeNumber })         
            return getInputHistory()
        }
        catch (error) {
            throw new Error(`Something went wrong saving your search${error.message }`)
        }
    }

    return {
        getInputHistory,
        saveNewInput,
    }

}

module.exports = inputService();
