import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Services from "@/components/Services";

import Divider1 from "@/components/Divider1";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Divider1 />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
