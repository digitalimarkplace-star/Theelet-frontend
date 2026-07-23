import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// nodemailer needs the Node.js runtime (raw TCP sockets), not the Edge runtime.
export const runtime = "nodejs";

type EnquiryBody = {
  property?: string;
  checkIn?: string;
  checkOut?: string;
  rooms?: number;
  adults?: number;
  children?: number;
  promo?: string;
  whatsappUrl?: string;
};

function requiredEnv() {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
    BOOKING_TO,
  } = process.env;
  const missing = Object.entries({
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
    BOOKING_TO,
  })
    .filter(([, v]) => !v)
    .map(([k]) => k);
  return {
    missing,
    config: {
      host: SMTP_HOST as string,
      port: Number(SMTP_PORT),
      // secure=true for port 465, false for 587/25 (STARTTLS)
      secure: String(process.env.SMTP_SECURE ?? "").toLowerCase() === "true" || Number(SMTP_PORT) === 465,
      user: SMTP_USER as string,
      pass: SMTP_PASS as string,
      from: SMTP_FROM as string,
      to: BOOKING_TO as string,
    },
  };
}

export async function POST(request: Request) {
  const { missing, config } = requiredEnv();
  if (missing.length) {
    console.error("booking-enquiry: missing SMTP env vars:", missing.join(", "));
    return NextResponse.json(
      { ok: false, error: "email is not configured yet" },
      { status: 503 },
    );
  }

  let body: EnquiryBody;
  try {
    body = (await request.json()) as EnquiryBody;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid request body" }, { status: 400 });
  }

  const rooms = body.rooms ?? 1;
  const adults = body.adults ?? 0;
  const children = body.children ?? 0;

  const lines = [
    "new booking enquiry from the elet website",
    "",
    `property: ${body.property || "all locations"}`,
    `check in: ${body.checkIn || "flexible"}`,
    `check out: ${body.checkOut || "flexible"}`,
    `rooms: ${rooms}`,
    `adults: ${adults}`,
    `children: ${children}`,
  ];
  if (body.promo?.trim()) lines.push(`promo code: ${body.promo.trim()}`);
  if (body.whatsappUrl) lines.push("", `open in whatsapp: ${body.whatsappUrl}`);
  const text = lines.join("\n");

  try {
    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: { user: config.user, pass: config.pass },
    });

    // Optional extra recipients. Comma-separate for multiple, e.g.
    // BOOKING_CC="manager@theelet.com, owner@theelet.com"
    const splitList = (v?: string) =>
      (v ?? "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    const cc = splitList(process.env.BOOKING_CC);
    const bcc = splitList(process.env.BOOKING_BCC);

    await transporter.sendMail({
      from: config.from,
      to: config.to,
      ...(cc.length ? { cc } : {}),
      ...(bcc.length ? { bcc } : {}),
      replyTo: config.from,
      subject: `booking enquiry — ${body.property || "all locations"}`,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("booking-enquiry: failed to send", err);
    return NextResponse.json({ ok: false, error: "failed to send email" }, { status: 502 });
  }
}
