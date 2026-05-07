import React from "react";
import { motion } from "motion/react";
import { Shield, Brain, CheckCircle, ArrowRight, Lightbulb, Globe, Box, Hand, Smartphone, Zap, ChevronDown } from "lucide-react";
import { FadeIn, Button, Card, SectionHeader } from "./ui";
import { InteractiveCube } from "./InteractiveCube";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-28 md:pt-32 pb-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0066FF]/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center relative z-10">
        <div className="flex flex-col items-start space-y-8 mt-12 lg:mt-0">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-[#0066FF]/10 text-[#0066FF] text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]"></span>
              </span>
              CogniFit QI Assessment
            </div>
            <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] font-extrabold text-[#0A102E] leading-[1.05] tracking-tight mb-6 pb-2 drop-shadow-sm">
              The Ultimate <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] to-[#0066FF] filter drop-shadow-sm pb-2 inline-block">Intelligence Test.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4A5578] max-w-lg mb-8 leading-relaxed font-light">
              Go beyond static quizzes. IQbe is a premium <strong>IQ test</strong> and <strong>brain test mental</strong> assessment that measures your cognitive health, 3D thinking, and executive problem-solving in one fast, scientifically validated platform.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button 
                onClick={() => window.open("https://www.cognifit.com/aplicaciones/html5/public/assessment/ASSESSMENT~@~IQBE?testButtonUrl=https://www.cognifit.com%2Fbattery-of-tests%2Fiqbe-test%3Freg%3Dtrue", "_blank")}
                className="text-lg w-full sm:w-auto !px-10 !py-5 bg-gradient-to-r from-[#0066FF] to-[#00A3FF] hover:from-[#0055DD] hover:to-[#0088DD] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Check My IQ Score <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <div className="text-[13px] text-[#4A5578] flex flex-col justify-center font-medium">
                <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-[#00D4AA]"/> 100% Online & Secure</span>
                <span className="flex items-center gap-1.5 mt-1"><CheckCircle className="w-3.5 h-3.5 text-[#00D4AA]"/> Scientifically Validated</span>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} className="w-full">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-8 mt-4 border-t border-[#0066FF]/10">
              <div className="flex items-center text-[14px] text-[#4A5578] font-semibold">
                <Shield className="w-4 h-4 mr-2 text-[#0066FF]" />
                37,505+ Datasets
              </div>
              <div className="w-1 h-1 rounded-full bg-[#0066FF]/30 hidden sm:block" />
              <div className="flex items-center text-[14px] text-[#4A5578] font-semibold">
                <Brain className="w-4 h-4 mr-2 text-[#0066FF]" />
                Raven’s Matrices Based
              </div>
            </div>
          </FadeIn>
        </div>
        
        <FadeIn delay={0.3} direction="left" className="relative flex items-center justify-center w-full h-full min-h-[350px] md:min-h-[500px]">
          <div className="relative w-full max-w-[350px] md:max-w-[600px] aspect-square flex items-center justify-center scale-75 sm:scale-90 md:scale-100 mt-8 lg:mt-0">
            {/* Interactive 3D Cube */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <InteractiveCube />
            </div>
              
            {/* Overlay labels - floating freely around the cube */}
            <motion.div 
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.2 }}
              className="absolute top-[5%] md:top-[20%] left-[0%] md:-left-[5%] bg-white border border-[#0066FF]/10 shadow-[0_4px_15px_rgba(0,102,255,0.08)] text-[#0A102E] px-4 md:px-5 py-2 md:py-2.5 rounded-full whitespace-nowrap z-20 pointer-events-none will-change-transform flex items-center gap-2 md:gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] animate-pulse"></div>
              <span className="font-bold tracking-wide text-xs md:text-sm">3D Reasoning</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute top-[10%] right-[0%] md:top-[5%] md:right-[5%] md:bottom-auto bg-white border border-[#7B61FF]/10 shadow-[0_4px_15px_rgba(123,97,255,0.08)] text-[#0A102E] px-4 md:px-5 py-2 md:py-2.5 rounded-full whitespace-nowrap z-20 pointer-events-none will-change-transform flex items-center gap-2 md:gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-[#7B61FF]"></div>
              <span className="font-bold tracking-wide text-xs md:text-sm">Executive Function</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [4, -4, 4] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-[5%] left-[0%] md:bottom-[10%] md:top-auto md:-left-[15%] md:right-auto bg-white border border-[#00D4AA]/10 shadow-[0_4px_15px_rgba(0,212,170,0.08)] text-[#0A102E] px-4 md:px-5 py-2 md:py-2.5 rounded-full whitespace-nowrap z-20 pointer-events-none will-change-transform flex items-center gap-2 md:gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-[#00D4AA]"></div>
              <span className="font-bold tracking-wide text-xs md:text-sm">Fluid Intelligence</span>
            </motion.div>
          </div>
        </FadeIn>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#4A5578]"
      >
        <span className="text-xs uppercase tracking-widest font-bold">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-[#0066FF]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export function WhyDifferent() {
  return (
    <section className="py-10 md:py-16 max-w-[1200px] mx-auto px-6">
      <SectionHeader 
        title="Why This IQ Intelligence Test Is Different" 
        subtitle="Most online IQ tests only check whether you can recognize a static pattern. IQbe goes further — it is a dynamic brain test mental assessment measuring how well you manipulate information, plan your response, and solve visual problems under time pressure."
      />

      <FadeIn delay={0.2}>
        <motion.div
          whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0,102,255,0.15)" }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl border border-[#0066FF]/10 overflow-hidden"
        >
          <Card hover={false} className="max-w-[900px] mx-auto mt-6 overflow-hidden">
            <div className="grid grid-cols-2 bg-white/40 border-b border-[#0066FF]/10 text-sm font-bold text-[#0A102E]">
              <div className="p-6 uppercase tracking-wider text-xs">Traditional Tests</div>
              <div className="p-6 text-[#0066FF] border-l border-[#0066FF]/10 uppercase tracking-wider text-xs flex items-center gap-2 bg-white/60">
                <Zap className="w-4 h-4 animate-pulse" /> IQbe Experience
              </div>
            </div>
            <div className="divide-y divide-[#0066FF]/5">
              {[
                ["Static 2D patterns", "Interactive 3D cube challenges"],
                ["Passive recognition", "Active manipulation and decision-making"],
                ["Limited real-world resemblance", "Closer to real-world cognitive demands"],
                ["Often text-heavy", "Non-verbal and low cultural bias"],
                ["Basic pattern matching", "Reasoning + visuospatial + executive demands"]
              ].map(([traditional, iqbe], i) => (
                <div key={i} className="grid grid-cols-2 text-[15px] group hover:bg-white/50 transition-colors">
                  <div className="p-6 text-[#4A5578] flex items-center">{traditional}</div>
                  <div className="p-6 text-[#0A102E] border-l border-[#0066FF]/5 flex items-start gap-3 bg-[#0066FF]/[0.02]">
                    <CheckCircle className="w-5 h-5 text-[#0066FF] shrink-0 mt-0.5 group-hover:scale-110 group-hover:rotate-12 transition-all" />
                    <span className="leading-relaxed font-medium">{iqbe}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </FadeIn>

      <div className="mt-10 text-center">
        <button className="text-[#0066FF] hover:text-[#0A102E] font-bold transition-colors inline-flex items-center group text-lg">
          Experience the difference <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </section>
  );
}

export function WhatIs() {
  const features = [
    { icon: <Brain />, title: "Fluid intelligence", desc: "Measures your ability to reason, detect patterns, and solve novel problems." },
    { icon: <Globe />, title: "Non-verbal by design", desc: "No language knowledge needed to take the test." },
    { icon: <Hand />, title: "Low cultural bias", desc: "Suitable for broad international audiences and varied educational backgrounds." },
    { icon: <Box />, title: "Interactive and manipulative", desc: "Users rotate a 3D cube to locate missing pieces and infer the correct solution." },
    { icon: <Smartphone />, title: "Digitally native", desc: "Works online across desktop, tablet, and smartphone." },
    { icon: <Zap />, title: "Beyond pattern recognition", desc: "Adds visuospatial and executive demands that make the task more dynamic." }
  ];

  return (
    <section id="what-is-it" className="py-10 md:py-16 max-w-[1200px] mx-auto px-6 scroll-mt-24">
      <div className="max-w-[800px] mb-12">
        <h2 className="text-4xl md:text-[52px] font-bold text-[#0A102E] mb-6 leading-tight tracking-tight">What Is the IQbe Intelligence Test?</h2>
        <p className="text-lg text-[#4A5578] leading-relaxed">
          IQbe is a digital, non-verbal IQ test designed to estimate fluid intelligence through interactive 3D problem solving. Inspired by Raven’s Progressive Matrices, it does more than ask you to spot a pattern — it measures how you analyze, manipulate, and solve visual problems efficiently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map((f, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="h-full">
              <Card className="p-8 h-full flex flex-col items-start gap-5 group cursor-default">
                <div className="text-[#0066FF] bg-[#0066FF]/10 p-4 rounded-2xl shadow-sm group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-300">
                  <motion.div animate={i % 2 === 0 ? { rotate: [0, 10, -10, 0] } : { y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
                    {f.icon}
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A102E] mb-3">{f.title}</h3>
                  <p className="text-[15px] text-[#4A5578] leading-relaxed">{f.desc}</p>
                </div>
              </Card>
            </motion.div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
          <Card hover={false} className="p-10 md:p-14 border-l-4 border-l-[#0066FF] bg-gradient-to-r from-[#0066FF]/5 to-transparent relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#0066FF]/5 rounded-full blur-[50px] pointer-events-none" />
            <blockquote className="text-2xl md:text-4xl font-medium text-[#0A102E] leading-tight italic relative z-10">
              “IQbe measures not just whether you can see a pattern, but whether you can mentally manage and solve it.”
            </blockquote>
          </Card>
        </motion.div>
      </FadeIn>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { num: 1, icon: "📝", label: "Register & Start", desc: "Create an account to securely access the premium intelligence test." },
    { num: 2, icon: "🧩", label: "Solve the 3D Puzzles", desc: "Complete the brain test mental assessment by rotating cubes to find logical rules." },
    { num: 3, icon: "📊", label: "Get Your IQ Score", desc: "Instantly receive a detailed PDF report of your IQ intelligence and cognitive profile." }
  ];

  return (
    <section id="how-it-works" className="py-10 md:py-16 max-w-[1200px] mx-auto px-6 scroll-mt-24">
      <SectionHeader 
        title="How the IQ Test Works" 
        subtitle="Taking the IQbe intelligence test is simple, fast, and 100% online. Follow these three steps to accurately measure your fluid intelligence and cognitive health."
      />

      <div className="relative mt-12 mb-12">
        <div className="hidden lg:block absolute top-10 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-transparent via-[#0066FF]/20 to-transparent opacity-100" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.15} className="relative flex flex-col items-center text-center group cursor-default">
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-20 h-20 rounded-2xl bg-white border border-[#0066FF]/20 flex items-center justify-center text-3xl font-bold text-[#0A102E] shadow-[0_8px_30px_rgba(0,102,255,0.08)] mb-6 z-10 transition-all duration-300"
              >
                {step.icon}
              </motion.div>
              <div className="text-[#0066FF] font-bold text-sm tracking-widest uppercase mb-2">Step 0{step.num}</div>
              <h4 className="text-xl font-bold text-[#0A102E] mb-2">{step.label}</h4>
              <p className="text-[#4A5578] text-sm leading-relaxed">{step.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}