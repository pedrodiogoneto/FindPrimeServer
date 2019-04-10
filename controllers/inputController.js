const express = require('express')
const router = express.Router()

const inputService = require('../services/inputService')

function inputController() {

    async function getInputHistory(req, res) {
        try {
            let inputHistory = await inputService.getInputHistory()
            return res.status(200).json(inputHistory)
        } catch (error) {
            Error('There was an error receiving the Note List')
        } 
    }

    async function saveNewInput(req, res) {
        try {
            const { newInput } = req.body;
            let inputHistory = await inputService.saveNewInput(newInput)
            return res.status(200).json(inputHistory)
        } catch (error) {
            Error('There was an error Saving the New Note')
        } 
    }

    return {
        getInputHistory,
        saveNewInput,
    }

}

module.exports = inputController();

