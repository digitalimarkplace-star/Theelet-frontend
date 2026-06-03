"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import bookNow from "@/public/assets/header/Book Now.png";
import logo from "@/public/assets/header/Logo.png";
import Navigation from "./navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="absolute top-0 w-full z-10">
      <div className="container mx-auto px-4 lg:px-8">
        {/* ── Desktop: md and above ── */}
        <div className="hidden md:flex items-center justify-between py-6 lg:py-8">
          <Link href="/">
            <Image
              src={logo}
              width={100}
              height={100}
              alt="logo"
              className="cursor-pointer"
            />
          </Link>

          <Navigation />

          <Link href="/booking">
            <Image
              src={bookNow}
              alt="Book Now"
              width={130}
              height={44}
              className="cursor-pointer object-contain"
            />
          </Link>
        </div>

        {/* ── Mobile: below md ── */}
        <div
          className={`md:hidden transition-all duration-300 rounded-2xl mt-3 ${
            menuOpen
              ? "bg-black/60 backdrop-blur-md border border-white/10 shadow-lg shadow-black/30"
              : ""
          }`}
        >
          {/* Top bar */}
          <div
            className={`flex items-center justify-between ${menuOpen ? "px-4 pt-4 pb-3" : "py-5"}`}
          >
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image
                src={logo}
                width={80}
                height={80}
                alt="logo"
                className="cursor-pointer object-contain"
              />
            </Link>

            <div className="flex items-center gap-3">
              <Link href="/booking">
                <Image
                  src={bookNow}
                  alt="Book Now"
                  width={100}
                  height={36}
                  className="cursor-pointer object-contain"
                />
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="flex flex-col justify-center items-center w-9 h-9 gap-[5px] cursor-pointer flex-shrink-0"
              >
                <span
                  className={`block h-[2px] w-5 bg-white rounded-full transition-all duration-300 origin-center ${
                    menuOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 bg-white rounded-full transition-all duration-300 ${
                    menuOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 bg-white rounded-full transition-all duration-300 origin-center ${
                    menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Slide-down nav drawer */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              menuOpen ? "max-h-64 opacity-100 px-4 pb-4" : "max-h-0 opacity-0"
            }`}
          >
            <Navigation mobile onClose={() => setMenuOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
