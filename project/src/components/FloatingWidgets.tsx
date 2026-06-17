import { Phone, MessageCircle } from "lucide-react"

export function FloatingWidgets() {
  return (
    <div className="fixed right-4 bottom-20 lg:bottom-6 z-40 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/8801707777878"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex items-center gap-0 hover:gap-3 w-12 hover:w-44 overflow-hidden rounded-full transition-all duration-300 ease-out shadow-lg shadow-black/40"
        style={{ background: "#25D366" }}
      >
        <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
          <MessageCircle className="size-5 text-white" />
        </div>
        <span className="font-subheading font-bold text-white text-sm whitespace-nowrap pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          WhatsApp Us
        </span>
      </a>

      {/* Phone */}
      <a
        href="tel:+8801707777878"
        aria-label="Call Us"
        className="group flex items-center gap-0 hover:gap-3 w-12 hover:w-36 overflow-hidden rounded-full transition-all duration-300 ease-out shadow-lg shadow-black/40 animate-pulse-glow"
        style={{ background: "#E53935" }}
      >
        <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
          <Phone className="size-5 text-white" />
        </div>
        <span className="font-subheading font-bold text-white text-sm whitespace-nowrap pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Call Now
        </span>
      </a>
    </div>
  )
}
