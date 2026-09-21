import type React from "react";
import Image, { StaticImageData } from "next/image";
import image from "@/public/assets/detail-page/download.jpeg";
import WhatsAppChat from "./whatappChat";
import Link from "next/link";

interface cardProps {
  id: number;
  image: StaticImageData;
  title: string;
  price: string;
  rating: string;
  description: string;
  beds: string;
  baths: string;
}

export function Card({ r }: { r: cardProps }) {
  return (
    <article
      className="relative bg-card text-card-foreground rounded-tr-[96px] shadow-[0_20px_60px_rgba(0,0,0,0.25)] ring-1 ring-border overflow-hidden"
      aria-label="Luxury room card"
    >
      <Link href="/detail">
        {/* Top image */}
        <div className="relative">
          <Image
            src={r.image}
            alt="Luxury room interior with king bed, lamps and wooden nightstand"
            width={1024}
            height={640}
            className="h-auto w-full object-cover"
            priority
          />
          {/* Overlapping tag */}
          <span
            className="
            absolute left-4 -bottom-6
            inline-flex items-center rounded-tr-3xl rounded-bl-md
            bg-primary px-4 py-2 text-primary-foreground
            text-base md:text-lg font-medium shadow bg-black
          "
          >
            {r.title}
          </span>
        </div>

        {/* Content */}
        <div className="px-5 text-black md:px-7 pt-10 pb-6 md:pb-7">
          {/* Price and Rating */}
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-1xl md:text-3xl font-semibold leading-none tracking-tight">
              {r.price}
            </h2>

            <div className="flex items-center gap-2">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 md:h-6 md:w-6"
                style={{ color: "var(--brand-gold)" }}
                fill="currentColor"
              >
                <path d="M12 2.5l2.89 5.86 6.48.94-4.69 4.58 1.11 6.46L12 17.77 6.21 20.34l1.11-6.46-4.69-4.58 6.48-.94L12 2.5z" />
              </svg>
              <span className="text-lg md:text-xl font-medium">4.9</span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed text-pretty">
            {r.description}
          </p>
          <WhatsAppChat />

          {/* Divider */}
          <div className="my-6 h-px bg-border" />

          {/* Features */}
          <div className="flex items-center justify-center gap-6 md:gap-10 border-t-2">
            <Feature
              icon={
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 13h18M4 13V9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4" />
                  <path d="M7 13v-1a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1" />
                </svg>
              }
              label={`${r.beds}`}
            />
            <span
              className="h-6 w-px bg-border border-r-2"
              aria-hidden="true"
            />
            <Feature
              icon={
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 14h18M5 14v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2" />
                  <path d="M7 18h10" />
                </svg>
              }
              label={`${r.baths}`}
            />
          </div>
        </div>
      </Link>
    </article>
  );
}

function Feature({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 text-black md:text-lg">
      <span className="text-muted-foreground">{icon}</span>
      <span className="font-medium">{label}</span>
    </div>
  );
}
