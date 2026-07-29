import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Now } from "@/components/sections/Now";
import { Projects } from "@/components/sections/Projects";
import { Work } from "@/components/sections/Work";
import { Testimonials } from "@/components/sections/Testimonials";
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
      <About />
      <Divider />
      <Now />
      <Divider />
      <Projects />
      <Divider />
      <Work />
      <Divider />
      <Testimonials />
      <div className="h-20 md:h-28" />
      <Contact />
      <Footer />
    </main>
  );
}
