import { Flame, Dumbbell, Zap, RefreshCw, User, Activity, Users, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const programs = [
  {
    icon: Flame,
    title: "Weight Loss Program",
    desc: "Scientifically designed fat-burning protocols combining cardio, HIIT, and nutrition guidance for sustainable weight loss.",
    benefits: ["Calorie Deficit Planning", "HIIT Workouts", "Progress Tracking"],
    badge: "Most Popular",
    badgeColor: "#E53935",
    gradient: "from-red-500/20 to-orange-500/10",
  },
  {
    icon: Dumbbell,
    title: "Muscle Building",
    desc: "Progressive overload training programs to maximize muscle hypertrophy and strength gains with expert coaching.",
    benefits: ["Progressive Training", "Protein Guidance", "Recovery Plans"],
    badge: "Top Rated",
    badgeColor: "#FF6D00",
    gradient: "from-orange-500/20 to-yellow-500/10",
  },
  {
    icon: Zap,
    title: "Strength Training",
    desc: "Power-focused programs for compound movements, powerlifting techniques, and building functional strength.",
    benefits: ["Compound Lifts", "Powerlifting Basics", "Core Strength"],
    badge: null,
    badgeColor: "#E53935",
    gradient: "from-yellow-500/20 to-red-500/10",
  },
  {
    icon: RefreshCw,
    title: "Body Transformation",
    desc: "Complete 12-week transformation programs combining strength, cardio, and nutrition for total body change.",
    benefits: ["12-Week Plan", "Before/After Tracking", "Full Coaching"],
    badge: "Premium",
    badgeColor: "#FFD600",
    gradient: "from-yellow-500/20 to-orange-500/10",
  },
  {
    icon: User,
    title: "Personal Training",
    desc: "One-on-one sessions with certified personal trainers customized entirely to your goals and fitness level.",
    benefits: ["1-on-1 Coaching", "Custom Plans", "Direct Accountability"],
    badge: "Exclusive",
    badgeColor: "#E53935",
    gradient: "from-red-500/20 to-pink-500/10",
  },
  {
    icon: Activity,
    title: "General Fitness",
    desc: "Well-rounded fitness programs for overall health improvement, energy, and long-term wellness maintenance.",
    benefits: ["Full Body Workout", "Flexibility", "Endurance"],
    badge: null,
    badgeColor: "#FF6D00",
    gradient: "from-blue-500/20 to-teal-500/10",
  },
  {
    icon: Users,
    title: "Women's Fitness",
    desc: "Programs designed specifically for women focusing on toning, flexibility, core strength, and posture.",
    benefits: ["Toning Programs", "Yoga & Pilates", "Safe Environment"],
    badge: "Ladies Only",
    badgeColor: "#FF6D00",
    gradient: "from-pink-500/20 to-purple-500/10",
  },
  {
    icon: Heart,
    title: "Cardio Training",
    desc: "Cardiovascular conditioning programs to improve heart health, stamina, and burn calories efficiently.",
    benefits: ["Endurance Building", "Heart Health", "Fat Burn"],
    badge: null,
    badgeColor: "#E53935",
    gradient: "from-green-500/20 to-teal-500/10",
  },
]

export function Programs() {
  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#151515] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(229,57,53,0.5) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#E53935]" />
            <span className="font-subheading text-xs font-semibold text-[#E53935] uppercase tracking-widest">Fitness Programs</span>
            <div className="h-px w-8 bg-[#E53935]" />
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white tracking-wider mb-4">
            PROGRAMS FOR <span className="text-gradient-red">EVERY GOAL</span>
          </h2>
          <p className="font-subheading text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Whether you want to lose weight, build muscle, or improve overall fitness — we have the right program for you.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map(({ icon: Icon, title, desc, benefits, badge, badgeColor, gradient }) => (
            <div
              key={title}
              className="group relative rounded-2xl bg-card border border-white/5 hover:border-[#E53935]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 overflow-hidden flex flex-col"
            >
              {/* Top gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative p-5 flex-1 flex flex-col">
                {/* Badge */}
                {badge && (
                  <div className="mb-3">
                    <span
                      className="inline-flex font-subheading text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white"
                      style={{ background: badgeColor }}
                    >
                      {badge}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${badgeColor}20`, border: `1px solid ${badgeColor}30` }}
                >
                  <Icon className="size-5" style={{ color: badgeColor }} />
                </div>

                {/* Title & Desc */}
                <h3 className="font-subheading font-bold text-white text-sm mb-2 leading-tight">{title}</h3>
                <p className="font-body text-muted-foreground text-xs leading-relaxed mb-4 flex-1">{desc}</p>

                {/* Benefits */}
                <ul className="space-y-1 mb-5">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-white/70">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: badgeColor }} />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  size="sm"
                  className="w-full font-subheading font-semibold text-xs h-9 border-0 transition-all duration-300"
                  style={{ background: `${badgeColor}20`, color: badgeColor }}
                >
                  <a href="#free-trial">Learn More</a>
                </Button>
              </div>

              {/* Bottom accent line */}
              <div
                className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${badgeColor}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
