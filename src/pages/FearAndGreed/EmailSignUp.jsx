// src/components/EmailSignUp.jsx
import { useState } from "react";

const EmailSignUp = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // You can integrate a backend for sending the email alert here
  };

  return (
    <div className="bg-gray-800 p-4 shadow-md rounded-lg mt-8">
      <h2 className="text-xl font-bold text-white">Sign up for Fear & Greed Alerts</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default EmailSignUp;
