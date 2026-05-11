import { Add, Email, Phone, Schedule } from "@mui/icons-material";
import { useState } from "react";

export function Doctors() {
  const [showAddModal, setShowAddModal] = useState(false);

  const doctors = [
    {
      id: "D-001",
      name: "Dr. Rajesh Sharma",
      specialization: "General Medicine",
      qualification: "MBBS, MD",
      experience: "15 years",
      phone: "+91 98765 11111",
      email: "sharma@clinic.com",
      schedule: "Mon-Fri: 9AM-5PM",
      patients: 245,
      status: "Available"
    },
    {
      id: "D-002",
      name: "Dr. Priya Nair",
      specialization: "Dentist",
      qualification: "BDS, MDS",
      experience: "10 years",
      phone: "+91 98765 22222",
      email: "nair@clinic.com",
      schedule: "Mon-Sat: 10AM-6PM",
      patients: 189,
      status: "In Consultation"
    },
    {
      id: "D-003",
      name: "Dr. Anil Krishnan",
      specialization: "Cardiologist",
      qualification: "MBBS, DM Cardiology",
      experience: "20 years",
      phone: "+91 98765 33333",
      email: "krishnan@clinic.com",
      schedule: "Tue-Sat: 11AM-7PM",
      patients: 312,
      status: "Available"
    },
    {
      id: "D-004",
      name: "Dr. Meera Thomas",
      specialization: "Orthopedic",
      qualification: "MBBS, MS Ortho",
      experience: "12 years",
      phone: "+91 98765 44444",
      email: "thomas@clinic.com",
      schedule: "Mon-Fri: 2PM-8PM",
      patients: 198,
      status: "On Leave"
    },
    {
      id: "D-005",
      name: "Dr. Suresh Kumar",
      specialization: "Endocrinology",
      qualification: "MBBS, MD Endo",
      experience: "18 years",
      phone: "+91 98765 55555",
      email: "kumar@clinic.com",
      schedule: "Wed-Sun: 9AM-4PM",
      patients: 267,
      status: "Available"
    },
    {
      id: "D-006",
      name: "Dr. Lakshmi Menon",
      specialization: "Gynecology",
      qualification: "MBBS, MD OBG",
      experience: "14 years",
      phone: "+91 98765 66666",
      email: "menon@clinic.com",
      schedule: "Mon-Sat: 10AM-5PM",
      patients: 223,
      status: "In Consultation"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available": return "bg-green-100 text-green-800";
      case "In Consultation": return "bg-blue-100 text-blue-800";
      case "On Leave": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Doctors</h1>
          <p className="text-gray-600 mt-1">Manage medical staff and their schedules</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-sm"
        >
          <Add />
          Add New Doctor
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p className="text-gray-600 text-sm">Total Doctors</p>
          <h3 className="text-3xl font-bold text-gray-900 mt-2">{doctors.length}</h3>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p className="text-gray-600 text-sm">Available Now</p>
          <h3 className="text-3xl font-bold text-green-600 mt-2">
            {doctors.filter(d => d.status === "Available").length}
          </h3>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p className="text-gray-600 text-sm">In Consultation</p>
          <h3 className="text-3xl font-bold text-blue-600 mt-2">
            {doctors.filter(d => d.status === "In Consultation").length}
          </h3>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p className="text-gray-600 text-sm">On Leave</p>
          <h3 className="text-3xl font-bold text-red-600 mt-2">
            {doctors.filter(d => d.status === "On Leave").length}
          </h3>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl">
                  {doctor.name.split(' ')[1].charAt(0)}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(doctor.status)} bg-opacity-90`}>
                  {doctor.status}
                </span>
              </div>
              <h3 className="text-xl font-semibold">{doctor.name}</h3>
              <p className="text-blue-100 text-sm mt-1">{doctor.id}</p>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <p className="text-sm text-gray-600">Specialization</p>
                <p className="font-medium text-gray-900">{doctor.specialization}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Qualification</p>
                <p className="font-medium text-gray-900">{doctor.qualification}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Experience</p>
                <p className="font-medium text-gray-900">{doctor.experience}</p>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone fontSize="small" />
                <span>{doctor.phone}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Email fontSize="small" />
                <span>{doctor.email}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Schedule fontSize="small" />
                <span>{doctor.schedule}</span>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Patients</span>
                  <span className="font-semibold text-gray-900">{doctor.patients}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 text-sm font-medium">
                  View Profile
                </button>
                <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium">
                  Schedule
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Doctor Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900">Add New Doctor</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" placeholder="Dr. John Doe" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
                  <input type="text" placeholder="Cardiology" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Qualification</label>
                  <input type="text" placeholder="MBBS, MD" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience (years)</label>
                  <input type="number" placeholder="10" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" placeholder="doctor@clinic.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Schedule</label>
                  <input type="text" placeholder="Mon-Fri: 9AM-5PM" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Save Doctor
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
