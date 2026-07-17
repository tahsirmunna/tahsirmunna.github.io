/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ExternalLink, Calendar, Users } from 'lucide-react';

export default function News() {
  return (
    <section id="news" className="py-24 bg-[#0c0c0c] border-y border-[#222222]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <h2 className="font-display font-light text-3xl sm:text-4xl text-white tracking-tight leading-snug mb-4">
            News & <span className="text-[#ff3e00] italic">Updates</span>
          </h2>
          <div className="h-[1px] w-12 bg-[#ff3e00] mx-auto mb-4" />
          <p className="font-sans text-[#888888] text-sm sm:text-base leading-relaxed">
            Recent announcements, event participations, and research milestones.
          </p>
        </div>

        {/* News Card */}
        <div className="max-w-4xl mx-auto bg-[#151515] border border-[#222222] overflow-hidden transition-all duration-300 hover:border-[#ff3e00]/45">
          {/* Image */}
          <div className="relative w-full aspect-[750/480] bg-[#0c0c0c] overflow-hidden">
            <img 
              src="https://sigarra.up.pt/fcup/pt/noticias_geral.noticias_cont?p_id=F-1843547652/amalia-foto-grupo-encontro.png" 
              alt="Tahsir Ahmed Munna showing AMALIA LLM at the Encontro de Ciência e Inovação in Lisbon" 
              className="w-full h-auto block transition-transform duration-500 origin-top hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 text-left">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#888888] mb-4">
              <span className="flex items-center gap-1.5 text-[#ff3e00]">
                <Calendar className="h-3.5 w-3.5" />
                <span>July 17, 2026</span>
              </span>
              <span className="h-3 w-[1px] bg-[#222222] hidden sm:inline" />
              <span className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5" />
                <span>FCUP &amp; LIAAD-INESC TEC</span>
              </span>
            </div>

            <h3 className="font-display font-medium text-xl sm:text-2xl text-white mb-4 leading-snug">
              FCUP Team Showcases AMALIA LLM at the Science and Innovation Meeting
            </h3>

            <div className="font-sans text-[#888888] text-sm sm:text-base leading-relaxed space-y-4 mb-6">
              <p>
                Docents, researchers, and students from the Faculty of Sciences of the University of Porto (FCUP) and LIAAD-INESC TEC participated in the prestigious <strong>Encontro de Ciência e Inovação (Science and Innovation Meeting) 2026</strong> in Lisbon. A major highlight was the live presentation and demonstration of <strong>AMALIA</strong> (Assistente Multimodal Automático de Linguagem com Inteligência Artificial).
              </p>
              <p>
                AMALIA is the first open-source multimodal large language model (LLM) developed specifically for European Portuguese and the Portuguese cultural context. A dedicated team from FCUP and INESC TEC contributed extensively to this groundbreaking project.
              </p>
            </div>

            {/* Photo Caption */}
            <div className="p-4 bg-[#0c0c0c] border-l-2 border-[#ff3e00] text-xs sm:text-sm text-[#888888] italic mb-8">
              <strong>Team photo (left to right):</strong> João Ferreira, Tahsir Ahmed Munna, José Isidro, Prof. Nuno Guimarães, Rute Rebouças, Inês Cantante, and José Evans.
            </div>

            {/* Link */}
            <a 
              href="https://sigarra.up.pt/fcup/pt/noticias_geral.ver_noticia?p_nr=140205" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#ff3e00] text-white font-mono text-xs uppercase tracking-wider transition-all duration-200 hover:bg-[#e03200]"
            >
              <span>Read Official Announcement</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
