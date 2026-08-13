/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, Users, Star, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import { COURSES } from '../data';

export default function Teaching() {
  const [expandedCourse, setExpandedCourse] = useState<string | null>('DS 265');

  const toggleCourseExpanded = (code: string) => {
    if (expandedCourse === code) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(code);
    }
  };

  return (
    <section id="teaching" className="py-24 bg-[#0c0c0c] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="font-display font-light text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Teaching & <span className="text-[#ff3e00] italic">Mentorship</span>
          </h2>
          <div className="h-[1px] w-12 bg-[#ff3e00] mx-auto mb-4" />
          <p className="font-sans text-[#888888] text-sm sm:text-base leading-relaxed">
            Leading advanced coursework in Computational and Data Sciences at IISc. Lectures integrate physical model formulations with modern deep representations.
          </p>
        </div>

        {/* Dynamic Courses Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Courses selection card column */}
          <div className="lg:col-span-5 space-y-4" id="courses-selection-accordion">
            <h3 className="font-mono text-xs text-[#888888] uppercase tracking-widest text-left mb-4">
              Regular Core Courses
            </h3>
            
            {COURSES.map((course) => {
              const isExpanded = expandedCourse === course.code;
              return (
                <div
                  key={course.code}
                  onClick={() => toggleCourseExpanded(course.code)}
                  className={`p-5 border text-left cursor-pointer transition-all ${
                    isExpanded
                      ? 'bg-[#151515] border-[#ff3e00]'
                      : 'bg-[#151515]/60 hover:bg-[#151515] border-[#222222] hover:border-[#ff3e00]/40'
                  }`}
                  id={`course-summary-${course.code}`}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 bg-[#0c0c0c] border border-[#222222] text-[10px] font-mono font-bold text-[#ff3e00]">
                          {course.code}
                        </span>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-[#888888]">
                          {course.semester}
                        </span>
                      </div>
                      
                      <h4 className="font-display font-medium text-base text-white leading-snug">
                        {course.title}
                      </h4>
                    </div>

                    <div className="text-[#888888]">
                      {isExpanded ? <ChevronUp className="h-5 w-5 text-[#ff3e00]" /> : <ChevronDown className="h-5 w-5" />}
                    </div>
                  </div>

                  {/* Micro stats banner */}
                  <div className="mt-4 pt-3 border-t border-[#222222] flex gap-4 text-[10px] font-mono uppercase tracking-wider text-[#888888]">
                    <span className="flex items-center gap-1">
                      <GraduationCap className="h-3.5 w-3.5 text-[#ff3e00]" />
                      {course.level}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      ~{course.enrollmentApprox} enrolled
                    </span>
                    <span className="flex items-center gap-0.5 text-[#ff3e00] font-bold ml-auto">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      {course.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Expanded Syllabus Panel */}
          <div className="lg:col-span-7" id="syllabus-focus-card">
            {expandedCourse ? (
              <div className="bg-[#151515] border border-[#222222] p-6 sm:p-8 text-left animate-fade-in relative animate-fade-in">
                <div className="absolute top-0 right-0 w-8 h-[1px] bg-[#ff3e00]" />
                <div className="absolute top-0 right-0 w-[1px] h-8 bg-[#ff3e00]" />
                {(() => {
                  const course = COURSES.find((c) => c.code === expandedCourse);
                  if (!course) return null;
                  return (
                    <>
                      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#222222] pb-5 mb-6">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="px-2 py-0.5 bg-[#0c0c0c] border border-[#222222] text-[10px] font-mono text-[#ff3e00] uppercase tracking-wider">
                              Course syllabus
                            </span>
                            <span className="text-xs text-[#888888] font-mono">
                              {course.code}
                            </span>
                          </div>
                          <h4 className="font-display font-light text-xl sm:text-2xl text-white leading-snug">
                            {course.title}
                          </h4>
                        </div>
                        <div className="flex items-center gap-1 bg-[#0c0c0c] border border-[#222222] px-3 py-1 font-mono text-xs font-bold text-[#ff3e00]">
                          <Star className="h-3.5 w-3.5 fill-current" />
                          <span>Student Rating: {course.rating.toFixed(2)}/5.0</span>
                        </div>
                      </div>

                      <p className="font-sans text-[#888888] text-sm leading-relaxed mb-6">
                        {course.description}
                      </p>

                      <h5 className="font-mono text-xs text-[#888888] uppercase tracking-widest mb-4">
                        Lectured Modules & Units
                      </h5>

                      <ul className="space-y-3.5 pl-0 mb-8" id="syllabus-list">
                        {course.syllabus.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="p-1 bg-[#0c0c0c] border border-[#222222] text-[#ff3e00] mt-0.5">
                              <BookOpen className="h-3.5 w-3.5" />
                            </div>
                            <span className="font-sans text-[#ffffff]/95 text-sm leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Course Keywords tags */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-[#222222] items-center">
                        <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-[#888888] mr-2">
                          Core keywords:
                        </span>
                        {course.keywords.map((kw, i) => (
                          <span
                            key={i}
                            className="text-xs font-mono px-3 py-1 bg-[#0c0c0c] border border-[#222222] text-[#888888]"
                          >
                            #{kw}
                          </span>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </div>
            ) : (
              <div className="bg-[#151515] border border-dashed border-[#222222] p-12 text-center h-full flex flex-col items-center justify-center">
                <BookOpen className="h-10 w-10 text-[#888888] stroke-1 mb-3" />
                <span className="text-sm font-semibold text-[#888888]">
                  Select a course on the left to view detailed syllabus modules
                </span>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
