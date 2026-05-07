import React, { useState } from "react";
import { FadeIn, Card, SectionHeader } from "./ui";
import { ChevronDown, CheckCircle2, User, GraduationCap, Briefcase, Globe, Smartphone, Zap, Hand, Globe2, BadgeCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card hover={false} className={`mb-4 overflow-hidden border-l-4 transition-colors duration-300 ${isOpen ? "border-l-[#0066FF] bg-white/90 shadow-md" : "border-l-transparent bg-white/60 hover:bg-white/80"}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
      >
        <span className="font-bold text-lg text-[#0A102E]">{title}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 text-[#0066FF]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-[#4A5578] font-medium leading-relaxed mt-2 space-y-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}

export function ValidityReliability() {
  return (
    <section id="reliability" className="py-10 md:py-16 max-w-[1200px] mx-auto px-6 scroll-mt-24">
      <SectionHeader 
        title="Validity of the IQbe Test" 
        subtitle="IQbe was validated against Raven’s Standard Progressive Matrices, one of the best-known non-verbal intelligence tests. In a lab study, IQbe scores showed a strong positive correlation with Raven-based IQ scores."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-[900px] mx-auto">
        <FadeIn delay={0.1}>
          <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="h-full">
            <Card className="p-8 text-center flex flex-col items-center group cursor-default">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-[#00D4AA] blur-xl opacity-30 rounded-full group-hover:opacity-60 transition-opacity duration-300"></div>
                <BadgeCheck className="w-14 h-14 text-[#00D4AA] relative z-10 drop-shadow-md group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              </div>
              <div className="text-3xl font-extrabold text-[#0A102E] mb-2">✓</div>
              <div className="text-[14px] font-bold text-[#4A5578]">Concurrent validity</div>
            </Card>
          </motion.div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="h-full">
            <Card className="p-8 text-center flex flex-col items-center group cursor-default">
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#0066FF] to-[#00E5FF] rounded-full text-white font-bold mb-4 shadow-[0_0_20px_rgba(0,102,255,0.3)] group-hover:shadow-[0_0_30px_rgba(0,102,255,0.5)] group-hover:rotate-[360deg] transition-all duration-700 text-xl">r</div>
              <div className="text-3xl font-extrabold text-[#0A102E] mb-2">0.613</div>
              <div className="text-[14px] font-bold text-[#4A5578]">Correlation with Raven-based scores</div>
            </Card>
          </motion.div>
        </FadeIn>
        <FadeIn delay={0.3}>
          <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="h-full">
            <Card className="p-8 text-center flex flex-col items-center group cursor-default">
              <div className="w-14 h-14 flex items-center justify-center bg-[#FFB800]/10 rounded-full text-[#FFB800] font-bold mb-4 border border-[#FFB800]/30 shadow-[0_0_20px_rgba(255,184,0,0.1)] group-hover:bg-[#FFB800]/20 group-hover:scale-110 transition-all duration-300 text-xl">p</div>
              <div className="text-3xl font-extrabold text-[#0A102E] mb-2">&lt; .001</div>
              <div className="text-[14px] font-bold text-[#4A5578]">Statistical significance</div>
            </Card>
          </motion.div>
        </FadeIn>
      </div>

      <div className="max-w-[800px] mx-auto mb-20">
        <Accordion title="See validation study details">
          <p>The concurrent validity of IQbe was assessed by correlating its scores with scores from the Raven’s Standard Progressive Matrices (SPM).</p>
          <p><strong>Methodology:</strong> A sample of participants completed both assessments under controlled conditions. Results were analyzed to determine the strength of the relationship between performance on both tools.</p>
          <p><strong>Findings:</strong> The strong positive correlation (r = 0.613, p &lt; .001) confirms that IQbe measures the same core constructs of fluid intelligence and reasoning ability as the established standard.</p>
        </Accordion>
      </div>

      <SectionHeader 
        title="Reliability of the IQbe Test" 
        subtitle="Reliability indicates whether a test produces stable and internally consistent results. IQbe showed adequate test-retest stability and internal consistency."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-[900px] mx-auto">
        <FadeIn delay={0.1}>
          <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="h-full">
            <Card className="p-8 text-center flex flex-col items-center border-t-4 border-t-[#0066FF] hover:shadow-lg transition-shadow">
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#0066FF] to-[#00E5FF] mb-3">0.71</div>
              <div className="text-[14px] font-bold text-[#4A5578]">Test-retest reliability</div>
            </Card>
          </motion.div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="h-full">
            <Card className="p-8 text-center flex flex-col items-center border-t-4 border-t-[#7B61FF] hover:shadow-lg transition-shadow">
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#7B61FF] to-[#00E5FF] mb-3">0.775</div>
              <div className="text-[14px] font-bold text-[#4A5578]">Cronbach’s alpha</div>
            </Card>
          </motion.div>
        </FadeIn>
        <FadeIn delay={0.3}>
          <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="h-full">
            <Card className="p-8 text-center flex flex-col items-center border-t-4 border-t-[#00D4AA] hover:shadow-lg transition-shadow">
              <div className="text-4xl font-extrabold text-[#00D4AA] mb-3">Reliable ✓</div>
              <div className="text-[14px] font-bold text-[#4A5578]">Assessment quality</div>
            </Card>
          </motion.div>
        </FadeIn>
      </div>

      <div className="max-w-[800px] mx-auto mb-12">
        <Accordion title="See test-retest details">
          <p>Test-retest reliability measures how consistent scores remain over time. A subsample completed IQbe twice, with an appropriate interval between sessions to minimize learning effects.</p>
          <p>The correlation of 0.71 demonstrates that IQbe yields stable estimates of a person's abilities across different testing sessions.</p>
        </Accordion>
        <Accordion title="See internal consistency details">
          <p>Internal consistency indicates how well the different items within the test measure the same general construct. Evaluated via Cronbach’s alpha (α = 0.775), IQbe demonstrates strong internal coherence.</p>
          <p>This means all items, despite increasing difficulty, consistently contribute to the measurement of fluid intelligence.</p>
        </Accordion>
      </div>
    </section>
  );
}

export function WhyItMatters() {
  const benefits = [
    { icon: <Zap />, title: "More dynamic", desc: "than static paper tests" },
    { icon: <Hand />, title: "More engaging", desc: "for digital users" },
    { icon: <Globe2 />, title: "Closer to real-world", desc: "cognitive demands" },
  ];

  return (
    <section className="py-10 md:py-16 max-w-[1200px] mx-auto px-6">
      <SectionHeader 
        title="Why IQbe Matters Beyond Traditional IQ Tests" 
        subtitle="Real-world cognition is not only about spotting a rule on a flat page. It also involves holding information in mind, manipulating it, planning the next step, and responding efficiently. IQbe was designed to bring those demands closer to the testing experience through interactive 3D problem solving."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-[1000px] mx-auto">
        {benefits.map((b, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="h-full">
              <Card className="p-8 h-full flex flex-col items-center text-center group cursor-default">
                <div className="text-[#0066FF] bg-[#0066FF]/10 p-5 rounded-full mb-6 inline-flex shadow-sm group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-300">
                  <motion.div animate={i === 0 ? { rotate: [0, 15, -15, 0] } : i === 1 ? { scale: [1, 1.1, 1] } : { y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}>
                    {React.cloneElement(b.icon as React.ReactElement, { className: "w-8 h-8" })}
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-[#0A102E] mb-2">{b.title}</h3>
                <p className="text-[#4A5578] leading-relaxed font-medium">{b.desc}</p>
              </Card>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export function WhoIsFor() {
  const audiences = [
    { icon: <User />, title: "Adults", desc: "Evaluate your IQ intelligence and discover your cognitive strengths with a scientifically validated intelligence test." },
    { icon: <GraduationCap />, title: "Children & Teens (13+)", desc: "A great mental health test for families wanting to support and track fluid intelligence development across life stages." },
    { icon: <CheckCircle2 />, title: "Seniors", desc: "A comprehensive brain test mental assessment to monitor cognitive health, executive function, and spatial perception as we age." },
    { icon: <Briefcase />, title: "Health Professionals", desc: "Doctors, psychologists, and clinicians use this mental health test to reliably assess a patient’s reasoning and executive problem-solving." },
    { icon: <Globe />, title: "Researchers & Schools", desc: "Academic and educational institutions rely on this standardized intelligence test to gather bias-free, non-verbal data." },
  ];

  return (
    <section id="who-is-it-for" className="py-12 md:py-20 max-w-[1200px] mx-auto px-6 bg-[#0066FF]/[0.02] rounded-[3rem] mt-8 mb-8 relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#0066FF]/5 to-transparent rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#00E5FF]/5 to-transparent rounded-full blur-[80px] pointer-events-none" />
      
      <div className="relative z-10">
        <SectionHeader 
          title="Who Is the IQbe Intelligence Test Aimed At?" 
          subtitle="IQbe is designed to be highly accessible and deeply informative for both personal growth and professional cognitive screening."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-[1000px] mx-auto">
          {audiences.map((a, i) => (
            <FadeIn key={i} delay={i * 0.1} className={i === 3 ? "lg:col-start-1 lg:col-span-1" : i === 4 ? "lg:col-start-2 lg:col-span-2" : ""}>
              <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300 }} className="h-full">
                <Card hover={false} className="p-8 h-full bg-white/80 backdrop-blur-sm border-[#0066FF]/10 hover:border-[#0066FF]/30 transition-colors group cursor-default">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#0066FF]/10 to-[#00E5FF]/10 rounded-xl text-[#0066FF] mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-[0_4px_15px_rgba(0,102,255,0.05)]">
                    {React.cloneElement(a.icon as React.ReactElement, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A102E] mb-3">{a.title}</h3>
                  <p className="text-[#4A5578] leading-relaxed text-[15px]">{a.desc}</p>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    { q: "What does this intelligence test measure?", a: "The IQbe intelligence test measures fluid intelligence through a non-verbal 3D reasoning task that also places demands on visuospatial processing and executive problem-solving." },
    { q: "Is IQbe scientifically validated?", a: "Yes. This premium IQ test was validated against Raven’s Standard Progressive Matrices and showed a significant positive correlation with Raven-based IQ intelligence scores." },
    { q: "Is this a mental health test?", a: "While IQbe is a cognitive intelligence test rather than a clinical psychiatric mental health test, it provides highly valuable insights into your mental fitness, executive function, and overall brain health." },
    { q: "How long does the brain test take?", a: "The IQbe brain test is designed to be completed online in minutes. Duration depends on your performance and how quickly you progress through difficulty levels." },
    { q: "Does the test require language comprehension?", a: "No. The IQbe is a completely non-verbal intelligence test. All instructions and tasks are designed to be universally understood regardless of your native language, making it highly cross-culturally valid." },
    { q: "Can I take the IQ test on my phone?", a: "Yes. IQbe is a modern intelligence test designed to work flawlessly on your desktop, tablet, and smartphone." },
    { q: "Is this better than a traditional IQ quiz?", a: "IQbe is fundamentally different from static online IQ quizzes because it combines reasoning with interactive 3D problem solving, acting as a complete brain test mental assessment." },
  ];

  return (
    <section className="py-10 md:py-16 max-w-[1200px] mx-auto px-6">
      <SectionHeader title="Frequently Asked Questions" />
      
      <div className="max-w-[720px] mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <Accordion title={faq.q}>
              <p>{faq.a}</p>
            </Accordion>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}