"use client"

import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { HeroActions } from "@/components/hero-actions"
import { PageCta } from "@/components/page-cta"
import { QuoteForm } from "@/components/quote-form"
import { TrustPoints } from "@/components/trust-points"
import {
  businessAddressLine,
  businessName,
  countyCityExamples,
  coverageCountiesSentence,
  email,
  phoneDisplay,
  phoneE164,
} from "@/lib/site-config"

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    value: phoneDisplay,
    href: `tel:${phoneE164}`,
    description: "Non-stop, 24/7",
  },
  {
    icon: Mail,
    title: "Email",
    value: email,
    href: `mailto:${email}`,
    description: "Răspundem non-stop",
  },
  {
    icon: MapPin,
    title: "Locație",
    value: businessAddressLine,
    href: "#",
    description: `Deservim ${coverageCountiesSentence}`,
  },
  {
    icon: Clock,
    title: "Program",
    value: "Non-stop",
    href: "#",
    description: "24/7, inclusiv urgențe",
  },
]

const zones = countyCityExamples

export default function ContactPage() {
  return (
    <>
      <section className="bg-secondary py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-3xl text-center text-secondary-foreground">
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-primary">
              Ofertă gratuită, răspuns non-stop
            </p>
            <h1 className="font-serif text-4xl font-bold text-balance text-secondary-foreground sm:text-5xl">
              Sună {businessName}
            </h1>
            <p className="mt-4 text-lg text-pretty text-secondary-foreground/80">
              Acoperișul curge sau vrei montaj nou? Sună acum — răspundem 24/7 în {coverageCountiesSentence}.
              Dacă nu poți vorbi, lasă numărul în formular.
            </p>
            <div className="mt-6 flex justify-center">
              <HeroActions callCta="contact-hero-call" />
            </div>
            <div className="mt-8 flex justify-center">
              <TrustPoints onDark />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={info.title} animation="fade-in-up" delay={index * 100}>
                <Card className="h-full border-white/10 bg-secondary text-center text-secondary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <info.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                    <h2 className="font-serif text-lg font-semibold">{info.title}</h2>
                    {info.href !== "#" ? (
                      <a href={info.href} className="mt-1 block font-medium text-primary hover:underline">
                        {info.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-medium">{info.value}</p>
                    )}
                    <p className="mt-1 text-sm text-secondary-foreground/80">{info.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="cere-oferta" className="scroll-mt-24 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <QuoteForm
              variant="full"
              defaultService="reparatii"
              heading="Lasă datele, te sunăm noi"
              description="Completează formularul dacă nu poți suna acum. Revenim non-stop, nu doar în program de birou."
            />

            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="space-y-8">
                <div>
                  <h2 className="mb-4 font-serif text-2xl font-bold">Zone deservite</h2>
                  <p className="text-muted-foreground">
                    Montaj, reparații și țiglă metalică în {coverageCountiesSentence}. Deplasarea pentru evaluare
                    este gratuită.
                  </p>
                </div>

                <div className="space-y-4">
                  {zones.map((zone) => (
                    <Card key={zone.name} className="border-white/10 bg-secondary text-secondary-foreground">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <h3 className="font-serif font-semibold">{zone.name}</h3>
                            <p className="text-sm text-secondary-foreground/80">{zone.cities}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="border-primary/20 bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-serif text-lg font-semibold">Urgență la acoperiș?</h3>
                    <p className="text-sm text-primary-foreground/90">
                      Nu aștepta formularul. Sună — răspundem 24/7 și venim să oprim apa.
                    </p>
                    <a
                      href={`tel:${phoneE164}`}
                      className="mt-4 inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground"
                    >
                      <Phone className="h-4 w-4" />
                      {phoneDisplay}
                    </a>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <PageCta
        title="Pregătit să oprim problema?"
        description="Sună acum sau revino la formular. Intervenim non-stop în București și Ilfov."
        formHref="#cere-oferta"
      />
    </>
  )
}
