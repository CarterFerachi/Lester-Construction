import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import TransformationScroll from "@/components/sections/TransformationScroll";
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";
import Projects from "@/components/sections/Projects";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import BatonRouge from "@/components/sections/BatonRouge";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-[#080808]">
      <Navbar />
      <Hero />
      <Services />
      <TransformationScroll />
      <BeforeAfterSlider />
      <Projects />
      <Stats />
      <About />
      <Testimonials />
      <BatonRouge />
      <Contact />
      <Footer />
    </main>
  );
}
