"use client";

import { useState } from "react";
import { format } from "date-fns";
import { toast } from "sonner";
import { CalendarIcon, ChevronDown, Minus, Plus, Search } from "lucide-react";
import type { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { properties } from "@/data/content";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function useBookingState() {
  const [location, setLocation] = useState<string>("all locations");
  const [range, setRange] = useState<DateRange | undefined>();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [promo, setPromo] = useState("");
  return {
    location,
    setLocation,
    range,
    setRange,
    rooms,
    setRooms,
    adults,
    setAdults,
    children,
    setChildren,
    promo,
    setPromo,
  };
}

type BookingState = ReturnType<typeof useBookingState>;

function buildWhatsAppUrl(state: BookingState) {
  const lines = [
    "hi the elet, i'd like to check availability.",
    "",
    `property: ${state.location}`,
    `check in: ${state.range?.from ? format(state.range.from, "EEE d MMM yyyy") : "flexible"}`,
    `check out: ${state.range?.to ? format(state.range.to, "EEE d MMM yyyy") : "flexible"}`,
    `rooms: ${state.rooms}`,
    `adults: ${state.adults}`,
    `children: ${state.children}`,
  ];
  if (state.promo.trim()) lines.push(`promo code: ${state.promo.trim()}`);
  const base = "https://wa.me/923371129644";
  return `${base}?text=${encodeURIComponent(lines.join("\n"))}`;
}

// Payload sent to the /api/booking-enquiry SMTP route. Includes the WhatsApp
// deep link (via buildWhatsAppUrl) so staff can jump straight into a chat.
function buildEnquiryPayload(state: BookingState) {
  return {
    property: state.location,
    checkIn: state.range?.from ? format(state.range.from, "EEE d MMM yyyy") : "flexible",
    checkOut: state.range?.to ? format(state.range.to, "EEE d MMM yyyy") : "flexible",
    rooms: state.rooms,
    adults: state.adults,
    children: state.children,
    promo: state.promo,
    whatsappUrl: buildWhatsAppUrl(state),
  };
}

function Stepper({
  label,
  value,
  setValue,
  min = 0,
}: {
  label: string;
  value: number;
  setValue: (n: number) => void;
  min?: number;
}) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-ink">{label}</span>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setValue(Math.max(min, value - 1))}
          className="grid h-8 w-8 place-items-center rounded-full border border-border text-ink hover:bg-cream-warm"
          aria-label={`decrease ${label}`}
        >
          <Minus className="h-3.5 w-3.5" />
        </button>
        <span className="w-4 text-center font-medium">{value}</span>
        <button
          onClick={() => setValue(value + 1)}
          className="grid h-8 w-8 place-items-center rounded-full border border-border text-ink hover:bg-cream-warm"
          aria-label={`increase ${label}`}
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

function Field({
  eyebrow,
  children,
  className,
}: {
  eyebrow: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1 text-left", className)}>
      <span className="elet-eyebrow text-ink-soft">{eyebrow}</span>
      {children}
    </div>
  );
}

function BookingFields({
  state,
  compact = false,
}: {
  state: BookingState;
  compact?: boolean;
}) {
  return (
    <>
      <Field eyebrow="location">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center justify-between gap-2 text-left text-base text-ink outline-none hover:text-teal">
            <span className="truncate">{state.location}</span>
            <ChevronDown className="h-4 w-4 shrink-0 text-ink-soft" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="min-w-[220px]">
            <DropdownMenuItem
              onClick={() => state.setLocation("all locations")}
            >
              all locations
            </DropdownMenuItem>
            {properties.map((p) => (
              <DropdownMenuItem
                key={p.id}
                onClick={() => state.setLocation(`${p.name}, ${p.location}`)}
              >
                <div className="flex flex-col">
                  <span>{p.name}</span>
                  <span className="text-xs text-ink-soft">{p.location}</span>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </Field>

      <Field eyebrow="check in / out">
        <Popover>
          <PopoverTrigger className="flex items-center gap-2 text-left text-base text-ink outline-none hover:text-teal">
            <CalendarIcon className="h-4 w-4 text-ink-soft" />
            <span className="truncate">
              {state.range?.from
                ? `${format(state.range.from, "d MMM")}${state.range.to ? ` — ${format(state.range.to, "d MMM")}` : ""}`
                : "select dates"}
            </span>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="range"
              selected={state.range}
              onSelect={state.setRange}
              numberOfMonths={compact ? 1 : 2}
              className="p-3"
            />
          </PopoverContent>
        </Popover>
      </Field>

      <Field eyebrow="guests">
        <Popover>
          <PopoverTrigger className="flex items-center justify-between gap-2 text-left text-base text-ink outline-none hover:text-teal">
            <span className="truncate">
              {state.rooms} room{state.rooms === 1 ? "" : "s"} ·{" "}
              {state.adults + state.children} guest
              {state.adults + state.children === 1 ? "" : "s"}
            </span>
            <ChevronDown className="h-4 w-4 shrink-0 text-ink-soft" />
          </PopoverTrigger>
          <PopoverContent align="start" className="w-72">
            <Stepper
              label="rooms"
              value={state.rooms}
              setValue={state.setRooms}
              min={1}
            />
            <Stepper
              label="adults"
              value={state.adults}
              setValue={state.setAdults}
              min={1}
            />
            <Stepper
              label="children"
              value={state.children}
              setValue={state.setChildren}
            />
          </PopoverContent>
        </Popover>
      </Field>

      <Field eyebrow="promo code">
        <input
          value={state.promo}
          onChange={(e) => state.setPromo(e.target.value)}
          placeholder="optional"
          className="w-full bg-transparent text-base text-ink placeholder:text-ink-soft/50 focus:outline-none"
        />
      </Field>
    </>
  );
}

export function BookingBar() {
  const state = useBookingState();
  const [openDesktopPanel, setOpenDesktopPanel] = useState<
    "location" | "dates" | "guests" | null
  >(null);
  const [submitting, setSubmitting] = useState(false);

  const sendEnquiry = async () => {
    if (submitting) return;
    setSubmitting(true);
    const id = toast.loading("sending your enquiry…");
    try {
      const res = await fetch("/api/booking-enquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(buildEnquiryPayload(state)),
      });
      if (!res.ok) throw new Error("request failed");
      toast.success("enquiry sent", {
        id,
        description: "we'll be in touch shortly with availability.",
      });
    } catch {
      toast.error("couldn't send your enquiry", {
        id,
        description: "please try again, or reach us on whatsapp.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // "find a room": open WhatsApp for further queries AND email the enquiry.
  // window.open is called synchronously in the click handler so the browser
  // treats it as a user gesture (otherwise the popup gets blocked).
  const submitEnquiry = () => {
    window.open(buildWhatsAppUrl(state), "_blank", "noopener,noreferrer");
    void sendEnquiry();
  };

  return (
    <section
      id="booking"
      className="relative z-30 -mt-28 px-4 sm:-mt-32 sm:px-8"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Desktop */}
        <div className="hidden bg-cream shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] md:block">
          <div className="grid grid-cols-[1.1fr_1.3fr_1.2fr_1fr_auto] items-stretch">
            <div className="border-r border-border p-5">
              <BookingFieldsDesktop
                state={state}
                field="location"
                openPanel={openDesktopPanel}
                setOpenPanel={setOpenDesktopPanel}
              />
            </div>
            <div className="border-r border-border p-5">
              <BookingFieldsDesktop
                state={state}
                field="dates"
                openPanel={openDesktopPanel}
                setOpenPanel={setOpenDesktopPanel}
              />
            </div>
            <div className="border-r border-border p-5">
              <BookingFieldsDesktop
                state={state}
                field="guests"
                openPanel={openDesktopPanel}
                setOpenPanel={setOpenDesktopPanel}
              />
            </div>
            <div className="border-r border-border p-5">
              <BookingFieldsDesktop
                state={state}
                field="promo"
                openPanel={openDesktopPanel}
                setOpenPanel={setOpenDesktopPanel}
              />
            </div>
            <button
              type="button"
              disabled={submitting}
              onClick={() => {
                setOpenDesktopPanel(null);
                submitEnquiry();
              }}
              className="inline-flex items-center justify-center gap-2 bg-gold px-8 text-xs font-medium uppercase tracking-[0.24em] text-ink transition-colors hover:bg-gold-soft disabled:opacity-60"
            >
              <Search className="h-4 w-4" />
              find a room
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Dialog>
            <DialogTrigger asChild>
              <button className="flex w-full items-center justify-center gap-2 bg-gold px-6 py-4 text-xs font-medium uppercase tracking-[0.24em] text-ink shadow-[0_20px_40px_-20px_rgba(0,0,0,0.35)] hover:bg-gold-soft">
                <Search className="h-4 w-4" />
                check availability
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogTitle className="font-display text-2xl">
                find a room
              </DialogTitle>
              <div className="mt-4 flex flex-col gap-4">
                <BookingFields state={state} compact />
                <button
                  type="button"
                  disabled={submitting}
                  onClick={submitEnquiry}
                  className="mt-2 bg-gold px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.24em] text-ink hover:bg-gold-soft disabled:opacity-60"
                >
                  find a room
                </button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}

function BookingFieldsDesktop({
  state,
  field,
  openPanel,
  setOpenPanel,
}: {
  state: BookingState;
  field: "location" | "dates" | "guests" | "promo";
  openPanel: "location" | "dates" | "guests" | null;
  setOpenPanel: (panel: "location" | "dates" | "guests" | null) => void;
}) {
  const locationChoices = ["clifton", "shahrah-e-faisal", "dha"];
  const wrap = (
    eyebrow: string,
    body: React.ReactNode,
    panel?: React.ReactNode,
  ) => (
    <div className="relative">
      <Field eyebrow={eyebrow}>{body}</Field>
      {panel}
    </div>
  );
  const triggerClass =
    "flex w-full items-center justify-between gap-2 text-left text-base text-ink hover:text-teal";

  if (field === "location") {
    return wrap(
      "location",
      <button
        type="button"
        className={triggerClass}
        onClick={() =>
          setOpenPanel(openPanel === "location" ? null : "location")
        }
      >
        <span className="truncate">{state.location}</span>
        <ChevronDown className="h-4 w-4 shrink-0 text-ink-soft" />
      </button>,
      openPanel === "location" && (
        <div className="absolute left-0 top-[calc(100%+1.25rem)] z-50 w-64 border border-border bg-cream p-2 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.45)]">
          {locationChoices.map((location) => (
            <button
              key={location}
              type="button"
              onClick={() => {
                state.setLocation(location);
                setOpenPanel(null);
              }}
              className="block w-full px-3 py-2 text-left text-sm lowercase text-ink hover:bg-cream-warm"
            >
              {location}
            </button>
          ))}
        </div>
      ),
    );
  }
  if (field === "dates") {
    return wrap(
      "check in / out",
      <button
        type="button"
        className="flex w-full items-center gap-2 text-left text-base text-ink hover:text-teal"
        onClick={() => setOpenPanel(openPanel === "dates" ? null : "dates")}
      >
        <CalendarIcon className="h-4 w-4 text-ink-soft" />
        <span className="truncate">
          {state.range?.from
            ? `${format(state.range.from, "d MMM")}${state.range.to ? ` to ${format(state.range.to, "d MMM")}` : ""}`
            : "select dates"}
        </span>
      </button>,
      openPanel === "dates" && (
        <div className="absolute left-0 top-[calc(100%+1.25rem)] z-50 w-auto border border-border bg-cream p-0 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.45)]">
          <Calendar
            mode="range"
            selected={state.range}
            onSelect={(range) => {
              state.setRange(range);
              if (range?.from && range?.to) setOpenPanel(null);
            }}
            numberOfMonths={2}
            className="p-3"
          />
        </div>
      ),
    );
  }
  if (field === "guests") {
    return wrap(
      "guests",
      <button
        type="button"
        className={triggerClass}
        onClick={() => setOpenPanel(openPanel === "guests" ? null : "guests")}
      >
        <span className="truncate">
          {state.rooms} room{state.rooms === 1 ? "" : "s"} ·{" "}
          {state.adults + state.children} guest
          {state.adults + state.children === 1 ? "" : "s"}
        </span>
        <ChevronDown className="h-4 w-4 shrink-0 text-ink-soft" />
      </button>,
      openPanel === "guests" && (
        <div className="absolute left-0 top-[calc(100%+1.25rem)] z-50 w-72 border border-border bg-cream p-4 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.45)]">
          <Stepper
            label="rooms"
            value={state.rooms}
            setValue={state.setRooms}
            min={1}
          />
          <Stepper
            label="adults"
            value={state.adults}
            setValue={state.setAdults}
            min={1}
          />
          <Stepper
            label="children"
            value={state.children}
            setValue={state.setChildren}
          />
        </div>
      ),
    );
  }
  return wrap(
    "promo code",
    <input
      value={state.promo}
      onChange={(e) => state.setPromo(e.target.value)}
      placeholder="optional"
      className="w-full bg-transparent text-base text-ink placeholder:text-ink-soft/50 focus:outline-none"
    />,
  );
}
