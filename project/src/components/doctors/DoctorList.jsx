import React from 'react';
import { User, Clock, Stethoscope } from 'lucide-react';

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Wilson',
    specialization: 'Cardiac Surgery',
    availability: ['Monday', 'Wednesday', 'Friday'],
    currentStatus: 'available',
    nextSurgery: null
  },
  {
    id: 2,
    name: 'Dr. James Mitchell',
    specialization: 'Orthopedic Surgery',
    availability: ['Tuesday', 'Thursday'],
    currentStatus: 'in-surgery',
    nextSurgery: '2:30 PM'
  },
  // Add more doctors as needed
];

export default function DoctorList() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6 border-b">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Doctors Directory</h3>
      </div>
      <ul className="divide-y divide-gray-200">
        {doctors.map((doctor) => (
          <li key={doctor.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <User className="h-8 w-8 text-gray-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{doctor.name}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Stethoscope className="flex-shrink-0 mr-1.5 h-4 w-4" />
                  {doctor.specialization}
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <Clock className="flex-shrink-0 mr-1.5 h-4 w-4" />
                  Available: {doctor.availability.join(', ')}
                </div>
              </div>
              <div>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    doctor.currentStatus === 'available'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {doctor.currentStatus === 'available' ? 'Available' : 'In Surgery'}
                </span>
                {doctor.nextSurgery && (
                  <p className="text-xs text-gray-500 mt-1">Next: {doctor.nextSurgery}</p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}