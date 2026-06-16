import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-cream pt-20"
    >
      {/* Background decorative blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-60px] right-[-80px] w-[420px] h-[420px] rounded-full bg-pink-brand/20" />
        <div className="absolute bottom-[-40px] left-[-60px] w-[320px] h-[320px] rounded-full bg-blue-brand/10" />
        <div className="absolute top-1/2 left-1/4 w-[180px] h-[180px] rounded-full bg-amber-brand/20" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/70 border border-navy/10 rounded-full px-4 py-2 text-sm font-semibold text-navy">
            <span className="w-2 h-2 rounded-full bg-sage inline-block" />
            Play-based civic learning for ages 4–6
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-navy leading-tight text-balance">
            Democracy
            <br />
            is learned. It{" "}
            <span className="relative inline-block">
              <span className="relative z-10">starts at four.</span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9 Q100 2 198 9"
                  stroke="#efb87e"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-xl text-navy/70 leading-relaxed max-w-lg">
            We run play-based civic workshops with 4–6 year olds because the
            skills that hold democracy together aren&apos;t taught in high
            school. They&apos;re formed in early childhood.
          </p>

          {/* Impact numbers */}
          <p className="text-xs text-navy/40 font-semibold uppercase tracking-wide pt-2">The problem we&apos;re solving</p>
          <div className="flex flex-wrap gap-8">
            {[
              { number: "25%", label: "of Australians trust government" },
              { number: "22%", label: "trust political parties" },
              { number: "42%", label: "rarely participate in community" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-black text-navy">{stat.number}</p>
                <p className="text-sm text-navy/60 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Buddy illustration cluster */}
        <div className="relative flex items-center justify-center h-[420px] lg:h-[520px]">
          {/* Central large blob */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/svgs/buddy-blob.svg"
              alt="Friendly blob character"
              width={260}
              height={260}
              className="animate-float-slow drop-shadow-xl"
              style={{ animationDelay: "0s" }}
            />
          </div>

          {/* Orbiting buddies */}
          <div className="absolute top-4 right-8 animate-float-medium">
            <Image
              src="/svgs/buddy-star.svg"
              alt="Star character"
              width={120}
              height={120}
              className="drop-shadow-lg"
            />
          </div>
          <div className="absolute bottom-8 right-4 animate-float-fast">
            <Image
              src="/svgs/buddy-heart.svg"
              alt="Heart character"
              width={100}
              height={100}
              className="drop-shadow-lg"
            />
          </div>
          <div className="absolute top-12 left-4 animate-float-medium" style={{ animationDelay: "1.2s" }}>
            <Image
              src="/svgs/buddy-bloom.svg"
              alt="Bloom character"
              width={90}
              height={90}
              className="drop-shadow-lg"
            />
          </div>
          <div className="absolute bottom-12 left-8 animate-float-slow" style={{ animationDelay: "2s" }}>
            <Image
              src="/svgs/buddy-scallop.svg"
              alt="Scallop character"
              width={80}
              height={80}
              className="drop-shadow-lg"
            />
          </div>

          {/* Floating dot accents */}
          <div className="absolute top-1/3 right-0 w-5 h-5 rounded-full bg-coral animate-bounce-gentle" style={{ animationDelay: "0.3s" }} />
          <div className="absolute bottom-1/3 left-0 w-4 h-4 rounded-full bg-sage animate-bounce-gentle" style={{ animationDelay: "0.9s" }} />
          <div className="absolute top-1/2 right-1/4 w-3 h-3 rounded-full bg-amber-brand animate-bounce-gentle" style={{ animationDelay: "1.5s" }} />
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 L0 60 Z" fill="white" fillOpacity="0.3" />
        </svg>
      </div>
    </section>
  );
}
