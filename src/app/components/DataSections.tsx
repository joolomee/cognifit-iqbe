import React from "react";
import { FadeIn, Card, SectionHeader } from "./ui";
import { BrainCircuit, Lightbulb, Box, CheckSquare, RotateCw } from "lucide-react";
import { motion } from "motion/react";

export function WhatItMeasures() {
  const measures = [
    { icon: <Box className="w-8 h-8" />, title: "Spatial Perception", desc: "The core of our brain test mental assessment, measuring how you understand shapes, spatial structure, and visual rotation." },
    { icon: <RotateCw className="w-8 h-8" />, title: "Working Memory", desc: "A critical part of your IQ intelligence: the ability to temporarily hold, manipulate, and use visual information." },
    { icon: <CheckSquare className="w-8 h-8" />, title: "Planning & Execution", desc: "Beyond typical intelligence tests, IQbe measures executive functions and the mental flexibility required to solve novel problems." },
    { icon: <BrainCircuit className="w-8 h-8" />, title: "Abstract Reasoning", desc: "Identify patterns and logical relationships to evaluate your overarching fluid intelligence." },
  ];

  return (
    <section id="skills-measured" className="py-10 md:py-16 max-w-[1200px] mx-auto px-6 scroll-mt-24">
      <SectionHeader 
        title="What Cognitive Skills Does It Measure?" 
        subtitle="IQbe is more than a standard IQ test. It is a comprehensive cognitive health and mental fitness evaluation that demands active manipulation, measuring processes that matter in real life."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-[1000px] mx-auto">
        {measures.map((m, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <Card className="p-8 h-full flex flex-col items-start text-left border-l-4 border-l-transparent hover:border-l-[#0066FF] transition-all">
              <div className="text-[#0066FF] mb-6 p-4 bg-[#0066FF]/10 rounded-xl inline-flex">{m.icon}</div>
              <h3 className="text-xl font-bold text-[#0A102E] mb-3">{m.title}</h3>
              <p className="text-[#4A5578] leading-relaxed">{m.desc}</p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export function RealWorldData() {
  const stats = [
    { value: "37,505", label: "participants" },
    { value: "16–90", label: "age range" },
    { value: "102.43", label: "average IQ" },
    { value: "100", label: "median IQ" },
    { value: "40–160", label: "score range" },
  ];

  const chartData = [
    { name: "40–55", value: 0.68 },
    { name: "55–70", value: 3.02 },
    { name: "70–85", value: 11.52 },
    { name: "85–100", value: 31.64, highlight: true },
    { name: "100–115", value: 32.08, highlight: true },
    { name: "115–130", value: 12.34 },
    { name: "130–145", value: 3.77 },
    { name: "145–160", value: 4.95 },
  ];

  return (
    <section className="py-10 md:py-16 max-w-[1200px] mx-auto px-6">
      <SectionHeader 
        title="Backed by Large-Scale Real-World Use" 
      />
      <div className="max-w-[720px] mx-auto text-center mb-16 text-lg text-[#4A5578] leading-relaxed">
        <p>IQbe is not only grounded in cognitive science — it is also supported by extensive real-world usage. In an internal dataset collected over the last two years, 37,505 participants completed the test.</p>
      </div>

      <div className="flex overflow-x-auto pb-8 -mx-6 px-6 sm:mx-0 sm:px-0 gap-4 mb-16 snap-x snap-mandatory hide-scrollbar">
        {stats.map((s, i) => (
          <FadeIn key={i} delay={i * 0.1} className="min-w-[180px] flex-1 snap-center">
            <Card hover={false} className="p-6 text-center border-t-2 border-t-[#0066FF] flex flex-col items-center justify-center">
              <div className="text-3xl md:text-[40px] leading-tight font-extrabold bg-gradient-to-r from-[#0066FF] to-[#00E5FF] text-transparent bg-clip-text mb-2 whitespace-nowrap py-1">
                {s.value}
              </div>
              <div className="text-[12px] md:text-[13px] text-[#4A5578] uppercase tracking-wider font-bold">{s.label}</div>
            </Card>
          </FadeIn>
        ))}
      </div>

      <div className="max-w-[720px] mx-auto text-center mb-12 text-[#4A5578]">
        The score distribution is broad and interpretable, with most users clustering between 85 and 115 and meaningful differentiation across higher and lower score ranges.
      </div>

      <FadeIn>
        <Card hover={false} className="p-4 sm:p-6 md:p-10 max-w-[900px] mx-auto overflow-x-auto bg-white/90 hide-scrollbar">
          <div className="min-w-[450px] h-[280px] sm:h-[350px] w-full flex items-end justify-between gap-1.5 sm:gap-3 pt-6 sm:pt-10 pb-6">
            {chartData.map((d, i) => (
              <div key={i} className="flex flex-col items-center flex-1 group h-full relative">
                 <div className="w-full relative flex items-end h-[180px] sm:h-[280px] bg-[#F0F5FA] rounded-t-md overflow-hidden">
                    <motion.div
                       initial={{ scaleY: 0 }}
                       whileInView={{ scaleY: d.value / 35 }}
                       style={{ transformOrigin: "bottom" }}
                       viewport={{ once: true, margin: "-10%" }}
                       transition={{ duration: 1, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                       className={`w-full h-full ${d.highlight ? "bg-gradient-to-t from-[#0066FF] to-[#00E5FF] shadow-[0_0_20px_rgba(0,102,255,0.2)]" : "bg-gradient-to-t from-[#0066FF]/20 to-[#0066FF]/40"} rounded-t-sm relative group-hover:brightness-110 transition-all will-change-transform`}
                    />
                 </div>
                 {/* Tooltip on hover */}
                 <div className="absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mt-8 bg-white border border-[#0066FF]/20 text-[#0A102E] font-bold text-[10px] sm:text-xs py-1.5 px-2.5 rounded whitespace-nowrap z-10 shadow-lg pointer-events-none">
                    {d.value}%
                 </div>
                 <div className="text-[10px] md:text-xs font-bold text-[#4A5578] mt-4 whitespace-nowrap -rotate-45 sm:rotate-0">
                   {d.name}
                 </div>
              </div>
            ))}
          </div>
        </Card>
      </FadeIn>
    </section>
  );
}

export function ScoreMeans() {
  const bands = [
    { score: "Below 85", label: "Below average range", intensity: 10 },
    { score: "85–100", label: "Average range, lower half", intensity: 40 },
    { score: "100–115", label: "Average range, upper half", intensity: 100 },
    { score: "115–130", label: "Above average range", intensity: 100, accent: "#00E5FF" },
    { score: "130+", label: "High range", intensity: 100, accent: "#FFB800" },
  ];

  return (
    <section className="py-10 md:py-16 max-w-[1200px] mx-auto px-6">
      <SectionHeader 
        title="What Your IQ Score Means" 
        subtitle="IQ scores are interpreted relative to a reference population. IQbe uses a familiar scale where 100 represents the middle of the distribution."
      />

      <div className="max-w-[800px] mx-auto space-y-3 mt-12">
        {bands.map((band, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="flex items-center rounded-2xl bg-white border border-[#0066FF]/10 overflow-hidden relative group transition-all hover:bg-[#F8FAFC] hover:border-[#0066FF]/20 hover:scale-[1.01] shadow-sm hover:shadow-md">
              <div 
                className="absolute left-0 top-0 bottom-0 w-2 transition-all duration-300"
                style={{ 
                  backgroundColor: band.accent || "#0066FF", 
                  opacity: Math.max(0.3, band.intensity / 100),
                  boxShadow: band.intensity === 100 ? `0 0 15px ${band.accent || "#0066FF"}` : 'none'
                }}
              />
              <div className="p-5 pl-8 w-[140px] md:w-[200px] font-bold text-[#0A102E] shrink-0 border-r border-[#0066FF]/10">
                {band.score}
              </div>
              <div className="p-5 text-[#4A5578] font-medium group-hover:text-[#0066FF] transition-colors">
                {band.label}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.6}>
        <p className="text-center text-[#4A5578] text-sm mt-10 max-w-[600px] mx-auto font-medium">
          A score is not a complete portrait of a person’s abilities, but it can offer a useful snapshot of reasoning and problem-solving performance.
        </p>
      </FadeIn>
    </section>
  );
}