import { Phone } from "lucide-react"
import { phoneDisplay, phoneE164, whatsappHref } from "@/lib/site-config"

/**
 * Always-visible mobile bar. One tap calls or opens WhatsApp — no extra toggle.
 * Hidden from md up, where the header already shows the number.
 */
export function FloatingContactCta() {
  return (
    <nav
      aria-label="Contact rapid"
      className="fixed inset-x-0 bottom-0 z-60 border-t border-white/10 bg-secondary p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(0,0,0,0.25)] md:hidden"
    >
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${phoneE164}`}
          data-cta="sticky-call"
          data-phone={phoneE164}
          className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-2 py-2 text-sm font-semibold text-primary-foreground"
        >
          <Phone className="h-4 w-4 shrink-0" aria-hidden />
          <span className="text-center leading-tight">
            Sună
            <span className="block text-[11px] font-medium">{phoneDisplay}</span>
          </span>
        </a>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="sticky-whatsapp"
          data-phone={phoneE164}
          className="flex h-12 items-center justify-center gap-2 rounded-md bg-[#25D366] text-sm font-semibold text-white"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  )
}
