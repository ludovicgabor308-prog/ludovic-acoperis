import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { phoneDisplay, phoneE164 } from "@/lib/site-config"

/**
 * Closing band on every page: the phone number is the main button, the form is the second step.
 */
export function PageCta({
  title,
  description,
  formHref = "#cere-oferta",
  formLabel = "Cere ofertă gratuită",
}: {
  title: string
  description: string
  formHref?: string
  formLabel?: string
}) {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-balance text-primary-foreground lg:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">{description}</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <a href={`tel:${phoneE164}`} data-cta="footer-call" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                {phoneDisplay}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href={formHref}>{formLabel}</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
