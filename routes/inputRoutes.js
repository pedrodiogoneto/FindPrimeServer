const express = require('express')
const inputRoutes = express()
const inputController = require('../controllers/inputController')

inputRoutes.get("/", inputController.getInputHistory)
inputRoutes.post("/", inputController.saveNewInput)

module.exports = inputRoutes
