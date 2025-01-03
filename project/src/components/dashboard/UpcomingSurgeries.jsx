import React from 'react';
import { Calendar, User } from 'lucide-react';

export default function UpcomingSurgeries() {
  const surgeries = [
    {
      id: 1,
      patientName: 'John Doe',
      time: '09:00 AM',
      doctor: 'Dr. Smith',
      otId: 'OT-1',
      type: 'Orthopedic'
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      time: '10:30 AM',
      doctor: 'Dr. Johnson',
      otId: 'OT-2',
      type: 'Cardiac'
    }
    
  ];

 

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Upcoming Surgeries</h2>
      <div className="space-y-4">
        {surgeries.map((surgery) => (
          <div key={surgery.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-gray-400" />
                  <span className="font-medium">{surgery.patientName}</span>
                </div>
                <div className="mt-1 text-sm text-gray-500">{surgery.doctor}</div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span>{surgery.time}</span>
                </div>
                <div className="mt-1 text-sm text-gray-500">{surgery.otId}</div>
              </div>
            </div>
            <div className="mt-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                {surgery.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}