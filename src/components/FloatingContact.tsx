import type { SiteSettings } from "@/data";

/** Fixed WhatsApp + Call buttons, bottom-right. Renders only what's configured. */
export default function FloatingContact({ settings }: { settings: SiteSettings }) {
  const wa = settings.whatsapp?.trim();
  const phone = settings.phone?.trim();
  if (!wa && !phone) return null;

  const waHref = wa ? `https://wa.me/${wa.replace(/[^\d]/g, "")}` : null;
  const telHref = phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : null;

  return (
    <div className="floating-contact" aria-label="Contact VALERI">
      {waHref && (
        <a
          href={waHref}
          className="fc-btn fc-wa"
          target="_blank"
          rel="noopener"
          aria-label="Message VALERI on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.05 1.6 5.77L2 22l4.44-1.7a9.86 9.86 0 0 0 5.6 1.72h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.4 1.32-1.93 1.37-.5.05-1.13.07-1.82-.11-.42-.11-.96-.32-1.65-.62-2.9-1.25-4.8-4.17-4.94-4.36-.15-.19-1.19-1.58-1.19-3.02 0-1.44.76-2.15 1.03-2.44.27-.29.58-.36.78-.36l.56.01c.18 0 .42-.07.66.5.24.58.82 2.02.89 2.17.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.3-.12.58.17.29.75 1.23 1.61 2 1.11.98 2.05 1.29 2.34 1.44.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.39-.24.66-.14.27.1 1.7.8 1.99.95.29.14.48.22.55.34.07.12.07.72-.17 1.4Z" />
          </svg>
        </a>
      )}
      {telHref && (
        <a href={telHref} className="fc-btn fc-call" aria-label="Call VALERI">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3.5a1 1 0 0 1 1-1H7.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2Z" />
          </svg>
        </a>
      )}
    </div>
  );
}
