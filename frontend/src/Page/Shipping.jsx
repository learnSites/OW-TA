import React from 'react'; 
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CheckoutPage() {
  const [shipping, setShipping] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 h-screen flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Shipping Form */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Shipping Information</h3>
          {["name", "email", "address", "city", "state", "zip"].map((field) => (
            <input
              key={field}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={shipping[field]}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <ul className="mb-4">
            {/* Example items — replace with dynamic cart items */}
            <li className="flex justify-between mb-2">
              <span>Product A</span>
              <span>₹500</span>
            </li>
            <li className="flex justify-between mb-2">
              <span>Product B</span>
              <span>₹750</span>
            </li>
          </ul>
          <div className="flex justify-between font-bold text-lg border-t pt-4">
            <span>Total</span>
            <span>₹1250</span>
          </div>

          <Link to="/confirm">
            <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
              Place Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
