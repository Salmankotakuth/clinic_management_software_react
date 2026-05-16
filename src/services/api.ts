// src/services/api.ts
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const getToken = () => localStorage.getItem('token');

interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

const request = async (endpoint: string, options: RequestOptions = {}) => {
  const token = getToken();
  
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...options.headers,
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  
  return response.json();
};

export const api = {
  // Auth
  login: (email: string, password: string) => request('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  }),
  
  register: (userData: any) => request('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),
  
  getMe: () => request('/auth/me'),
  
  // Patients
  getPatients: (params: any = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return request(`/patients${queryString ? `?${queryString}` : ''}`);
  },
  
  getPatient: (id: string) => request(`/patients/${id}`),
  
  createPatient: (data: any) => request('/patients', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  updatePatient: (id: string, data: any) => request(`/patients/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  
  deletePatient: (id: string) => request(`/patients/${id}`, {
    method: 'DELETE',
  }),
  
  // Doctors
  getDoctors: () => request('/doctors'),
  getDoctor: (id: string) => request(`/doctors/${id}`),
  createDoctor: (data: any) => request('/doctors', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  updateDoctor: (id: string, data: any) => request(`/doctors/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  deleteDoctor: (id: string) => request(`/doctors/${id}`, {
    method: 'DELETE',
  }),
  
  // Appointments
  getAppointments: (params: any = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return request(`/appointments${queryString ? `?${queryString}` : ''}`);
  },
  getAppointment: (id: string) => request(`/appointments/${id}`),
  createAppointment: (data: any) => request('/appointments', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  updateAppointment: (id: string, data: any) => request(`/appointments/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  deleteAppointment: (id: string) => request(`/appointments/${id}`, {
    method: 'DELETE',
  }),
  
  // Billing
  getInvoices: () => request('/billing'),
  getInvoice: (id: string) => request(`/billing/${id}`),
  createInvoice: (data: any) => request('/billing', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  updateInvoice: (id: string, data: any) => request(`/billing/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
};