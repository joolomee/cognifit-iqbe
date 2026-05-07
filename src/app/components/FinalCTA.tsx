import React from "react";
import { ArrowRight, Zap, CheckCircle } from "lucide-react";
import { FadeIn, Button } from "./ui";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FinalCTA() {
  return (
    <section className="relative py-12 sm:py-20 md:py-24 overflow-hidden border-t border-[#0066FF]/10">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] mix-blend-multiply bg-white">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1694500069324-d782decdd190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHBhdHRlcm4lMjBsaWdodHxlbnwxfHx8fDE3NzQ2MjcyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt=""
          className="w-full h-full object-cover grayscale opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4F7FB] via-[#F4F7FB]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4F7FB] via-transparent to-transparent" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0066FF]/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#0A102E] mb-6 tracking-tight">
            Ready to Discover Your IQ?
          </h2>
          <p className="text-lg md:text-xl text-[#4A5578] leading-relaxed mb-10 max-w-[600px] mx-auto font-light">
            Take CogniFit’s interactive IQbe test and see how your reasoning compares to the reference population.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              onClick={() => window.open("https://www.cognifit.com/aplicaciones/html5/public/assessment/ASSESSMENT~@~IQBE?testButtonUrl=https://www.cognifit.com%2Fbattery-of-tests%2Fiqbe-test%3Freg%3Dtrue", "_blank")}
              className="text-lg w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[#0066FF] to-[#00A3FF] hover:from-[#0055DD] hover:to-[#0088DD] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Check My IQ Score <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mt-10 text-[14px] text-[#4A5578] font-bold">
            <div className="flex items-center">
              <Zap className="w-4 h-4 mr-2 text-[#FFB800]" />
              Fast online assessment
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]/20 hidden sm:block" />
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-[#00D4AA]" />
              Non-verbal
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]/20 hidden sm:block" />
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2 bg-gradient-to-br from-[#0066FF] to-[#00E5FF] rounded-full flex items-center justify-center shadow-[0_2px_5px_rgba(0,102,255,0.3)]">
                <span className="text-[10px] text-white font-bold">✓</span>
              </div>
              Scientifically grounded
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}