import { useState, useEffect } from "react"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  {
    label: "Membership",
    href: "#membership",
    children: [
      { label: "Membership Plans", href: "#membership" },
      { label: "Personal Training", href: "#personal-training" },
    ],
  },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass-dark shadow-lg shadow-black/50"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 flex-shrink-0">
              <div className="flex items-center gap-1">
                <div className="w-8 h-8 bg-[#E53935] rounded flex items-center justify-center glow-red">
                  <span className="font-heading text-white text-lg leading-none">F</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-white text-xl leading-none tracking-wider">FITNESS PLUS</span>
                  <span className="font-subheading text-[#E53935] text-[9px] tracking-[0.2em] uppercase leading-none">Gym & Health Club</span>
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-0.5 px-3 py-2 text-sm font-subheading font-medium text-white/80 hover:text-white transition-colors hover:text-[#E53935]"
                  >
                    {link.label}
                    {link.children && <ChevronDown className="size-3 opacity-60" />}
                  </a>
                  {link.children && openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-52 glass-dark rounded-lg overflow-hidden shadow-xl shadow-black/50 border border-white/10">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-3 text-sm font-subheading text-white/80 hover:text-white hover:bg-[#E53935]/20 transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+8801707777878"
                className="flex items-center gap-1.5 text-sm font-subheading font-semibold text-[#FFD600] hover:text-[#FF6D00] transition-colors"
              >
                <Phone className="size-3.5" />
                +880 170 777 7878
              </a>
              <Button
                asChild
                className="font-subheading font-bold bg-[#E53935] hover:bg-[#FF6D00] text-white border-0 glow-red transition-all duration-300 px-6"
              >
                <a href="#free-trial">Free Trial</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="lg:hidden glass-dark border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2.5 text-sm font-subheading font-medium text-white/80 hover:text-[#E53935] transition-colors"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <a
                  href="tel:+8801707777878"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-subheading font-semibold text-[#FFD600]"
                >
                  <Phone className="size-4" />
                  +880 170 777 7878
                </a>
                <Button
                  asChild
                  className="font-subheading font-bold bg-[#E53935] hover:bg-[#FF6D00] text-white border-0 w-full"
                >
                  <a href="#free-trial" onClick={() => setIsMobileOpen(false)}>
                    Start Free Trial
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Sticky Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden glass-dark border-t border-white/10 px-4 py-3 flex gap-2">
        <Button
          asChild
          variant="outline"
          className="flex-1 font-subheading font-semibold border-[#E53935] text-[#E53935] hover:bg-[#E53935] hover:text-white"
        >
          <a href="tel:+8801707777878">
            <Phone className="size-4" />
            Call Now
          </a>
        </Button>
        <Button
          asChild
          className="flex-1 font-subheading font-bold bg-[#E53935] hover:bg-[#FF6D00] text-white border-0"
        >
          <a href="#free-trial">Free Trial</a>
        </Button>
      </div>
    </>
  )
}
