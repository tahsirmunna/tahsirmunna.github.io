/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, Quote, FileText, ChevronDown, ChevronUp, Copy, Check, ExternalLink, Code } from 'lucide-react';
import { PUBLICATIONS } from '../data';
import { Publication } from '../types';

export default function Publications() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedBibtexId, setExpandedBibtexId] = useState<string | null>(null);
  const [expandedAbstractId, setExpandedAbstractId] = useState<string | null>(null);
  const [copiedBibId, setCopiedBibId] = useState<string | null>(null);

  const categories = [
    { value: 'all', label: 'All Publications' },
    { value: 're-id', label: 'Re-Identification' },
    { value: 'deep-learning', label: 'Deep Learning Security' },
    { value: 'cross-modal', label: 'Cross-Modal Retrieval' },
    { value: 'computer-vision', label: 'General Computer Vision' },
  ];

  const filteredPublications = useMemo(() => {
    return PUBLICATIONS.filter((pub) => {
      const matchesCategory = selectedCategory === 'all' || pub.category === selectedCategory;
      const matchesSearch =
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const toggleBibtex = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedBibtexId(expandedBibtexId === id ? null : id);
  };

  const toggleAbstract = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedAbstractId(expandedAbstractId === id ? null : id);
  };

  const copyBibtex = (id: string, bibtex: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(bibtex);
    setCopiedBibId(id);
    setTimeout(() => setCopiedBibId(null), 2500);
  };

  return (
    <section id="publications" className="py-24 bg-[#0c0c0c] border-b border-[#222222] text-left">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="font-display font-light text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Publications <span className="text-[#ff3e00] italic">Database</span>
          </h2>
          <div className="h-[1px] w-12 bg-[#ff3e00] mx-auto mb-4" />
          <p className="font-sans text-[#888888] text-sm sm:text-base leading-relaxed">
            Highly peer-reviewed contributions across IEEE T-PAMI, CVPR, ICCV, ECCV, and ICML. Use filters and keyword search to navigate our corpus.
          </p>
        </div>

        {/* Filters and Searching control panel */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10 pb-6 border-b border-[#222222]" id="publications-control-hub">
          {/* Search container */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#ff3e00]" />
            <input
              type="text"
              placeholder="Search by title, author, venue, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#151515] border border-[#222222] focus:border-[#ff3e00] text-sm text-white focus:outline-none transition-colors"
            />
          </div>

          {/* Categories track */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto" id="pub-categories-nav">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 font-mono text-[11px] uppercase tracking-wider cursor-pointer transition-all ${
                  selectedCategory === cat.value
                    ? 'bg-[#ff3e00] text-white font-bold'
                    : 'bg-[#151515] border border-[#222222] text-[#888888] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Publications loop */}
        <div className="space-y-6" id="publications-container">
          {filteredPublications.length > 0 ? (
            filteredPublications.map((pub, idx) => {
              const isBibtexOpen = expandedBibtexId === pub.id;
              const isAbstractOpen = expandedAbstractId === pub.id;
              
              return (
                <div
                  key={pub.id}
                  className="bg-[#151515] border border-[#222222] hover:border-[#ff3e00] p-6 transition-all duration-300 relative"
                  id={`publication-card-${pub.id}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div className="space-y-1.5">
                      {/* Venue / Year badge line */}
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 bg-[#0c0c0c] border border-[#222222] text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                          {pub.venue}
                        </span>
                        <span className="px-2.5 py-0.5 bg-[#0c0c0c] border border-[#ff3e00]/40 text-[10px] font-mono font-bold text-[#ff3e00]">
                          {pub.year}
                        </span>
                      </div>

                      <h3 className="font-display font-medium text-lg text-white leading-snug tracking-tight">
                        {pub.title}
                      </h3>

                      <p className="font-sans text-[#888888] text-xs sm:text-sm">
                        {pub.authors.split(', ').map((auth, aIdx) => {
                          const isAnirban = auth.includes('Anirban Chakraborty');
                          return (
                            <React.Fragment key={aIdx}>
                              {aIdx > 0 && ', '}
                              <span className={isAnirban ? 'text-[#ff3e00] font-bold' : ''}>
                                {auth}
                              </span>
                            </React.Fragment>
                          );
                        })}
                      </p>
                    </div>

                    {/* Paper Action links */}
                    <div className="flex sm:flex-col gap-2 min-w-fit">
                      {pub.doi && (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          referrerPolicy="no-referrer"
                          className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#0c0c0c] border border-[#222222] hover:border-[#ff3e00] text-xs font-mono uppercase tracking-wider text-[#888888] hover:text-[#ff3e00] transition-colors"
                        >
                          <ExternalLink className="h-3 w-3" />
                          <span>DOI Record</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Tags cluster */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {pub.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2.5 py-0.5 bg-[#0c0c0c] text-[#888888] border border-[#222222]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expand buttons block */}
                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#222222] text-xs font-mono uppercase tracking-wider">
                    <button
                      onClick={(e) => toggleAbstract(pub.id, e)}
                      className="flex items-center gap-1 px-3 py-1.5 text-[#888888] hover:text-white hover:bg-[#0c0c0c] border border-transparent hover:border-[#222222] cursor-pointer"
                    >
                      <FileText className="h-3.5 w-3.5 text-[#ff3e00]" />
                      <span>Abstract</span>
                      {isAbstractOpen ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                    </button>

                    <button
                      onClick={(e) => toggleBibtex(pub.id, e)}
                      className="flex items-center gap-1 px-3 py-1.5 text-[#888888] hover:text-white hover:bg-[#0c0c0c] border border-transparent hover:border-[#222222] cursor-pointer"
                    >
                      <Quote className="h-3.5 w-3.5 text-[#ff3e00]" />
                      <span>BibTeX</span>
                      {isBibtexOpen ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                    </button>
                    
                    {pub.codeUrl && (
                      <a
                        href={pub.codeUrl}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-[#888888] hover:text-white hover:bg-[#0c0c0c] border border-transparent hover:border-[#222222]"
                      >
                        <Code className="h-3.5 w-3.5 text-[#ff3e00]" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>

                  {/* Expand content: Abstract */}
                  {isAbstractOpen && (
                    <div className="mt-4 p-5 bg-[#0c0c0c] text-xs sm:text-sm text-[#888888] leading-relaxed border border-[#222222] animate-fade-in">
                      <strong className="text-white block mb-2 font-mono uppercase tracking-widest text-[9px] flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-[#ff3e00]" /> Paper Summary Abstract
                      </strong>
                      <p>{pub.abstract}</p>
                    </div>
                  )}

                  {/* Expand content: BibTeX */}
                  {isBibtexOpen && (
                    <div className="mt-4 relative bg-[#0c0c0c] text-[#888888] p-5 border border-[#ff3e00]/30 animate-fade-in font-mono text-[11px] sm:text-xs">
                      <div className="absolute right-4 top-4 flex gap-2">
                        <button
                          onClick={(e) => copyBibtex(pub.id, pub.bibtex, e)}
                          className="px-2.5 py-1 bg-[#ff3e00] hover:bg-[#ff3e00]/85 text-[10px] font-mono text-white tracking-wider uppercase font-bold cursor-pointer"
                        >
                          {copiedBibId === pub.id ? (
                            <span className="flex items-center gap-1">
                              <Check className="h-3 w-3" /> Copied
                            </span>
                          ) : (
                            <span className="flex items-center gap-1">
                              <Copy className="h-3 w-3" /> Copy Bib
                            </span>
                          )}
                        </button>
                      </div>

                      <pre className="overflow-x-auto whitespace-pre pr-20 select-all block text-left">
                        {pub.bibtex}
                      </pre>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-16 border border-dashed border-[#222222] text-center bg-[#151515] flex flex-col items-center justify-center">
              <span className="font-display font-medium text-white mb-1">No publications match search</span>
              <span className="text-xs text-[#888888]">Try checking spelling or adjusting category filters.</span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
