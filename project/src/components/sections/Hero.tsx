import { Star, Users, Dumbbell, Thermometer, Shield, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { icon: Star, value: "4.2", label: "Star Rating" },
  { icon: Users, value: "399+", label: "Reviews" },
  { icon: Dumbbell, value: "Pro", label: "Trainers" },
  { icon: Thermometer, value: "Steam", label: "Bath" },
  { icon: Shield, value: "Women's", label: "Section" },
]

export function Hero({ heroImage }: { heroImage?: string }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {heroImage ? (
          <img
            src={heroImage}
            alt="Fitness Plus Gym"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#0B0B0B] via-[#1a0a0a] to-[#0B0B0B]" />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#E53935]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/5 w-72 h-72 bg-[#FF6D00]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Red accent line left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-40 bg-gradient-to-b from-transparent via-[#E53935] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass border border-[#E53935]/30 rounded-full px-4 py-1.5 mb-6">
            <div className="flex">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="size-3 fill-[#FFD600] text-[#FFD600]" />
              ))}
              <Star className="size-3 fill-[#FFD600]/40 text-[#FFD600]/40" />
            </div>
            <span className="font-subheading text-xs font-semibold text-white">4.2 Rating • 399+ Google Reviews</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-7xl sm:text-8xl lg:text-[10rem] text-white leading-none tracking-wider mb-4">
            TRANSFORM<br />
            <span className="text-gradient-red">YOUR BODY.</span><br />
            <span className="text-5xl sm:text-6xl lg:text-8xl text-white/90">ELEVATE YOUR LIFE.</span>
          </h1>

          {/* Subheadline */}
          <p className="font-subheading text-base sm:text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
            Join one of Dhaka's trusted fitness communities and achieve your goals with expert trainers, modern equipment, and a motivating environment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="font-subheading font-bold text-base bg-[#E53935] hover:bg-[#FF6D00] text-white border-0 px-8 h-14 glow-red transition-all duration-300 hover:scale-105"
            >
              <a href="#free-trial">Start Free Trial</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-subheading font-bold text-base border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 h-14 transition-all duration-300"
            >
              <a href="#facilities">Book Gym Tour</a>
            </Button>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#E53935]/20 border border-[#E53935]/30 flex items-center justify-center">
                  <Icon className="size-4 text-[#E53935]" />
                </div>
                <div>
                  <div className="font-heading text-lg text-white leading-none">{value}</div>
                  <div className="font-subheading text-[10px] text-white/50 uppercase tracking-wider">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#trust-bar"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
      >
        <span className="font-subheading text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown className="size-4 animate-bounce" />
      </a>
    </section>
  )
}
