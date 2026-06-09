/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, ArrowDown, ExternalLink, Copy, Check, FileText, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollToSection = (id: string) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      const offset = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center bg-[#0c0c0c] overflow-hidden border-b border-[#222222]"
    >
      {/* Grid pattern background consistent with industrial design */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b1b1b_1px,transparent_1px),linear-gradient(to_bottom,#1b1b1b_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.45] pointer-events-none" />
      
      {/* Dramatic artistic low-opacity display text */}
      <div className="absolute right-[-10%] top-[40%] text-[200px] font-black tracking-widest text-white/5 uppercase select-none pointer-events-none font-display leading-none hidden lg:block">
        VISION
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side: Professional Profile Text */}
        <div className="lg:col-span-7 flex flex-col items-start text-left" id="hero-profile-info">
          {/* Institution Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#151515] border border-[#222222] text-xs font-mono tracking-wider uppercase text-[#ff3e00] mb-6 animate-fade-in">
            <span className="w-1.5 h-1.5 bg-[#ff3e00]" />
            <span>{PERSONAL_INFO.institution}</span>
          </div>

          <h1 className="font-display font-light text-4xl sm:text-5xl lg:text-7xl text-white tracking-tight leading-none mb-4 animate-slide-up">
            Dr. Anirban <span className="text-[#ff3e00] font-normal italic">Chakraborty</span>
          </h1>
          
          <h2 className="font-mono text-xs text-[#888888] mb-6 uppercase tracking-widest">
            {PERSONAL_INFO.title} • {PERSONAL_INFO.department}
          </h2>

          <p className="font-sans text-[#888888] text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
            Leading the <strong className="text-white font-semibold">{PERSONAL_INFO.labName}</strong> at IISc. 
            We build state-of-the-art architectures in <strong className="text-white font-semibold">computer vision</strong>, 
            multi-modal representation spaces, high-density <strong className="text-white font-semibold">video surveillance</strong>, 
            and deep network robustness under adversarial and domain perturbations.
          </p>

          {/* Action button cluster */}
          <div className="flex flex-wrap gap-4 w-full sm:w-auto" id="hero-actions">
            <button
              onClick={() => handleScrollToSection('#publications')}
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#ff3e00] hover:bg-[#ff3e00]/80 active:scale-95 text-white font-mono uppercase tracking-wider text-xs transition-colors cursor-pointer font-bold"
            >
              <FileText className="h-4 w-4" />
              <span>Publications DB</span>
            </button>
            
            <button
              onClick={() => handleScrollToSection('#books')}
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#151515] hover:bg-[#151515]/80 border border-[#222222] hover:border-[#ff3e00] text-[#888888] hover:text-white font-mono uppercase tracking-wider text-xs transition-colors cursor-pointer"
            >
              <Award className="h-4 w-4" />
              <span>Academic Books</span>
            </button>

            {/* Copyable email tool */}
            <div className="flex items-center gap-1.5 p-1 bg-[#151515] border border-[#222222] max-w-full">
              <span className="text-[11px] text-[#888888] font-mono pl-3 pr-2 hidden sm:inline">
                {PERSONAL_INFO.email}
              </span>
              <button
                onClick={copyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0c0c0c] hover:bg-[#0c0c0c]/80 text-[#888888] hover:text-white border border-[#222222] text-xs font-mono uppercase tracking-wider cursor-pointer"
                title="Copy Email Address"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-green-500" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
          
          {/* Quick External Profiles */}
          <div className="mt-8 pt-6 border-t border-[#222222] w-full flex items-center gap-6 text-xs font-mono">
            <span className="uppercase tracking-widest text-[#888888]">Profiles:</span>
            <a
              href={PERSONAL_INFO.scholar}
              target="_blank"
              referrerPolicy="no-referrer"
              className="text-[#888888] hover:text-[#ff3e00] pb-0.5 border-b border-transparent hover:border-[#ff3e00] flex items-center gap-1 transition-all"
            >
              <span>Scholar</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              referrerPolicy="no-referrer"
              className="text-[#888888] hover:text-[#ff3e00] pb-0.5 border-b border-transparent hover:border-[#ff3e00] flex items-center gap-1 transition-all"
            >
              <span>GitHub</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Right Side: Virtual Profile Visual & Vital Stats */}
        <div className="lg:col-span-5 h-full relative flex items-center justify-center py-10" id="hero-portrait-container">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            
            {/* Minimal grid lines in place of circles */}
            <div className="absolute inset-0 border border-[#222222]" />
            <div className="absolute -inset-4 border border-[#222222]/40" />

            {/* Inner Monogram Avatar Panel - Sharp Card aesthetic */}
            <div className="absolute inset-8 bg-[#151515] border border-[#222222] p-6 flex flex-col items-center justify-center group">
              {/* Corner accent lines */}
              <div className="absolute top-0 left-0 w-3 h-1 bg-[#ff3e00]" />
              <div className="absolute top-0 left-0 w-1.5 h-3 bg-[#ff3e00]" />
              <div className="absolute bottom-0 right-0 w-3 h-1 bg-[#ff3e00]" />
              <div className="absolute bottom-0 right-0 w-1.5 h-3 bg-[#ff3e00]" />
              
              <span className="font-display font-bold text-6xl sm:text-7xl text-white tracking-tighter block mb-2 group-hover:scale-105 transition-transform duration-300">
                VCL
              </span>
              <span className="text-[#ff3e00] font-mono text-[11px] sm:text-xs tracking-widest uppercase block">
                IISc Bangalore
              </span>
              <span className="text-[#888888] font-serif italic text-xs block mt-1">
                Laboratory established 2016
              </span>
            </div>

            {/* Floating stats badge 1: Citations */}
            <div className="absolute -top-4 left-0 bg-[#151515] border border-[#222222] p-3 rounded-none shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0c0c0c] border border-[#222222] flex items-center justify-center text-[#ff3e00] font-bold text-lg font-mono">
                3E3
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#888888] uppercase tracking-wider block">Citations</span>
                <span className="text-xs font-sans text-white hover:text-[#ff3e00] block">Google Scholar</span>
              </div>
            </div>

            {/* Floating stats badge 2: Papers */}
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-[#151515] border border-[#222222] p-3 rounded-none shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0c0c0c] border border-[#222222] flex items-center justify-center text-[#ff3e00] font-bold text-md font-mono">
                60+
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#888888] uppercase tracking-wider block">Publications</span>
                <span className="text-xs font-sans text-white block">IEEE TPAMI / CVPR</span>
              </div>
            </div>

            {/* Floating stats badge 3: Advisors */}
            <div className="absolute -bottom-2 left-6 bg-[#151515] border border-[#222222] p-3 rounded-none shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0c0c0c] border border-[#222222] flex items-center justify-center text-[#ff3e00] font-bold text-md font-mono">
                15+
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#888888] uppercase tracking-wider block">Scholars</span>
                <span className="text-xs font-sans text-white block">Ph.D & M.S. Graduated</span>
              </div>
            </div>

            {/* Floating stats badge 4: h-index */}
            <div className="absolute top-1/4 -left-12 bg-[#151515] border border-[#222222] p-2.5 rounded-none shadow-md text-center">
              <span className="text-[9px] font-mono text-[#888888] uppercase tracking-widest block font-bold leading-none">H-Index</span>
              <span className="text-lg font-mono font-bold text-white mt-1 block">28</span>
            </div>

          </div>
        </div>
      </div>

      {/* Down arrow scroll helper */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[9px] font-mono tracking-wider text-[#888888] uppercase">Scroll Down</span>
        <button
          onClick={() => handleScrollToSection('#about')}
          className="p-1.5 border border-[#222222] bg-[#151515] hover:translate-y-0.5 transition-transform cursor-pointer"
        >
          <ArrowDown className="h-4 w-4 text-white" />
        </button>
      </div>
    </section>
  );
}
