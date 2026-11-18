"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { BrandMark } from "@/components/brand-mark"
import { businessName, phoneDisplay, phoneE164 } from "@/lib/site-config"

const navigation = [
  { name: "Acasă", href: "/" },
  { name: "Reparații Acoperișuri", href: "/reparatii-acoperisuri" },
  { name: "Montaj Acoperișuri", href: "/montaj-acoperisuri" },
  { name: "Dulgherie", href: "/dulgherie" },
  { name: "Mansardări", href: "/mansardari" },
  { name: "Lucrări", href: "/lucrari" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-secondary/95 text-secondary-foreground backdrop-blur supports-backdrop-filter:bg-secondary/85">
      <div className="container mx-auto px-4">
        <div className="flex min-h-16 items-center justify-between gap-2 py-2 lg:h-20 lg:py-0">
          <BrandMark inverted />

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md px-2.5 py-2 text-sm font-medium text-secondary-foreground/85 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Number stays visible on small screens; the red fill makes the tap target obvious beside the menu. */}
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={`tel:${phoneE164}`}
              data-cta="header-call"
              data-phone={phoneE164}
              aria-label={`Sună ${businessName} la ${phoneDisplay}`}
              className="inline-flex items-center gap-1.5 rounded-md bg-primary px-2.5 py-2 text-[11px] font-semibold whitespace-nowrap text-primary-foreground sm:px-3 sm:text-sm lg:bg-transparent lg:px-2 lg:text-sm lg:text-secondary-foreground/90 lg:hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              <span>{phoneDisplay}</span>
            </a>
            <Button asChild className="hidden lg:inline-flex">
              <Link href="/#cere-oferta">Solicită Ofertă</Link>
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-secondary-foreground hover:bg-primary hover:text-primary-foreground">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Deschide meniul</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full border-white/10 bg-secondary text-secondary-foreground sm:w-80">
                <SheetTitle className="sr-only">Meniu de navigare</SheetTitle>
                <div className="flex flex-col gap-4 pt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="rounded-md px-3 py-2 text-lg font-medium text-secondary-foreground transition-colors hover:bg-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="mt-4 border-t border-white/15 pt-4">
                    <a
                      href={`tel:${phoneE164}`}
                      className="flex items-center gap-2 px-3 py-2 text-lg font-medium text-primary"
                    >
                      <Phone className="h-5 w-5" />
                      {phoneDisplay}
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
