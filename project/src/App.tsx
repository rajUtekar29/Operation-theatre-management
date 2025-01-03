import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScheduleCalendar from './components/ScheduleCalendar';
// import SurgeryForm from './components/surgery/SurgeryForm';
import DoctorList from './components/doctors/DoctorList';
import PatientList from './components/patients/PatientList';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import SurgeryForm from './components/surgery/SurgeryForm';
import Dashboard from './components/dashboard/Dashboard';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

          <Route 
            path="/" 
            element={
              <ScheduleCalendar 
                date={new Date()} 
                onDateChange={(date) => console.log('Date changed:', date)} 
              />
            } 
          />
         
          <Route path="/schedule" element={<ScheduleCalendar date={new Date()} onDateChange={(date) => console.log('Date changed:', date)} />} />
          {/* Add more routes as needed */}

          <Route path="/schedule-surgery" element={
          
            <SurgeryForm />
        } />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/doctors" element={
        
            <DoctorList />
          
        } />
        <Route path="/patients" element={
        
            <PatientList />
          
        } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;