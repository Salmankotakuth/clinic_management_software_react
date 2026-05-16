// import { useState } from "react";
// import {
//   Search,
//   Add,
//   FilterList,
//   FileDownload,
//   Edit,
//   Delete,
//   Visibility
// } from "@mui/icons-material";

// export function Patients() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showAddModal, setShowAddModal] = useState(false);

//   const patients = [
//     { id: "P-1247", name: "Anitha Raj", age: 34, gender: "Female", phone: "+91 98765 43210", bloodGroup: "O+", lastVisit: "09 May 2026", status: "Active" },
//     { id: "P-1246", name: "Vijay Kumar", age: 45, gender: "Male", phone: "+91 98765 43211", bloodGroup: "A+", lastVisit: "08 May 2026", status: "Active" },
//     { id: "P-1245", name: "Lakshmi Nair", age: 28, gender: "Female", phone: "+91 98765 43212", bloodGroup: "B+", lastVisit: "07 May 2026", status: "Active" },
//     { id: "P-1244", name: "Ravi Chandran", age: 52, gender: "Male", phone: "+91 98765 43213", bloodGroup: "AB+", lastVisit: "06 May 2026", status: "Active" },
//     { id: "P-1243", name: "Sreelekha Menon", age: 31, gender: "Female", phone: "+91 98765 43214", bloodGroup: "O-", lastVisit: "05 May 2026", status: "Inactive" },
//     { id: "P-1242", name: "Suresh Pillai", age: 58, gender: "Male", phone: "+91 98765 43215", bloodGroup: "A-", lastVisit: "04 May 2026", status: "Active" },
//     { id: "P-1241", name: "Meera Joseph", age: 42, gender: "Female", phone: "+91 98765 43216", bloodGroup: "B-", lastVisit: "03 May 2026", status: "Active" },
//     { id: "P-1240", name: "Arun Sebastian", age: 37, gender: "Male", phone: "+91 98765 43217", bloodGroup: "O+", lastVisit: "02 May 2026", status: "Active" },
//   ];

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">Patient Records</h1>
//           <p className="text-gray-600 mt-1">Manage and view all patient information</p>
//         </div>
//         <button
//           onClick={() => setShowAddModal(true)}
//           className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-sm"
//         >
//           <Add />
//           Add New Patient
//         </button>
//       </div>

//       {/* Search and Filters */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//         <div className="flex flex-col md:flex-row gap-4">
//           <div className="flex-1 relative">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search patients by name, ID, or phone..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
//             <FilterList />
//             Filters
//           </button>
//           <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
//             <FileDownload />
//             Export
//           </button>
//         </div>
//       </div>

//       {/* Patients Table */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50 border-b border-gray-200">
//               <tr>
//                 <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Patient ID</th>
//                 <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Name</th>
//                 <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Age</th>
//                 <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Gender</th>
//                 <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Phone</th>
//                 <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Blood Group</th>
//                 <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Last Visit</th>
//                 <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
//                 <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {patients.map((patient) => (
//                 <tr key={patient.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 text-sm font-medium text-gray-900">{patient.id}</td>
//                   <td className="px-6 py-4">
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
//                         {patient.name.charAt(0)}
//                       </div>
//                       <span className="text-sm font-medium text-gray-900">{patient.name}</span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-600">{patient.age}</td>
//                   <td className="px-6 py-4 text-sm text-gray-600">{patient.gender}</td>
//                   <td className="px-6 py-4 text-sm text-gray-600">{patient.phone}</td>
//                   <td className="px-6 py-4">
//                     <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs font-medium">
//                       {patient.bloodGroup}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-600">{patient.lastVisit}</td>
//                   <td className="px-6 py-4">
//                     <span className={`px-3 py-1 rounded-full text-xs font-medium ${
//                       patient.status === "Active"
//                         ? "bg-green-100 text-green-800"
//                         : "bg-gray-100 text-gray-800"
//                     }`}>
//                       {patient.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="flex items-center gap-2">
//                       <button className="p-2 hover:bg-gray-100 rounded-lg text-blue-600" title="View">
//                         <Visibility fontSize="small" />
//                       </button>
//                       <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600" title="Edit">
//                         <Edit fontSize="small" />
//                       </button>
//                       <button className="p-2 hover:bg-gray-100 rounded-lg text-red-600" title="Delete">
//                         <Delete fontSize="small" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Add Patient Modal */}
//       {showAddModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
//             <div className="p-6 border-b border-gray-200">
//               <h2 className="text-2xl font-semibold text-gray-900">Add New Patient</h2>
//             </div>
//             <div className="p-6 space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//                   <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
//                   <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
//                   <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
//                     <option>Male</option>
//                     <option>Female</option>
//                     <option>Other</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Blood Group</label>
//                   <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
//                     <option>A+</option>
//                     <option>A-</option>
//                     <option>B+</option>
//                     <option>B-</option>
//                     <option>O+</option>
//                     <option>O-</option>
//                     <option>AB+</option>
//                     <option>AB-</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
//                   <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                   <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                 </div>
//                 <div className="md:col-span-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
//                   <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
//                 </div>
//               </div>
//             </div>
//             <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//                 Save Patient
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// src/app/components/Patients.tsx

// src/app/components/Patients.tsx
import { useState, useEffect } from "react";
import {
  Search,
  Add,
  FilterList,
  FileDownload,
  Edit,
  Delete,
  Visibility
} from "@mui/icons-material";
import { api } from "../../services/api";

// Type definitions
interface Patient {
  _id?: string;
  patientId?: string;
  name: string;
  age: number;
  gender: string;
  phone: string;
  email?: string;
  bloodGroup: string;
  address?: {
    street: string;
    city: string;
    state: string;
    pincode: string;
  };
  status: string;
  lastVisit?: string;
  createdAt?: string;
}

interface PatientFormData {
  name: string;
  age: number | string;
  gender: string;
  phone: string;
  email: string;
  bloodGroup: string;
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
  };
  status: string;
}

export function Patients() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<PatientFormData>({
    name: '',
    age: '',
    gender: 'Male',
    phone: '',
    email: '',
    bloodGroup: 'A+',
    address: {
      street: '',
      city: '',
      state: '',
      pincode: ''
    },
    status: 'Active'
  });

  // Fetch patients on component mount
  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      setLoading(true);
      const data = await api.getPatients({});
      // The API returns { patients: [], totalPages, currentPage, total }
      setPatients(data.patients || data);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Error fetching patients');
      console.error('Error fetching patients:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof PatientFormData] as any,
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      age: '',
      gender: 'Male',
      phone: '',
      email: '',
      bloodGroup: 'A+',
      address: {
        street: '',
        city: '',
        state: '',
        pincode: ''
      },
      status: 'Active'
    });
    setSelectedPatient(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.age || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      setSubmitting(true);
      
      // Convert age to number
      const patientData = {
        ...formData,
        age: Number(formData.age),
        lastVisit: new Date().toISOString()
      };
      
      const newPatient = await api.createPatient(patientData);
      
      // Add new patient to the list
      setPatients(prev => [newPatient, ...prev]);
      
      // Reset form and close modal
      resetForm();
      setShowAddModal(false);
      
      // Show success message
      alert('Patient added successfully!');
    } catch (err: any) {
      console.error('Error adding patient:', err);
      alert(err.message || 'Failed to add patient. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (patient: Patient) => {
    setSelectedPatient(patient);
    setFormData({
      name: patient.name,
      age: patient.age,
      gender: patient.gender,
      phone: patient.phone,
      email: patient.email || '',
      bloodGroup: patient.bloodGroup,
      address: patient.address || {
        street: '',
        city: '',
        state: '',
        pincode: ''
      },
      status: patient.status
    });
    setShowEditModal(true);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPatient?._id) return;

    try {
      setSubmitting(true);
      
      const patientData = {
        ...formData,
        age: Number(formData.age),
        lastVisit: new Date().toISOString()
      };
      
      const updatedPatient = await api.updatePatient(selectedPatient._id, patientData);
      
      // Update patient in the list
      setPatients(prev => prev.map(p => 
        p._id === selectedPatient._id ? updatedPatient : p
      ));
      
      // Reset form and close modal
      resetForm();
      setShowEditModal(false);
      
      alert('Patient updated successfully!');
    } catch (err: any) {
      console.error('Error updating patient:', err);
      alert(err.message || 'Failed to update patient. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      try {
        await api.deletePatient(id);
        setPatients(prev => prev.filter(patient => patient._id !== id));
        alert('Patient deleted successfully!');
      } catch (err: any) {
        console.error('Error deleting patient:', err);
        alert(err.message || 'Failed to delete patient');
      }
    }
  };

  const handleView = (patient: Patient) => {
    alert(`Patient Details:\n\nName: ${patient.name}\nID: ${patient.patientId}\nAge: ${patient.age}\nGender: ${patient.gender}\nPhone: ${patient.phone}\nBlood Group: ${patient.bloodGroup}\nStatus: ${patient.status}`);
  };

  // Filter patients based on search term
  const filteredPatients = patients.filter(patient =>
    patient.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.patientId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.phone?.includes(searchTerm)
  );

  if (loading && patients.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading patients...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Patient Records</h1>
          <p className="text-gray-600 mt-1">Manage and view all patient information</p>
        </div>
        <button
          onClick={() => {
            resetForm();
            setShowAddModal(true);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-sm transition-colors"
        >
          <Add />
          Add New Patient
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search patients by name, ID, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2 transition-colors">
            <FilterList />
            Filters
          </button>
          <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2 transition-colors">
            <FileDownload />
            Export
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          {error}
        </div>
      )}

      {/* Patients Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Patient ID</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Name</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Age</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Gender</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Phone</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Blood Group</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Last Visit</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPatients.map((patient) => (
                <tr key={patient._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{patient.patientId}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                        {patient.name?.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-gray-900">{patient.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{patient.age}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{patient.gender}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{patient.phone}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs font-medium">
                      {patient.bloodGroup}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {patient.lastVisit ? new Date(patient.lastVisit).toLocaleDateString() : 'N/A'}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      patient.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleView(patient)}
                        className="p-2 hover:bg-gray-100 rounded-lg text-blue-600 transition-colors" 
                        title="View"
                      >
                        <Visibility fontSize="small" />
                      </button>
                      <button 
                        onClick={() => handleEdit(patient)}
                        className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors" 
                        title="Edit"
                      >
                        <Edit fontSize="small" />
                      </button>
                      <button 
                        onClick={() => handleDelete(patient._id!)}
                        className="p-2 hover:bg-gray-100 rounded-lg text-red-600 transition-colors" 
                        title="Delete"
                      >
                        <Delete fontSize="small" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredPatients.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No patients found</p>
          </div>
        )}
      </div>

      {/* Add Patient Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
            <form onSubmit={handleSubmit}>
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-900">Add New Patient</h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter age"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Blood Group</label>
                    <select
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>A+</option>
                      <option>A-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>O+</option>
                      <option>O-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="patient@example.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                    <input
                      type="text"
                      name="address.street"
                      value={formData.address.street}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Street address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      name="address.city"
                      value={formData.address.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <input
                      type="text"
                      name="address.state"
                      value={formData.address.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="State"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
                    <input
                      type="text"
                      name="address.pincode"
                      value={formData.address.pincode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Pincode"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    setShowAddModal(false);
                  }}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Saving...' : 'Save Patient'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Patient Modal */}
      {showEditModal && selectedPatient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
            <form onSubmit={handleUpdate}>
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-900">Edit Patient</h2>
                <p className="text-sm text-gray-500 mt-1">ID: {selectedPatient.patientId}</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Blood Group</label>
                    <select
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>A+</option>
                      <option>A-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>O+</option>
                      <option>O-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    setShowEditModal(false);
                  }}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {submitting ? 'Updating...' : 'Update Patient'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}