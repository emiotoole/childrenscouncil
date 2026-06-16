import Image from "next/image";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <a href="#hero">
          <Image
            src="/svgs/logo.svg"
            alt="Children's Council"
            width={220}
            height={62}
            priority
            className="h-12 w-auto"
          />
        </a>
      </nav>
    </header>
  );
}
