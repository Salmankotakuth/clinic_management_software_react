import { useState } from "react";
import {
  Add,
  CalendarToday,
  AccessTime,
  Person,
  LocalHospital,
  CheckCircle,
  Cancel,
  Schedule
} from "@mui/icons-material";

export function Appointments() {
  const [view, setView] = useState<"list" | "calendar">("list");
  const [showAddModal, setShowAddModal] = useState(false);

  const appointments = [
    { id: "APT-328", date: "09 May 2026", time: "09:00 AM", patient: "Rahul Menon", doctor: "Dr. Sharma", department: "General", type: "Checkup", status: "Confirmed" },
    { id: "APT-327", date: "09 May 2026", time: "10:30 AM", patient: "Priya Kumar", doctor: "Dr. Nair", department: "Dental", type: "Treatment", status: "Confirmed" },
    { id: "APT-326", date: "09 May 2026", time: "11:00 AM", patient: "Arun Sebastian", doctor: "Dr. Krishnan", department: "Cardiology", type: "Consultation", status: "Pending" },
    { id: "APT-325", date: "09 May 2026", time: "02:00 PM", patient: "Meera Joseph", doctor: "Dr. Sharma", department: "General", type: "Follow-up", status: "Confirmed" },
    { id: "APT-324", date: "09 May 2026", time: "03:30 PM", patient: "Suresh Pillai", doctor: "Dr. Thomas", department: "Orthopedic", type: "Consultation", status: "Confirmed" },
    { id: "APT-323", date: "10 May 2026", time: "09:30 AM", patient: "Lakshmi Nair", doctor: "Dr. Menon", department: "Gynecology", type: "Checkup", status: "Pending" },
    { id: "APT-322", date: "10 May 2026", time: "11:00 AM", patient: "Vijay Kumar", doctor: "Dr. Raj", department: "Endocrinology", type: "Follow-up", status: "Confirmed" },
    { id: "APT-321", date: "10 May 2026", time: "02:30 PM", patient: "Anitha Raj", doctor: "Dr. Kumar", department: "Cardiology", type: "Treatment", status: "Cancelled" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed": return "bg-green-100 text-green-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Cancelled": return "bg-red-100 text-red-800";
      case "Completed": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Confirmed": return <CheckCircle fontSize="small" />;
      case "Pending": return <Schedule fontSize="small" />;
      case "Cancelled": return <Cancel fontSize="small" />;
      default: return <Schedule fontSize="small" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
          <p className="text-gray-600 mt-1">Schedule and manage patient appointments</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-sm"
        >
          <Add />
          Book Appointment
        </button>
      </div>

      {/* View Toggle */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex gap-2">
          <button
            onClick={() => setView("list")}
            className={`px-4 py-2 rounded-lg ${view === "list" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            List View
          </button>
          <button
            onClick={() => setView("calendar")}
            className={`px-4 py-2 rounded-lg ${view === "calendar" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            Calendar View
          </button>
        </div>
      </div>

      {/* Appointments List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {appointments.map((apt) => (
          <div key={apt.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <span className="text-sm font-medium text-gray-500">{apt.id}</span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(apt.status)}`}>
                {getStatusIcon(apt.status)}
                {apt.status}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CalendarToday className="text-gray-400" fontSize="small" />
                <div>
                  <p className="text-sm text-gray-600">Date</p>
                  <p className="font-medium text-gray-900">{apt.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <AccessTime className="text-gray-400" fontSize="small" />
                <div>
                  <p className="text-sm text-gray-600">Time</p>
                  <p className="font-medium text-gray-900">{apt.time}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Person className="text-gray-400" fontSize="small" />
                <div>
                  <p className="text-sm text-gray-600">Patient</p>
                  <p className="font-medium text-gray-900">{apt.patient}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <LocalHospital className="text-gray-400" fontSize="small" />
                <div>
                  <p className="text-sm text-gray-600">Doctor</p>
                  <p className="font-medium text-gray-900">{apt.doctor}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-200">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                  {apt.department} - {apt.type}
                </span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 flex gap-2">
              <button className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 text-sm font-medium">
                View Details
              </button>
              <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium">
                Reschedule
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Book Appointment Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900">Book New Appointment</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Patient</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select Patient</option>
                    <option>Rahul Menon (P-1247)</option>
                    <option>Priya Kumar (P-1246)</option>
                    <option>Arun Sebastian (P-1245)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Doctor</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select Doctor</option>
                    <option>Dr. Sharma - General Medicine</option>
                    <option>Dr. Nair - Dentist</option>
                    <option>Dr. Krishnan - Cardiologist</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                  <input type="time" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Appointment Type</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Checkup</option>
                    <option>Consultation</option>
                    <option>Follow-up</option>
                    <option>Treatment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>General Medicine</option>
                    <option>Cardiology</option>
                    <option>Dental</option>
                    <option>Orthopedic</option>
                    <option>Gynecology</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
                  <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Additional notes or symptoms..."></textarea>
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
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
