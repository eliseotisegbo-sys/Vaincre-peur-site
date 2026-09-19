import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { Navbar } from "@/components/Navbar";
import { NeuralCircuit } from "@/components/NeuralCircuit";
import { SectionObserver } from "@/components/SectionObserver";
import { BookPreview } from "@/sections/BookPreview";
import { CaseStudies } from "@/sections/CaseStudies";
import { Faq } from "@/sections/Faq";
import { FinalCta } from "@/sections/FinalCta";
import { Hero } from "@/sections/Hero";
import { Imagine } from "@/sections/Imagine";
import { Includes } from "@/sections/Includes";
import { Problem } from "@/sections/Problem";
import { Solution } from "@/sections/Solution";
import { Story } from "@/sections/Story";

export default function Page() {
  return (
    <>
      <NeuralCircuit />
      <SectionObserver />
      <Navbar />
      <main id="main">
        <Hero />
        <Problem />
        <Story />
        <Solution />
        <Imagine />
        <CaseStudies />
        <Includes />
        <BookPreview />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyCta />
    </>
  );
}
