import { Award, Clipboard, Salad, LineChart, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const ptFeatures = [
  {
    icon: Award,
    title: "Certified Trainers",
    desc: "All personal trainers are nationally certified with years of real-world experience.",
    color: "#E53935",
  },
  {
    icon: Clipboard,
    title: "Customized Workout Plans",
    desc: "Every training session is tailored specifically to your body type, goals, and fitness level.",
    color: "#FF6D00",
  },
  {
    icon: Salad,
    title: "Nutrition Guidance",
    desc: "Receive professional dietary advice to complement your training for faster results.",
    color: "#FFD600",
  },
  {
    icon: LineChart,
    title: "Progress Tracking",
    desc: "Regular assessments and progress reviews to keep you on track and motivated.",
    color: "#E53935",
  },
  {
    icon: User,
    title: "One-on-One Coaching",
    desc: "Undivided attention and hands-on support during every workout session.",
    color: "#FF6D00",
  },
  {
    icon: Award,
    title: "Goal Achievement",
    desc: "Structured milestone planning to ensure you reach your specific fitness targets.",
    color: "#FFD600",
  },
]

const stats = [
  { value: "100%", label: "Certified Trainers" },
  { value: "500+", label: "Members Transformed" },
  { value: "12 Wk", label: "Average Result Time" },
  { value: "4.2★", label: "Trainer Rating" },
]

export function PersonalTraining({ trainerImage }: { trainerImage?: string }) {
  return (
    <section id="personal-training" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E53935]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              {trainerImage ? (
                <img src={trainerImage} alt="Personal Trainer" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#1F1F1F] via-[#2a0a0a] to-[#1F1F1F] flex items-center justify-center">
                  <div className="text-center">
                    <User className="size-24 text-[#E53935]/30 mx-auto mb-4" />
                    <p className="font-heading text-5xl text-white/10 tracking-wider">TRAINER</p>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-2 gap-3">
                  {stats.slice(0, 2).map(({ value, label }) => (
                    <div key={label} className="glass-dark rounded-xl p-3 text-center">
                      <div className="font-heading text-2xl text-[#E53935] leading-none">{value}</div>
                      <div className="font-subheading text-[10px] text-white/60 uppercase tracking-wider mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Side floating card */}
            <div className="absolute -right-6 top-1/3 glass-dark rounded-2xl p-4 border border-[#E53935]/20 shadow-xl">
              <div className="font-heading text-3xl text-[#FFD600]">500+</div>
              <div className="font-subheading text-xs text-white/60 uppercase tracking-wider">Members Transformed</div>
            </div>

            {/* Red accent line */}
            <div className="absolute -left-4 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-[#E53935] to-transparent rounded-full" />
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-[#E53935]" />
              <span className="font-subheading text-xs font-semibold text-[#E53935] uppercase tracking-widest">Personal Training</span>
            </div>

            <h2 className="font-heading text-5xl sm:text-6xl text-white tracking-wider mb-4 leading-none">
              TRAIN WITH THE <span className="text-gradient-red">BEST</span>
            </h2>

            <p className="font-subheading text-muted-foreground text-sm leading-relaxed mb-8">
              Our certified personal trainers bring expertise, passion, and accountability to every session. Get a completely customized fitness plan designed around your unique body, goals, and lifestyle.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {ptFeatures.map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-white/5 hover:border-white/15 transition-colors"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${color}20`, border: `1px solid ${color}30` }}
                  >
                    <Icon className="size-4" style={{ color }} />
                  </div>
                  <div>
                    <h4 className="font-subheading font-bold text-white text-xs mb-0.5">{title}</h4>
                    <p className="font-body text-muted-foreground text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="font-subheading font-bold bg-[#E53935] hover:bg-[#FF6D00] text-white border-0 px-8 h-12 glow-red transition-all duration-300 group"
            >
              <a href="#free-trial">
                Book Consultation
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
