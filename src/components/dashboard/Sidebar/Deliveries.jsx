import React, { useState } from "react";

const Deliveries = () => {
  const [deliveries, setDeliveries] = useState([
    {
      id: 1,
      customerName: "Omkar Bodhe",
      idolName: "Ganesh Idol A",
      deliveryAddress: "123 Main Street, Pune",
      status: "Pending",
    },
    {
      id: 2,
      customerName: "Santosh Bhaskal",
      idolName: "Ganesh Idol B",
      deliveryAddress: "456 Elm Street, Mumbai",
      status: "Dispatched",
    },
    {
      id: 3,
      customerName: "Vivek Patnekar",
      idolName: "Ganesh Idol C",
      deliveryAddress: "789 Oak Street, Nagpur",
      status: "Delivered",
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setDeliveries((prevDeliveries) =>
      prevDeliveries.map((delivery) =>
        delivery.id === id ? { ...delivery, status: newStatus } : delivery
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">
          Deliveries Management
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                <th className="py-4 px-6 text-left font-semibold text-sm uppercase tracking-wider">
                  Customer Name
                </th>
                <th className="py-4 px-6 text-left font-semibold text-sm uppercase tracking-wider">
                  Idol Name
                </th>
                <th className="py-4 px-6 text-left font-semibold text-sm uppercase tracking-wider">
                  Delivery Address
                </th>
                <th className="py-4 px-6 text-left font-semibold text-sm uppercase tracking-wider">
                  Status
                </th>
                <th className="py-4 px-6 text-center font-semibold text-sm uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {deliveries.map((delivery, index) => (
                <tr
                  key={delivery.id}
                  className={`hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 transition-colors duration-200 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="py-4 px-6 text-gray-800 font-medium">
                    {delivery.customerName}
                  </td>
                  <td className="py-4 px-6 text-gray-800 font-medium">
                    {delivery.idolName}
                  </td>
                  <td className="py-4 px-6 text-gray-800 font-medium">
                    {delivery.deliveryAddress}
                  </td>
                  <td className="py-4 px-6 text-gray-800 font-medium">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        delivery.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : delivery.status === "Dispatched"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {delivery.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <select
                      value={delivery.status}
                      onChange={(e) =>
                        updateStatus(delivery.id, e.target.value)
                      }
                      className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-sm"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Dispatched">Dispatched</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Deliveries;
