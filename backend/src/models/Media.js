const mongoose = require('mongoose')

const MediaSchema = new mongoose.Schema({
  type: { type: String, enum: ['audio','image','video','other'], default: 'audio' },
  originalName: { type: String },
  filename: { type: String, required: true },
  path: { type: String, required: true },
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
  timestamp: { type: Date },
  duration: { type: Number },
  metadata: { type: mongoose.Schema.Types.Mixed },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Media', MediaSchema)
