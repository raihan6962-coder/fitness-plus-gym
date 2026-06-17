import { useState } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const goals = [
  "Weight Loss",
  "Muscle Building",
  "Strength Training",
  "Body Transformation",
  "General Fitness",
  "Women's Fitness",
]

export function FreeTrial() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    goal: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.phone) {
      setSubmitted(true)
    }
  }

  return (
    <section id="free-trial" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(229,57,53,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(229,57,53,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(229,57,53,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-[#E53935]" />
              <span className="font-subheading text-xs font-semibold text-[#E53935] uppercase tracking-widest">Free Trial</span>
            </div>

            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white tracking-wider mb-4 leading-none">
              START YOUR<br />
              <span className="text-gradient-red">FITNESS JOURNEY</span><br />
              TODAY
            </h2>

            <p className="font-subheading text-muted-foreground text-sm leading-relaxed mb-8">
              Claim your free consultation and gym tour. Experience Fitness Plus before committing — we're confident you'll love it.
            </p>

            {/* Benefits */}
            <ul className="space-y-3">
              {[
                "Free facility tour with trainer",
                "No obligation, no pressure",
                "Fitness assessment included",
                "Personalized program preview",
                "Meet your future trainer",
              ].map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="size-4 text-[#00C853] flex-shrink-0" />
                  <span className="font-subheading text-sm text-white/80">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Urgency */}
            <div className="mt-8 p-4 rounded-xl border border-[#FFD600]/30 bg-[#FFD600]/5">
              <p className="font-subheading text-sm font-semibold text-[#FFD600]">
                🔥 Limited spots available this week
              </p>
              <p className="font-body text-xs text-white/60 mt-1">
                Join before spots fill up. New member offer expires soon.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="relative">
            {/* Glow border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-[#E53935] to-[#FF6D00] rounded-3xl opacity-30 blur-sm" />

            <div className="relative rounded-3xl bg-card border border-white/10 p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#00C853]/20 border border-[#00C853]/30 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="size-8 text-[#00C853]" />
                  </div>
                  <h3 className="font-heading text-4xl text-white tracking-wider mb-3">YOU'RE IN!</h3>
                  <p className="font-subheading text-muted-foreground text-sm mb-6">
                    We'll contact you within 24 hours to schedule your free trial.
                  </p>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-left space-y-2">
                    <p className="font-subheading text-xs font-semibold text-white">What happens next?</p>
                    <p className="font-body text-xs text-muted-foreground">1. We'll call you to confirm your visit</p>
                    <p className="font-body text-xs text-muted-foreground">2. Come to our gym at your scheduled time</p>
                    <p className="font-body text-xs text-muted-foreground">3. Meet your trainer & tour the facilities</p>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="font-heading text-3xl text-white tracking-wider mb-1">GET STARTED FREE</h3>
                  <p className="font-subheading text-muted-foreground text-xs mb-6">Fill the form — we'll contact you within 24 hours</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="font-subheading text-xs font-semibold text-white/70 uppercase tracking-wider block mb-1.5">
                        Full Name *
                      </label>
                      <Input
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:border-[#E53935] h-11 font-subheading text-sm"
                      />
                    </div>

                    <div>
                      <label className="font-subheading text-xs font-semibold text-white/70 uppercase tracking-wider block mb-1.5">
                        Phone Number *
                      </label>
                      <Input
                        required
                        type="tel"
                        placeholder="+880 1X XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:border-[#E53935] h-11 font-subheading text-sm"
                      />
                    </div>

                    <div>
                      <label className="font-subheading text-xs font-semibold text-white/70 uppercase tracking-wider block mb-1.5">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:border-[#E53935] h-11 font-subheading text-sm"
                      />
                    </div>

                    <div>
                      <label className="font-subheading text-xs font-semibold text-white/70 uppercase tracking-wider block mb-1.5">
                        Fitness Goal
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {goals.map((goal) => (
                          <button
                            key={goal}
                            type="button"
                            onClick={() => setFormData({ ...formData, goal })}
                            className={`font-subheading text-xs font-semibold px-3 py-2 rounded-lg border transition-all ${
                              formData.goal === goal
                                ? "bg-[#E53935] border-[#E53935] text-white"
                                : "border-white/10 text-white/50 hover:border-white/30 hover:text-white/80"
                            }`}
                          >
                            {goal}
                          </button>
                        ))}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full font-subheading font-bold bg-[#E53935] hover:bg-[#FF6D00] text-white border-0 h-12 glow-red transition-all duration-300 group mt-2"
                    >
                      Get Started Free
                      <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>

                  <p className="text-center mt-4 font-body text-xs text-muted-foreground">
                    By submitting, you agree to be contacted by our team. No spam, ever.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
