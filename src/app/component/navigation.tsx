"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { href: "/", label: "Overview" },
  { href: "/gallery", label: "Gallery" },
  { href: "/room", label: "Rooms & Suites" },
];

interface NavigationProps {
  mobile?: boolean;
  darkMode?: boolean; // true = white text (dark bg), false = dark text (light bg)
  onClose?: () => void;
}

const Navigation = ({
  mobile = false,
  darkMode = true,
  onClose,
}: NavigationProps) => {
  const pathname = usePathname();
  const isActive = (route: string) => route === pathname;

  if (mobile) {
    const baseText = darkMode ? "text-white/90" : "text-black/80";
    const hoverBg = darkMode ? "hover:bg-white/10" : "hover:bg-black/5";
    const activeBg = darkMode ? "bg-white/10" : "bg-black/5";

    return (
      <nav className="flex flex-col w-full gap-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={`px-3 py-3 rounded-xl text-base font-light tracking-wide transition-all duration-200 ${
              isActive(link.href)
                ? `text-[#C9A961] ${activeBg}`
                : `${baseText} hover:text-[#C9A961] ${hoverBg}`
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex items-center gap-6 lg:gap-10 bg-black/80 backdrop-blur-sm px-6 lg:px-8 py-3 rounded-full">
      {links.map((link, i) => (
        <React.Fragment key={link.href}>
          {i > 0 && <span className="text-white/40">|</span>}
          <Link
            href={link.href}
            className={`text-sm lg:text-base whitespace-nowrap transition-colors ${
              isActive(link.href)
                ? "text-[#C9A961] underline underline-offset-4"
                : "text-white hover:text-[#C9A961]"
            }`}
          >
            {link.label}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Navigation;
