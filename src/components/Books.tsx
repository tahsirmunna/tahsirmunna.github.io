/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, ExternalLink, Globe } from 'lucide-react';
import { BOOKS } from '../data';

export default function Books() {
  return (
    <section id="books" className="py-24 bg-[#0c0c0c] border-b border-[#222222] text-left">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="font-display font-light text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Books & Research <span className="text-[#ff3e00] italic">Monographs</span>
          </h2>
          <div className="h-[1px] w-12 bg-[#ff3e00] mx-auto mb-4" />
          <p className="font-sans text-[#888888] text-sm sm:text-base leading-relaxed">
            Co-authored curriculum content and dense mathematical surveys spanning the complete topology of camera systems and modern visual streaming constraints.
          </p>
        </div>

        {/* Books deck */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="books-deck">
          {BOOKS.map((book) => (
            <div
              key={book.id}
              className="bg-[#151515] border border-[#222222] hover:border-[#ff3e00] p-6 sm:p-8 flex flex-col md:flex-row gap-6 transition-all duration-300 relative"
              id={`book-deck-item-${book.id}`}
            >
              {/* Graphic Book Cover styled with industrial high contrast monochrome & orange spine */}
              <div className="w-full md:w-44 h-64 bg-[#0c0c0c] border border-[#222222] p-4 text-white flex flex-col justify-between relative overflow-hidden shrink-0">
                {/* Book spine aesthetic line: Safety orange boundary spine */}
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ff3e00]" />
                
                <div className="text-left pl-3">
                  <div className="p-1 px-1.5 bg-[#151515] border border-[#222222] w-fit text-[#ff3e00] mb-4">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#ff3e00] font-bold block mb-1">
                    {book.type}
                  </span>
                  <h4 className="font-display font-medium text-sm text-white leading-snug tracking-tight italic">
                    {book.title}
                  </h4>
                </div>

                <div className="text-left pl-3">
                  <span className="text-[10px] text-[#888888] font-sans block truncate max-w-[120px]">
                    {book.authors}
                  </span>
                  <span className="text-[9px] text-[#888888] font-mono block">
                    {book.publisher} • {book.year}
                  </span>
                </div>
              </div>

              {/* Book metadata content */}
              <div className="flex flex-col justify-between text-left">
                <div className="space-y-3">
                  <span className="inline-block px-2.5 py-0.5 bg-[#0c0c0c] border border-[#222222] text-[10px] font-mono font-bold text-[#ff3e00]">
                    {book.type} • {book.year}
                  </span>
                  
                  <h3 className="font-display font-medium text-lg text-white leading-snug">
                    {book.title}
                  </h3>

                  <p className="font-mono text-[10px] text-[#888888] uppercase tracking-wider block">
                    Authors: <span className="text-white font-sans font-semibold normal-case text-xs inline-block pl-1">{book.authors}</span>
                  </p>

                  <p className="font-sans text-[#888888] text-xs sm:text-sm leading-relaxed">
                    {book.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#222222] flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#888888]">
                    Publisher: {book.publisher}
                  </span>

                  {book.doi && (
                    <a
                      href={`https://doi.org/${book.doi}`}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#ff3e00] hover:text-white transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>DOI Link</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
