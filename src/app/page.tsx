import { Hero } from "@/components/sections/Hero";
import { Now } from "@/components/sections/Now";
import { Projects } from "@/components/sections/Projects";
import { Work } from "@/components/sections/Work";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Divider } from "@/components/ui/Divider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Hero />
      <Divider />
      <Now />
      <Divider />
      <Projects />
      <Divider />
      <Work />
      <Divider />
      <Contact />
      <Footer />
    </main>
  );
}
