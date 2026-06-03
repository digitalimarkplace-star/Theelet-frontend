import React from "react";
import Image from "next/image";

import {
  bg_button,
  section_bg,
  banner,
  gallery_1,
  gallery_2,
  gallery_3,
  gallery_4,
  gallery_5,
} from "@/public/assets/home/indes";
import { Card } from "../component/card";
import Link from "next/link";
import testimage from "@/public/assets/detail-page/download.jpeg";
import ContactSection from "../component/contact";
import NewLetter from "../component/newsLetter";

export default function Home() {
  const rooms = [
    {
      id: 3,
      image: testimage,
      title: "Executive Room",
      price: "Rs. 17,000 + Tax",
      rating: "4.8",
      description:
        "Spacious executive room offering premium comfort and elegant design.",
      beds: "1 Bed",
      baths: "1 Bath",
    },

    {
      id: 4,
      image: testimage,
      title: "Executive Suite Room",
      price: "Rs. 20,000 + Tax",
      rating: "4.9",
      description:
        "Luxury suite with refined interiors, ideal for guests seeking top-tier comfort.",
      beds: "1 King Bed",
      baths: "1 Bath",
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full">
        <Image
          src={banner}
          alt="Luxury A-frame villa with pool"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col">
            {/* Hero Content */}
            <div className="flex-1 flex flex-col justify-center items-start max-w-2xl">
              <h1 className="text-5xl font-normal mt-[40%] sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-2">
                Explore Your
              </h1>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-[#C9A961] leading-[1.1]">
                Place To Stay
              </h2>
            </div>

            {/* Booking Bar */}
            <div className="mb-12  lg:mb-12">
              <div className="bg-black/60 text-white backdrop:blur-md rounded-2xl shadow-2xl p-4 lg:p-6 max-w-full">
                <div className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-5 gap-4">
                  {/* Location */}
                  <div className="relative">
                    <label className="block text-[12px] text-white mb-2 font-light">
                      Location
                    </label>
                    <select className="w-full bg-transparent border-0 text-white text-[15px] font-light appearance-none pr-8 focus:outline-none cursor-pointer">
                      <option>Clifton</option>
                    </select>
                    <svg
                      className="absolute right-0 top-9 w-4 h-4 text-white pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  {/* Check-in Check-out */}
                  <div className="relative">
                    <label className="block text-[12px] text-white mb-2 font-light">
                      Check-in/Check-out
                    </label>
                    <select className="w-full bg-transparent border-0 text-white text-[15px] font-light appearance-none pr-8 focus:outline-none cursor-pointer">
                      <option>Select Date</option>
                    </select>
                    <svg
                      className="absolute right-0 top-9 w-4 h-4 text-white pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  {/* Adults */}
                  <div className="flex items-end gap-2">
                    <div className="flex-1">
                      <label className="block text-[12px] text-white mb-2 font-light">
                        Adults
                      </label>
                      <div className="flex items-center gap-3">
                        <button className="w-6 h-6 rounded-full border text-white flex items-center justify-center  text-sm hover:border-gray-400">
                          -
                        </button>
                        <span className="text-[15px] text-white font-light min-w-[20px] text-center">
                          02
                        </span>
                        <button className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 text-sm hover:border-gray-400">
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex items-end gap-2">
                    <div className="flex-1">
                      <label className="block text-[12px] text-white mb-2 font-light">
                        Children
                      </label>
                      <div className="flex items-center gap-3">
                        <button className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-white text-sm hover:border-gray-400">
                          -
                        </button>
                        <span className="text-[15px] text-white font-light min-w-[20px] text-center">
                          01
                        </span>
                        <button className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-white text-sm hover:border-gray-400">
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Check Availability Button */}
                  <div className="flex items-end justify-center cursor-pointer z-20">
                    <Image
                      src={bg_button}
                      alt="button"
                      width={100}
                      height={100}
                      className="w-[100px] h-[100px] md:w-[300px] md:h-[70px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Welcome Section */}
      <section
        className="bg-[#232327] py-16 md:py-20 lg:py-24"
        style={{ backgroundImage: section_bg.src }}
      >
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#C9A961] text-3xl md:text-4xl lg:text-5xl font-serif font-light text-center mb-8 md:mb-12">
            Welcome to The Elet
          </h2>

          <div className="space-y-6 text-white/90 text-[15px] md:text-base leading-[1.85] font-light text-center">
            <p>
              Where luxury, comfort, and innovation come together to redefine
              the art of hospitality. Perfectly situated in a prime location,
              The Elet combines modern elegance with personalized comfort,
              ensuring an extraordinary stay tailored to your needs.
            </p>

            <p>
              Designed as a haven of sophistication and serenity, our hotel
              provides the ideal setting for both relaxation and productivity.
              Whether visiting for business, leisure, or a celebration,
              you&apos;ll find yourself immersed in luxury enriched by our
              world-class amenities, exceptional dining, and a dedicated team
              committed to your satisfaction.
            </p>

            <p>
              At The Elet, every detail is thoughtfully crafted to deliver a
              seamless balance of style and substance. Experience the pinnacle
              of refined living and discover a sanctuary where comfort,
              elegance, and unforgettable moments await.
            </p>
          </div>

          <div className="mt-12 md:mt-16">
            <p className="text-[#C9A961] text-4xl md:text-5xl lg:text-6xl font-script text-center italic">
              Live The Luxury.
            </p>
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Layout (1 column) */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            <div className="relative w-full h-64 overflow-hidden rounded-2xl group">
              <Image
                src={gallery_1}
                alt="Gallery Image 1"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="relative w-full h-64 overflow-hidden rounded-2xl group">
              <Image
                src={gallery_2}
                alt="Gallery Image 2"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="relative w-full h-80 overflow-hidden rounded-[2.5rem] group">
              <Image
                src={gallery_3}
                alt="Featured Gallery Image"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="relative w-full h-64 overflow-hidden rounded-2xl group">
              <Image
                src={gallery_4}
                alt="Gallery Image 4"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="relative w-full h-64 overflow-hidden rounded-2xl group">
              <Image
                src={gallery_5}
                alt="Gallery Image 5"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Tablet Layout (2 columns) */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-5">
            <div className="flex flex-col gap-5">
              <div className="relative w-full h-64 overflow-hidden rounded-2xl group">
                <Image
                  src={gallery_1}
                  alt="Gallery Image 1"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="relative w-full h-64 overflow-hidden rounded-2xl group">
                <Image
                  src={gallery_2}
                  alt="Gallery Image 2"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="relative w-full h-64 overflow-hidden rounded-2xl group">
                <Image
                  src={gallery_4}
                  alt="Gallery Image 4"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="relative w-full h-64 overflow-hidden rounded-2xl group">
                <Image
                  src={gallery_5}
                  alt="Gallery Image 5"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="col-span-2 relative w-full h-96 overflow-hidden rounded-[3rem] group">
              <Image
                src={gallery_3}
                alt="Featured Gallery Image"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Desktop Layout (3 columns with feature in middle) */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              <div className="relative w-full h-64 overflow-hidden rounded-2xl group">
                <Image
                  src={gallery_1}
                  alt="Gallery Image 1"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="relative w-full h-64 overflow-hidden rounded-2xl group">
                <Image
                  src={gallery_2}
                  alt="Gallery Image 2"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Middle Column - Feature Image */}
            <div className="relative w-full h-full overflow-hidden rounded-[3.5rem] group">
              <Image
                src={gallery_3}
                alt="Featured Gallery Image"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              <div className="relative w-full h-64 overflow-hidden rounded-2xl group">
                <Image
                  src={gallery_4}
                  alt="Gallery Image 4"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="relative w-full h-64 overflow-hidden rounded-2xl group">
                <Image
                  src={gallery_5}
                  alt="Gallery Image 5"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* View Gallery Button */}
          <div className="text-center mt-8 md:mt-10 lg:mt-12">
            <Link href={"/gallery"}>
              <button className="border-2 border-gray-800 text-gray-800 px-10 py-3 rounded-full text-[15px] font-light hover:bg-gray-800 hover:text-white transition-all duration-300 active:scale-95 cursor-pointer">
                View Gallery
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Rooms & Suits Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-4">
              Our Rooms & Suits
            </h2>
            <p className="text-gray-600 text-[15px] md:text-base font-light leading-relaxed max-w-2xl mx-auto">
              Experience Karachi in style at Hotel Elet Signature
              <br className="hidden sm:block" />
              where vibrant energy meets refined comfort in our elegant
              Signature Rooms.
            </p>
          </div>

          {/* Room Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {rooms.map((r) => (
              <Card r={r} key={r.id} />
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <ContactSection />
      {/* Newsletter Section */}
      <section className="bg-[#202227] py-16 md:py-20 container m-auto xl:rounded-tr-[370px] xl:rounded-bl-[370px]  h-[100%] xl:h-[200px] mb-9">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <NewLetter />
        </div>
      </section>
    </div>
  );
}
