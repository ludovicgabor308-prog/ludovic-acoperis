/**
 * Central business, coverage, and URL constants for SEO, NAP consistency, and UI.
 * Update locality here if the physical base changes.
 */
export const siteUrl = "https://provest-acoperis.ro"

/** Legal / display name (header, footer, JSON-LD). Romanian diacritics. */
export const businessName = "Reparații Acoperișuri 24/7 București"

/** Same name without diacritics, for ad-query match in schema and keywords. */
export const businessNamePlain = "Reparatii Acoperisuri 24/7 Bucuresti"

/** Compact logo mark and the two header lines under it. */
export const brandMark = "24/7"
export const brandLine1 = "Reparații Acoperișuri"
export const brandLine2 = "24/7 București"

/** Orașe / zone where services are offered (display strings with diacritics). */
export const coverageLocations = [
  "București",
  "Ilfov",
] as const

/** Readable list for sentences, e.g. meta descriptions. */
export const coverageLocationsSentence =
  "București și Ilfov"

/** Backwards-compatible aliases (previously named by județ). */
export const coverageCounties = coverageLocations
export const coverageCountiesSentence = coverageLocationsSentence

export const businessLocality = "București"

export const businessCounty = "Ilfov"

/** Single line for footer, contact cards, form placeholders. */
export const businessAddressLine = "București - Ilfov"

export const phoneDisplay = "+40 734 591 048"

export const phoneE164 = "+40734591048"

/** WhatsApp "click to chat" number (digits only, no plus). */
export const whatsappNumber = "40734591048"

/** Pre-filled WhatsApp message (URL-encoded in consumers). */
export const whatsappDefaultMessage =
  "Bună ziua! Aș dori o ofertă pentru acoperiș. Intervenție 24/7 în București."

/** Click-to-chat link with the default (or a custom) pre-filled message. */
export function whatsappHref(message: string = whatsappDefaultMessage) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const email = "Reparatiacoperisuri62@gmail.com"

/**
 * FormSync form id — submissions POST to `https://api.formsync.app/v1/s/{formId}`.
 * Dashboard: https://formsync.app
 */
export const formsyncFormId = "Bnt7rjU"

/** Contact page: oraș + zone deservite. */
export const countyCityExamples: { name: string; cities: string }[] = [
  { name: "București", cities: "Sector 1, Sector 2, Sector 3, Sector 4, Sector 5, Sector 6" },
  { name: "Ilfov", cities: "Voluntari, Otopeni, Popești-Leordeni, Buftea" },
]

/** Default keywords for layout metadata (Romanian roofing + regions). */
export const defaultSiteKeywords = [
  "montaj acoperiș",
  "reparații acoperiș",
  "țiglă metalică",
  "acoperiș București",
  "acoperiș Ilfov",
  "dulgherie acoperiș",
  "mansardări",
  "reparații acoperișuri 24/7 București",
  "Reparatii Acoperisuri 24/7 Bucuresti",
  "Reparații Acoperișuri 24/7 București",
  "urgență acoperiș",
  "București",
  "Ilfov",
].join(", ")

/** Open Graph / social: short list of cities. */
export const coverageLocationsOg = "București, Ilfov"
export const coverageCountiesOg = coverageLocationsOg
