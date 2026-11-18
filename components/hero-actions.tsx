import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { phoneDisplay, phoneE164, whatsappHref } from "@/lib/site-config"

/**
 * Primary click-to-call plus WhatsApp. Phone number is the button label so ads traffic can dial without hunting.
 */
export function HeroActions({
  callCta = "hero-call",
}: {
  callCta?: string
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
        <a
          href={`tel:${phoneE164}`}
          data-cta={callCta}
          data-phone={phoneE164}
          className="flex items-center gap-2"
        >
          <Phone className="h-5 w-5" />
          Sună: {phoneDisplay}
        </a>
      </Button>
      <Button
        size="lg"
        variant="outline"
        asChild
        className="border-white/40 bg-transparent text-white hover:bg-white hover:text-secondary"
      >
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="whatsapp"
          data-phone={phoneE164}
          className="flex items-center gap-2"
        >
          WhatsApp
        </a>
      </Button>
    </div>
  )
}
