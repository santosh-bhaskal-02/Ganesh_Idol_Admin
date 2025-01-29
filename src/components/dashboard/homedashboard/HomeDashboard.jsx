import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
} from "chart.js";
import { Pie, Bar, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement
);

const HomeDashboard = () => {
  const pieData = {
    labels: ["Sold", "Available", "Reserved"],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ["#f87171", "#60a5fa", "#fbbf24"],
      },
    ],
  };

  const barData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Daily Sales",
        data: [5, 10, 7, 12, 8],
        backgroundColor: "#4ade80",
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Sales Revenue",
        data: [2000, 4000, 3000, 5000, 7000, 8000, 10000],
        borderColor: "#f97316",
        backgroundColor: "rgba(249, 115, 22, 0.3)",
        fill: true,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header with Action Buttons */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Ganesh Museum Dashboard
        </h1>
      </div>

      {/* Stat Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <StatCard title="Total Idol" value="500" color="bg-orange-500" />
        <StatCard title="Total Idol Sold" value="50" color="bg-pink-500" />
        <StatCard title="Total User" value="173" color="bg-blue-500" />
        <StatCard
          title="This Year Sold Idols"
          value="400"
          color="bg-purple-500"
        />
        <StatCard
          title="Total Revenue Generated"
          value="$50,000"
          color="bg-indigo-500"
        />
        <StatCard
          title="Most Popular Idol"
          value="Ganesh Idol - Gold Edition"
          color="bg-red-500"
        />
        <StatCard
          title="Customer Satisfaction"
          value="95%"
          color="bg-yellow-500"
        />
      </div>

      {/* Business Survey & Sales Trend */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Business Survey</h3>
          <Line data={lineData} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Today’s Sales Overview</h3>
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Today Earnings</p>
              <p className="text-xl font-semibold">$5,300</p>
            </div>
            <div>
              <p className="text-gray-500">Product Sold</p>
              <p className="text-xl font-semibold">$5,300</p>
            </div>
            <div>
              <p className="text-gray-500">Today Orders</p>
              <p className="text-xl font-semibold">$6,300</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Idol Distribution</h3>
          <Pie data={pieData} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Daily Sales</h3>
          <Bar data={barData} />
        </div>
      </div>

      {/* Purchase History */}
      <div className="bg-white p-6 mt-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">Purchase History</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3">Customer</th>
              <th className="p-3">Project</th>
              <th className="p-3">Invoice</th>
              <th className="p-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            <PurchaseRow
              customer="John Doe"
              project="Ganesh Idol"
              invoice="INV-001"
              amount="$200"
            />
            <PurchaseRow
              customer="Jane Smith"
              project="Marble Idol"
              invoice="INV-002"
              amount="$150"
            />
            <PurchaseRow
              customer="Alice Brown"
              project="Gold Ganesh"
              invoice="INV-003"
              amount="$500"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Reusable Stat Card Component
const StatCard = ({ title, value, color }) => (
  <div className={`${color} text-white p-6 rounded-lg shadow-lg`}>
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

// Reusable Purchase Row Component
const PurchaseRow = ({ customer, project, invoice, amount }) => (
  <tr className="border-b">
    <td className="p-3">{customer}</td>
    <td className="p-3">{project}</td>
    <td className="p-3">{invoice}</td>
    <td className="p-3">{amount}</td>
  </tr>
);

export default HomeDashboard;
