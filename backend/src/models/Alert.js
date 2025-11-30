const mongoose = require('mongoose')

const AlertSchema = new mongoose.Schema({
  type: { type: String, default: 'sos' },
  source: { type: String, default: 'user' },
  region: { type: String },
  location: {
    placeName: { type: String },
    state: { type: String },
    district: { type: String },
    subPlace: { type: String },
    coordinates: {
      lat: { type: Number },
      lng: { type: Number }
    }
  },
  metadata: { type: mongoose.Schema.Types.Mixed },
  timestamp: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Alert', AlertSchema)
