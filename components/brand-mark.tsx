import Link from "next/link"
import { brandLine1, brandLine2, brandMark, businessName } from "@/lib/site-config"

/**
 * Compact 24/7 mark plus a two-line name so the long brand fits the header and footer.
 */
export function BrandMark({
  href = "/",
  inverted = false,
}: {
  href?: string
  /** Light text when the mark sits on the dark header or footer. */
  inverted?: boolean
}) {
  const nameColor = inverted ? "text-secondary-foreground" : "text-foreground"
  const tagColor = inverted ? "text-secondary-foreground/75" : "text-muted-foreground"

  return (
    <Link href={href} className="flex min-w-0 items-center gap-2" aria-label={businessName}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
        <span className="text-xs font-bold tracking-tight text-primary-foreground">{brandMark}</span>
      </span>
      <span className="min-w-0 leading-tight">
        <span className={`block font-serif text-[13px] font-bold leading-tight sm:text-base ${nameColor}`}>{brandLine1}</span>
        <span className={`block text-xs font-medium ${tagColor}`}>{brandLine2}</span>
      </span>
    </Link>
  )
}
