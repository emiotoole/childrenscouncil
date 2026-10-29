import Link from "next/link";

const ITEMS = [
  { label: "30 lesson plans", desc: "Ready to use in your setting", color: "bg-blue-brand/10 text-blue-brand" },
  { label: "Book recommendations", desc: "Curated picture books for each skill", color: "bg-pink-brand/15 text-pink-brand" },
  { label: "Observation template", desc: "For EYLF V2.0 documentation", color: "bg-sage/15 text-sage" },
];

export default function ResourcesBanner() {
  return (
    <section className="bg-navy py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-5">
            <span className="inline-block bg-white/10 text-cream/70 text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
              Free for educators
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-cream leading-tight text-balance">
              Everything you need to get started.
            </h2>
            <p className="text-cream/65 text-lg leading-relaxed">
              We&apos;ve built a growing library of practical tools for early childhood educators — lesson plans, curated book lists, and observation guides, all designed around the four skills that sustain a healthy democracy.
            </p>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 bg-amber-brand text-navy font-bold px-6 py-3 rounded-full hover:opacity-90 transition text-sm"
            >
              Browse the full library
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Cards */}
          <div className="space-y-4">
            {ITEMS.map((item) => (
              <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 flex items-center gap-5">
                <span className={`shrink-0 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide ${item.color}`}>
                  {item.label}
                </span>
                <p className="text-cream/60 text-sm font-semibold">{item.desc}</p>
              </div>
            ))}
            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 flex items-center gap-5">
              <span className="shrink-0 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide bg-amber-brand/15 text-amber-brand">
                More coming
              </span>
              <p className="text-cream/60 text-sm font-semibold">Training guides and family resources in development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
