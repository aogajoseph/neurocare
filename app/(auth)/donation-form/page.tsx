"use client";

import { useState } from "react";
import axios from "axios";

export default function Donate() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    phoneNumber: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const { data } = await axios.post("/api/payment", {
        amount: Number(formData.amount),
        phoneNumber: formData.phoneNumber,
        email: formData.email,
      });

      setSuccess("Please check your phone for the M-Pesa payment prompt");
    } catch (err: any) {
      setError(err.response?.data?.error || err.message || "Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Help Us Make a Difference
            </h1>
            <p className="mt-4 text-indigo-200/80 text-base max-w-xl mx-auto">
              Your donation helps us raise awareness, promote prevention and coordinate support for affected individuals and families.
            </p>
          </div>

          {error && (
            <div className="mx-auto max-w-[400px] mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded text-red-500 text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="mx-auto max-w-[400px] mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded text-green-500 text-sm">
              {success}
            </div>
          )}

          {/* Donation form */}
          <form className="mx-auto max-w-[400px]" onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="name">
                  Full Names <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-input w-full"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="email">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full"
                  placeholder="johndoe@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="amount">
                  Amount (KES) <span className="text-red-500">*</span>
                </label>
                <input
                  id="amount"
                  type="number"
                  className="form-input w-full"
                  placeholder="e.g., 1000"
                  min={10}
                  value={formData.amount}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="phoneNumber">
                  M-Pesa Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  className="form-input w-full"
                  placeholder="e.g. 0712345678"
                  pattern="^(?:\+254|0)[17]\d{8}$"
                  title="Please enter a valid Safaricom number (starting with +254 or 0)"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
                <p className="mt-1 text-xs text-indigo-200/50">
                  Enter your Safaricom number in the format: 0712345678 or +254712345678
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <button
                type="submit"
                disabled={loading}
                className={`btn w-full bg-[#df0a92] py-[5px] px-4 text-white rounded shadow-sm transition duration-200 hover:bg-transparent border border-[#df0a92] disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {loading ? "Processing..." : "Donate via M-Pesa"}
              </button>
            </div>
          </form>

          {/* Bottom note */}
          <div className="mt-6 text-center text-sm text-indigo-200/65">
            Thank you for your generosity 💙
          </div>
        </div>
      </div>
    </section>
  );
}
