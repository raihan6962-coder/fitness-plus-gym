import { UserCheck, Zap, DollarSign, Thermometer, Users, Heart, Clock, Target } from "lucide-react"

const reasons = [
  {
    icon: UserCheck,
    title: "Expert Trainers",
    desc: "Certified professionals dedicated to your fitness goals with personalized guidance and motivation.",
    color: "#E53935",
  },
  {
    icon: Zap,
    title: "Modern Equipment",
    desc: "State-of-the-art fitness equipment maintained to the highest standards for optimal performance.",
    color: "#FF6D00",
  },
  {
    icon: DollarSign,
    title: "Affordable Membership",
    desc: "Premium fitness experience at competitive prices with flexible membership options to suit every budget.",
    color: "#FFD600",
  },
  {
    icon: Thermometer,
    title: "Steam Bath Facility",
    desc: "Relax and recover in our premium steam bath facility after intense training sessions.",
    color: "#E53935",
  },
  {
    icon: Users,
    title: "Dedicated Women's Area",
    desc: "A private, comfortable fitness space exclusively designed for women to train with confidence.",
    color: "#FF6D00",
  },
  {
    icon: Heart,
    title: "Friendly Community",
    desc: "Join a supportive community of fitness enthusiasts who inspire and motivate each other daily.",
    color: "#FFD600",
  },
  {
    icon: Clock,
    title: "Extended Hours",
    desc: "Early morning to late evening hours so you can fit your workout into any schedule.",
    color: "#E53935",
  },
  {
    icon: Target,
    title: "Results-Driven Programs",
    desc: "Scientifically designed programs focused on delivering measurable, lasting fitness results.",
    color: "#FF6D00",
  },
]

export function WhyChoose() {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E53935]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FF6D00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#E53935]" />
            <span className="font-subheading text-xs font-semibold text-[#E53935] uppercase tracking-widest">Why Fitness Plus</span>
            <div className="h-px w-8 bg-[#E53935]" />
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white tracking-wider mb-4">
            YOUR REASON TO <span className="text-gradient-red">CHOOSE US</span>
          </h2>
          <p className="font-subheading text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Discover why hundreds of members choose Fitness Plus as their fitness home in Dhaka.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="group relative p-6 rounded-2xl bg-card border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 overflow-hidden"
            >
              {/* Hover glow background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${color}15 0%, transparent 70%)` }}
              />

              {/* Icon */}
              <div
                className="relative w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${color}20`, border: `1px solid ${color}30` }}
              >
                <Icon className="size-5" style={{ color }} />
              </div>

              {/* Content */}
              <h3 className="font-subheading font-bold text-white text-sm mb-2">{title}</h3>
              <p className="font-body text-muted-foreground text-xs leading-relaxed">{desc}</p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
