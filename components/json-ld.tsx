import {
  businessCounty,
  businessLocality,
  businessName,
  businessNamePlain,
  coverageLocations,
  coverageLocationsSentence,
  email,
  phoneE164,
  siteUrl,
} from "@/lib/site-config"

/**
 * LocalBusiness-style structured data for search engines (NAP + service area).
 */
export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: businessName,
    alternateName: businessNamePlain,
    url: siteUrl,
    telephone: phoneE164,
    email,
    openingHours: "Mo-Su 00:00-23:59",
    address: {
      "@type": "PostalAddress",
      addressLocality: businessLocality,
      addressRegion: businessCounty,
      addressCountry: "RO",
    },
    areaServed: coverageLocations.map((city) => ({
      "@type": "City",
      name: city,
    })),
    description: `Reparații și montaj acoperișuri 24/7 în ${coverageLocationsSentence}. Țiglă metalică, dulgherie și mansardări. Evaluare gratuită.`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
