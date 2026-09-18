import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { NeuralCircuit } from "@/components/NeuralCircuit";
import { SectionObserver } from "@/components/SectionObserver";
import { CaseStudies } from "@/sections/CaseStudies";
import { Faq } from "@/sections/Faq";
import { FinalCta } from "@/sections/FinalCta";
import { Hero } from "@/sections/Hero";
import { Imagine } from "@/sections/Imagine";
import { Includes } from "@/sections/Includes";
import { Problem } from "@/sections/Problem";
import { Solution } from "@/sections/Solution";

export default function Page() {
  return (
    <>
      <NeuralCircuit />
      <SectionObserver />
      <Navbar />
      <main id="main">
        <Hero />
        <Problem />
        <Solution />
        <Imagine />
        <CaseStudies />
        <Includes />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

