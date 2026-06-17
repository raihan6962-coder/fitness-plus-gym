import { Phone, Mail, MapPin, Globe, ArrowRight } from "lucide-react"

const footerLinks = {
  quickLinks: [
    { label: "About Us", href: "#about" },
    { label: "Membership Plans", href: "#membership" },
    { label: "Personal Training", href: "#personal-training" },
    { label: "Facilities", href: "#facilities" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  programs: [
    { label: "Weight Loss Program", href: "#programs" },
    { label: "Muscle Building", href: "#programs" },
    { label: "Strength Training", href: "#programs" },
    { label: "Body Transformation", href: "#programs" },
    { label: "Women's Fitness", href: "#programs" },
    { label: "Cardio Training", href: "#programs" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#0B0B0B] border-t border-white/10 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-[#E53935] rounded flex items-center justify-center glow-red">
                <span className="font-heading text-white text-2xl leading-none">F</span>
              </div>
              <div>
                <div className="font-heading text-white text-2xl leading-none tracking-wider">FITNESS PLUS</div>
                <div className="font-subheading text-[#E53935] text-[9px] tracking-[0.2em] uppercase">Gym & Health Club</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Dhaka's premium fitness destination offering professional training, modern equipment, and a transformative wellness experience.
            </p>
            <div className="flex gap-3">
              {[
                { label: "FB", href: "#", ariaLabel: "Facebook" },
                { label: "IG", href: "#", ariaLabel: "Instagram" },
                { label: "YT", href: "#", ariaLabel: "Youtube" },
              ].map(({ label, href, ariaLabel }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={ariaLabel}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/60 hover:text-[#E53935] hover:border-[#E53935]/30 transition-colors font-subheading text-xs font-bold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-subheading font-bold text-white text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#E53935] transition-colors group"
                  >
                    <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-[#E53935]" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-subheading font-bold text-white text-sm uppercase tracking-wider mb-5">Our Programs</h4>
            <ul className="space-y-2.5">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#E53935] transition-colors group"
                  >
                    <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-[#E53935]" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-subheading font-bold text-white text-sm uppercase tracking-wider mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="size-4 text-[#E53935] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Plot-37, 6th Floor, S.B Plaza,<br />Dhaka 1230, Bangladesh
                </span>
              </li>
              <li>
                <a href="tel:+8801707777878" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-[#E53935] transition-colors">
                  <Phone className="size-4 text-[#E53935] flex-shrink-0" />
                  +880 170 777 7878
                </a>
              </li>
              <li>
                <a href="mailto:info@fitnessplusbd.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-[#E53935] transition-colors">
                  <Mail className="size-4 text-[#E53935] flex-shrink-0" />
                  info@fitnessplusbd.com
                </a>
              </li>
              <li>
                <a href="https://fitnessplusbd.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-[#E53935] transition-colors">
                  <Globe className="size-4 text-[#E53935] flex-shrink-0" />
                  fitnessplusbd.com
                </a>
              </li>
            </ul>
            {/* Hours */}
            <div className="mt-5 p-3 rounded-lg bg-white/5 border border-white/10">
              <p className="text-xs font-subheading font-semibold text-white uppercase tracking-wider mb-2">Hours</p>
              <p className="text-xs text-muted-foreground">Mon – Sat: 6:00 AM – 11:00 PM</p>
              <p className="text-xs text-muted-foreground">Sunday: 8:00 AM – 8:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © 2024 Fitness Plus Gym & Health Club. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
