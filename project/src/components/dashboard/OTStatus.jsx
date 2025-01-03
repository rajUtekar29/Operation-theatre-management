import React from 'react';
import { Activity } from 'lucide-react';

export default function OTStatus() {
  const otRooms = [
    { id: 'OT-1', status: 'available', nextSurgery: null },
    { id: 'OT-2', status: 'in-use', nextSurgery: '10:30 AM' },
    { id: 'OT-3', status: 'maintenance', nextSurgery: null }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Operating Theater Status</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {otRooms.map((room) => (
          <div key={room.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-indigo-600" />
                <span className="font-medium">{room.id}</span>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                room.status === 'available' ? 'bg-green-100 text-green-800' :
                room.status === 'in-use' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {room.status}
              </span>
            </div>
            {room.nextSurgery && (
              <p className="mt-2 text-sm text-gray-500">
                Next surgery: {room.nextSurgery}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}