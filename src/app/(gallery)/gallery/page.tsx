// app/gallery/page.tsx
// ✅ Server Component by default (no "use client" — SSR-optimized)

import type { Metadata } from "next";
// import GalleryGrid from "@/components/gallery/GalleryGrid";
import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
} from "@/public/assets/gallery/indes";
import type { StaticImageData } from "next/image";
import GalleryGrid from "@/src/app/component/GalleryGrid";

// ✅ SSR: Static metadata generated at build time
export const metadata: Metadata = {
  title: "Gallery | Iconic Splendor",
  description:
    "Step into the world of iconic splendor. Explore our curated luxury hotel gallery.",
  openGraph: {
    title: "Gallery | Iconic Splendor",
    description: "Explore our curated luxury hotel gallery.",
    // Add og:image here if you have a hero image
  },
};

// ✅ SSR: Data is prepared on the server — no client-side fetch needed
export interface GalleryImage {
  src: StaticImageData;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { src: gallery1, alt: "Luxury hotel lobby with modern furniture" },
  { src: gallery2, alt: "Romantic beachside dining at sunset" },
  { src: gallery3, alt: "Gourmet seafood dish" },
  { src: gallery4, alt: "Fresh salad with seafood" },
  { src: gallery5, alt: "Artistic chocolate dessert" },
  { src: gallery6, alt: "Luxury on a budget sign in room" },
  { src: gallery7, alt: "Modern luxury bedroom" },
  { src: gallery7, alt: "Modern reception desk" },
  { src: gallery8, alt: "Elegant dining area" },
  { src: gallery9, alt: "Grand hotel lobby" },
  { src: gallery10, alt: "Luxury bedroom with wooden interior" },
  { src: gallery11, alt: "Spacious hotel lounge area" },
];

// ✅ SSR: Page renders fully on the server; only GalleryGrid is a Client Component
export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16 lg:py-20">
        {/* ✅ Static heading — rendered by the server, zero JS cost */}
        <h1 className="text-3xl mt-[25%] md:mt-6 font-light sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif text-gray-900 text-center mb-12 md:mb-16 lg:mb-20 leading-tight tracking-tight">
          Step into the world of iconic splendor.
        </h1>

        {/*
          ✅ GalleryGrid is a "use client" Client Component.
          It receives pre-built image data from the server — no runtime fetching.
          It handles only the interactive lightbox state.
        */}
        <GalleryGrid images={galleryImages} />
      </main>
    </div>
  );
}
