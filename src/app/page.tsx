import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/sections/LoadingScreen";
import { Hero } from "@/components/sections/Hero";
import { Essence } from "@/components/sections/Essence";
import { Services } from "@/components/sections/Services";
import { CTOaaS } from "@/components/sections/CTOaaS";
import { Results } from "@/components/sections/Results";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { ScrollProgress } from "@/components/effects/ScrollProgress";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Essence />
        <Services />
        <CTOaaS />
        <Results />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
