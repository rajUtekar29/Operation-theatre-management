export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'doctor' | 'nurse' | 'staff';
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  availability: string[];
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  medicalHistory: string;
}

export interface Surgery {
  id: string;
  patientId: string;
  doctorId: string;
  assistantSurgeonId?: string;
  anesthesiologistId: string;
  nurseIds: string[];
  otId: string;
  dateTime: string;
  anesthesiaType: string;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  preOpNotes?: string;
  postOpNotes?: string;
  surgicalReports?: string[];
  requiredMaterials: string[];
  doctorRemarks?: string;
}