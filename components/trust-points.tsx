import { BadgeCheck, Clock, MapPin } from "lucide-react"

/** Proof points repeated on every landing hero for ad message match. */
const points = [
  { icon: MapPin, text: "Evaluare gratuită în București și Ilfov" },
  { icon: Clock, text: "Răspuns non-stop, 24/7" },
  { icon: BadgeCheck, text: "Garanție la lucrare" },
]

/**
 * Short trust row. `onDark` switches to light text for the black hero panels.
 */
export function TrustPoints({ onDark = false }: { onDark?: boolean }) {
  const text = onDark ? "text-secondary-foreground/85" : "text-foreground"
  const icon = onDark ? "text-primary" : "text-primary"

  return (
    <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
      {points.map(({ icon: Icon, text: label }) => (
        <li key={label} className={`flex items-center gap-2 text-sm ${text}`}>
          <Icon className={`h-4 w-4 shrink-0 ${icon}`} aria-hidden />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  )
}
