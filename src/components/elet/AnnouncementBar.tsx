import { ArrowRight } from "lucide-react";
import { announcement } from "@/data/content";

export function AnnouncementBar() {
  return (
    <div className="w-full bg-ink text-cream">
      <div className="mx-auto flex max-w-[1400px] items-center justify-center gap-3 px-4 py-2 text-center text-[11px] tracking-[0.14em] sm:text-xs">
        <span className="elet-editorial opacity-85">{announcement.text}</span>
        <a
          href={announcement.href}
          className="group inline-flex items-center gap-1.5 whitespace-nowrap font-medium uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-soft"
        >
          {announcement.cta}
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
