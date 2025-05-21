import Link from "next/link"
import { Icons } from "@/components/icons"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-lg">
      <div className="container flex flex-col gap-10 py-16">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex flex-1 flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Icons.logo className="h-6 w-6" />
              <span className="font-heading text-xl tracking-tight">e-BAZAR</span>
            </Link>
            <p className="text-muted-foreground max-w-sm opacity-70">
              Discover high-quality, affordable, and sustainable products — all in one place. Shop smart with e-BAZAR.
            </p>
            <div className="flex gap-4">
              <Link href="https://twitter.com" target="_blank" rel="noreferrer" className="glassmorphic-icon">
                <Icons.twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://github.com" target="_blank" rel="noreferrer" className="glassmorphic-icon">
                <Icons.gitHub className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://discord.com" target="_blank" rel="noreferrer" className="glassmorphic-icon">
                <Icons.discord className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">Discord</span>
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-10 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium tracking-tight">Shop</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#categories" className="text-sm text-muted-foreground hover:text-foreground opacity-70">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="#featured" className="text-sm text-muted-foreground hover:text-foreground opacity-70">
                    Featured Products
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground opacity-70">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#new" className="text-sm text-muted-foreground hover:text-foreground opacity-70">
                    New Arrivals
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium tracking-tight">Support</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground opacity-70">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#shipping" className="text-sm text-muted-foreground hover:text-foreground opacity-70">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground opacity-70">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#support" className="text-sm text-muted-foreground hover:text-foreground opacity-70">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium tracking-tight">Legal</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#privacy" className="text-sm text-muted-foreground hover:text-foreground opacity-70">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#terms" className="text-sm text-muted-foreground hover:text-foreground opacity-70">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#cookies" className="text-sm text-muted-foreground hover:text-foreground opacity-70">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#licenses" className="text-sm text-muted-foreground hover:text-foreground opacity-70">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground opacity-70">
            &copy; {new Date().getFullYear()} e-BAZAR. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#terms" className="text-sm text-muted-foreground hover:text-foreground opacity-70">
              Terms
            </Link>
            <Link href="#privacy" className="text-sm text-muted-foreground hover:text-foreground opacity-70">
              Privacy
            </Link>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  )
}
