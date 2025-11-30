const mongoose = require('mongoose')

const ComplaintSchema = new mongoose.Schema({
  incidentType: { type: String, required: true },
  dateTime: { type: Date, required: true },
  region: { type: String },
  location: {
    placeName: { type: String },
    state: { type: String },
    district: { type: String },
    subPlace: { type: String },
    coordinates: {
      lat: { type: Number },
      lng: { type: Number },
    },
  },
  description: { type: String },
  // files: simple stored paths (from base64 uploads)
  files: [{ type: String }],
  // attachments: richer objects referencing URLs and metadata
  attachments: [
    {
      url: String,
      type: { type: String }, // 'photo' | 'video' | 'audio'
      originalName: String,
    },
  ],
  anonymous: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Complaint', ComplaintSchema)
