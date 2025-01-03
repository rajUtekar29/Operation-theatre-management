import React, { useEffect, useState } from 'react';
import { Calendar as CalendarIcon, Clock, User, Activity } from 'lucide-react';

export default function ScheduleCalendar() {
  const [surgeries, setSurgeries] = useState([]);

  useEffect(() => {
    // Fetch stored surgeries from localStorage
    const storedSurgeries = JSON.parse(localStorage.getItem('upcomingSurgeries') || '[]');
    setSurgeries(storedSurgeries);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Surgery Schedule</h2>
      <div className="space-y-4">
        {surgeries.map((surgery, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-gray-400" />
                  <span className="font-medium">{surgery.patientName}</span>
                </div>
                <div className="mt-1 text-sm text-gray-500">{surgery.doctorName}</div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="h-4 w-4 text-gray-400" />
                  <span>{surgery.time}</span>
                </div>
                <div className="mt-1 text-sm text-gray-500">{surgery.otId}</div>
              </div>
            </div>
            <div className="mt-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                {surgery.surgeryType}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}