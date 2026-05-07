import React, { useState, useEffect } from "react";
import { ArrowUp, Instagram, Twitter, Linkedin, Facebook, Youtube, Globe } from "lucide-react";
import { Button } from "./ui";
import logoImg from "figma:asset/7ab9df529e09e166ac3997430bdf7b081b80154e.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 w-full ${scrolled ? "bg-white/90 backdrop-blur-md border-b border-[#0066FF]/10 shadow-[0_4px_20px_rgba(0,102,255,0.05)] py-3 md:py-4 px-4 md:px-12" : "bg-transparent py-4 md:py-6 px-4 md:px-12"}`}>
      <nav className="flex items-center justify-between w-full mx-auto" aria-label="Main navigation">
        {/* Logo Left */}
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="CogniFit Logo" className="h-7 md:h-9 object-contain" />
          <div className="flex items-center">
            <span className={`mx-1.5 md:mx-2 font-light ${scrolled ? "text-slate-300" : "text-[#0A102E]/20"}`}>|</span>
            <span className="font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00A3FF] text-base md:text-xl">IQbe</span>
          </div>
        </div>
        
        {/* Links Center */}
        <div className={`hidden lg:flex items-center justify-center gap-8 text-sm font-semibold transition-colors ${scrolled ? "text-[#4A5578]" : "text-[#0A102E]/70"}`}>
          <a href="#what-is-it" onClick={(e) => { e.preventDefault(); document.getElementById('what-is-it')?.scrollIntoView({ behavior: 'smooth' }); }} className="cursor-pointer hover:text-[#0066FF] transition-colors" aria-label="What is the IQbe Test?">What is it?</a>
          <a href="#who-is-it-for" onClick={(e) => { e.preventDefault(); document.getElementById('who-is-it-for')?.scrollIntoView({ behavior: 'smooth' }); }} className="cursor-pointer hover:text-[#0066FF] transition-colors" aria-label="Who is it for?">Who is it for?</a>
          <a href="#skills-measured" onClick={(e) => { e.preventDefault(); document.getElementById('skills-measured')?.scrollIntoView({ behavior: 'smooth' }); }} className="cursor-pointer hover:text-[#0066FF] transition-colors" aria-label="Skills measured">Skills measured</a>
          <a href="#how-it-works" onClick={(e) => { e.preventDefault(); document.getElementById('how-is-it-done')?.scrollIntoView({ behavior: 'smooth' }); }} className="cursor-pointer hover:text-[#0066FF] transition-colors" aria-label="How does it work?">How does it work?</a>
          <a href="#reliability" onClick={(e) => { e.preventDefault(); document.getElementById('reliability')?.scrollIntoView({ behavior: 'smooth' }); }} className="cursor-pointer hover:text-[#0066FF] transition-colors" aria-label="Reliability">Reliability</a>
        </div>
        
        {/* CTA Right */}
        <div className="flex items-center justify-end gap-2 sm:gap-4">
          <a href="https://www.cognifit.com/login" target="_blank" rel="noopener noreferrer" className={`hidden sm:block text-sm font-bold transition-colors ${scrolled ? "text-[#0A102E] hover:text-[#0066FF]" : "text-[#0A102E]/80 hover:text-[#0A102E]"}`}>
            Log In
          </a>
          <Button 
            onClick={() => window.open("https://www.cognifit.com/aplicaciones/html5/public/assessment/ASSESSMENT~@~IQBE?testButtonUrl=https://www.cognifit.com%2Fbattery-of-tests%2Fiqbe-test%3Freg%3Dtrue", "_blank")}
            className="!py-2 !px-4 md:!py-2.5 md:!px-6 text-xs md:text-sm inline-flex shadow-md bg-gradient-to-r from-[#0066FF] to-[#00A3FF] hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <span className="sm:hidden">Start Test</span>
            <span className="hidden sm:inline">Check My IQ Score</span>
          </Button>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A102E] pt-12 md:pt-20 pb-10 border-t border-[#0066FF]/20 relative z-10 overflow-hidden font-sans"> 
       {/* Background subtle glows */}
       <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0066FF]/10 rounded-full blur-[120px] pointer-events-none" />
       
       {/* Scroll to top button */}
       <button
         onClick={scrollToTop}
         className={`fixed bottom-8 right-8 z-[90] w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#0A102E] hover:-translate-y-1 transition-all duration-300 ${
           showScroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
         }`}
         aria-label="Scroll to top"
       >
         <ArrowUp className="w-5 h-5" />
       </button>

       <div className="max-w-[1200px] mx-auto px-6 relative z-10">
         {/* Top Banner / Keep improving memory area */}
         <div className="bg-gradient-to-r from-[#0066FF]/20 to-transparent border border-[#0066FF]/30 rounded-2xl p-6 sm:p-8 md:p-12 mb-12 md:mb-16 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
           <div className="max-w-xl">
             <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Want to keep improving your memory?</h3>
             <p className="text-slate-300 text-[15px] leading-relaxed">
               Once you receive your IQ intelligence score, discover how CogniFit's personalized brain training can help you stimulate your cognitive abilities, memory, and executive function.
             </p>
           </div>
           <div className="w-full md:w-auto flex-shrink-0">
              <a 
                href="https://www.cognifit.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#0066FF] hover:bg-[#0055DD] text-white rounded-full px-8 py-3.5 text-[15px] font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
              >
                Visit CogniFit.com
              </a>
           </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-16">
            {/* Logo area */}
            <div className="col-span-1 md:col-span-4 pr-0 lg:pr-8">
              <div className="flex items-center gap-3 mb-6">
                <img src={logoImg} alt="CogniFit" className="h-8 object-contain brightness-0 invert" />
              </div>
              <p className="text-slate-400 text-[14px] leading-relaxed mb-8 max-w-[280px]">
                CogniFit is a leading digital cognitive assessment and training platform, helping millions worldwide understand and stimulate their cognitive abilities.
              </p>
              
              {/* App Store Badges */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
                <a 
                  href="https://apps.apple.com/app/cognifit-brain-fitness/id317315169" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-36 h-11 bg-black/40 rounded-lg border border-white/20 flex items-center justify-center gap-2 hover:bg-black/60 hover:border-white/40 transition-all group"
                  aria-label="Download on the App Store"
                >
                  <svg viewBox="0 0 384 512" className="w-5 h-5 text-white fill-current group-hover:scale-110 transition-transform"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.6 90.6-84.3 103.2-119.3-33.8-15.6-62.1-51.5-62.3-91.3zM207.8 89.9c20.5-25.1 39.2-64.2 35.4-100.8-28.5 2.1-66.9 20.7-88.2 45.9-19.5 23.1-40.3 64.2-35.5 99.8 31.8 3.5 67.2-20.1 88.3-44.9z"/></svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[9px] text-white/80">Download on the</span>
                    <span className="text-[13px] font-bold text-white">App Store</span>
                  </div>
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.cognifit.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-36 h-11 bg-black/40 rounded-lg border border-white/20 flex items-center justify-center gap-2 hover:bg-black/60 hover:border-white/40 transition-all group"
                  aria-label="Get it on Google Play"
                >
                  <svg viewBox="0 0 512 512" className="w-5 h-5 text-white fill-current group-hover:scale-110 transition-transform"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[9px] text-white/80">GET IT ON</span>
                    <span className="text-[13px] font-bold text-white">Google Play</span>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Links Columns */}
            <div className="col-span-1 md:col-span-2 md:col-start-6">
              <h4 className="font-bold text-white mb-5 tracking-wide text-[15px]">Brain Training</h4>
              <ul className="space-y-3.5 text-[14px] text-slate-400">
                <li><a href="https://www.cognifit.com/brain-games" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Brain Games</a></li>
                <li><a href="https://www.cognifit.com/brain-training" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Brain Training</a></li>
                <li><a href="https://www.cognifit.com/reading-test" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Reading Test</a></li>
                <li><a href="https://www.cognifit.com/driving-test" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Driving Test</a></li>
                <li><a href="https://www.cognifit.com/mindfulness" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Mindfulness</a></li>
              </ul>
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <h4 className="font-bold text-white mb-5 tracking-wide text-[15px]">Assessments</h4>
              <ul className="space-y-3.5 text-[14px] text-slate-400">
                <li><a href="https://www.cognifit.com/iq-test-iqbe" target="_blank" rel="noopener noreferrer" aria-current="page" className="text-white font-medium">IQbe Test</a></li>
                <li><a href="https://www.cognifit.com/cognitive-assessment/cab" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">CAB™ Assessment</a></li>
                <li><a href="https://www.cognifit.com/adhd-test" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ADHD Test</a></li>
                <li><a href="https://www.cognifit.com/dyslexia-test" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Dyslexia Test</a></li>
              </ul>
            </div>
            
            <div className="col-span-1 md:col-span-3">
              <h4 className="font-bold text-white mb-5 tracking-wide text-[15px]">For Professionals</h4>
              <ul className="space-y-3.5 text-[14px] text-slate-400">
                <li><a href="https://www.cognifit.com/medical-platform" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Healthcare Professionals</a></li>
                <li><a href="https://www.cognifit.com/cognitive-research-tool" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Scientific Research</a></li>
                <li><a href="https://www.cognifit.com/educational-technology" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Education Professionals</a></li>
                <li><a href="https://www.cognifit.com/employee-wellbeing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Employee Wellbeing</a></li>
                <li><a href="https://www.cognifit.com/clinical-trials" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Clinical Trials</a></li>
                <li><a href="https://www.cognifit.com/commercial-partnerships" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Commercial Partnerships</a></li>
                <li><a href="https://www.cognifit.com/sports" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Sports & Athletes</a></li>
              </ul>
              
              <h4 className="font-bold text-white mt-8 mb-4 tracking-wide text-[15px]">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/cognifit/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0066FF] hover:border-[#0066FF] transition-all" aria-label="CogniFit on Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://twitter.com/CogniFit" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#00A3FF] hover:border-[#00A3FF] transition-all" aria-label="CogniFit on Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/cognifit/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all" aria-label="CogniFit on Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/company/cognifit" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0077B5] hover:border-[#0077B5] transition-all" aria-label="CogniFit on LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://www.youtube.com/user/cognifit" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all" aria-label="CogniFit on YouTube">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
         </div>
         
         {/* New Mega Footer Links (CogniFit) */}
         <div className="pt-16 mt-16 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 text-[13px] text-slate-400">
           {/* Column 1: Brain Science */}
           <div>
             <h4 className="font-bold text-white mb-6 text-[15px]">Brain Science</h4>
             <ul className="space-y-3">
               <li><a href="https://www.cognifit.com/brain" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">The Human Brain</a></li>
               <li><a href="https://www.cognifit.com/brain-mind" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Brain and Mind</a></li>
               <li><a href="https://www.cognifit.com/parts-of-the-brain" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Parts of the Brain</a></li>
               <li><a href="https://www.cognifit.com/neurons" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Neurons</a></li>
               <li><a href="https://www.cognifit.com/brain-plasticity" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Brain Plasticity</a></li>
               <li><a href="https://www.cognifit.com/brain-fitness" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Brain Fitness</a></li>
               <li><a href="https://www.cognifit.com/cognition" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Cognition</a></li>
               <li><a href="https://www.cognifit.com/memory-loss" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Memory Loss</a></li>
               <li><a href="https://www.cognifit.com/intellectual-disability" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Intellectual Disabilities</a></li>
               <li><a href="https://www.cognifit.com/brain-functions" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Brain Functions</a></li>
               <li><a href="https://www.cognifit.com/executive-functions" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Executive Functions</a></li>
               <li><a href="https://www.cognifit.com/coordination" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Coordination</a></li>
               <li><a href="https://www.cognifit.com/memory" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Memory</a></li>
               <li><a href="https://www.cognifit.com/perception" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Perception</a></li>
               <li><a href="https://www.cognifit.com/attention" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Attention</a></li>
             </ul>
           </div>

           {/* Column 2: Research */}
           <div>
             <h4 className="font-bold text-white mb-6 text-[15px]">Research</h4>
             <ul className="space-y-3">
               <li><a href="https://www.cognifit.com/research" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Digital Therapeutics Validation</a></li>
               <li><a href="https://www.cognifit.com/research" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Computer Games</a></li>
               <li><a href="https://www.cognifit.com/research" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Healthy Older Adults Trial</a></li>
               <li><a href="https://www.cognifit.com/research" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Navy Pilots</a></li>
               <li><a href="https://www.cognifit.com/research" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Senior Wellness</a></li>
               <li><a href="https://www.cognifit.com/research" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Healthy Seniors</a></li>
               <li><a href="https://www.cognifit.com/research" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Senior Cognitive Training</a></li>
               <li><a href="https://www.cognifit.com/research" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Cognitive state in adults</a></li>
               <li><a href="https://www.cognifit.com/research" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Systematic review</a></li>
               <li><a href="https://www.cognifit.com/research" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">SG4D taxonomy</a></li>
             </ul>
           </div>

           {/* Column 3: Brain Games (Part 1) */}
           <div>
             <h4 className="font-bold text-white mb-6 text-[15px]">Brain Games</h4>
             <ul className="space-y-3">
               {["Chess Online", "Mini Crossword", "Fruit Frenzy", "Pipe Panic", "Crystal Miner", "Solitaire", "Robo Factory", "Ant Escape", "Treasure Island", "Neon Lights", "Drive me crazy", "Visual Crossword", "Match it!", "Space Rescue", "Math Madness", "Marble Race", "Melodic Tennis", "Scrambled", "Find Your Pet", "Melody Mayhem", "Color Rush", "3D Art Puzzle"].map(game => (
                 <li key={game}><a href="https://www.cognifit.com/brain-games" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{game}</a></li>
               ))}
             </ul>
           </div>

           {/* Column 4: Brain Games (Part 2) */}
           <div className="pt-12 md:pt-11 lg:pt-11">
             {/* Invisible header to align the second column of Brain Games */}
             <ul className="space-y-3">
               {["Happy Hopper", "Candy Line Up", "Puzzles", "Penguin Explorer", "Digits", "Color Bee", "Bee Balloon", "Crossroads", "Cube Foundry", "Fresh Squeeze", "Jigsaw", "Fuel a Car", "Math Twins", "Minus Malus", "Mouse Challenge", "Perfect Tension", "Slice and Drop", "Twist It", "Water Lilies", "Reaction Field", "Words Birds", "See More Games..."].map(game => (
                 <li key={game}><a href="https://www.cognifit.com/brain-games" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{game}</a></li>
               ))}
             </ul>
           </div>

           {/* Column 5: Tools */}
           <div>
             <h4 className="font-bold text-white mb-6 text-[15px]">Tools</h4>
             <ul className="space-y-3">
               {["For Families", "For Clinicians", "For Researchers", "Education", "Patent", "MindFit®", "Babybright®", "Resellers", "Exercises for Children", "Cognitive Development", "Brain Exercise", "Individualized Training System", "Mind Quiz", "Cognitive Stimulation Therapy", "Mind Exercises", "Personalized Brain Training", "Brain Games", "Mental Exercise", "Online Memory Games", "Cool Math Games", "Reading Comprehension", "Gifted Children", "Brain Battles", "IQ Test"].map(tool => (
                 <li key={tool}><a href="https://www.cognifit.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{tool}</a></li>
               ))}
             </ul>
           </div>
         </div>
         
         {/* Disclaimer */}
         <div className="pt-10 pb-10 border-t border-white/10 mt-10">
           <p className="text-[11px] leading-relaxed text-slate-500 italic max-w-full text-justify lg:text-left">
             * Every CogniFit cognitive assessment is intended as an aid for assessing cognitive wellbeing of an individual. In a clinical setting, the CogniFit results (when interpreted by a qualified healthcare provider), may be used as an aid in determining whether further cognitive evaluation is needed. CogniFit's brain trainings are designed to promote/encourage the general state of cognitive health. CogniFit does not offer any medical diagnosis or treatment of any medical disease or condition. CogniFit products may also be used for research purposes for any range of cognitive related assessments. If used for research purposes, all use of the product must be in compliance with appropriate human subjects' procedures as they exist within the researchers' institution and will be the researcher's obligation. All such human subject protections shall be under the provisions of all applicable sections of the Code of Federal Regulations.
           </p>
         </div>

         {/* Bottom Footer */}
         <div className="pt-6 pb-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] text-slate-400">
           <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-5">
             <a href="https://www.cognifit.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms of Service</a>
             <a href="https://www.cognifit.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="https://www.cognifit.com/management-team" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Management Team</a>
             <a href="https://www.cognifit.com/newsroom" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">CogniFit Newsroom</a>
             <a href="https://www.cognifit.com/media-kit" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Media Kit</a>
             <a href="https://www.cognifit.com/affiliates" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Become an Affiliate</a>
             <a href="https://www.cognifit.com/resellers" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Become a Reseller</a>
             <a href="https://www.cognifit.com/contact" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact us</a>
             <a href="https://support.cognifit.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Help</a>
           </div>
           
           <div className="flex items-center text-white/90 whitespace-nowrap font-medium">
             <p>CogniFit Inc &copy; 2026</p>
           </div>
         </div>
       </div>
    </footer>
  );
}