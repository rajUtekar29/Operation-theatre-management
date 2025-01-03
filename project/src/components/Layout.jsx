import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Calendar, Users, Activity, LogOut, PlusCircle, Menu, X, UserCircle } from 'lucide-react';

export default function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAdmin = true; // Replace with actual auth logic

  const isActivePath = (path) => location.pathname === path;

  const NavLink = ({ to, icon: Icon, children }) => (
    <Link
      to={to}
      className={`${
        isActivePath(to)
          ? 'border-indigo-500 text-gray-900'
          : 'border-transparent text-gray-500 hover:text-gray-900'
      } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
    >
      <Icon className="h-5 w-5 mr-1" />
      {children}
    </Link>
  );

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
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <NavLink to="/" icon={Calendar}>Dashboard</NavLink>
                <NavLink to="/schedule-surgery" icon={PlusCircle}>Schedule Surgery</NavLink>
                <NavLink to="/doctors" icon={Users}>Doctors</NavLink>
                <NavLink to="/patients" icon={UserCircle}>Patients</NavLink>
              </div>
            </div>
            
            <div className="hidden md:flex items-center">
            <button
                onClick={() => navigate('/register')}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 hover:text-gray-700"
              >
                Register
               </button> 
              <button
                onClick={() => navigate('/login')}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 hover:text-gray-700"
              >
                <LogOut className="h-5 w-5 mr-1" />
                Logout
              </button>
            </div>

            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`${
                  isActivePath('/')
                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              >
                Dashboard
              </Link>
              <Link
                to="/schedule-surgery"
                className={`${
                  isActivePath('/schedule-surgery')
                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              >
                Schedule Surgery
              </Link>
              <Link
                to="/doctors"
                className={`${
                  isActivePath('/doctors')
                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              >
                Doctors
              </Link>
              <Link
                to="/patients"
                className={`${
                  isActivePath('/patients')
                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              >
                Patients
              </Link>
            </div>
          </div>
        )}
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}