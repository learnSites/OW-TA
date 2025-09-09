import React from 'react'; 
import { Link } from "react-router-dom";

export default function MyOrdersPage() {
  const orders = [
    {
      id: "ORD123456",
      date: "2025-08-03",
      total: 1250,
      status: "Shipped",
    },
    {
      id: "ORD123457",
      date: "2025-07-22",
      total: 780,
      status: "Delivered",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 flex flex-col justify-center h-screen">
      <h2 className="text-3xl font-bold mb-6">My Orders</h2>

      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-3 px-6 text-left">Order ID</th>
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-right">Total</th>
                <th className="py-3 px-6 text-center">Status</th>
                <th className="py-3 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-6">{order.id}</td>
                  <td className="py-3 px-6">{order.date}</td>
                  <td className="py-3 px-6 text-right">₹{order.total}</td>
                  <td className="py-3 px-6 text-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium
                      ${order.status === "Delivered" ? "bg-green-100 text-green-700" : 
                        order.status === "Shipped" ? "bg-blue-100 text-blue-700" : 
                        "bg-yellow-100 text-yellow-700"}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <Link
                      to={`/order/${order.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
