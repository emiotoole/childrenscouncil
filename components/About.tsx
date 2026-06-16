import Image from "next/image";

const pillars = [
  {
    icon: "/svgs/buddy-heart.svg",
    color: "bg-pink-brand/15",
    borderColor: "border-pink-brand/30",
    title: "Empathy",
    subtitle: "Feeling with, not just feeling sorry for",
    body:
      "Children learn to notice when someone is sad without being told, offer comfort unprompted, and use curiosity rather than shame when someone is hurt. Empathy is the seed of every civic act.",
  },
  {
    icon: "/svgs/buddy-star.svg",
    color: "bg-amber-brand/15",
    borderColor: "border-amber-brand/30",
    title: "Navigating Difference",
    subtitle: "Our community is richer because we're not the same",
    body:
      "Children notice difference without assigning better or worse, ask genuine questions about unfamiliar practices, and defend a friend treated unfairly. Early experiences of difference framed positively build pluralism.",
  },
  {
    icon: "/svgs/buddy-bloom.svg",
    color: "bg-coral/10",
    borderColor: "border-coral/20",
    title: "Long-term Thinking",
    subtitle: "Small actions now, big ripples later",
    body:
      "Democratic decisions ripple far into the future. We help children notice that choices have consequences for people who aren't in the room yet — through gardens, letters to future selves, and consequence chains.",
  },
  {
    icon: "/svgs/buddy-scallop.svg",
    color: "bg-sage/10",
    borderColor: "border-sage/20",
    title: "Cooperation",
    subtitle: "Building what neither could alone",
    body:
      "Every democratic institution depends on cooperation. Ages 4–6 is the critical window when children move from parallel play to genuinely collaborative play. We help them experience the pleasure of shared success.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block bg-sage/15 text-sage font-bold text-sm px-4 py-1.5 rounded-full uppercase tracking-wide">
            The Program
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-navy text-balance">
            Four skills, built{" "}
            <span className="text-coral">through play.</span>
          </h2>
          <p className="text-navy/65 text-lg max-w-2xl mx-auto leading-relaxed">
            Between ages 4 and 6, during a brief neurological window when the
            brain is uniquely receptive to social and emotional learning,
            children develop the dispositions that shape civic life. Most civic
            education doesn&apos;t begin until adolescence. By then, the
            dispositions are already set.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`rounded-3xl border-2 ${pillar.borderColor} ${pillar.color} p-8 space-y-4`}
            >
              <div className="w-16 h-16">
                <Image
                  src={pillar.icon}
                  alt={pillar.title}
                  width={64}
                  height={64}
                />
              </div>
              <div>
                <h3 className="text-lg font-black text-navy">{pillar.title}</h3>
                <p className="text-sm font-semibold text-navy/50 italic mt-0.5">{pillar.subtitle}</p>
              </div>
              <p className="text-navy/65 leading-relaxed text-sm">{pillar.body}</p>
            </div>
          ))}
        </div>

        {/* Full-width feature row */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Decorative graphic */}
          <div className="relative flex items-center justify-center h-[340px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full bg-blue-brand/8" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-52 h-52 rounded-full bg-blue-brand/10" />
            </div>

            <Image
              src="/svgs/buddy-scallop.svg"
              alt="Community character"
              width={180}
              height={180}
              className="relative z-10 drop-shadow-xl animate-spin-slow"
            />

            {[
              { top: "12%", left: "10%", size: 40, src: "/svgs/buddy-blob-1color.svg" },
              { top: "10%", right: "8%", size: 36, src: "/svgs/buddy-heart-1color.svg" },
              { bottom: "10%", left: "12%", size: 32, src: "/svgs/buddy-star-1color.svg" },
              { bottom: "12%", right: "10%", size: 38, src: "/svgs/buddy-bloom-1color.svg" },
            ].map((dot, i) => (
              <div
                key={i}
                className="absolute animate-float-slow"
                style={{
                  top: dot.top,
                  left: dot.left,
                  right: (dot as { right?: string }).right,
                  bottom: (dot as { bottom?: string }).bottom,
                  animationDelay: `${i * 0.6}s`,
                }}
              >
                <Image src={dot.src} alt="" width={dot.size} height={dot.size} />
              </div>
            ))}
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-navy">
              How the program runs
            </h3>
            <p className="text-navy/65 leading-relaxed">
              A series of mini workshops within regular childcare, kindergarten,
              or prep sessions. Workshops run for 20–30 minutes and are designed
              to fit naturally into the rhythm of an existing day. You don&apos;t
              need to be a democracy expert to deliver this program — you need to
              be curious, present, and willing to slow down.
            </p>
            <ul className="space-y-3">
              {[
                "Opening song to gather the group and set the emotional tone",
                "Hands-on, play-based activity introducing the workshop theme",
                "Picture book read-aloud with facilitated discussion",
                "A second activity to deepen or extend the theme",
                "Closing song that sends children off with warmth",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center">
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 4l3 3 5-6"
                        stroke="#6f8e69"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-navy/75 font-semibold text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* EYLF callout */}
            <div className="bg-blue-brand/8 border border-blue-brand/20 rounded-2xl p-5 space-y-2">
              <p className="text-sm font-black text-navy uppercase tracking-wide">
                Grounded in the EYLF V2.0
              </p>
              <p className="text-sm text-navy/65 leading-relaxed">
                Children&apos;s Council workshops directly support Australia&apos;s
                national early childhood curriculum — giving educators structured,
                documented evidence of children&apos;s civic voice in action across
                Outcomes 1, 2, and 5.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-block bg-coral text-white font-bold px-7 py-3 rounded-full hover:bg-navy transition-colors mt-2"
            >
              Bring it to your setting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
