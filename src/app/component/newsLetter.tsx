"use client";
import React, { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const NewLetter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async () => {
    if (!email) return;

    setStatus("loading");

    try {
      setEmail("");
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-serif font-light text-white mb-2">
          Subscribe Newsletters
        </h3>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={status === "loading"}
          className="px-6 py-3.5 rounded-full bg-white text-gray-900 text-[15px] font-light placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C9A961] min-w-[280px] disabled:opacity-60"
        />
        <button
          onClick={handleSubmit}
          disabled={status === "loading" || !email}
          className="px-8 py-3.5 rounded-full bg-[#C9A961] text-white text-[15px] font-light hover:bg-[#b8944d] transition-colors whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading"
            ? "Subscribing..."
            : status === "success"
              ? "Subscribed! ✓"
              : status === "error"
                ? "Try again"
                : "Subscribe now"}
        </button>
      </div>
    </div>
  );
};

export default NewLetter;
