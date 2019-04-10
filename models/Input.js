const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const InputSchema = Schema({
  id: ObjectId,
  title: String,
  content: String
})

const Input = mongoose.model('Input', InputSchema)

module.exports = Input
