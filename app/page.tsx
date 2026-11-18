import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Clock,
  Users,
  Star,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { HeroActions } from "@/components/hero-actions";
import { PageCta } from "@/components/page-cta";
import { QuoteForm } from "@/components/quote-form";
import { TrustPoints } from "@/components/trust-points";
import {
  businessName,
  coverageCounties,
  coverageCountiesSentence,
} from "@/lib/site-config";

const services = [
  {
    title: "Reparații Acoperișuri",
    description:
      "Identificăm și reparăm rapid orice problemă la acoperiș: infiltrații, țigle sparte, jgheaburi deteriorate.",
    href: "/reparatii-acoperisuri",
    icon: "🔧",
  },
  {
    title: "Montaj Acoperișuri",
    description:
      "Montăm acoperișuri noi cu țiglă metalică de calitate superioară, cu garanție și materiale certificate.",
    href: "/montaj-acoperisuri",
    icon: "🏠",
  },
  {
    title: "Dulgherie",
    description:
      "Construim și reparăm structuri din lemn: șarpante, grinzi, căpriori - toate la standarde înalte.",
    href: "/dulgherie",
    icon: "🪵",
  },
  {
    title: "Mansardări",
    description:
      "Transformăm podul casei într-un spațiu locuibil modern, eficient termic și estetic plăcut.",
    href: "/mansardari",
    icon: "🏗️",
  },
];

const stats = [
  { value: "10+", label: "Ani Experiență", icon: Clock },
  { value: "2000+", label: "Clienți Mulțumiți", icon: Users },
  { value: "100%", label: "Garanție Lucrări", icon: Shield },
  { value: "2", label: "Zone Acoperite", icon: Star },
];

const benefits = [
  "Echipă profesionistă cu experiență dovedită",
  "Materiale de calitate superioară, certificate",
  "Garanție extinsă pentru toate lucrările",
  "Prețuri transparente, fără costuri ascunse",
  "Consultanță gratuită și evaluare la fața locului",
  "Program flexibil, adaptabil nevoilor clientului",
];

/** Hero image (LCP): remote blob; dimensions stabilize layout. */
const heroImageSrc =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-6vuLqn5RviUNYJsDCNhOJtKCq50GMF.webp";
const secondaryImageSrc =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-MGZSoW9nnDbjkjn0POb7GvT4534pfo.webp";

export default function HomePage() {
  return (
    <>
      {/* Hero: immediate sections so LCP image is not hidden behind opacity-0. */}
      <section className="relative overflow-hidden bg-secondary py-12 lg:py-20">
        <div className="container relative mx-auto px-4">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <AnimatedSection
              animation="slide-in-left"
              immediate
              className="space-y-6 text-secondary-foreground"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                <Shield className="h-4 w-4" />
                Intervenții non-stop în București și Ilfov
              </div>
              <h1 className="font-serif text-4xl font-bold leading-tight text-balance text-secondary-foreground sm:text-5xl lg:text-6xl">
                Reparații Acoperișuri{" "}
                <span className="text-primary">24/7</span> în București
              </h1>
              <p className="text-lg text-pretty text-secondary-foreground/80 lg:text-xl">
                {businessName} intervine la infiltrații, țiglă spartă și
                montaj nou. Peste 2000 de clienți în {coverageCountiesSentence}.
                Evaluare gratuită, garanție la lucrare.
              </p>
              <HeroActions callCta="home-hero-call" />
              <TrustPoints onDark />
            </AnimatedSection>

            <div id="cere-oferta" className="scroll-mt-24">
              <QuoteForm
                variant="compact"
                defaultService="reparatii"
                surface="light"
                heading="Spune-ne ce s-a întâmplat"
                description="Nume și telefon sunt de ajuns. Te sunăm imediat, zi și noapte."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-primary/20 bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <AnimatedSection
                key={stat.label}
                animation="fade-in-up"
                delay={index * 100}
              >
                <div className="text-center">
                  <stat.icon className="mx-auto mb-3 h-8 w-8 text-primary-foreground" />
                  <p className="font-serif text-3xl font-bold text-primary-foreground lg:text-4xl">
                    {stat.value}
                  </p>
                  <p className="text-sm text-primary-foreground/85">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Roof photo sits under the offer so the form stays the first screen. */}
      <section className="bg-background py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="relative mx-auto aspect-16/7 w-full max-w-5xl overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={heroImageSrc}
              alt={`Montaj acoperiș cu țiglă metalică — ${businessName}`}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl bg-card/95 p-3 shadow-lg">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xl font-bold text-foreground">2000+</p>
                <p className="text-xs text-muted-foreground">Clienți mulțumiți</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl text-balance">
              Serviciile Noastre
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Montaj acoperiș, reparații acoperiș și întreținere — soluții
              complete pentru locuința ta.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.title}
                animation="scale-in"
                delay={index * 100}
              >
                <Card className="group h-full border-white/10 bg-secondary text-secondary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="flex h-full flex-col p-6">
                    <span className="mb-4 text-4xl">{service.icon}</span>
                    <h3 className="mb-2 font-serif text-xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm text-secondary-foreground/80">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      Află mai multe
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection animation="slide-in-left">
              <div className="relative mx-auto aspect-3/4 w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={secondaryImageSrc}
                  alt={`Echipă ${businessName} la montaj acoperiș`}
                  width={900}
                  height={1200}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={200}>
              <h2 className="font-serif text-3xl font-bold text-secondary-foreground lg:text-4xl text-balance">
                De ce să ne suni acum?
              </h2>
              <p className="mt-4 text-lg text-secondary-foreground/80">
                Peste 10 ani în construcții și acoperișuri — partener de
                încredere pentru montaj țiglă metalică și reparații în{" "}
                {coverageCountiesSentence}.
              </p>
              <ul className="mt-6 space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-secondary-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <HeroActions callCta="home-why-call" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Coverage Area Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">
              Zone de Acoperire
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Servicii de acoperiș și țiglă metalică în{" "}
              {coverageCountiesSentence}
            </p>
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {coverageCounties.map((city, index) => (
              <AnimatedSection
                key={city}
                animation="fade-in-up"
                delay={index * 100}
              >
                <Card className="border-white/10 bg-secondary text-center text-secondary-foreground transition-all duration-300 hover:border-primary hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-xl">📍</span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold">{city}</h3>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Acoperișul curge sau vrei montaj nou?"
        description="Sună acum pentru intervenție 24/7 în București, sau lasă numărul și te contactăm imediat."
      />
    </>
  );
}
