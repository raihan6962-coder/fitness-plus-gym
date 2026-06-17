import { useState } from "react"
import { MapPin, Phone, Globe, Clock, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Plot-37, 6th Floor, S.B Plaza, Dhaka 1230, Bangladesh",
    href: "https://maps.google.com/?q=Fitness+Plus+Gym+Dhaka",
    color: "#E53935",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 170 777 7878",
    href: "tel:+8801707777878",
    color: "#FF6D00",
  },
  {
    icon: Globe,
    label: "Website",
    value: "fitnessplusbd.com",
    href: "https://fitnessplusbd.com",
    color: "#FFD600",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Sat: 6AM–11PM | Sun: 8AM–8PM",
    href: null,
    color: "#E53935",
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: "", phone: "", subject: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E53935]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#E53935]" />
            <span className="font-subheading text-xs font-semibold text-[#E53935] uppercase tracking-widest">Contact Us</span>
            <div className="h-px w-8 bg-[#E53935]" />
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white tracking-wider mb-4">
            GET IN <span className="text-gradient-red">TOUCH</span>
          </h2>
          <p className="font-subheading text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Ready to start your fitness journey? Contact us today for membership, personal training, or any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Contact Info + Map */}
          <div className="space-y-6">
            {/* Quick contact buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+8801707777878"
                className="flex items-center gap-3 p-4 rounded-2xl bg-[#E53935] hover:bg-[#FF6D00] transition-colors group"
              >
                <Phone className="size-5 text-white flex-shrink-0" />
                <div>
                  <p className="font-subheading font-bold text-white text-sm">Call Now</p>
                  <p className="font-subheading text-white/70 text-xs">+880 170 777 7878</p>
                </div>
              </a>
              <a
                href="https://wa.me/8801707777878"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/30 hover:bg-[#25D366]/30 transition-colors group"
              >
                <MessageCircle className="size-5 text-[#25D366] flex-shrink-0" />
                <div>
                  <p className="font-subheading font-bold text-white text-sm">WhatsApp</p>
                  <p className="font-subheading text-white/70 text-xs">Chat with us</p>
                </div>
              </a>
            </div>

            {/* Contact items */}
            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-white/5"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}20`, border: `1px solid ${color}30` }}
                  >
                    <Icon className="size-4" style={{ color }} />
                  </div>
                  <div>
                    <p className="font-subheading text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="font-subheading text-sm text-white hover:text-[#E53935] transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="font-subheading text-sm text-white">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-white/10 h-56 bg-card relative">
              <iframe
                title="Fitness Plus Gym Location"
                src="https://maps.google.com/maps?q=Dhaka+1230+Bangladesh&z=14&output=embed"
                className="w-full h-full opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 border-2 border-[#E53935]/20 rounded-2xl pointer-events-none" />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-[#E53935]/30 to-[#FF6D00]/20 rounded-3xl blur-sm" />
            <div className="relative rounded-3xl bg-card border border-white/10 p-7">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-[#00C853]/20 flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="size-7 text-[#00C853]" />
                  </div>
                  <h3 className="font-heading text-3xl text-white mb-2">MESSAGE SENT!</h3>
                  <p className="font-subheading text-muted-foreground text-sm">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-heading text-3xl text-white tracking-wider mb-1">SEND MESSAGE</h3>
                  <p className="font-subheading text-muted-foreground text-xs mb-6">We respond within 24 hours</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-subheading text-xs font-semibold text-white/60 uppercase tracking-wider block mb-1.5">Name *</label>
                        <Input
                          required
                          placeholder="Full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:border-[#E53935] h-10 font-subheading text-sm"
                        />
                      </div>
                      <div>
                        <label className="font-subheading text-xs font-semibold text-white/60 uppercase tracking-wider block mb-1.5">Phone *</label>
                        <Input
                          required
                          type="tel"
                          placeholder="+880..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:border-[#E53935] h-10 font-subheading text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-subheading text-xs font-semibold text-white/60 uppercase tracking-wider block mb-1.5">Subject</label>
                      <Input
                        placeholder="Membership inquiry, Personal training..."
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:border-[#E53935] h-10 font-subheading text-sm"
                      />
                    </div>

                    <div>
                      <label className="font-subheading text-xs font-semibold text-white/60 uppercase tracking-wider block mb-1.5">Message</label>
                      <Textarea
                        rows={4}
                        placeholder="Tell us about your fitness goals or any questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:border-[#E53935] resize-none font-subheading text-sm"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full font-subheading font-bold bg-[#E53935] hover:bg-[#FF6D00] text-white border-0 h-11 transition-all duration-300 group"
                    >
                      Send Message
                      <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
