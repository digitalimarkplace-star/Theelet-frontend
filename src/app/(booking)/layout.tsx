import Link from "next/link";
import "./../globals.css";

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white border-b border-gray-200 py-6 md:py-8">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex justify-center">
              {/* Logo */}
              <Link href={"/"}>
                <div className="flex items-center gap-3 cursor-pointer">
                  <div className="w-12 h-12 md:w-14 md:h-14">
                    <svg
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g transform="translate(6, 6)">
                        <path d="M22 2L26 12L18 12L22 2Z" fill="#C9A961" />
                        <path d="M18 12L14 22L22 22L18 12Z" fill="#C9A961" />
                        <path d="M26 12L30 22L22 22L26 12Z" fill="#C9A961" />
                        <path d="M14 22L10 32L18 32L14 22Z" fill="#C9A961" />
                        <path d="M30 22L34 32L26 32L30 22Z" fill="#C9A961" />
                        <path d="M22 22L26 32L18 32L22 22Z" fill="#C9A961" />
                        <path d="M18 32L14 42L22 42L18 32Z" fill="#C9A961" />
                        <path d="M26 32L30 42L22 42L26 32Z" fill="#C9A961" />
                        <path d="M22 32L26 42L18 42L22 32Z" fill="#C9A961" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex flex-col -space-y-1">
                    <span className="text-gray-900 text-2xl md:text-3xl font-light tracking-[0.2em] leading-none">
                      THE ELET
                    </span>
                    <span className="text-[11px] text-gray-500 tracking-[0.15em] leading-none">
                      SIGNATURE HOTEL
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
