// src/services/api.js
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Get token from localStorage
const getToken = () => localStorage.getItem('token');

// Helper function for API requests
const request = async (endpoint, options = {}) => {
  const token = getToken();
  
  const headers = {
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

// API methods
export const api = {
  // Auth
  login: (email, password) => request('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  }),
  
  register: (userData) => request('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),
  
  getMe: () => request('/auth/me'),
  
  // Patients
  getPatients: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return request(`/patients${queryString ? `?${queryString}` : ''}`);
  },
  
  getPatient: (id) => request(`/patients/${id}`),
  
  createPatient: (data) => request('/patients', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  updatePatient: (id, data) => request(`/patients/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  
  deletePatient: (id) => request(`/patients/${id}`, {
    method: 'DELETE',
  }),
  
  // Doctors
  getDoctors: () => request('/doctors'),
  getDoctor: (id) => request(`/doctors/${id}`),
  createDoctor: (data) => request('/doctors', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  updateDoctor: (id, data) => request(`/doctors/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  deleteDoctor: (id) => request(`/doctors/${id}`, {
    method: 'DELETE',
  }),
  
  // Appointments
  getAppointments: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return request(`/appointments${queryString ? `?${queryString}` : ''}`);
  },
  getAppointment: (id) => request(`/appointments/${id}`),
  createAppointment: (data) => request('/appointments', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  updateAppointment: (id, data) => request(`/appointments/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  deleteAppointment: (id) => request(`/appointments/${id}`, {
    method: 'DELETE',
  }),
  
  // Billing
  getInvoices: () => request('/billing'),
  getInvoice: (id) => request(`/billing/${id}`),
  createInvoice: (data) => request('/billing', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  updateInvoice: (id, data) => request(`/billing/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
};