import Image from "next/image"
import { CheckCircle, Home, Lightbulb, Thermometer, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { HeroActions } from "@/components/hero-actions"
import { PageCta } from "@/components/page-cta"
import { QuoteBand } from "@/components/quote-band"
import { TrustPoints } from "@/components/trust-points"
import type { Metadata } from "next"
import {
  businessName,
  coverageCountiesOg,
  coverageCountiesSentence,
  phoneDisplay,
  phoneE164,
} from "@/lib/site-config"

export const metadata: Metadata = {
  title: `${businessName} | Mansardări`,
  description: `Mansardări 24/7 în ${coverageCountiesSentence}: pod locuibil, izolație, ferestre, finisaje. Sună pentru consultanță gratuită!`,
  keywords: `mansardări, mansardare 24/7 București, amenajare pod, izolație termică, ferestre Velux, acoperiș, ${businessName}, ${coverageCountiesOg}`,
}

const benefits = [
  {
    icon: Maximize,
    title: "Spațiu Suplimentar",
    description: "Obții până la 30-40% mai mult spațiu locuibil fără a extinde amprenta la sol a casei.",
  },
  {
    icon: Thermometer,
    title: "Eficiență Energetică",
    description: "Izolația termică performantă reduce semnificativ costurile de încălzire și răcire.",
  },
  {
    icon: Home,
    title: "Valoare Proprietate",
    description: "O mansardă bine amenajată crește valoarea de piață a proprietății cu 15-25%.",
  },
  {
    icon: Lightbulb,
    title: "Lumină Naturală",
    description: "Ferestrele de mansardă aduc lumină naturală abundentă, creând un ambient plăcut.",
  },
]

const services = [
  {
    title: "Consolidare Structură",
    description: "Verificăm și consolidăm șarpanta existentă pentru a suporta noua mansardă în siguranță.",
    icon: "🏗️",
  },
  {
    title: "Izolație Termică",
    description: "Aplicăm izolație performantă (vată minerală, polistiren) pentru confort termic maxim.",
    icon: "🧱",
  },
  {
    title: "Hidroizolație",
    description: "Instalăm membrane hidroizolante profesionale pentru protecție completă împotriva umidității.",
    icon: "💧",
  },
  {
    title: "Ferestre Mansardă",
    description: "Montăm ferestre de mansardă (tip Velux) pentru iluminare naturală și ventilație.",
    icon: "🪟",
  },
  {
    title: "Instalații",
    description: "Realizăm instalații electrice și sanitare conform normelor în vigoare.",
    icon: "⚡",
  },
  {
    title: "Finisaje",
    description: "Aplicăm finisaje interioare complete: rigips, parchet, vopsitorie, conform preferințelor.",
    icon: "🎨",
  },
]

const process = [
  {
    step: "1",
    title: "Evaluare Inițială",
    description: "Analizăm structura existentă și discutăm ideile tale pentru noul spațiu.",
  },
  {
    step: "2",
    title: "Proiectare",
    description: "Realizăm proiectul tehnic cu toate detaliile și obținem autorizațiile necesare.",
  },
  {
    step: "3",
    title: "Execuție",
    description: "Echipa noastră execută lucrările respectând termenele și standardele de calitate.",
  },
  {
    step: "4",
    title: "Finalizare",
    description: "Verificăm împreună rezultatul final și îți predăm cheia noului tău spațiu.",
  },
]

const ideas = [
  "Dormitor matrimonial cu baie proprie",
  "Cameră copii cu spații de joacă",
  "Birou sau spațiu de lucru de acasă",
  "Cameră de oaspeți confortabilă",
  "Studio sau garsonieră independentă",
  "Sală de fitness sau relaxare",
]

export default function MansardariPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection animation="slide-in-left" immediate className="space-y-6 rounded-2xl border border-white/10 bg-secondary p-6 text-secondary-foreground lg:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                <Home className="h-4 w-4" />
                Din pod, cameră locuibilă
              </div>
              <h1 className="font-serif text-4xl font-bold leading-tight text-balance text-secondary-foreground sm:text-5xl">
                Mansardări <span className="text-primary">24/7</span> în București
              </h1>
              <p className="text-lg text-pretty text-secondary-foreground/80">
                Mai mult spațiu în {coverageCountiesSentence}: {businessName} transformă podul într-o cameră cu
                izolație și finisaje. De la structură la acoperiș, un singur telefon.
              </p>
              <HeroActions callCta="mansardari-hero-call" />
              <TrustPoints onDark />
            </AnimatedSection>

            <AnimatedSection
              animation="slide-in-right"
              immediate
              className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-2xl"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ProVestAcoperis-Montaj-Tigla-Ceramica-4-mGK1DZFMOQ7qXvwScWR64TgiF47gWU.webp"
                alt={`Acoperiș cu ferestre de mansardă — ${businessName}`}
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <QuoteBand
        defaultService="mansardare"
        title="Vrei să vezi dacă podul se poate locui?"
        description="Lasă telefonul. Verificăm structura în București sau Ilfov și îți spunem ce spațiu poți câștiga, fără obligații."
      />

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-secondary-foreground lg:text-4xl">Avantajele Mansardării</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              De ce să alegi să transformi podul într-un spațiu locuibil?
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} animation="fade-in-up" delay={index * 100}>
                <Card className="h-full border-primary/20 bg-primary text-center text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <benefit.icon className="mx-auto mb-4 h-12 w-12 text-primary" />
                    <h3 className="mb-2 font-serif text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-sm text-primary-foreground/90">{benefit.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-secondary-foreground lg:text-4xl">Ce Include Serviciul?</h2>
            <p className="mt-4 text-lg text-muted-foreground">Oferim servicii complete de mansardare, de la A la Z</p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} animation="scale-in" delay={index * 100}>
                <Card className="h-full border-white/10 bg-secondary text-secondary-foreground">
                  <CardContent className="p-6">
                    <span className="mb-4 inline-block text-4xl">{service.icon}</span>
                    <h3 className="mb-2 font-serif text-xl font-semibold">{service.title}</h3>
                    <p className="text-sm text-secondary-foreground/80">{service.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">Etapele Proiectului</h2>
            <p className="mt-4 text-lg text-muted-foreground">Cum transformăm podul în locuință</p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <AnimatedSection key={item.step} animation="fade-in-up" delay={index * 100}>
                <div className="relative text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ideas */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection animation="slide-in-left">
              <h2 className="font-serif text-3xl font-bold text-secondary-foreground lg:text-4xl text-balance">
                Idei pentru Mansarda Ta
              </h2>
              <p className="mt-4 text-lg text-secondary-foreground/80">
                Mansarda poate deveni orice îți dorești. Iată câteva idei populare:
              </p>
              <ul className="mt-6 space-y-3">
                {ideas.map((idea, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-secondary-foreground">{idea}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <a href={`tel:${phoneE164}`}>Sună: {phoneDisplay}</a>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection
              animation="slide-in-right"
              delay={200}
              className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ProVestAcoperis-Montaj-Tigla-Metalica-3-dcZCbzgX5tg5UvuOf6hHJKAhT3yiQV.webp"
                alt="Casă cu mansardă și țiglă metalică"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <PageCta
        title="Vrei să extinzi locuința fără șantier la sol?"
        description="Sună pentru o consultanță gratuită în București sau trimite cererea din formular."
      />
    </>
  )
}
