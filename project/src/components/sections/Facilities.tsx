import { Dumbbell, Activity, Users, Thermometer, Lock, Target } from "lucide-react"

const facilities = [
  {
    icon: Dumbbell,
    title: "Main Gym Floor",
    desc: "Spacious main training area with free weights, machines, and functional training zones.",
    tag: "Training Zone",
    color: "#E53935",
  },
  {
    icon: Dumbbell,
    title: "Strength Equipment",
    desc: "Commercial-grade barbells, dumbbells, cable machines, and powerlifting platforms.",
    tag: "Strength",
    color: "#FF6D00",
  },
  {
    icon: Activity,
    title: "Cardio Area",
    desc: "Treadmills, ellipticals, stationary bikes, and rowing machines for cardiovascular training.",
    tag: "Cardio",
    color: "#FFD600",
  },
  {
    icon: Users,
    title: "Women's Section",
    desc: "A dedicated private fitness area exclusively for female members with all essential equipment.",
    tag: "Ladies Only",
    color: "#E53935",
  },
  {
    icon: Thermometer,
    title: "Steam Bath",
    desc: "Premium steam bath facility to relax muscles, detox, and enhance recovery after workouts.",
    tag: "Recovery",
    color: "#FF6D00",
  },
  {
    icon: Lock,
    title: "Locker Area",
    desc: "Secure, clean locker rooms and changing areas for your comfort and peace of mind.",
    tag: "Amenity",
    color: "#FFD600",
  },
  {
    icon: Target,
    title: "Training Zones",
    desc: "Dedicated zones for functional training, stretching, abs work, and group sessions.",
    tag: "Functional",
    color: "#E53935",
  },
  {
    icon: Dumbbell,
    title: "Free Weight Zone",
    desc: "Complete range of dumbbells and barbells with mirrors and proper lighting for peak performance.",
    tag: "Weights",
    color: "#FF6D00",
  },
]

const facilityHighlights = [
  { label: "Training Equipment", value: "100+" },
  { label: "Sq Ft Space", value: "5000+" },
  { label: "Training Zones", value: "7+" },
  { label: "CCTV Security", value: "24/7" },
]

export function Facilities({ facilityImage }: { facilityImage?: string }) {
  return (
    <section id="facilities" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#E53935]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FF6D00]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#E53935]" />
            <span className="font-subheading text-xs font-semibold text-[#E53935] uppercase tracking-widest">Our Facilities</span>
            <div className="h-px w-8 bg-[#E53935]" />
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white tracking-wider mb-4">
            WORLD-CLASS <span className="text-gradient-red">FACILITIES</span>
          </h2>
          <p className="font-subheading text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Train in a premium environment equipped with professional-grade equipment and modern amenities.
          </p>
        </div>

        {/* Feature Image + Stats */}
        <div className="rounded-3xl overflow-hidden relative mb-12 bg-card border border-white/10">
          <div className="relative h-64 sm:h-80 lg:h-96">
            {facilityImage ? (
              <img src={facilityImage} alt="Fitness Plus Gym Floor" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#1F1F1F] to-[#0B0B0B] flex items-center justify-center">
                <div className="text-center">
                  <Dumbbell className="size-16 text-[#E53935]/40 mx-auto mb-3" />
                  <p className="font-heading text-4xl text-white/20 tracking-wider">GYM FLOOR</p>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {facilityHighlights.map(({ label, value }) => (
                  <div key={label} className="text-center">
                    <div className="font-heading text-4xl text-white leading-none">{value}</div>
                    <div className="font-subheading text-xs text-white/60 uppercase tracking-wider mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {facilities.map(({ icon: Icon, title, desc, tag, color }) => (
            <div
              key={title}
              className="group p-5 rounded-2xl bg-card border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: `${color}20`, border: `1px solid ${color}30` }}
                >
                  <Icon className="size-4" style={{ color }} />
                </div>
                <span
                  className="font-subheading text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                  style={{ background: `${color}20`, color }}
                >
                  {tag}
                </span>
              </div>
              <h3 className="font-subheading font-bold text-white text-sm mb-1.5">{title}</h3>
              <p className="font-body text-muted-foreground text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
