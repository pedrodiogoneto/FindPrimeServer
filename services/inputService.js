const Input = require('../models/Input')

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

    async function saveNewInput(title, content) {
        try {
            let newInput = await Input({ title, content }).save({ title, content })
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
