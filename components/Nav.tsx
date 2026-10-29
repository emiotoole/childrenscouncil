import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/svgs/logo.svg"
            alt="Children's Council"
            width={420}
            height={120}
            priority
            className="h-28 w-auto"
          />
        </Link>
        <Link
          href="/resources"
          className="bg-blue-brand text-cream font-bold text-sm px-5 py-2.5 rounded-full hover:bg-navy transition-colors shrink-0"
        >
          Resources
        </Link>
      </nav>
    </header>
  );
}
