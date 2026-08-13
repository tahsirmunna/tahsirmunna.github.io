/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Image, Maximize2, X, ChevronLeft, ChevronRight, BarChart2, Layers } from 'lucide-react';
import { RESEARCH_ARTIFACTS } from '../data';
import { ResearchArtifact } from '../types';

export default function ResearchGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalArtifact, setActiveModalArtifact] = useState<ResearchArtifact | null>(null);

  const categories = [
    { id: 'all', label: 'All Artifacts', count: RESEARCH_ARTIFACTS.length },
    { id: 'medical', label: 'Medical AI & Biobanks', count: RESEARCH_ARTIFACTS.filter(a => a.category === 'medical').length },
    { id: 'nlp', label: 'Clinical NLP & LLMs', count: RESEARCH_ARTIFACTS.filter(a => a.category === 'nlp').length },
    { id: 'compression', label: 'Neural Codecs & ML', count: RESEARCH_ARTIFACTS.filter(a => a.category === 'compression').length },
  ];

  const filteredArtifacts = selectedCategory === 'all'
    ? RESEARCH_ARTIFACTS
    : RESEARCH_ARTIFACTS.filter(a => a.category === selectedCategory);

  const handleNavigateModal = (direction: number) => {
    if (!activeModalArtifact) return;
    const currentIndex = RESEARCH_ARTIFACTS.findIndex(a => a.id === activeModalArtifact.id);
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = RESEARCH_ARTIFACTS.length - 1;
    if (nextIndex >= RESEARCH_ARTIFACTS.length) nextIndex = 0;
    setActiveModalArtifact(RESEARCH_ARTIFACTS[nextIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-[#0c0c0c] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ff3e00]/10 border border-[#ff3e00]/25 text-[#ff3e00] text-xs font-mono uppercase tracking-wider rounded mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Visual Research & Lab Snapshots</span>
          </div>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-white tracking-tight leading-snug mb-4">
            Empirical Visualizations & <span className="text-[#ff3e00] italic">Experiment Artifacts</span>
          </h2>
          <p className="font-sans text-[#888888] text-sm sm:text-base leading-relaxed">
            Neural network segmentation masks, multi-agent biobank decision graphs, Rate-Distortion curves, clinical NLP attention matrices, and large language model benchmark radars across our research projects.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider rounded border transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-white text-black border-white font-semibold shadow-md'
                  : 'bg-[#151515] text-[#888888] border-[#222222] hover:text-white hover:border-[#444444]'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${selectedCategory === cat.id ? 'bg-black/15 text-black' : 'bg-[#222222] text-[#888888]'}`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Artifact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtifacts.map((artifact) => (
            <div
              key={artifact.id}
              onClick={() => setActiveModalArtifact(artifact)}
              className="group bg-[#151515] border border-[#222222] hover:border-[#ff3e00]/50 rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] bg-black overflow-hidden">
                <img
                  src={artifact.image}
                  alt={artifact.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Floating Tags */}
                <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-0.5 rounded border border-white/15">
                  {artifact.project}
                </span>
                <span className="absolute top-3 right-3 bg-[#ff3e00] text-white text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded shadow">
                  {artifact.domain}
                </span>

                {/* Hover Inspect Icon */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 text-black flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-display font-medium text-white text-base leading-snug mb-2 group-hover:text-[#ff3e00] transition-colors">
                  {artifact.title}
                </h3>
                <p className="text-xs text-[#888888] leading-relaxed mb-4 flex-grow line-clamp-3">
                  {artifact.desc}
                </p>

                {/* Metrics Badges */}
                <div className="pt-3 border-t border-[#222222] flex flex-wrap gap-1.5">
                  {artifact.metrics.slice(0, 3).map((metric, i) => (
                    <span
                      key={i}
                      className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                        metric.highlight
                          ? 'bg-[#ff3e00]/15 text-[#ff3e00] border border-[#ff3e00]/30 font-medium'
                          : 'bg-[#1e1e1e] text-[#aaaaaa]'
                      }`}
                    >
                      {metric.label}: {metric.value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeModalArtifact && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setActiveModalArtifact(null)}
        >
          <div
            className="bg-[#151515] border border-[#333333] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalArtifact(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/70 hover:bg-[#ff3e00] text-white flex items-center justify-center border border-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto lg:overflow-hidden">
              {/* Image Preview & Carousel Controls */}
              <div className="lg:col-span-7 bg-black p-4 flex flex-col items-center justify-center relative min-h-[300px] lg:min-h-[460px]">
                <img
                  src={activeModalArtifact.image}
                  alt={activeModalArtifact.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[460px] w-full object-contain rounded"
                />

                {/* Navigation Arrows */}
                <div className="absolute inset-x-4 bottom-4 flex justify-between pointer-events-none">
                  <button
                    onClick={() => handleNavigateModal(-1)}
                    className="pointer-events-auto w-9 h-9 rounded-full bg-black/80 hover:bg-[#ff3e00] text-white flex items-center justify-center border border-white/20 transition-colors"
                    aria-label="Previous artifact"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleNavigateModal(1)}
                    className="pointer-events-auto w-9 h-9 rounded-full bg-black/80 hover:bg-[#ff3e00] text-white flex items-center justify-center border border-white/20 transition-colors"
                    aria-label="Next artifact"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Text & Metrics Details */}
              <div className="lg:col-span-5 p-6 flex flex-col justify-between overflow-y-auto">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-white/10 text-white text-[11px] font-mono px-2 py-0.5 rounded">
                      {activeModalArtifact.project}
                    </span>
                    <span className="bg-[#ff3e00] text-white text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded">
                      {activeModalArtifact.domain}
                    </span>
                  </div>

                  <h3 className="font-display font-medium text-white text-lg sm:text-xl leading-snug mb-4">
                    {activeModalArtifact.title}
                  </h3>

                  <div className="mb-6">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1.5 flex items-center gap-1.5">
                      <BarChart2 className="w-3.5 h-3.5 text-[#ff3e00]" />
                      <span>Experimental Findings</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#aaaaaa] leading-relaxed">
                      {activeModalArtifact.desc}
                    </p>
                  </div>

                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#ff3e00]" />
                      <span>Quantitative Metrics</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {activeModalArtifact.metrics.map((m, idx) => (
                        <div
                          key={idx}
                          className={`p-2 rounded border text-xs font-mono ${
                            m.highlight
                              ? 'bg-[#ff3e00]/10 border-[#ff3e00]/30 text-[#ff3e00]'
                              : 'bg-[#1c1c1c] border-[#2a2a2a] text-[#cccccc]'
                          }`}
                        >
                          <div className="text-[10px] text-[#777777] uppercase">{m.label}</div>
                          <div className="font-semibold text-sm mt-0.5">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#222222] text-[11px] text-[#666666] font-mono">
                  Artifact snapshot generated from experimental telemetry
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
