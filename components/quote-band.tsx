import { QuoteForm, type QuoteService } from "@/components/quote-form"
import { TrustPoints } from "@/components/trust-points"

/**
 * Form block placed directly under a service hero so the offer is still above the long content.
 */
export function QuoteBand({
  defaultService,
  title,
  description,
}: {
  defaultService: QuoteService
  title: string
  description: string
}) {
  return (
    <section id="cere-oferta" className="scroll-mt-24 border-b border-border bg-muted py-12 lg:py-16">
      <div className="container mx-auto grid items-start gap-8 px-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
        <div className="lg:pt-4">
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-primary">Ofertă gratuită, 24/7</p>
          <h2 className="font-serif text-3xl font-bold text-balance text-foreground">{title}</h2>
          <p className="mt-3 text-lg text-muted-foreground">{description}</p>
          <div className="mt-6">
            <TrustPoints />
          </div>
        </div>
        <QuoteForm variant="compact" defaultService={defaultService} />
      </div>
    </section>
  )
}
