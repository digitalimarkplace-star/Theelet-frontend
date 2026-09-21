import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#202227] text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © 2025 The Elet Signature. All rights reserved.
          </p>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 5L25 15H15L20 5Z" fill="#C9A961" />
                <path d="M15 15L10 25H20L15 15Z" fill="#C9A961" />
                <path d="M25 15L30 25H20L25 15Z" fill="#C9A961" />
                <path d="M20 25L25 35H15L20 25Z" fill="#C9A961" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-light tracking-widest">THE ELET</div>
              <div className="text-xs text-gray-400 tracking-wider">
                SIGNATURE HOTEL
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            <a
              href="#terms"
              className="text-sm text-gray-400 hover:text-[#C9A961] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#privacy"
              className="text-sm text-gray-400 hover:text-[#C9A961] transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
