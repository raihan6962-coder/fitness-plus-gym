import { Check, Zap, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Basic",
    price: "2,500",
    period: "/month",
    desc: "Perfect for beginners getting started on their fitness journey.",
    icon: Zap,
    color: "#BDBDBD",
    features: [
      { text: "Full Gym Access", included: true },
      { text: "Locker Room Access", included: true },
      { text: "Basic Fitness Assessment", included: true },
      { text: "Group Classes (2/week)", included: true },
      { text: "Trainer Consultation", included: false },
      { text: "Steam Bath Access", included: false },
      { text: "Nutrition Guidance", included: false },
      { text: "Priority Support", included: false },
    ],
    cta: "Get Basic",
    popular: false,
  },
  {
    name: "Standard",
    price: "4,000",
    period: "/month",
    desc: "Our most popular plan for dedicated fitness enthusiasts.",
    icon: Zap,
    color: "#E53935",
    features: [
      { text: "Full Gym Access", included: true },
      { text: "Locker Room Access", included: true },
      { text: "Full Fitness Assessment", included: true },
      { text: "Unlimited Group Classes", included: true },
      { text: "Trainer Consultation (2x)", included: true },
      { text: "Steam Bath Access", included: true },
      { text: "Nutrition Guidance", included: false },
      { text: "Priority Support", included: false },
    ],
    cta: "Join Standard",
    popular: true,
  },
  {
    name: "Premium",
    price: "7,000",
    period: "/month",
    desc: "The ultimate fitness experience with complete access and support.",
    icon: Crown,
    color: "#FFD600",
    features: [
      { text: "Full Gym Access", included: true },
      { text: "Locker Room Access", included: true },
      { text: "Full Fitness Assessment", included: true },
      { text: "Unlimited Group Classes", included: true },
      { text: "Personal Trainer (4x/month)", included: true },
      { text: "Unlimited Steam Bath", included: true },
      { text: "Nutrition Guidance", included: true },
      { text: "Priority Support", included: true },
    ],
    cta: "Go Premium",
    popular: false,
  },
]

export function Membership() {
  return (
    <section id="membership" className="py-20 lg:py-28 bg-[#151515] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(229,57,53,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(229,57,53,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#E53935]" />
            <span className="font-subheading text-xs font-semibold text-[#E53935] uppercase tracking-widest">Membership Plans</span>
            <div className="h-px w-8 bg-[#E53935]" />
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white tracking-wider mb-4">
            CHOOSE YOUR <span className="text-gradient-red">PLAN</span>
          </h2>
          <p className="font-subheading text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Flexible membership options designed to fit your budget and fitness goals. All prices in BDT.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map(({ name, price, period, desc, icon: Icon, color, features, cta, popular }) => (
            <div
              key={name}
              className={cn(
                "relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2",
                popular
                  ? "border-2 border-[#E53935] shadow-2xl shadow-[#E53935]/20 scale-105"
                  : "border border-white/10 hover:border-white/20"
              )}
              style={{ background: popular ? "linear-gradient(135deg, #1F1F1F 0%, #2a0a0a 100%)" : "#1F1F1F" }}
            >
              {/* Popular badge */}
              {popular && (
                <div className="absolute top-0 left-0 right-0 text-center py-2 bg-[#E53935]">
                  <span className="font-subheading text-xs font-bold text-white uppercase tracking-widest">Most Popular</span>
                </div>
              )}

              <div className={cn("p-7 lg:p-8", popular && "pt-12")}>
                {/* Plan header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="font-subheading font-bold text-white text-lg">{name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                  </div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${color}20`, border: `1px solid ${color}30` }}
                  >
                    <Icon className="size-5" style={{ color }} />
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="font-subheading text-xs text-muted-foreground">৳</span>
                    <span className="font-heading text-5xl leading-none" style={{ color }}>{price}</span>
                    <span className="font-subheading text-xs text-muted-foreground mb-1.5">{period}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 mb-6" />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {features.map(({ text, included }) => (
                    <li key={text} className="flex items-center gap-3">
                      <div
                        className={cn(
                          "w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 transition-colors",
                          included ? "bg-[#00C853]/20" : "bg-white/5"
                        )}
                      >
                        <Check
                          className={cn("size-2.5", included ? "text-[#00C853]" : "text-white/20")}
                        />
                      </div>
                      <span className={cn("text-xs font-subheading", included ? "text-white/80" : "text-white/30 line-through")}>
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  className={cn(
                    "w-full font-subheading font-bold h-12 transition-all duration-300",
                    popular
                      ? "bg-[#E53935] hover:bg-[#FF6D00] text-white border-0 glow-red"
                      : "border text-white hover:bg-white/10"
                  )}
                  style={!popular ? { borderColor: `${color}40`, color } : undefined}
                  variant={popular ? "default" : "outline"}
                >
                  <a href="#free-trial">{cta}</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Annual discount note */}
        <p className="text-center mt-8 font-subheading text-xs text-muted-foreground">
          Save up to 20% with annual membership • Corporate packages available •{" "}
          <a href="#contact" className="text-[#E53935] hover:underline">Contact us for details</a>
        </p>
      </div>
    </section>
  )
}
