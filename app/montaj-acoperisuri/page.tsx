import Image from "next/image"
import { Award, Shield, Truck } from "lucide-react"
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
} from "@/lib/site-config"

export const metadata: Metadata = {
  title: `${businessName} | Montaj țiglă metalică`,
  description: `Montaj acoperiș 24/7 în ${coverageCountiesSentence}, cu țiglă metalică. Garanție și ofertă gratuită. Sună acum!`,
  keywords: `montaj acoperiș, montaj acoperișuri 24/7 București, țiglă metalică, acoperiș nou, ${businessName}, ${coverageCountiesOg}`,
}

const roofTypes = [
  {
    title: "Acoperiș în O Apă",
    description: "Soluție economică pentru anexe, garaje și construcții simple. Montaj rapid și întreținere minimă.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ProVestAcoperis-Montaj-Tabla-Cutata-1-H3rcGhd2OyZ0xaiOFsSAu26zsbi0T2.webp",
  },
  {
    title: "Acoperiș în Două Ape",
    description: "Cel mai popular tip de acoperiș pentru case. Excelent raport calitate-preț și aspect tradițional.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ProVestAcoperis-Montaj-Tabla-Cutata-2-lzdoQDqUCbkF4nU2OWpAEPpg7xOXFR.webp",
  },
  {
    title: "Acoperiș în Patru Ape",
    description: "Design elegant și protecție superioară. Ideal pentru case mai mari și construcții reprezentative.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ProVestAcoperis-Montaj-Tigla-Metalica-3-dcZCbzgX5tg5UvuOf6hHJKAhT3yiQV.webp",
  },
]

const models = [
  "Clasic",
  "Balcanic",
  "Britanic",
  "Dacic",
  "Gotic",
  "Iberic",
  "Romanic",
  "Retro Duo",
  "T8",
  "T18",
  "T35",
  "T45",
  "S18",
  "Tablă Falțuită",
  "Retropanel",
  "Hellenic",
  "Adriatic",
]

const benefits = [
  {
    icon: Shield,
    title: "Durabilitate Excepțională",
    description: "Țigla metalică rezistă 30-50 de ani cu întreținere minimă, fiind imună la mucegai și dăunători.",
  },
  {
    icon: Award,
    title: "Design Versatil",
    description: "Gamă variată de modele și culori pentru a se potrivi perfect cu stilul casei dumneavoastră.",
  },
  {
    icon: Truck,
    title: "Montaj Rapid",
    description: "Greutate redusă și sistem de prindere eficient permit montajul în timp record, fără stres.",
  },
]

const process = [
  {
    step: "1",
    title: "Consultanță",
    description: "Discutăm nevoile tale și oferim recomandări personalizate pentru tipul de acoperiș potrivit.",
  },
  {
    step: "2",
    title: "Măsurători",
    description: "Efectuăm măsurători precise la fața locului pentru calculul exact al materialelor necesare.",
  },
  {
    step: "3",
    title: "Ofertare",
    description: "Primești o ofertă detaliată cu toate materialele, manopera și termenele de execuție.",
  },
  {
    step: "4",
    title: "Execuție",
    description: "Echipa noastră montează acoperișul respectând toate standardele de calitate și siguranță.",
  },
  {
    step: "5",
    title: "Recepție",
    description: "Verificăm împreună lucrarea și îți oferim certificatul de garanție pentru liniștea ta.",
  },
]

export default function MontajAcopersuriPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection animation="slide-in-left" immediate className="space-y-6 rounded-2xl border border-white/10 bg-secondary p-6 text-secondary-foreground lg:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                <Award className="h-4 w-4" />
                Montaj cu garanție, program non-stop
              </div>
              <h1 className="font-serif text-4xl font-bold leading-tight text-balance text-secondary-foreground sm:text-5xl">
                Montaj Acoperișuri <span className="text-primary">24/7</span> în București
              </h1>
              <p className="text-lg text-pretty text-secondary-foreground/80">
                Construiești sau renovezi? {businessName} montează țiglă metalică în {coverageCountiesSentence}.
                Alegem modelul, măsurăm gratuit și îți dăm prețul înainte să începem.
              </p>
              <HeroActions callCta="montaj-hero-call" />
              <TrustPoints onDark />
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" immediate className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-lwPuST1UCW4Ul99oMXmUBeC4rIf1AU.webp"
                alt={`Montaj acoperiș nou cu țiglă metalică — ${businessName}`}
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
        defaultService="montaj"
        title="Cere prețul pentru acoperișul nou"
        description="Spune-ne localitatea și tipul de învelitoare. Revenim cu o estimare și programăm măsurătoarea gratuită în București sau Ilfov."
      />

      {/* Roof Types */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-secondary-foreground lg:text-4xl">Tipuri de Acoperișuri</h2>
            <p className="mt-4 text-lg text-secondary-foreground/80">
              Montăm toate tipurile de acoperișuri, adaptate nevoilor și bugetului tău
            </p>
          </AnimatedSection>

          <div className="grid gap-8 lg:grid-cols-3">
            {roofTypes.map((type, index) => (
              <AnimatedSection key={type.title} animation="fade-in-up" delay={index * 100}>
                <Card className="group h-full overflow-hidden border-white/10 bg-secondary text-secondary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={type.image || "/placeholder.svg"}
                      alt={type.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-serif text-xl font-semibold">{type.title}</h3>
                    <p className="text-sm text-secondary-foreground/80">{type.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Models Available */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-secondary-foreground lg:text-4xl">Modele Disponibile</h2>
            <p className="mt-4 text-lg text-secondary-foreground/80">
              Oferim o gamă variată de modele de țiglă metalică pentru orice stil arhitectural
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale-in">
            <div className="flex flex-wrap justify-center gap-3">
              {models.map((model) => (
                <span
                  key={model}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:bg-primary/5"
                >
                  {model}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-8 text-center">
            <p className="text-secondary-foreground/80">
              Disponibile în finisaje: <strong>Lucios, Mat, Lucios 8003, Lemn, Grande Mat</strong>
            </p>
            <p className="mt-2 text-secondary-foreground/80">
              Grosimi disponibile: <strong>0.4mm, 0.45mm, 0.5mm, 0.6mm</strong>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">De Ce Țiglă Metalică?</h2>
            <p className="mt-4 text-lg text-muted-foreground">Avantajele unui acoperiș modern cu țiglă metalică</p>
          </AnimatedSection>

          <div className="grid gap-8 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} animation="fade-in-up" delay={index * 100}>
                <Card className="h-full border-primary/20 bg-primary text-center text-primary-foreground">
                  <CardContent className="p-8">
                    <benefit.icon className="mx-auto mb-4 h-12 w-12 text-primary" />
                    <h3 className="mb-2 font-serif text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-primary-foreground/90">{benefit.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">Procesul de Montaj</h2>
            <p className="mt-4 text-lg text-muted-foreground">De la idee la acoperiș finalizat, în 5 pași simpli</p>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-border lg:block" />
            <div className="space-y-8">
              {process.map((item, index) => (
                <AnimatedSection
                  key={item.step}
                  animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                  delay={index * 100}
                >
                  <div className={`flex items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    <div className={`hidden flex-1 lg:block ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                      <h3 className="font-serif text-xl font-semibold">{item.title}</h3>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                      {item.step}
                    </div>
                    <div className="flex-1 lg:hidden">
                      <h3 className="font-serif text-xl font-semibold">{item.title}</h3>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="hidden flex-1 lg:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCta
        title="Pregătit pentru un acoperiș nou?"
        description="Sună pentru o măsurătoare gratuită în București sau lasă numărul în formular."
      />
    </>
  )
}
