const express = require('express')
const router = express.Router()

const inputService = require('../services/inputService')

function inputController() {

    async function getInputHistory(req, res) {
        try {
            let inputHistory = await inputService.getInputHistory()
            return res.status(200).json(inputHistory)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        } 
    }

    async function saveNewInput(req, res) {
        try {
            const { newInput } = req.body;
            let inputHistory = await inputService.saveNewInput(newInput)
            return res.status(200).json(inputHistory)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    return {
        getInputHistory,
        saveNewInput,
    }

}

module.exports = inputController();

