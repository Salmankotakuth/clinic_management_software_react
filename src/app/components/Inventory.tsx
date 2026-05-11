import { Add, Warning, CheckCircle, TrendingDown } from "@mui/icons-material";
import { useState } from "react";

export function Inventory() {
  const [showAddModal, setShowAddModal] = useState(false);

  const medicines = [
    { id: "MED-001", name: "Paracetamol 500mg", category: "Analgesic", stock: 250, minStock: 100, price: 5, expiry: "Dec 2026", status: "In Stock" },
    { id: "MED-002", name: "Amoxicillin 250mg", category: "Antibiotic", stock: 45, minStock: 50, price: 15, expiry: "Oct 2026", status: "Low Stock" },
    { id: "MED-003", name: "Ibuprofen 400mg", category: "Analgesic", stock: 180, minStock: 100, price: 8, expiry: "Nov 2026", status: "In Stock" },
    { id: "MED-004", name: "Cetirizine 10mg", category: "Antihistamine", stock: 320, minStock: 150, price: 3, expiry: "Jan 2027", status: "In Stock" },
    { id: "MED-005", name: "Metformin 500mg", category: "Antidiabetic", stock: 25, minStock: 80, price: 12, expiry: "Aug 2026", status: "Low Stock" },
    { id: "MED-006", name: "Atorvastatin 10mg", category: "Statin", stock: 0, minStock: 60, price: 20, expiry: "Sep 2026", status: "Out of Stock" },
    { id: "MED-007", name: "Omeprazole 20mg", category: "Antacid", stock: 150, minStock: 100, price: 10, expiry: "Dec 2026", status: "In Stock" },
    { id: "MED-008", name: "Aspirin 75mg", category: "Antiplatelet", stock: 200, minStock: 120, price: 4, expiry: "Feb 2027", status: "In Stock" },
  ];

  const equipment = [
    { id: "EQP-001", name: "Digital Thermometer", quantity: 15, condition: "Good", lastMaintenance: "01 May 2026" },
    { id: "EQP-002", name: "Blood Pressure Monitor", quantity: 8, condition: "Good", lastMaintenance: "15 Apr 2026" },
    { id: "EQP-003", name: "Stethoscope", quantity: 12, condition: "Excellent", lastMaintenance: "10 Apr 2026" },
    { id: "EQP-004", name: "Pulse Oximeter", quantity: 10, condition: "Good", lastMaintenance: "20 Apr 2026" },
    { id: "EQP-005", name: "ECG Machine", quantity: 2, condition: "Fair", lastMaintenance: "05 May 2026" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Stock": return "bg-green-100 text-green-800";
      case "Low Stock": return "bg-yellow-100 text-yellow-800";
      case "Out of Stock": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "In Stock": return <CheckCircle fontSize="small" />;
      case "Low Stock": return <Warning fontSize="small" />;
      case "Out of Stock": return <TrendingDown fontSize="small" />;
      default: return <CheckCircle fontSize="small" />;
    }
  };

  const lowStockCount = medicines.filter(m => m.status === "Low Stock" || m.status === "Out of Stock").length;
  const totalValue = medicines.reduce((sum, m) => sum + (m.stock * m.price), 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
          <p className="text-gray-600 mt-1">Track medicines and medical equipment</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-sm"
        >
          <Add />
          Add Item
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p className="text-gray-600 text-sm">Total Medicines</p>
          <h3 className="text-3xl font-bold text-gray-900 mt-2">{medicines.length}</h3>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p className="text-gray-600 text-sm">Low/Out of Stock</p>
          <h3 className="text-3xl font-bold text-red-600 mt-2">{lowStockCount}</h3>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p className="text-gray-600 text-sm">Inventory Value</p>
          <h3 className="text-3xl font-bold text-green-600 mt-2">₹{totalValue.toLocaleString()}</h3>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p className="text-gray-600 text-sm">Equipment</p>
          <h3 className="text-3xl font-bold text-blue-600 mt-2">{equipment.length}</h3>
        </div>
      </div>

      {/* Low Stock Alert */}
      {lowStockCount > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
          <Warning className="text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-yellow-900">Low Stock Alert</h3>
            <p className="text-sm text-yellow-800 mt-1">
              {lowStockCount} item(s) are running low or out of stock. Please reorder soon.
            </p>
          </div>
        </div>
      )}

      {/* Medicines Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Medicines</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">ID</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Medicine Name</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Category</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Stock</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Min Stock</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Price (₹)</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Expiry</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {medicines.map((medicine) => (
                <tr key={medicine.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{medicine.id}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{medicine.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{medicine.category}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{medicine.stock}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{medicine.minStock}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">₹{medicine.price}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{medicine.expiry}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit ${getStatusColor(medicine.status)}`}>
                      {getStatusIcon(medicine.status)}
                      {medicine.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Equipment Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Medical Equipment</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">ID</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Equipment Name</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Quantity</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Condition</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Last Maintenance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {equipment.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.id}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{item.quantity}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.condition === "Excellent" ? "bg-green-100 text-green-800" :
                      item.condition === "Good" ? "bg-blue-100 text-blue-800" :
                      "bg-yellow-100 text-yellow-800"
                    }`}>
                      {item.condition}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.lastMaintenance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Item Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900">Add Inventory Item</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Item Type</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Medicine</option>
                  <option>Equipment</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Item Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Stock Quantity</label>
                  <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Stock</label>
                  <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price (₹)</label>
                  <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                  <input type="month" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
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
                Add Item
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
