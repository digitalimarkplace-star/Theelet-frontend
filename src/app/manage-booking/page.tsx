import type { Metadata } from "next";
import { Nav } from "@/components/elet/Nav";
import { Footer } from "@/components/elet/Footer";
import { ManageBooking } from "@/components/elet/ManageBooking";

export const metadata: Metadata = {
  title: "manage your booking — the elet karachi",
  description:
    "look up your elet karachi reservation, or message us on whatsapp to change or cancel your stay.",
};

export default function ManageBookingPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Nav interior />
      <main>
        <ManageBooking />
      </main>
      <Footer />
    </div>
  );
}
