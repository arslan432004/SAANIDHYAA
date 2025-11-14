import { useState } from 'react';
import { Users, CheckCircle, MessageSquare, AlertCircle, Download, Clock } from 'lucide-react';

const Dashboard = () => {
  const [isExporting, setIsExporting] = useState(false);

  const stats = [
    { title: 'Total Students', value: '1,234', color: 'blue' },
    { title: "Today's Attendance", value: '92%', color: 'green' },
    { title: 'Pending Feedback', value: '23', color: 'yellow' },
    { title: 'Low Attendance', value: '8', color: 'red' },
  ];

  const recentActivities = [
    { action: 'Attendance marked', subject: 'Mathematics', time: '10 mins ago' },
    { action: 'New feedback received', subject: 'Physics', time: '25 mins ago' },
    { action: 'Student added', subject: 'John Doe', time: '1 hour ago' },
    { action: 'Report generated', subject: 'Monthly Report', time: '2 hours ago' },
  ];

  const handleExportReport = () => {
    setIsExporting(true);
    setTimeout(() => {
      console.log('Exporting report...');
      setIsExporting(false);
    }, 2000);
  };

  return (
    <div className="space-y-6 p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome back! Here's what's happening today.
          </p>
        </div>
        <button
          onClick={handleExportReport}
          disabled={isExporting}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
        >
          {isExporting ? 'Exporting...' : 'Export Report'}
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg bg-${stat.color}-50 border border-${stat.color}-200`}
          >
            <p className="text-sm text-gray-600">{stat.title}</p>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
          <div className="space-y-2">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-800">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.subject}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full py-2 bg-blue-600 text-white rounded-lg">Mark Attendance</button>
            <button className="w-full py-2 bg-gray-200 text-gray-800 rounded-lg">Add Student</button>
            <button className="w-full py-2 bg-gray-200 text-gray-800 rounded-lg">View Feedback</button>
            <button className="w-full py-2 bg-gray-200 text-gray-800 rounded-lg">Generate Report</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
