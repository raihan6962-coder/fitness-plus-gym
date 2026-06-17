import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "What are your membership fees?",
    a: "We offer three membership tiers: Basic (৳2,500/month), Standard (৳4,000/month), and Premium (৳7,000/month). Annual memberships are available with up to 20% discount. Contact us for corporate package pricing.",
  },
  {
    q: "Do you offer personal training?",
    a: "Yes! We have certified personal trainers available for one-on-one sessions. Personal training can be added to any membership plan. Sessions are fully customized to your goals, fitness level, and schedule.",
  },
  {
    q: "Is there a separate women's section?",
    a: "Absolutely. Fitness Plus has a dedicated women's fitness area with all essential equipment. Female members can train in a private, comfortable, and safe environment with female trainers available.",
  },
  {
    q: "Do you have steam bath facilities?",
    a: "Yes, our steam bath facility is available to Standard and Premium members. It's a great way to relax muscles, detoxify, and enhance recovery after your workout sessions.",
  },
  {
    q: "Can beginners join Fitness Plus?",
    a: "100% yes! We welcome fitness beginners. Our trainers will assess your current fitness level and design a safe, progressive program. We'll guide you every step of the way to ensure you start correctly and stay injury-free.",
  },
  {
    q: "What are the operating hours?",
    a: "We are open Monday to Saturday from 6:00 AM to 11:00 PM, and Sundays from 8:00 AM to 8:00 PM. Extended hours are designed to accommodate early morning workouts and late evening sessions.",
  },
  {
    q: "Do you offer trial sessions?",
    a: "Yes! We offer a free trial consultation and gym tour. Fill out our free trial form or call us to schedule your visit. Experience the facilities before committing to a membership.",
  },
  {
    q: "Where is Fitness Plus located?",
    a: "We are located at Plot-37, 6th Floor, S.B Plaza, Dhaka 1230, Bangladesh. The gym is conveniently accessible from major areas of Dhaka. Contact us for detailed directions.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#151515] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#E53935]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#E53935]" />
            <span className="font-subheading text-xs font-semibold text-[#E53935] uppercase tracking-widest">FAQ</span>
            <div className="h-px w-8 bg-[#E53935]" />
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white tracking-wider mb-4">
            FREQUENTLY ASKED <span className="text-gradient-red">QUESTIONS</span>
          </h2>
          <p className="font-subheading text-muted-foreground text-sm leading-relaxed">
            Everything you need to know about Fitness Plus Gym & Health Club.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className={cn(
                "rounded-2xl border overflow-hidden transition-all duration-300",
                openIndex === i
                  ? "border-[#E53935]/40 bg-card"
                  : "border-white/5 bg-card hover:border-white/15"
              )}
            >
              <button
                className="w-full flex items-start gap-4 p-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div
                  className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors",
                    openIndex === i ? "bg-[#E53935]" : "bg-white/10"
                  )}
                >
                  <span className="font-subheading text-xs font-bold text-white">{i + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="font-subheading font-semibold text-white text-sm pr-4">{q}</p>
                </div>
                <ChevronDown
                  className={cn(
                    "size-5 text-muted-foreground transition-transform duration-300 flex-shrink-0",
                    openIndex === i ? "rotate-180 text-[#E53935]" : ""
                  )}
                />
              </button>

              {openIndex === i && (
                <div className="px-5 pb-5 pl-16">
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-10 text-center p-6 rounded-2xl glass border border-white/10">
          <p className="font-subheading font-semibold text-white mb-2">Still have questions?</p>
          <p className="font-body text-muted-foreground text-sm mb-4">
            Our team is happy to help. Reach out directly and we'll answer promptly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+8801707777878"
              className="inline-flex items-center justify-center gap-2 font-subheading font-semibold text-sm bg-[#E53935] hover:bg-[#FF6D00] text-white px-6 py-2.5 rounded-xl transition-colors"
            >
              Call Us
            </a>
            <a
              href="https://wa.me/8801707777878"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-subheading font-semibold text-sm border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 px-6 py-2.5 rounded-xl transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
