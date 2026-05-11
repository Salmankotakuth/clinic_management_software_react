import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { FileDownload, Print } from "@mui/icons-material";

export function Reports() {
  const monthlyRevenue = [
    { month: "Jan", revenue: 320000, expenses: 180000 },
    { month: "Feb", revenue: 350000, expenses: 190000 },
    { month: "Mar", revenue: 380000, expenses: 200000 },
    { month: "Apr", revenue: 420000, expenses: 210000 },
    { month: "May", revenue: 420000, expenses: 215000 },
  ];

  const patientsByDepartment = [
    { name: "General Medicine", value: 450 },
    { name: "Cardiology", value: 320 },
    { name: "Dental", value: 280 },
    { name: "Orthopedic", value: 210 },
    { name: "Gynecology", value: 190 },
    { name: "Others", value: 150 },
  ];

  const appointmentTrends = [
    { day: "Mon", appointments: 28 },
    { day: "Tue", appointments: 32 },
    { day: "Wed", appointments: 35 },
    { day: "Thu", appointments: 30 },
    { day: "Fri", appointments: 38 },
    { day: "Sat", appointments: 25 },
    { day: "Sun", appointments: 15 },
  ];

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#6b7280"];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 mt-1">View clinic performance and insights</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <Print fontSize="small" />
            Print
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
            <FileDownload fontSize="small" />
            Export PDF
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-sm p-6 text-white">
          <p className="text-blue-100 text-sm">This Month Revenue</p>
          <h3 className="text-3xl font-bold mt-2">₹4.2L</h3>
          <p className="text-blue-100 text-sm mt-2">+18% from last month</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-sm p-6 text-white">
          <p className="text-green-100 text-sm">Total Patients</p>
          <h3 className="text-3xl font-bold mt-2">1,247</h3>
          <p className="text-green-100 text-sm mt-2">+12% from last month</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-sm p-6 text-white">
          <p className="text-purple-100 text-sm">Appointments</p>
          <h3 className="text-3xl font-bold mt-2">203</h3>
          <p className="text-purple-100 text-sm mt-2">This week</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-sm p-6 text-white">
          <p className="text-orange-100 text-sm">Satisfaction Rate</p>
          <h3 className="text-3xl font-bold mt-2">94%</h3>
          <p className="text-orange-100 text-sm mt-2">Based on 156 reviews</p>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Monthly Revenue & Expenses</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#3b82f6" name="Revenue" />
              <Bar dataKey="expenses" fill="#ef4444" name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Patients by Department */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Patients by Department</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={patientsByDepartment}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {patientsByDepartment.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Appointment Trends */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Weekly Appointment Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={appointmentTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="appointments" stroke="#3b82f6" strokeWidth={2} name="Appointments" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Top Performing Doctors */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Top Performing Doctors</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Doctor</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Department</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Patients Treated</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Revenue Generated</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Dr. Anil Krishnan</td>
                <td className="px-6 py-4 text-sm text-gray-600">Cardiology</td>
                <td className="px-6 py-4 text-sm text-gray-900">312</td>
                <td className="px-6 py-4 text-sm text-gray-900">₹1,24,000</td>
                <td className="px-6 py-4 text-sm text-yellow-600">★★★★★ 4.9</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Dr. Suresh Kumar</td>
                <td className="px-6 py-4 text-sm text-gray-600">Endocrinology</td>
                <td className="px-6 py-4 text-sm text-gray-900">267</td>
                <td className="px-6 py-4 text-sm text-gray-900">₹98,000</td>
                <td className="px-6 py-4 text-sm text-yellow-600">★★★★★ 4.8</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Dr. Rajesh Sharma</td>
                <td className="px-6 py-4 text-sm text-gray-600">General Medicine</td>
                <td className="px-6 py-4 text-sm text-gray-900">245</td>
                <td className="px-6 py-4 text-sm text-gray-900">₹86,000</td>
                <td className="px-6 py-4 text-sm text-yellow-600">★★★★☆ 4.7</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Dr. Lakshmi Menon</td>
                <td className="px-6 py-4 text-sm text-gray-600">Gynecology</td>
                <td className="px-6 py-4 text-sm text-gray-900">223</td>
                <td className="px-6 py-4 text-sm text-gray-900">₹82,000</td>
                <td className="px-6 py-4 text-sm text-yellow-600">★★★★★ 4.9</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
