import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Logo + tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Image
              src="/svgs/logo.svg"
              alt="Children's Council"
              width={160}
              height={44}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
              Play-based civic workshops for children aged 4–6. Building the
              habits of mind that sustain a healthy democracy — one sandpit at a
              time.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-wider mb-4 text-cream/50">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "#hero" },
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-cream/70 hover:text-cream transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-wider mb-4 text-cream/50">
              Follow Along
            </h4>
            <ul className="space-y-2 text-sm">
              {["Instagram", "Facebook", "LinkedIn", "Twitter / X"].map(
                (name) => (
                  <li key={name}>
                    <span className="text-cream/70">{name}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} Children&apos;s Council. All rights reserved.</p>
          <p>Built with care for every child.</p>
        </div>
      </div>
    </footer>
  );
}
