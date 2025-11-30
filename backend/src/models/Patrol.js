const mongoose = require('mongoose')

const PatrolSchema = new mongoose.Schema({
  email: { type: String, unique: true, sparse: true },
  region: { type: String, required: true },
  passwordHash: { type: String },
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Patrol', PatrolSchema)
