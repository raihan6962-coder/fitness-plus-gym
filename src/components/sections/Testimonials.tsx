import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Md. Ariful Islam",
    role: "Working Professional",
    rating: 5,
    text: "I've been training here consistently and the trainers are always supportive and helpful. The environment keeps me motivated every single day. Best gym in Dhaka!",
    initials: "AI",
    color: "#E53935",
  },
  {
    name: "Nusrat Jahan",
    role: "Software Engineer",
    rating: 5,
    text: "One of the best gyms considering the facilities and value. Friendly staff and quality equipment. The women's section is a huge plus — I feel very comfortable here.",
    initials: "NJ",
    color: "#FF6D00",
  },
  {
    name: "Tanvir Rahman",
    role: "Business Owner",
    rating: 4,
    text: "Great place for regular workouts. Professional trainers and a welcoming atmosphere. The steam bath facility is excellent for recovery after intense sessions.",
    initials: "TR",
    color: "#FFD600",
  },
  {
    name: "Shayla Akter",
    role: "University Student",
    rating: 5,
    text: "As a beginner, I was nervous about joining a gym. But the trainers here made me feel so welcome and guided me step by step. I've lost 12kg in 3 months!",
    initials: "SA",
    color: "#E53935",
  },
  {
    name: "Kamal Hossain",
    role: "Corporate Executive",
    rating: 5,
    text: "The personal training sessions are excellent. My trainer customized everything based on my busy schedule and I'm seeing amazing results. Highly recommend!",
    initials: "KH",
    color: "#FF6D00",
  },
  {
    name: "Rifat Ahmed",
    role: "Fitness Enthusiast",
    rating: 4,
    text: "Quality equipment, experienced trainers, and a great community. The extended hours allow me to train early morning before work. Perfect location in Dhaka.",
    initials: "RA",
    color: "#FFD600",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E53935]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#E53935]" />
            <span className="font-subheading text-xs font-semibold text-[#E53935] uppercase tracking-widest">Testimonials</span>
            <div className="h-px w-8 bg-[#E53935]" />
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white tracking-wider mb-4">
            WHAT MEMBERS <span className="text-gradient-red">SAY</span>
          </h2>

          {/* Rating summary */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="text-center">
              <div className="font-heading text-6xl text-white leading-none">4.2</div>
              <div className="flex justify-center mt-1">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="size-4 fill-[#FFD600] text-[#FFD600]" />
                ))}
                <Star className="size-4 fill-[#FFD600]/40 text-[#FFD600]/40" />
              </div>
              <div className="font-subheading text-xs text-muted-foreground mt-1">399 Google Reviews</div>
            </div>
            <div className="w-px h-14 bg-white/10" />
            <div className="text-left">
              <div className="space-y-1">
                {[
                  { stars: 5, pct: 68 },
                  { stars: 4, pct: 22 },
                  { stars: 3, pct: 7 },
                  { stars: 2, pct: 2 },
                  { stars: 1, pct: 1 },
                ].map(({ stars, pct }) => (
                  <div key={stars} className="flex items-center gap-2">
                    <span className="font-subheading text-[10px] text-muted-foreground w-3">{stars}</span>
                    <Star className="size-2.5 fill-[#FFD600] text-[#FFD600]" />
                    <div className="w-20 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#FFD600] rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="font-subheading text-[10px] text-muted-foreground">{pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map(({ name, role, rating, text, initials, color }) => (
            <div
              key={name}
              className="group relative p-6 rounded-2xl bg-card border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ background: color }}
              />

              {/* Quote icon */}
              <Quote className="size-6 text-[#E53935]/30 mb-3" />

              {/* Stars */}
              <div className="flex mb-3">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-[#FFD600] text-[#FFD600]" />
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-white/70 text-sm leading-relaxed mb-5 italic">"{text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-subheading font-bold text-white text-xs"
                  style={{ background: `linear-gradient(135deg, ${color}, ${color}80)` }}
                >
                  {initials}
                </div>
                <div>
                  <p className="font-subheading font-bold text-white text-sm">{name}</p>
                  <p className="font-subheading text-muted-foreground text-xs">{role}</p>
                </div>
                <div className="ml-auto flex items-center gap-1 glass rounded-full px-2 py-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00C853]" />
                  <span className="font-subheading text-[10px] text-[#00C853]">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-10">
          <a
            href="https://g.page/fitnessplusbd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass border border-white/15 hover:border-[#E53935]/30 rounded-xl px-6 py-3 font-subheading text-sm font-semibold text-white hover:text-[#E53935] transition-all"
          >
            <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            View All 399 Reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
