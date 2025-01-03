// models/Surgery.js
const mongoose = require('mongoose');

// Import Patient and Doctor models
const Patient = require('./Patients');
const Doctor = require('./Doctors');

const surgerySchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient', // Reference to the Patient collection
    required: true
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor', // Reference to the Doctor collection
    required: true
  },
  otId: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  surgeryType: { type: String, required: true },
});

const Surgery = mongoose.model('Surgery', surgerySchema);

module.exports = Surgery;
