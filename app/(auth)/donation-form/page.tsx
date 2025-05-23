"use client";

import { useState } from "react";

export default function Donate() {
  const [paymentMethod, setPaymentMethod] = useState("card");

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
              Your donation helps us raise awareness, coordinate support and empower individuals and families affected by neurological conditions.
            </p>
          </div>

          {/* Donation form */}
          <form className="mx-auto max-w-[400px]" onSubmit={(e) => {
            e.preventDefault();
            // Handle donation submission (e.g. API call to backend/payment processor)
          }}>
            <div className="space-y-5">
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="name">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-input w-full"
                  placeholder="Your full name"
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
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="amount">
                  Donation Amount (KES) <span className="text-red-500">*</span>
                </label>
                <input
                  id="amount"
                  type="number"
                  className="form-input w-full"
                  placeholder="e.g. 500"
                  min={10}
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65">
                  Payment Method <span className="text-red-500">*</span>
                </label>
                <select
                  className="form-select w-full"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                >
                  <option value="card">Card</option>
                  <option value="mpesa">Mpesa</option>
                </select>
              </div>

              {paymentMethod === "mpesa" && (
                <div>
                  <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="mpesa-number">
                    Mpesa Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="mpesa-number"
                    type="tel"
                    className="form-input w-full"
                    placeholder="07XXXXXXXX"
                    required={paymentMethod === "mpesa"}
                  />
                </div>
              )}

              {paymentMethod === "card" && (
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="card-number">
                      Card Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="card-number"
                      type="text"
                      className="form-input w-full"
                      placeholder="1234 5678 9012 3456"
                      required={paymentMethod === "card"}
                    />
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="expiry">
                        Expiry Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="expiry"
                        type="text"
                        className="form-input w-full"
                        placeholder="MM/YY"
                        required={paymentMethod === "card"}
                      />
                    </div>

                    <div className="flex-1">
                      <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="cvv">
                        CVV <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="cvv"
                        type="text"
                        className="form-input w-full"
                        placeholder="123"
                        required={paymentMethod === "card"}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 space-y-5">
              <button
                type="submit"
                className="btn w-full bg-[#df0a92] py-[5px] px-4 text-white rounded shadow-sm transition duration-200 hover:bg-transparent border border-[#df0a92]"
              >
                <a href="#">Donate Now</a>
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
