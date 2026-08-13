/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Award, Users, BookOpen, Mic, Heart, GraduationCap, ArrowRight } from 'lucide-react';
import { ACTIVITIES, LAB_MEMBERS } from '../data';

export default function Activities() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Activities' },
    { value: 'program-committee', label: 'CVPR / PANELING' },
    { value: 'editor', label: 'EDITORIALS' },
    { value: 'invited-talk', label: 'KEYNOTES' },
    { value: 'mentorship', label: 'GRANTS' },
  ];

  const filteredActivities = ACTIVITIES.filter((act) => {
    return activeCategory === 'all' || act.category === activeCategory;
  });

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'program-committee':
        return <Award className="h-4 w-4 text-[#ff3e00]" />;
      case 'editor':
        return <BookOpen className="h-4 w-4 text-[#ff3e00]" />;
      case 'invited-talk':
        return <Mic className="h-4 w-4 text-[#ff3e00]" />;
      case 'mentorship':
        return <GraduationCap className="h-4 w-4 text-[#ff3e00]" />;
      default:
        return <Heart className="h-4 w-4 text-[#888888]" />;
    }
  };

  return (
    <section id="activities" className="py-24 bg-[#0c0c0c] border-b border-[#222222] text-left">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="font-display font-light text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Professional Panels & <span className="text-[#ff3e00] italic">Lab Members</span>
          </h2>
          <div className="h-[1px] w-12 bg-[#ff3e00] mx-auto mb-4" />
          <p className="font-sans text-[#888888] text-sm sm:text-base leading-relaxed">
            Coordinating global computer vision pipelines. Serving on key program chairs, reviewing high-yield journals, and mentoring the next generation of engineers.
          </p>
        </div>

        {/* Categories navigation for professional service */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Academic Activities */}
          <div className="lg:col-span-7 space-y-6" id="academic-services-hub">
            <h3 className="font-display font-light text-xl text-white border-b border-[#222222] pb-3 flex items-center gap-2">
              <Award className="h-5 w-5 text-[#ff3e00]" />
              <span>Service & Leadership Timeline</span>
            </h3>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider cursor-pointer transition-all ${
                    activeCategory === cat.value
                      ? 'bg-[#ff3e00] text-white font-bold'
                      : 'bg-[#151515] border border-[#222222] text-[#888888] hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="space-y-4" id="academic-activities-grid">
              {filteredActivities.length > 0 ? (
                filteredActivities.map((act) => (
                  <div
                    key={act.id}
                    className="p-5 border border-[#222222] hover:border-[#ff3e00]/50 bg-[#151515]/80 hover:bg-[#151515] transition-all duration-300 relative"
                    id={`active-service-item-${act.id}`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-[#0c0c0c] border border-[#222222]">
                          {getCategoryIcon(act.category)}
                        </div>
                        <h4 className="font-display font-medium text-sm sm:text-base text-white leading-snug">
                          {act.role}
                        </h4>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#ff3e00] min-w-fit">
                        {act.year}
                      </span>
                    </div>

                    <span className="text-xs font-mono uppercase tracking-wider text-[#888888] block pl-8 mb-2">
                      {act.venue}
                    </span>

                    {act.details && (
                      <p className="font-sans text-xs sm:text-sm text-[#888888] leading-relaxed pl-8">
                        {act.details}
                      </p>
                    )}
                  </div>
                ))
              ) : (
                <div className="p-12 border border-dashed border-[#222222] text-center text-[#888888] text-xs">
                  No professional activities match the selected filter.
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Lab Mentors & Researchers */}
          <div className="lg:col-span-5 space-y-6" id="vcl-lab-scholars">
            <h3 className="font-display font-light text-xl text-white border-b border-[#222222] pb-3 flex items-center gap-2">
              <Users className="h-5 w-5 text-[#ff3e00]" />
              <span>Lab Scholars & Mentoring</span>
            </h3>

            <p className="font-sans text-[#888888] text-xs sm:text-sm leading-relaxed mb-6">
              Our lab consists of fully dedicated doctoral, postdoc, and graduate software practitioners translating vector calculations into active camera network controls.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="lab-members-container">
              {LAB_MEMBERS.map((member, i) => (
                <div
                  key={i}
                  className="p-4 bg-[#151515]/60 hover:bg-[#151515] border border-[#222222] hover:border-[#ff3e00]/45 flex items-start gap-3.5 transition-all"
                  id={`lab-member-item-${i}`}
                >
                  <div className="w-10 h-10 border border-[#222222] bg-[#0c0c0c] flex items-center justify-center text-xl shrink-0">
                    {member.avatarEmoji}
                  </div>
                  
                  <div className="text-left space-y-1">
                    <h4 className="font-sans font-bold text-sm text-white leading-none">
                      {member.name}
                    </h4>
                    
                    <span className="inline-block px-1.5 py-0.5 bg-[#0c0c0c] border border-[#222222] text-[9px] font-mono font-bold text-[#ff3e00] uppercase">
                      {member.role} • {member.year}
                    </span>
                    
                    <p className="font-sans text-[11px] text-[#888888] leading-tight">
                      {member.researchTopic}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA panel to laboratory - Outlined monochrome poster card with safety line */}
            <div className="p-5 bg-[#0c0c0c] border border-[#ff3e00]/50 text-white relative overflow-hidden group">
              <div className="absolute right-0 bottom-0 translate-y-4 translate-x-4 w-24 h-24 bg-[#ff3e00]/5 rounded-full filter blur-xl" />
              <div className="absolute top-0 right-0 w-8 h-[1px] bg-[#ff3e00]" />
              <div className="absolute top-0 right-0 w-[1px] h-8 bg-[#ff3e00]" />
              
              <h4 className="font-display font-medium text-base text-white mb-2 leading-tight uppercase tracking-wider text-xs font-mono text-[#ff3e00]">
                Looking to cooperate with us?
              </h4>
              <p className="font-sans text-xs text-[#888888] leading-relaxed mb-4">
                Our team takes in high-yield research fellows and graduate interns seeking validation inside computational vision pipelines.
              </p>

              <a
                href="https://visual-computing.in"
                target="_blank"
                referrerPolicy="no-referrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#ff3e00] hover:text-white transition-colors"
              >
                <span>Browse the Visual Computing Lab</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 duration-250 text-[#ff3e00]" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
