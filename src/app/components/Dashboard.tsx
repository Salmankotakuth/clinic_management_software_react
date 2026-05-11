import {
  People,
  CalendarToday,
  TrendingUp,
  AttachMoney,
  MoreVert,
  LocalHospital
} from "@mui/icons-material";

export function Dashboard() {
  const stats = [
    {
      label: "Total Patients",
      value: "1,247",
      change: "+12%",
      icon: <People className="text-blue-600" />,
      color: "bg-blue-50"
    },
    {
      label: "Today's Appointments",
      value: "28",
      change: "+5%",
      icon: <CalendarToday className="text-green-600" />,
      color: "bg-green-50"
    },
    {
      label: "Active Doctors",
      value: "12",
      change: "+2",
      icon: <LocalHospital className="text-purple-600" />,
      color: "bg-purple-50"
    },
    {
      label: "Revenue (Month)",
      value: "₹4.2L",
      change: "+18%",
      icon: <AttachMoney className="text-orange-600" />,
      color: "bg-orange-50"
    },
  ];

  const todayAppointments = [
    { time: "09:00 AM", patient: "Rahul Menon", doctor: "Dr. Sharma", type: "General Checkup", status: "Completed" },
    { time: "10:30 AM", patient: "Priya Kumar", doctor: "Dr. Nair", type: "Dental", status: "In Progress" },
    { time: "11:00 AM", patient: "Arun Sebastian", doctor: "Dr. Krishnan", type: "Cardiology", status: "Waiting" },
    { time: "02:00 PM", patient: "Meera Joseph", doctor: "Dr. Sharma", type: "Follow-up", status: "Scheduled" },
    { time: "03:30 PM", patient: "Suresh Pillai", doctor: "Dr. Thomas", type: "Orthopedic", status: "Scheduled" },
  ];

  const recentPatients = [
    { id: "P-1247", name: "Anitha Raj", age: 34, lastVisit: "Today", condition: "Hypertension" },
    { id: "P-1246", name: "Vijay Kumar", age: 45, lastVisit: "Yesterday", condition: "Diabetes" },
    { id: "P-1245", name: "Lakshmi Nair", age: 28, lastVisit: "2 days ago", condition: "Pregnancy Care" },
    { id: "P-1244", name: "Ravi Chandran", age: 52, lastVisit: "3 days ago", condition: "Arthritis" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Waiting": return "bg-yellow-100 text-yellow-800";
      case "Scheduled": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
                <h3 className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</h3>
                <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
                  <TrendingUp fontSize="small" />
                  {stat.change} from last month
                </p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Appointments */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Today's Appointments</h2>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <MoreVert className="text-gray-600" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Patient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Doctor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {todayAppointments.map((apt, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{apt.time}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{apt.patient}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{apt.doctor}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{apt.type}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(apt.status)}`}>
                        {apt.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Patients */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Patients</h2>
          </div>
          <div className="p-6 space-y-4">
            {recentPatients.map((patient, index) => (
              <div key={index} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold flex-shrink-0">
                  {patient.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900">{patient.name}</p>
                  <p className="text-sm text-gray-600">{patient.id} • Age {patient.age}</p>
                  <p className="text-xs text-gray-500 mt-1">{patient.condition}</p>
                  <p className="text-xs text-blue-600 mt-1">{patient.lastVisit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
