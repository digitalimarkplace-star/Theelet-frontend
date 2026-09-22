"use client";

import { useState } from "react";
import { ScrollFadeIn } from "./ScrollFadeIn";
import { whatsapp } from "@/data/content";

const GOOD_TO_KNOW = [
  "check in from 2pm, check out by 12pm.",
  "bring a valid cnic or passport for each adult guest.",
  "parking is on site and included at all three properties.",
  "airport pickup can be arranged, just send your flight number.",
];

export function ManageBooking() {
  const [reference, setReference] = useState("");
  const [contact, setContact] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I'd like help finding my elet booking.\nBooking reference: ${reference}\nEmail/WhatsApp: ${contact}`;
    window.open(`${whatsapp.href}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <ScrollFadeIn>
          <div className="max-w-2xl">
            <div className="elet-eyebrow text-teal">reservations</div>
            <h1 className="mt-3 font-display text-4xl leading-tight sm:text-6xl">manage your booking</h1>
            <p className="mt-4 text-ink-soft">
              look up your stay below, or message us on whatsapp and we&apos;ll handle it in a minute.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <ScrollFadeIn className="lg:ml-[152px] lg:max-w-[540px]">
            <div className="border border-ink/10 bg-cream-warm p-8 sm:p-10">
              <h2 className="font-display text-2xl">find your reservation</h2>
              <form onSubmit={submit} className="mt-6 flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="elet-eyebrow text-teal" htmlFor="booking-ref">
                    booking reference
                  </label>
                  <input
                    id="booking-ref"
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                    placeholder="e.g. elt-4821"
                    required
                    className="border border-ink/15 bg-cream px-4 py-3 text-base text-ink placeholder:text-ink-soft/50 focus:border-teal focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="elet-eyebrow text-teal" htmlFor="booking-contact">
                    email or whatsapp number
                  </label>
                  <input
                    id="booking-contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="the one you booked with"
                    required
                    className="border border-ink/15 bg-cream px-4 py-3 text-base text-ink placeholder:text-ink-soft/50 focus:border-teal focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="self-start bg-gold px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-ink hover:bg-gold-soft"
                >
                  find booking
                </button>
              </form>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={120}>
            <div>
              <h2 className="font-display text-2xl">change or cancel</h2>
              <p className="mt-4 text-ink-soft">
                message us at least 24 hours before check in to move your dates at no cost. inside 24 hours we
                may charge the first night.
              </p>
              <a
                href={whatsapp.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex bg-gold px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-ink hover:bg-gold-soft"
              >
                whatsapp us
              </a>

              <div className="mt-10 border-t border-ink/10 pt-8">
                <div className="elet-eyebrow text-teal">good to know</div>
                <ul className="mt-4 space-y-3 text-ink-soft">
                  {GOOD_TO_KNOW.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
