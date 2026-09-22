"use client";
import React, { useState } from "react";
import Image from "next/image";
import image from "@/public/assets/booking/booking.png";

export default function BookingPage() {
  // ✅ Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfChildren: "",
    numberOfAdult: "",
    status: "",
    checkInDate: "",
    checkOutDate: "",
    hotelName: "",
  });

  // ✅ Get today's date in YYYY-MM-DD format for min date restriction
  const today = new Date().toISOString().split("T")[0];

  // ✅ Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const {
      name,
      email,
      phone,
      numberOfChildren,
      numberOfAdult,
      status,
      checkInDate,
      checkOutDate,
      hotelName,
    } = formData;

    // ✅ Simple Frontend Validation
    if (
      !name ||
      !email ||
      !phone ||
      !numberOfAdult ||
      !status ||
      !checkInDate ||
      !checkOutDate ||
      !hotelName
    ) {
      alert("⚠️ Please fill in all the required fields.");
      return;
    }

    if (!numberOfChildren) {
      formData.numberOfChildren = "0";
    }

    // ✅ Basic Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    // ✅ BUG FIX 3: Phone must be exactly 11 digits (numeric only enforced by input)
    if (phone.trim().length !== 11) {
      alert("⚠️ Please enter a valid phone number (exactly 11 digits).");
      return;
    }

    // ✅ BUG FIX 1: Validate numberOfAdult is not empty AND is at least 1
    if (!numberOfAdult || Number(numberOfAdult) < 1) {
      alert("⚠️ At least one adult must be included in the booking.");
      return;
    }

    // ✅ Date validation
    if (new Date(checkOutDate) <= new Date(checkInDate)) {
      alert("⚠️ Check-out date must be after check-in date.");
      return;
    }

    try {
      const payload = {
        ...formData,
        numberOfChildren: Number(numberOfChildren),
        numberOfAdult: Number(numberOfAdult),
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/booking/submit`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) throw new Error("Failed to submit booking");

      const data = await response.json();
      console.log("✅ Booking Success:", data);

      // ✅ Clear all fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        numberOfChildren: "",
        numberOfAdult: "",
        status: "",
        checkInDate: "",
        checkOutDate: "",
        hotelName: "",
      });

      // ✅ Show confirmation message
      alert("🎉 Thanks for your booking! We'll contact you soon.");
    } catch (error) {
      console.error("❌ Error submitting booking:", error);
      alert("Something went wrong, please try again!");
    }
  };

  // ✅ Handle Cancel Button
  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      numberOfChildren: "",
      numberOfAdult: "",
      status: "",
      checkInDate: "",
      checkOutDate: "",
      hotelName: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col justify-center">
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-bold text-gray-900 mb-3 leading-tight tracking-tight">
            Booking Information
          </h1>
          <p className="text-gray-400 text-[15px] font-light">
            Please fill up the blank fields below
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          {/* Left Side - Room Card */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="w-full max-w-[520px]">
              <div className="relative h-[420px] md:h-[460px] rounded-tr-[100px] rounded-tl-[100px] overflow-hidden mb-6">
                <Image
                  src={image}
                  alt="Luxury Room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900">
                  Luxury Room
                </h2>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-start lg:pt-4 space-y-6"
          >
            {/* Two-column grid for inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-gray-900 text-[15px] font-normal mb-2">
                  Full Name :
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full px-5 py-3 bg-gray-100 rounded-2xl text-gray-900 text-[15px] font-light focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-900 text-[15px] font-normal mb-2">
                  Email Address :
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full px-5 py-3 bg-gray-100 rounded-2xl text-gray-900 text-[15px] font-light focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              {/* ✅ BUG FIX 3: WhatsApp - type="number", block non-numeric keys, cap at 11 digits */}
              <div>
                <label className="block text-gray-900 text-[15px] font-normal mb-2">
                  WhatsApp Number :
                </label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onKeyDown={(e) => {
                    // Block e, E, +, -, . (characters allowed by type="number" but invalid for phone)
                    if (["e", "E", "+", "-", "."].includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  onInput={(e) => {
                    // Cap input at 11 digits
                    if (e.currentTarget.value.length > 11) {
                      e.currentTarget.value = e.currentTarget.value.slice(
                        0,
                        11,
                      );
                    }
                  }}
                  placeholder="03001234567"
                  className="w-full px-5 py-3 bg-gray-100 rounded-2xl text-gray-900 text-[15px] font-light focus:outline-none focus:ring-2 focus:ring-gray-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>

              {/* ✅ BUG FIX 1: Number of Adults - validates empty + value < 1 */}
              <div>
                <label className="block text-gray-900 text-[15px] font-normal mb-2">
                  Number of Adults :
                </label>
                <input
                  type="number"
                  name="numberOfAdult"
                  value={formData.numberOfAdult}
                  onChange={handleChange}
                  min="1"
                  className="w-full px-5 py-3 bg-gray-100 rounded-2xl text-gray-900 text-[15px] font-light focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              {/* Number of Children */}
              <div>
                <label className="block text-gray-900 text-[15px] font-normal mb-2">
                  Number of Children :
                </label>
                <input
                  type="number"
                  name="numberOfChildren"
                  value={formData.numberOfChildren}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-5 py-3 bg-gray-100 rounded-2xl text-gray-900 text-[15px] font-light focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              {/* Hotel Name */}
              <div>
                <label className="block text-gray-900 text-[15px] font-normal mb-2">
                  Hotel Name :
                </label>
                <select
                  name="hotelName"
                  value={formData.hotelName}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-gray-100 rounded-2xl text-gray-900 text-[15px] font-light focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  <option value="">Select Hotel</option>
                  <option value="The Elet Signature Hotel">
                    The Elet Signature Hotel
                  </option>
                  <option value="The Elet Business Hotel">
                    The Elet Business Hotel
                  </option>
                </select>
              </div>

              {/* Marital Status */}
              <div>
                <label className="block text-gray-900 text-[15px] font-normal mb-2">
                  Marital Status :
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-gray-100 rounded-2xl text-gray-900 text-[15px] font-light focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  <option value="">Select Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                </select>
              </div>

              {/* ✅ BUG FIX 2: Check-in Date - min set to today to block past dates */}
              <div>
                <label className="block text-gray-900 text-[15px] font-normal mb-2">
                  Check-in Date :
                </label>
                <input
                  type="date"
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleChange}
                  min={today}
                  className="w-full px-5 py-3 bg-gray-100 rounded-2xl text-gray-900 text-[15px] font-light focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              {/* ✅ BUG FIX 2: Check-out Date - min is checkInDate (or today if not set) */}
              <div>
                <label className="block text-gray-900 text-[15px] font-normal mb-2">
                  Check-out Date :
                </label>
                <input
                  type="date"
                  name="checkOutDate"
                  value={formData.checkOutDate}
                  onChange={handleChange}
                  min={formData.checkInDate || today}
                  className="w-full px-5 py-3 bg-gray-100 rounded-2xl text-gray-900 text-[15px] font-light focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              {/* ✅ BUG FIX 4: Added cursor-pointer to submit button */}
              <button
                type="submit"
                className="w-full sm:w-[45%] bg-gray-900 text-white py-4 rounded-tr-[150px] rounded-bl-[150px] text-[16px] font-light hover:bg-black transition-all shadow-lg cursor-pointer"
              >
                Submit
              </button>

              <button
                type="button"
                onClick={handleCancel}
                className="w-full sm:w-[45%] bg-transparent border-2 rounded-tr-[150px] rounded-bl-[150px] border-gray-300 text-gray-400 py-4 text-[16px] font-light hover:border-gray-400 hover:text-gray-500 transition-all cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
