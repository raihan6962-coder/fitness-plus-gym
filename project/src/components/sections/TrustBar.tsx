import { Star, Award, Dumbbell, Zap, Thermometer, Users } from "lucide-react"

const trustItems = [
  { icon: Star, value: "399+", label: "Google Reviews", color: "#FFD600" },
  { icon: Award, value: "4.2★", label: "Star Rating", color: "#E53935" },
  { icon: Dumbbell, value: "Expert", label: "Trainers", color: "#FF6D00" },
  { icon: Zap, value: "Premium", label: "Equipment", color: "#E53935" },
  { icon: Thermometer, value: "Steam", label: "Bath Facility", color: "#FF6D00" },
  { icon: Users, value: "Women", label: "Friendly Env", color: "#FFD600" },
]

export function TrustBar() {
  return (
    <section
      id="trust-bar"
      className="relative py-5 overflow-hidden"
      style={{ background: "linear-gradient(90deg, #E53935 0%, #CC0000 50%, #E53935 100%)" }}
    >
      {/* Animated shine overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 3s linear infinite",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
          {trustItems.map(({ icon: Icon, value, label }, i) => (
            <div key={label} className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <Icon className="size-3.5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-white text-lg leading-none">{value}</span>
                <span className="font-subheading text-white/80 text-[10px] tracking-wider uppercase leading-none">{label}</span>
              </div>
              {i < trustItems.length - 1 && (
                <div className="hidden sm:block w-px h-8 bg-white/30 ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
