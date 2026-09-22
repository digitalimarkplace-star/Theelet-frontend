"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import type { GalleryImage } from "./../(gallery)/gallery/page";

interface GalleryGridProps {
  images: GalleryImage[];
}

// Destructure image groups matching the original layout rows
export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openLightbox = useCallback((image: GalleryImage) => {
    setSelectedImage(image);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  // ✅ Keyboard accessibility: close on Escape
  useEffect(() => {
    if (!selectedImage) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedImage, closeLightbox]);

  // ✅ Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  const [
    img1,
    img2, // Row 1
    img3,
    img4,
    img5, // Row 2
    img6,
    img7, // Row 3
    img8,
    img9,
    img10, // Row 4
    img11,
    img12, // Row 5
  ] = images;

  return (
    <>
      <div className="space-y-4 md:space-y-5 lg:space-y-6">
        {/* Row 1: 2 Large Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
          <GalleryItem
            image={img1}
            className="h-[280px] md:h-[340px] lg:h-[400px] md:rounded-tl-[300px]"
            onOpen={openLightbox}
          />
          <GalleryItem
            image={img2}
            className="h-[280px] md:h-[340px] lg:h-[400px] md:rounded-tr-[300px]"
            onOpen={openLightbox}
          />
        </div>

        {/* Row 2: 3 Medium Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          <GalleryItem
            image={img3}
            className="h-[240px] md:h-[280px] lg:h-[320px]"
            onOpen={openLightbox}
          />
          <GalleryItem
            image={img4}
            className="h-[240px] md:h-[280px] lg:h-[320px]"
            onOpen={openLightbox}
          />
          <GalleryItem
            image={img5}
            className="h-[240px] md:h-[280px] lg:h-[320px] sm:col-span-2 lg:col-span-1"
            onOpen={openLightbox}
          />
        </div>

        {/* Row 3: 2 Large Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
          <GalleryItem
            image={img6}
            className="h-[280px]"
            onOpen={openLightbox}
          />
          <GalleryItem
            image={img7}
            className="h-[280px]"
            onOpen={openLightbox}
          />
        </div>

        {/* Row 4: 3 Small-Medium Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          <GalleryItem
            image={img8}
            className="h-[240px] md:h-[280px] lg:h-[300px]"
            onOpen={openLightbox}
          />
          <GalleryItem
            image={img9}
            className="h-[240px] md:h-[280px] lg:h-[300px]"
            onOpen={openLightbox}
          />
          <GalleryItem
            image={img10}
            className="h-[240px] md:h-[280px] lg:h-[300px] sm:col-span-2 lg:col-span-1"
            onOpen={openLightbox}
          />
        </div>

        {/* Row 5: 2 Large Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
          <GalleryItem
            image={img11}
            className="h-[280px] md:h-[340px] lg:h-[400px] md:rounded-bl-[300px]"
            onOpen={openLightbox}
          />
          <GalleryItem
            image={img12}
            className="h-[280px] md:h-[340px] lg:h-[400px] md:rounded-br-[300px]"
            onOpen={openLightbox}
          />
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Lightbox: ${selectedImage.alt}`}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white text-2xl transition-colors z-10"
            aria-label="Close lightbox"
          >
            ×
          </button>

          <div
            className="relative w-full max-w-6xl h-[70vh] md:h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              // ✅ Priority true since it's above the fold when open
              priority
            />
          </div>
        </div>
      )}

      {/* Scoped animation style — no global CSS file needed */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500;600&display=swap");

        .font-serif {
          font-family: "Cormorant Garamond", serif;
        }
        .font-sans {
          font-family: "Inter", sans-serif;
        }

        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        body {
          font-family: "Inter", sans-serif;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
}

// ─────────────────────────────────────────────
// Reusable gallery tile — keeps JSX DRY
// ─────────────────────────────────────────────
interface GalleryItemProps {
  image: GalleryImage;
  className?: string;
  onOpen: (image: GalleryImage) => void;
  /** Pass true for images in the first visible viewport row */
  priority?: boolean;
}

function GalleryItem({
  image,
  className = "",
  onOpen,
  priority = false,
}: GalleryItemProps) {
  return (
    <div
      className={`relative overflow-hidden group cursor-pointer ${className}`}
      onClick={() => onOpen(image)}
      role="button"
      tabIndex={0}
      aria-label={`Open image: ${image.alt}`}
      onKeyDown={(e) => e.key === "Enter" && onOpen(image)}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        // ✅ SSR/performance: only eager-load above-the-fold images
        priority={priority}
        // ✅ Use sizes for correct srcset generation — avoids loading oversized images
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
    </div>
  );
}
