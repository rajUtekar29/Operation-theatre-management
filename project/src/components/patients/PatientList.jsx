import React from 'react';
import { UserCircle, Calendar, ClipboardList } from 'lucide-react';

const patients = [
  {
    id: 1,
    name: 'John Doe',
    age: 45,
    upcomingSurgery: {
      date: '2024-03-25',
      time: '09:00 AM',
      doctor: 'Dr. Sarah Wilson',
      type: 'Cardiac'
    }
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 32,
    upcomingSurgery: {
      date: '2024-03-26',
      time: '11:30 AM',
      doctor: 'Dr. James Mitchell',
      type: 'Orthopedic'
    }
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 32,
    upcomingSurgery: {
      date: '2024-03-26',
      time: '11:30 AM',
      doctor: 'Dr. James Mitchell',
      type: 'Orthopedic'
    }
  },
  // Add more patients as needed
];

export default function PatientList() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6 border-b">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Patients Directory</h3>
      </div>
      <ul className="divide-y divide-gray-200">
        {patients.map((patient) => (
          <li key={patient.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <UserCircle className="h-8 w-8 text-gray-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{patient.name}</p>
                <p className="text-sm text-gray-500">Age: {patient.age}</p>
                {patient.upcomingSurgery && (
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4" />
                      {patient.upcomingSurgery.date} at {patient.upcomingSurgery.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <ClipboardList className="flex-shrink-0 mr-1.5 h-4 w-4" />
                      {patient.upcomingSurgery.type} Surgery with {patient.upcomingSurgery.doctor}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}