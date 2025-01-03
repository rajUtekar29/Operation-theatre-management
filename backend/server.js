const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const Surgery = require('./models/Surgery');
const mongooseTypes = mongoose.Types; 

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch((err) => console.error(err));

app.use('/api/auth', authRoutes);
// Add Surgery
// app.use(surgeryRoutes);
app.post('/api/surgeries', async (req, res) => {
  const { patientId, doctorId, otId, date, time, surgeryType } = req.body;

  try {
    // Validate if patientId and doctorId are valid ObjectIds
    if (!mongoose.Types.ObjectId.isValid(patientId) || !mongoose.Types.ObjectId.isValid(doctorId)) {
      return res.status(400).json({ message: 'Invalid patientId or doctorId' });
    }

    // Convert patientId and doctorId to ObjectId using new keyword
    const patientObjectId = new mongoose.Types.ObjectId(patientId);
    const doctorObjectId = new mongoose.Types.ObjectId(doctorId);

    // Check if otId is provided
    if (!otId) {
      return res.status(400).json({ message: 'OT ID is required.' });
    }

    // Create a new Surgery document
    const newSurgery = new Surgery({
      patientId: patientObjectId,
      doctorId: doctorObjectId,
      otId,
      date,
      time,
      surgeryType,
    });

    // Save the Surgery document to the database
    await newSurgery.save();
    res.status(201).json(newSurgery); // Successfully created surgery

  } catch (error) {
    // Log the full error to understand what is going wrong
    console.error('Error scheduling surgery:', error);

    // Return a detailed error message in response
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation Error', details: error.errors });
    }

    // Handle other potential errors, such as database connection issues
    res.status(500).json({ message: 'Failed to schedule surgery. Please try again later.', error: error.message });
  }
});



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
