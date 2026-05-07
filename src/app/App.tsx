import React, { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Hero, WhyDifferent, WhatIs, HowItWorks } from "./components/IntroSections";
import { WhatItMeasures, RealWorldData, ScoreMeans } from "./components/DataSections";
import { ValidityReliability, WhyItMatters, WhoIsFor, FAQ } from "./components/ScienceSections";
import { FinalCTA } from "./components/FinalCTA";
import { SectionDivider } from "./components/ui";
import { Navbar, Footer } from "./components/Layout";
import { FloatingParticles } from "./components/FloatingParticles";
import { SEO } from "./components/SEO";
import { motion, useScroll, useSpring } from "motion/react";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 h-[200px] w-[3px] bg-[#0066FF]/10 rounded-full z-50 hidden md:block overflow-hidden">
      <motion.div
        className="w-full bg-gradient-to-b from-[#0066FF] to-[#00E5FF] rounded-full origin-top"
        style={{ scaleY, height: "100%" }}
      />
    </div>
  );
}

function ScrollToTop() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setIsVisible(latest > 0.1);
    });
  }, [scrollYProgress]);

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-[#0066FF] text-white shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:scale-110 transition-transform pointer-events-auto"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </motion.button>
  );
}

export default function App() {
  // Setup global background for the whole app
  useEffect(() => {
    document.body.style.backgroundColor = "#F4F7FB"; // Light theme base
    document.body.style.color = "#0A102E";
    // Adding font family correctly
    document.body.style.fontFamily = "'Outfit', sans-serif";
  }, []);

  return (
    <HelmetProvider>
      <div className="w-full min-h-screen bg-[#F4F7FB] font-sans text-[#0A102E] overflow-x-hidden selection:bg-[#0066FF]/20 selection:text-[#0066FF] pb-0 relative scroll-smooth">
        <SEO />
        <FloatingParticles />
        <Navbar />
        <ScrollProgress />
        <ScrollToTop />
        
        <main className="w-full relative z-10">
          {/* Intro */}
          <Hero />
          <WhyDifferent />
          <WhatIs />
          <HowItWorks />
          
          <SectionDivider />
          
          {/* Data */}
          <WhatItMeasures />
          <RealWorldData />
          <ScoreMeans />
          
          <SectionDivider />
          
          {/* Science & Info */}
          <ValidityReliability />
          <WhyItMatters />
          <WhoIsFor />
          
          <SectionDivider />
          
          {/* FAQ & Final CTA */}
          <FAQ />
          <FinalCTA />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}
