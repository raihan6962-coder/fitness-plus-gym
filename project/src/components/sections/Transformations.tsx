import { TrendingDown, TrendingUp, Award } from "lucide-react"

const transformations = [
  {
    name: "Rahim Ahmed",
    age: 32,
    type: "Weight Loss",
    icon: TrendingDown,
    before: "92 kg",
    after: "72 kg",
    duration: "4 Months",
    change: "-20 kg",
    quote: "I lost 20kg in 4 months with consistent training and guidance from my trainer.",
    color: "#E53935",
  },
  {
    name: "Sumaiya Begum",
    age: 27,
    type: "Body Transformation",
    icon: Award,
    before: "Unfit",
    after: "Toned & Fit",
    duration: "3 Months",
    change: "Full Transform",
    quote: "The women's section made me feel safe and comfortable. Amazing transformation!",
    color: "#FF6D00",
  },
  {
    name: "Karim Hassan",
    age: 25,
    type: "Muscle Building",
    icon: TrendingUp,
    before: "65 kg",
    after: "80 kg",
    duration: "6 Months",
    change: "+15 kg",
    quote: "Gained 15kg of lean muscle with the expert guidance of the trainers here.",
    color: "#FFD600",
  },
  {
    name: "Fatema Islam",
    age: 35,
    type: "Weight Loss",
    icon: TrendingDown,
    before: "85 kg",
    after: "68 kg",
    duration: "5 Months",
    change: "-17 kg",
    quote: "Fitness Plus gave me my confidence back. The trainers are incredibly supportive.",
    color: "#E53935",
  },
]

const milestones = [
  { value: "500+", label: "Successful Transformations" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "20kg", label: "Avg Weight Loss" },
  { value: "12wk", label: "Avg Result Time" },
]

export function Transformations() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#151515] relative overflow-hidden">
      {/* BG Pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(229,57,53,0.5) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#E53935]" />
            <span className="font-subheading text-xs font-semibold text-[#E53935] uppercase tracking-widest">Success Stories</span>
            <div className="h-px w-8 bg-[#E53935]" />
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white tracking-wider mb-4">
            REAL PEOPLE <span className="text-gradient-red">REAL RESULTS</span>
          </h2>
          <p className="font-subheading text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            These are real members of Fitness Plus who transformed their bodies with dedication and professional support.
          </p>
        </div>

        {/* Milestone Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {milestones.map(({ value, label }) => (
            <div key={label} className="text-center p-5 rounded-2xl bg-card border border-white/5">
              <div className="font-heading text-5xl text-gradient-red mb-1">{value}</div>
              <div className="font-subheading text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>

        {/* Transformation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {transformations.map(({ name, age, type, icon: Icon, before, after, duration, change, quote, color }) => (
            <div
              key={name}
              className="group relative rounded-2xl bg-card border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Before/After visual */}
              <div className="relative h-48 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] overflow-hidden">
                {/* Diagonal split */}
                <div className="absolute inset-0 flex">
                  {/* Before side */}
                  <div className="flex-1 flex flex-col items-center justify-center bg-black/30 relative">
                    <div className="font-heading text-5xl text-white/20">B4</div>
                    <div className="font-subheading text-xs text-white/40 uppercase tracking-wider">Before</div>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                      <span className="font-heading text-2xl text-white/60">{before}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-0.5 h-full" style={{ background: `${color}` }} />
                    <div
                      className="absolute w-8 h-8 rounded-full border-2 flex items-center justify-center glass-dark"
                      style={{ borderColor: color }}
                    >
                      <Icon className="size-4" style={{ color }} />
                    </div>
                  </div>

                  {/* After side */}
                  <div className="flex-1 flex flex-col items-center justify-center relative" style={{ background: `${color}10` }}>
                    <div className="font-heading text-5xl text-white/20">AFT</div>
                    <div className="font-subheading text-xs text-white/40 uppercase tracking-wider">After</div>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                      <span className="font-heading text-2xl" style={{ color }}>{after}</span>
                    </div>
                  </div>
                </div>

                {/* Change badge */}
                <div
                  className="absolute top-3 right-3 px-2 py-0.5 rounded-full font-subheading text-xs font-bold text-white"
                  style={{ background: color }}
                >
                  {change}
                </div>

                {/* Duration */}
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full font-subheading text-xs font-semibold text-white/70 glass">
                  {duration}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-subheading font-bold text-white text-sm">{name}</h4>
                    <span className="font-subheading text-xs text-muted-foreground">{type} • Age {age}</span>
                  </div>
                </div>
                <p className="font-body text-xs text-white/60 italic leading-relaxed">"{quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
