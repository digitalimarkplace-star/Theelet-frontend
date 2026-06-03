import React from "react";
import Image from "next/image";
import hotelImage from "@/public/assets/detail-page/download.jpeg";
import Link from "next/link";
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Navigation */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
        <Image
          src={hotelImage}
          alt="Luxury hotel room"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-center text-black mb-12 lg:mb-16 tracking-wide">
          Luxury Room
        </h1>

        {/* Room Images Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {/* Left Image */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl lg:rounded-tl-[250px] overflow-hidden group">
            <Image
              src={hotelImage}
              alt="Modern luxury bedroom with black headboard"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Right Image */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl lg:rounded-tr-[250px] overflow-hidden group">
            <Image
              src={hotelImage}
              alt="Contemporary bedroom with gold accents"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* About and Booking Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* About Section */}
          <div>
            <h2 className="text-3xl md:text-4xl text-black font-light mb-8 tracking-wide">
              About the place
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                The Elet Signature Room is designed with a minimalist yet
                refined approach, where comfort meets understated luxury. Every
                detail reflects a balance of elegance and simplicity, creating
                an environment that feels both modern and timeless.
              </p>

              <p>
                Crafted to embody Karachi&apos;s vibrant spirit, the Signature
                Room blends contemporary aesthetics with thoughtful
                functionality. It is a space that moves away from the ordinary,
                offering guests a refreshing experience that captures the
                essence of style, sophistication, and serenity.
              </p>

              <p>
                At The Elet, design is more than just appearance—it&apos;s about
                creating experiences. The Signature Room is a perfect example of
                this philosophy, thoughtfully curated to inspire relaxation,
                productivity, and a sense of belonging.
              </p>
            </div>

            {/* Amenities */}
            <div className="flex flex-wrap gap-8 lg:gap-12 mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col items-center gap-3 min-w-[80px]">
                <div className="w-12 h-12">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    className="w-full h-full"
                  >
                    <rect
                      x="8"
                      y="20"
                      width="32"
                      height="16"
                      stroke="#1F2937"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="14"
                      y="14"
                      width="20"
                      height="6"
                      stroke="#1F2937"
                      strokeWidth="2"
                      fill="none"
                    />
                    <line
                      x1="8"
                      y1="36"
                      x2="8"
                      y2="42"
                      stroke="#1F2937"
                      strokeWidth="2"
                    />
                    <line
                      x1="40"
                      y1="36"
                      x2="40"
                      y2="42"
                      stroke="#1F2937"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">5</span> bedroom
                </p>
              </div>

              <div className="flex flex-col items-center gap-3 min-w-[80px]">
                <div className="w-12 h-12">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    className="w-full h-full"
                  >
                    <circle
                      cx="24"
                      cy="16"
                      r="8"
                      stroke="#1F2937"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M14 28C14 24 18 22 24 22C30 22 34 24 34 28"
                      stroke="#1F2937"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M10 32C10 32 12 38 24 38C36 38 38 32 38 32"
                      stroke="#1F2937"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">10</span> mbp/s
                </p>
              </div>

              <div className="flex flex-col items-center gap-3 min-w-[80px]">
                <div className="w-12 h-12">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    className="w-full h-full"
                  >
                    <rect
                      x="12"
                      y="18"
                      width="24"
                      height="16"
                      rx="2"
                      stroke="#1F2937"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M16 18V14C16 12 18 10 20 10H28C30 10 32 12 32 14V18"
                      stroke="#1F2937"
                      strokeWidth="2"
                    />
                    <circle cx="24" cy="26" r="2" fill="#1F2937" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">1</span> bathroom
                </p>
              </div>

              <div className="flex flex-col items-center gap-3 min-w-[80px]">
                <div className="w-12 h-12">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    className="w-full h-full"
                  >
                    <rect
                      x="10"
                      y="16"
                      width="28"
                      height="20"
                      stroke="#1F2937"
                      strokeWidth="2"
                      fill="none"
                    />
                    <line
                      x1="10"
                      y1="24"
                      x2="38"
                      y2="24"
                      stroke="#1F2937"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">2</span>{" "}
                  refrigerator
                </p>
              </div>

              <div className="flex flex-col items-center gap-3 min-w-[80px]">
                <div className="w-12 h-12">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    className="w-full h-full"
                  >
                    <rect
                      x="8"
                      y="14"
                      width="32"
                      height="20"
                      rx="2"
                      stroke="#1F2937"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="12"
                      y="18"
                      width="24"
                      height="12"
                      fill="#1F2937"
                      opacity="0.3"
                    />
                    <circle cx="24" cy="38" r="2" fill="#1F2937" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">4</span>{" "}
                  television
                </p>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white border border-gray-200 rounded-tr-[20%] rounded-bl-[20%] p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-light text-black">
                    Rs. 25,000
                  </span>
                  <span className="text-gray-500 text-lg">per day</span>
                </div>
              </div>

              {/* Guest Counter */}
              <div className="mb-6">
                <p className="text-sm text-gray-600 text-center mb-4">
                  How many days you will stay ?
                </p>
                <div className="flex items-center justify-center gap-6">
                  <button className="w-14 h-14 bg-gray-900 text-white rounded-xl flex items-center justify-center text-2xl hover:bg-gray-800 transition-colors">
                    -
                  </button>
                  <span className="text-3xl font-light min-w-[60px] text-center">
                    2
                  </span>
                  <button className="w-14 h-14 bg-gray-900 text-white rounded-xl flex items-center justify-center text-2xl hover:bg-gray-800 transition-colors">
                    +
                  </button>
                </div>
              </div>

              {/* Date Selector */}
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-3">Select Date</p>
                <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span className="text-gray-700">12 July - 20 July</span>
                </div>
              </div>

              {/* Total Price */}
              <div className="mb-6 text-center">
                <p className="text-sm text-gray-600 mb-1">You will pay</p>
                <p className="text-2xl font-light text-black">
                  Rs. 50,000{" "}
                  <span className="text-gray-500 text-base">/ 2 days</span>
                </p>
              </div>

              {/* Book Button */}
              <Link href="/booking">
                <button className="w-full bg-gray-900 text-white py-4 cursor-pointer rounded-tr-[200px] rounded-bl-[200px] text-base font-light hover:bg-gray-800 transition-colors">
                  Continue to Book
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
