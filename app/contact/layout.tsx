import type { Metadata } from "next"
import type { ReactNode } from "react"
import { businessName, coverageCountiesSentence } from "@/lib/site-config"

/** SEO for the contact page. Metadata stays in a Server Component. */
export const metadata: Metadata = {
  title: `${businessName} | Contact și ofertă gratuită`,
  description: `Sună ${businessName} non-stop pentru ofertă gratuită: reparații, montaj, dulgherie și mansardări în ${coverageCountiesSentence}.`,
}

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children
}
