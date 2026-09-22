import React from "react";
import Image from "next/image";
import Executive_Suite from "@/public/assets/rooms/Executive Suite.jpeg";
import classic_room from "@/public/assets/rooms/classic_room.jpeg";
import Executive from "@/public/assets/rooms/Executive.jpeg";
import twin_bed_room from "@/public/assets/rooms/twin-bad-room.jpeg";

import { Card } from "@/src/app/component/card";
export default function RoomsPage() {
  const rooms = [
    {
      id: 1,
      image: classic_room,
      title: "Classic Room",
      price: "Rs. 13,000 + Tax",
      rating: "4.6",
      description:
        "Comfortable classic room designed for a relaxing stay with modern amenities.",
      beds: "1 Bed",
      baths: "1 Bath",
    },
    {
      id: 2,
      image: twin_bed_room,
      title: "Twin Bed Room",
      price: "Rs. 14,000 + Tax",
      rating: "4.7",
      description:
        "Perfect for friends or colleagues, featuring twin beds and a cozy interior.",
      beds: "2 Beds",
      baths: "1 Bath",
    },
    {
      id: 3,
      image: Executive,
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
      image: Executive_Suite,
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
      {/* Hero Section with Header */}
      <section className="relative h-[350px] md:h-[420px] lg:h-[480px] w-full">
        <Image
          src={twin_bed_room}
          alt="Luxury hotel room interior"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col"></div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16 lg:py-20">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-normal text-gray-900 text-center mb-6 md:mb-12 lg:mb-12 leading-tight tracking-tight">
          Luxury Rooms & Suits
        </h1>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8">
          {rooms.map((r) => (
            <Card r={r} key={r.id} />
          ))}
        </div>
      </main>
    </div>
  );
}
