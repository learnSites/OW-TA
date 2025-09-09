import React from 'react'; 
import { Link } from "react-router-dom";

export default function OrderConfirmationPage({ order }) {

  const orderData = order || {
    id: "ORD123456",
    name: "John Doe",
    email: "john@example.com",
    address: "123 Main Street, Mumbai, MH, 400001",
    total: 1250,
    items: [
      { name: "Product A", price: 500, qty: 1 },
      { name: "Product B", price: 750, qty: 1 },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-center h-screen flex flex-col justify-center">
      <div className="bg-green-100 p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Thank you for your order!</h1>
        <p className="text-gray-700 mb-6">Your order has been placed successfully.</p>

        <div className="text-left bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-2">Order Details</h2>
          <p><strong>Order ID:</strong> {orderData.id}</p>
          <p><strong>Name:</strong> {orderData.name}</p>
          <p><strong>Email:</strong> {orderData.email}</p>
          <p><strong>Shipping Address:</strong> {orderData.address}</p>

          <hr className="my-4" />

          <h3 className="text-lg font-semibold mb-2">Items:</h3>
          <ul className="space-y-2">
            {orderData.items.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.name} × {item.qty}</span>
                <span>₹{item.price * item.qty}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Total:</span>
            <span>₹{orderData.total}</span>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Continue Shopping
          </Link>
          <Link to="/orders" className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800">
            View My Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
