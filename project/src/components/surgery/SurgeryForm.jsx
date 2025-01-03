import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Dummy data for doctors and patients
const doctors = [
  { id: 1, name: 'Dr. Sarah Wilson', specialization: 'Cardiac Surgery' },
  { id: 2, name: 'Dr. James Mitchell', specialization: 'Orthopedic Surgery' },
];

const patients = [
  { id: 1, name: 'John Doe', age: 45 },
  { id: 2, name: 'Jane Smith', age: 32 },
];

export default function SurgeryForm() {
  const [surgery, setSurgery] = useState({
    patientId: '',
    doctorId: '',
    otId: '',
    date: '',
    time: '',
    surgeryType: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the upcoming surgery object
    const upcomingSurgery = { 
      ...surgery,
      patientName: patients.find(p => p.id === +surgery.patientId)?.name,
      doctorName: doctors.find(d => d.id === +surgery.doctorId)?.name
    };

    // Get existing surgeries from localStorage, or initialize empty array
    const storedSurgeries = JSON.parse(localStorage.getItem('upcomingSurgeries') || '[]');
    storedSurgeries.push(upcomingSurgery);

    // Save the updated list of surgeries to localStorage
    localStorage.setItem('upcomingSurgeries', JSON.stringify(storedSurgeries));

    // Navigate to the ScheduleCalendar page
    navigate('/dashboard');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Schedule Surgery</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Patient</label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={surgery.patientId}
              onChange={(e) => setSurgery({ ...surgery, patientId: e.target.value })}
            >
              <option value="">Select Patient</option>
              {patients.map((patient) => (
                <option key={patient.id} value={patient.id}>
                  {patient.name} (Age: {patient.age})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Primary Surgeon</label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={surgery.doctorId}
              onChange={(e) => setSurgery({ ...surgery, doctorId: e.target.value })}
            >
              <option value="">Select Doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name} ({doctor.specialization})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="date"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                value={surgery.date}
                onChange={(e) => setSurgery({ ...surgery, date: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Time</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Clock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="time"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                value={surgery.time}
                onChange={(e) => setSurgery({ ...surgery, time: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Surgery Type</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={surgery.surgeryType}
            onChange={(e) => setSurgery({ ...surgery, surgeryType: e.target.value })}
            placeholder="e.g., Cardiac Bypass, Hip Replacement"
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Schedule Surgery
        </button>
      </form>
    </div>
  );
}