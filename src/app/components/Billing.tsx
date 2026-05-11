import { Add, Print, FileDownload, CheckCircle, Schedule, Cancel } from "@mui/icons-material";
import { useState } from "react";

export function Billing() {
  const [showAddModal, setShowAddModal] = useState(false);

  const invoices = [
    { id: "INV-2026-328", date: "09 May 2026", patient: "Rahul Menon", doctor: "Dr. Sharma", services: "Consultation + Lab Tests", amount: 2500, paid: 2500, status: "Paid" },
    { id: "INV-2026-327", date: "08 May 2026", patient: "Priya Kumar", doctor: "Dr. Nair", services: "Dental Treatment", amount: 5000, paid: 3000, status: "Partial" },
    { id: "INV-2026-326", date: "08 May 2026", patient: "Arun Sebastian", doctor: "Dr. Krishnan", services: "ECG + Consultation", amount: 3500, paid: 0, status: "Pending" },
    { id: "INV-2026-325", date: "07 May 2026", patient: "Meera Joseph", doctor: "Dr. Sharma", services: "Follow-up Checkup", amount: 1500, paid: 1500, status: "Paid" },
    { id: "INV-2026-324", date: "07 May 2026", patient: "Suresh Pillai", doctor: "Dr. Thomas", services: "X-Ray + Consultation", amount: 4000, paid: 4000, status: "Paid" },
    { id: "INV-2026-323", date: "06 May 2026", patient: "Lakshmi Nair", doctor: "Dr. Menon", services: "Ultrasound Scan", amount: 2000, paid: 0, status: "Cancelled" },
    { id: "INV-2026-322", date: "06 May 2026", patient: "Vijay Kumar", doctor: "Dr. Kumar", services: "Blood Tests + Consultation", amount: 3000, paid: 3000, status: "Paid" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid": return "bg-green-100 text-green-800";
      case "Partial": return "bg-yellow-100 text-yellow-800";
      case "Pending": return "bg-orange-100 text-orange-800";
      case "Cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Paid": return <CheckCircle fontSize="small" />;
      case "Partial": return <Schedule fontSize="small" />;
      case "Pending": return <Schedule fontSize="small" />;
      case "Cancelled": return <Cancel fontSize="small" />;
      default: return <Schedule fontSize="small" />;
    }
  };

  const totalRevenue = invoices.reduce((sum, inv) => sum + inv.paid, 0);
  const pendingAmount = invoices.reduce((sum, inv) => sum + (inv.amount - inv.paid), 0);
  const paidInvoices = invoices.filter(inv => inv.status === "Paid").length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Billing & Invoices</h1>
          <p className="text-gray-600 mt-1">Manage payments and financial records</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-sm"
        >
          <Add />
          Create Invoice
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p className="text-gray-600 text-sm">Total Revenue</p>
          <h3 className="text-3xl font-bold text-green-600 mt-2">₹{totalRevenue.toLocaleString()}</h3>
          <p className="text-sm text-gray-500 mt-1">This month</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p className="text-gray-600 text-sm">Pending Amount</p>
          <h3 className="text-3xl font-bold text-orange-600 mt-2">₹{pendingAmount.toLocaleString()}</h3>
          <p className="text-sm text-gray-500 mt-1">To be collected</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p className="text-gray-600 text-sm">Paid Invoices</p>
          <h3 className="text-3xl font-bold text-blue-600 mt-2">{paidInvoices}</h3>
          <p className="text-sm text-gray-500 mt-1">This month</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p className="text-gray-600 text-sm">Total Invoices</p>
          <h3 className="text-3xl font-bold text-gray-900 mt-2">{invoices.length}</h3>
          <p className="text-sm text-gray-500 mt-1">This month</p>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Recent Invoices</h2>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <FileDownload fontSize="small" />
            Export
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Invoice ID</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Date</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Patient</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Doctor</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Services</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Paid</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{invoice.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{invoice.date}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{invoice.patient}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{invoice.doctor}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{invoice.services}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">₹{invoice.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">₹{invoice.paid.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit ${getStatusColor(invoice.status)}`}>
                      {getStatusIcon(invoice.status)}
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg text-blue-600" title="Print">
                        <Print fontSize="small" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600" title="Download">
                        <FileDownload fontSize="small" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Invoice Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900">Create New Invoice</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Patient</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select Patient</option>
                    <option>Rahul Menon (P-1247)</option>
                    <option>Priya Kumar (P-1246)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Doctor</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select Doctor</option>
                    <option>Dr. Sharma</option>
                    <option>Dr. Nair</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Services</label>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input type="text" placeholder="Service name" className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="number" placeholder="Amount" className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">Add</button>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">Total Amount</span>
                  <span className="text-2xl font-bold text-gray-900">₹0</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Cash</option>
                  <option>Card</option>
                  <option>UPI</option>
                  <option>Insurance</option>
                </select>
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
                Create Invoice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
