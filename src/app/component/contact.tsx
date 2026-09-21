import React from "react";

export default function ContactSection() {
  const locations = [
    {
      name: "The Elet Signature Boutique Hotel",
      phone: "+92-21-353-5544",
      email: "reservations@theelet.com",
      address: "Plot No C-16, Block-4, Clifton, Karachi, Pakistan",
    },
    {
      name: "The Elet Business Hotel",
      phone: "+92-21-34388895",
      email: "reservations@theelet.com",
      address:
        "Plot No 10-13, Block-B, Sindhi Muslim Society, Near Masjid-e-Roomi, Behind IBEX Building, Shahrah-e-Faisal, Karachi, Pakistan",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            CONTACT INFORMATION
          </h2>
          <div className="w-20 h-1 bg-[#C9A961]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Contact Information */}
          <div className="space-y-6">
            {/* Central Reservations */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Central Reservations: +92-21-35305544
              </h3>
            </div>

            {/* Location Cards */}
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {location.name}
                </h3>

                <div className="space-y-3">
                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                      <svg
                        className="w-full h-full text-[#C9A961]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                    <a
                      href={`tel:${location.phone}`}
                      className="text-gray-700 hover:text-[#C9A961] transition-colors text-sm md:text-base"
                    >
                      {location.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                      <svg
                        className="w-full h-full text-[#C9A961]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <a
                      href={`mailto:${location.email}`}
                      className="text-gray-700 hover:text-[#C9A961] transition-colors text-sm md:text-base break-all"
                    >
                      {location.email}
                    </a>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                      <svg
                        className="w-full h-full text-[#C9A961]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {location.address}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Map */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our Location
              </h3>
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.7143005313474!2d67.0311957!3d24.805234700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33da74b96d67d%3A0xb319f97a84c5c684!2sSignature%20Boutique%20Hotel%20Karachi!5e0!3m2!1sen!2s!4v1768035170208!5m2!1sen!2s"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
