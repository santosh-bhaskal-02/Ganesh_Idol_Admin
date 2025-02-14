import React, { useEffect, useState } from "react";
import {
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
  EyeIcon,
} from "@heroicons/react/outline";
import axios from "axios";
import Cookies from "js-cookie";
const apiUrl = import.meta.env.VITE_BACK_END_URL;

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const authToken = Cookies.get("adminAuthToken");
      if (!authToken) {
        console.error("No auth token found.");
        return;
      }

      try {
        const response = await axios.get(`${apiUrl}/api/products/orders/allorders`, {
          headers: { Authorization: `Bearer ${authToken}` },
        });

        if (!Array.isArray(response.data)) {
          console.error("Unexpected API response:", response.data);
          setOrders([]);
          return;
        }

        console.log("Orders:", response.data);
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        alert("Failed to fetch orders.");
        setOrders([]);
      }
    };

    fetchOrders();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order._id.includes(searchQuery);
    const matchesStatus =
      !filterStatus || order.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Order Management
      </h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
        <input
          type="text"
          placeholder="Search by Order ID..."
          className="w-full md:w-2/3 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="p-3 border rounded-lg w-full md:w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="">Filter by Status</option>
          <option value="pending">Pending</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-4 text-left">Order ID</th>
              <th className="p-4 text-left">User</th>
              <th className="p-4 text-left">Items</th>
              <th className="p-4 text-left">Total ($)</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order._id} className="border-b hover:bg-gray-100 transition">
                <td className="p-4">{order._id}</td>
                <td className="p-4">
                  {order.shipAddress.firstName + " " + order.shipAddress.lastName}
                </td>
                <td className="p-4">{order.orderItems.length} items</td>
                <td className="p-4">₹ {order.totalPrice}</td>
                <td className="p-4 font-medium">
                  <span
                    className={
                      order.status === "pending"
                        ? "text-yellow-500"
                        : order.status === "shipped"
                        ? "text-blue-500"
                        : "text-green-500"
                    }>
                    {order.status}
                  </span>
                </td>
                <td className="p-4 flex gap-2">
                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="bg-blue-500 text-white px-3 py-2 rounded-lg flex items-center gap-2 shadow hover:bg-blue-600">
                    <EyeIcon className="h-5 w-5" /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg relative">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Order Details</h2>
            <p>
              <strong>Order ID:</strong> {selectedOrder._id}
            </p>
            <p>
              <strong>User:</strong>{" "}
              {selectedOrder.shipAddress.firstName +
                " " +
                selectedOrder.shipAddress.firstName || "Unknown"}
            </p>
            <p>
              <strong>Items Ordered:</strong>
              <ul className="list-disc pl-5 mt-2">
                {selectedOrder.orderItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </p>
            <p>
              <strong>Total Price:</strong> ${selectedOrder.totalPrice}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={
                  selectedOrder.status === "pending"
                    ? "text-yellow-500"
                    : selectedOrder.status === "shipped"
                    ? "text-blue-500"
                    : "text-green-500"
                }>
                {selectedOrder.status}
              </span>
            </p>
            <button
              onClick={() => setSelectedOrder(null)}
              className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
              <XCircleIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
