import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ResourcesPage from "@/components/ResourcesPage";

export const metadata = {
  title: "Resources — Children's Council",
  description: "Free lesson plans, guides, and tools for early childhood educators building civic skills with 3–6 year olds.",
};

export default function Resources() {
  return (
    <main>
      <Nav />
      <ResourcesPage />
      <Footer />
    </main>
  );
}
