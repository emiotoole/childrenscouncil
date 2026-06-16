import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
