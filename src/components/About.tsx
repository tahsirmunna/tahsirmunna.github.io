/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Shield, GitMerge, Lock, Network, GraduationCap, Briefcase, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, CAREER_TIMELINE, RESEARCH_THEMES } from '../data';

export default function About() {
  const [timelineTab, setTimelineTab] = useState<'career' | 'education'>('career');

  const getThemeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="h-5 w-5" />;
      case 'GitMerge':
        return <GitMerge className="h-5 w-5" />;
      case 'Lock':
        return <Lock className="h-5 w-5" />;
      case 'Network':
        return <Network className="h-5 w-5" />;
      default:
        return <Shield className="h-5 w-5" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-[#0c0c0c] border-y border-[#222222]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <h2 className="font-display font-light text-3xl sm:text-4xl text-white tracking-tight leading-snug mb-4">
            Biography & <span className="text-[#ff3e00] italic">Research Scope</span>
          </h2>
          <div className="h-[1px] w-12 bg-[#ff3e00] mx-auto mb-4" />
          <p className="font-sans text-[#888888] text-sm sm:text-base leading-relaxed">
            Bridging fundamental engineering with state-of-the-art deep vision paradigms to construct robust and security-certified intelligent systems.
          </p>
        </div>

        {/* Narrative & Timeline row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Biography Block */}
          <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-6" id="about-narrative">
            <h3 className="font-display font-medium text-lg text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ff3e00] inline-block" />
              <span>About Dr. Chakraborty</span>
            </h3>
            <div className="font-sans text-[#888888] text-sm sm:text-base leading-relaxed space-y-4">
              {PERSONAL_INFO.biography.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 p-5 bg-[#151515] border border-[#222222] w-full flex items-center gap-4">
              <div className="p-3 bg-[#0c0c0c] border border-[#222222] text-[#ff3e00]">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono text-[#888888] block uppercase tracking-wider">Supervised advised by</span>
                <span className="text-sm font-sans font-bold text-white block">Prof. Amit K. Roy-Chowdhury</span>
                <span className="text-xs text-[#888888] block">Ph.D. in EE, University of California, Riverside</span>
              </div>
            </div>
          </div>

          {/* Timeline Block */}
          <div className="lg:col-span-6 flex flex-col bg-[#151515] p-6 sm:p-8 border border-[#222222]" id="about-timeline">
            {/* Timeline selector tabs */}
            <div className="flex gap-2 p-1 bg-[#0c0c0c] border border-[#222222] mb-8 self-start">
              <button
                onClick={() => setTimelineTab('career')}
                className={`flex items-center gap-2 px-4 py-2 font-mono text-[11px] uppercase tracking-wider cursor-pointer transition-all ${
                  timelineTab === 'career'
                    ? 'bg-[#ff3e00] text-white font-bold'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                <Briefcase className="h-3.5 w-3.5" />
                <span>Professional CV</span>
              </button>
              <button
                onClick={() => setTimelineTab('education')}
                className={`flex items-center gap-2 px-4 py-2 font-mono text-[11px] uppercase tracking-wider cursor-pointer transition-all ${
                  timelineTab === 'education'
                    ? 'bg-[#ff3e00] text-white font-bold'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                <GraduationCap className="h-3.5 w-3.5" />
                <span>Academic Degrees</span>
              </button>
            </div>

            {/* Timelines content */}
            <div className="relative timeline-line text-left pl-8 space-y-8">
              {timelineTab === 'career' ? (
                <>
                  {CAREER_TIMELINE.map((item, index) => (
                    <div key={index} className="relative group animate-fade-in" id={`career-item-${index}`}>
                      {/* Timeline dot */}
                      <div className="absolute -left-[30.5px] top-1.5 w-2.5 h-2.5 bg-[#0c0c0c] border-2 border-[#ff3e00] group-hover:bg-[#ff3e00] transition-colors z-10" />
                      
                      <span className="inline-block px-2 py-0.5 bg-[#0c0c0c] border border-[#222222] text-[10px] font-mono text-[#ff3e00] font-bold mb-2">
                        {item.period}
                      </span>
                      
                      <h4 className="font-display font-medium text-base text-white tracking-tight block">
                        {item.role}
                      </h4>
                      <span className="text-xs text-[#888888] font-mono block mb-2">
                        {item.institution}
                      </span>
                      <p className="font-sans text-[#888888] text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {EDUCATION.map((item, index) => (
                    <div key={index} className="relative group animate-fade-in" id={`edu-item-${index}`}>
                      {/* Timeline dot */}
                      <div className="absolute -left-[30.5px] top-1.5 w-2.5 h-2.5 bg-[#0c0c0c] border-2 border-[#ff3e00] group-hover:bg-[#ff3e00] transition-colors z-10" />
                      
                      <span className="inline-block px-2 py-0.5 bg-[#0c0c0c] border border-[#222222] text-[10px] font-mono text-[#ff3e00] font-bold mb-2">
                        {item.period}
                      </span>
                      
                      <h4 className="font-display font-medium text-base text-white tracking-tight block">
                        {item.degree}
                      </h4>
                      <span className="text-xs text-[#888888] font-mono block mb-2">
                        {item.institution}
                      </span>
                      {item.thesis && (
                        <p className="font-mono text-[#888888] bg-[#0c0c0c] border border-[#222222] p-2.5 text-[11px] leading-relaxed italic mb-2">
                          <strong>Dissertation: </strong> "{item.thesis}" {item.advisor && `(Advised by ${item.advisor})`}
                        </p>
                      )}
                      {item.details && (
                        <p className="font-sans text-[#888888] text-xs sm:text-sm leading-relaxed">
                          {item.details}
                        </p>
                      )}
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Research scope highlights */}
        <div id="research" className="pt-16 border-t border-[#222222] text-left">
          <h3 className="font-display font-light text-2xl text-white tracking-tight text-center mb-12">
            Primary <span className="text-[#ff3e00] italic">Research Specialties</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESEARCH_THEMES.map((theme, index) => (
              <div
                key={index}
                className="group p-6 bg-[#151515] border border-[#222222] hover:border-[#ff3e00] transition-all duration-300"
                id={`research-pillar-${index}`}
              >
                {/* Theme icon block */}
                <div className={`p-3 bg-[#0c0c0c] border border-[#222222] text-[#ff3e00] group-hover:scale-105 transition-transform w-fit mb-5`}>
                  {getThemeIcon(theme.icon)}
                </div>
                
                <h4 className="font-display font-semibold text-base text-white group-hover:text-[#ff3e00] transition-colors mb-2 leading-snug">
                  {theme.title}
                </h4>
                
                <p className="font-sans text-[#888888] text-xs sm:text-sm leading-relaxed">
                  {theme.description}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#ff3e00] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore context</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
