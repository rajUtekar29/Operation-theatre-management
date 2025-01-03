import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, Users, Activity, LogOut } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const isAdmin = true;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Activity className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">OT Manager</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link to="/schedule" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500">
                  <Calendar className="h-5 w-5 mr-1" />
                  Schedule
                </Link>
                {isAdmin && (
                  <>
                    <Link to="/doctors" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent">
                      <Users className="h-5 w-5 mr-1" />
                      Doctors
                    </Link>
                    <Link to="/patients" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent">
                      <Users className="h-5 w-5 mr-1" />
                      Patients
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => navigate('/login')}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 hover:text-gray-700"
              >
                <LogOut className="h-5 w-5 mr-1" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}