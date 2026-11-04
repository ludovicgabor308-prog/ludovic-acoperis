/**
 * Central business, coverage, and URL constants for SEO, NAP consistency, and UI.
 * Update locality here if the physical base changes.
 */
export const siteUrl = "https://provest-acoperis.ro"

/** Legal / display name (header, footer, JSON-LD). */
export const businessName = "LDV Acoperisuri"

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

export const phoneDisplay = "+40 720 854 218"

export const phoneE164 = "+40720854218"

/** WhatsApp "click to chat" number (digits only, no plus). */
export const whatsappNumber = "40720854218"

/** Pre-filled WhatsApp message (URL-encoded in consumers). */
export const whatsappDefaultMessage =
  "Bună ziua! Aș dori o ofertă pentru acoperiș."

export const email = "acopvest@gmail.com"

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
  "LDV Acoperisuri",
  "București",
  "Ilfov",
].join(", ")

/** Open Graph / social: short list of cities. */
export const coverageLocationsOg = "București, Ilfov"
export const coverageCountiesOg = coverageLocationsOg
