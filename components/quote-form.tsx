"use client"

import { useId, useState } from "react"
import { useFormSync } from "formsync"
import { CheckCircle, Loader2, Phone, Send } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { formsyncFormId, phoneDisplay, phoneE164 } from "@/lib/site-config"

/** Service values posted to FormSync. Kept stable so the dashboard filters stay meaningful. */
const services = [
  { value: "reparatii", label: "Reparații acoperiș" },
  { value: "montaj", label: "Montaj acoperiș nou" },
  { value: "dulgherie", label: "Dulgherie / șarpantă" },
  { value: "mansardare", label: "Mansardare" },
  { value: "altele", label: "Altele" },
] as const

export type QuoteService = (typeof services)[number]["value"]

/**
 * FormSync quote form.
 * Compact (landing pages): name + phone required, short optional message.
 * Full (contact page): also email, locality, and a required message.
 */
export function QuoteForm({
  variant = "compact",
  defaultService = "reparatii",
  heading = "Cere oferta gratuită",
  description = "Lasă numele și telefonul. Te sunăm non-stop, inclusiv pentru urgențe.",
  surface = "dark",
}: {
  variant?: "full" | "compact"
  defaultService?: QuoteService
  heading?: string
  description?: string
  /** Light card when the form sits on the black hero, so the fields stay readable. */
  surface?: "dark" | "light"
}) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const rawId = useId().replace(/:/g, "")
  const fieldId = (name: string) => `${rawId}-${name}`
  const isFull = variant === "full"
  const onDark = surface === "dark"
  const fieldClass = onDark
    ? "border-white/25 bg-transparent text-secondary-foreground placeholder:text-secondary-foreground/50"
    : "border-input bg-background text-foreground placeholder:text-muted-foreground"
  const labelClass = onDark ? "text-secondary-foreground" : "text-foreground"
  const mutedClass = onDark ? "text-secondary-foreground/80" : "text-muted-foreground"

  const { submit, isLoading } = useFormSync({
    formId: formsyncFormId,
    onSuccess: (res) => {
      toast.success(res.message || "Mesajul a fost trimis cu succes!")
      setIsSubmitted(true)
    },
    onError: (err) => {
      toast.error(err.message || "Nu am putut trimite mesajul. Încearcă din nou sau sună-ne.")
    },
  })

  return (
    <Card
      className={
        onDark
          ? "border-white/10 bg-secondary text-secondary-foreground shadow-md"
          : "border-border bg-background text-foreground shadow-xl"
      }
    >
      <CardContent className="p-6 lg:p-8">
        <h2 className="mb-1 font-serif text-2xl font-bold">{heading}</h2>
        <p className={`mb-6 text-sm ${mutedClass}`}>{description}</p>

        {isSubmitted ? (
          <div className="flex flex-col items-center py-8 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="mb-2 font-serif text-xl font-semibold">Mesaj trimis</h3>
            <p className={`max-w-md text-sm ${mutedClass}`}>
              Am primit cererea. Dacă acoperișul curge acum, sună-ne — răspundem 24/7.
            </p>
            <Button asChild className="mt-6">
              <a href={`tel:${phoneE164}`} className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {phoneDisplay}
              </a>
            </Button>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <div className={isFull ? "grid gap-4 sm:grid-cols-2" : "space-y-4"}>
              <div className="space-y-2">
                <Label htmlFor={fieldId("name")} className={labelClass}>
                  Nume complet *
                </Label>
                <Input
                  id={fieldId("name")}
                  name="name"
                  placeholder="Ion Popescu"
                  autoComplete="name"
                  required
                  className={fieldClass}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={fieldId("phone")} className={labelClass}>
                  Telefon *
                </Label>
                <Input
                  id={fieldId("phone")}
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="07xx xxx xxx"
                  autoComplete="tel"
                  required
                  className={fieldClass}
                />
              </div>
            </div>

            {isFull ? (
              <>
                <div className="space-y-2">
                  <Label htmlFor={fieldId("email")} className={labelClass}>
                    Email
                  </Label>
                  <Input
                    id={fieldId("email")}
                    name="email"
                    type="email"
                    placeholder="email@exemplu.ro"
                    autoComplete="email"
                    className={fieldClass}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={fieldId("location")} className={labelClass}>
                    Localitate
                  </Label>
                  <Input
                    id={fieldId("location")}
                    name="location"
                    placeholder="București - Ilfov"
                    autoComplete="address-level2"
                    className={fieldClass}
                  />
                </div>
              </>
            ) : null}

            <div className="space-y-2">
              <Label htmlFor={fieldId("service")} className={labelClass}>
                Serviciul dorit
              </Label>
              <select
                id={fieldId("service")}
                name="service"
                defaultValue={defaultService}
                className={`w-full rounded-md border px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${fieldClass}`}
              >
                {services.map((service) => (
                  <option key={service.value} value={service.value} className="text-foreground">
                    {service.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor={fieldId("message")} className={labelClass}>
                Mesaj{isFull ? " *" : ""}
              </Label>
              <Textarea
                id={fieldId("message")}
                name="message"
                placeholder="Infiltrație, țiglă spartă, montaj nou… Spune-ne pe scurt."
                rows={isFull ? 5 : 3}
                required={isFull}
                className={fieldClass}
              />
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden />
                  Se trimite…
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" aria-hidden />
                  Trimite cererea
                </>
              )}
            </Button>
            <p className={`text-center text-xs ${mutedClass}`}>
              Datele sunt folosite doar ca să te contactăm despre cerere. Urgență? Sună {phoneDisplay}.
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
