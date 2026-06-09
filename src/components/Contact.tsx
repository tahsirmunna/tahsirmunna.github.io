/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Mail, Send, Check, Copy, ExternalLink, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Academic Collaboration',
    message: '',
  });

  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormState('error');
      return;
    }

    setFormState('sending');
    
    // Simulate API delivery delay
    setTimeout(() => {
      setFormState('success');
      setFormData({
        name: '',
        email: '',
        subject: 'Academic Collaboration',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#0c0c0c] text-left border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="font-display font-light text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Get In <span className="text-[#ff3e00] italic">Touch</span>
          </h2>
          <div className="h-[1px] w-12 bg-[#ff3e00] mx-auto mb-4" />
          <p className="font-sans text-[#888888] text-sm sm:text-base leading-relaxed">
            Please feel free to submit research collaboration briefs, curriculum inquiries, or seminar invitations. Dr. Chakraborty or a lab representative will reply shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Office Address & Coordinates */}
          <div className="lg:col-span-5 space-y-6" id="office-coords-card">
            <div className="bg-[#151515] border border-[#222222] p-6 sm:p-8 space-y-6 relative">
              <div className="absolute top-0 right-0 w-8 h-[1px] bg-[#ff3e00]" />
              <div className="absolute top-0 right-0 w-[1px] h-8 bg-[#ff3e00]" />
              
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#888888] mb-6 block border-b border-[#222222] pb-3 font-bold">
                Coordinates & Office Channels
              </h3>

              {/* Mailing coordinate */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#0c0c0c] border border-[#222222] text-[#ff3e00] shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888] block font-bold mb-1">
                    Mailing Address
                  </span>
                  <p className="font-sans text-[#cbd5e1] text-sm leading-relaxed">
                    {PERSONAL_INFO.office},<br />
                    {PERSONAL_INFO.department},<br />
                    {PERSONAL_INFO.institution},<br />
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              {/* Email coordinate */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#0c0c0c] border border-[#222222] text-[#ff3e00] shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="w-full">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888] block font-bold mb-1">
                    Email Address
                  </span>
                  <div className="flex justify-between items-center bg-[#0c0c0c] border border-[#222222] p-3 mt-1.5 hover:border-[#ff3e00]/50 transition-colors">
                    <span className="text-xs font-mono font-bold text-[#ff3e00] truncate mr-2">
                      {PERSONAL_INFO.email}
                    </span>
                    <button
                      onClick={copyEmail}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#ff3e00] text-white text-xs font-mono tracking-wider uppercase font-bold hover:bg-[#ff3e00]/85 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3 w-3" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Lab link coordinate */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#222222]">
                <div className="p-3 bg-[#0c0c0c] border border-[#222222] text-[#ff3e00] shrink-0">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888] block font-bold mb-1">
                    Visual Computing Laboratory
                  </span>
                  <a
                    href={PERSONAL_INFO.labUrl}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="font-mono text-[#ff3e00] hover:text-white text-xs uppercase tracking-wider flex items-center gap-1.5 group"
                  >
                    <span>Browse visual-computing.in</span>
                    <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 duration-200" />
                  </a>
                </div>
              </div>

            </div>

            {/* Quick map illustration using custom visual grids under strict design rules */}
            <div className="p-6 bg-[#151515] border border-[#222222] hover:border-[#ff3e00]/30 flex flex-col justify-end h-40 relative overflow-hidden text-left" id="map-mockup-graphic">
              {/* Visual geometric grids in place of unpermitted real Google Map without keys */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#222222_1px,transparent_1px),linear-gradient(to_bottom,#222222_1px,transparent_1px)] bg-[size:16px_16px] opacity-60" />
              <div className="absolute top-1/2 left-1/2 -translate-x-2 w-4 h-4 bg-[#ff3e00] border-4 border-[#0c0c0c] shadow-lg animate-pulse" />
              
              <div className="relative z-10">
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#ff3e00] font-bold block mb-1">Campus location</span>
                <span className="font-display font-light text-white text-sm block">Indian Institute of Science (IISc)</span>
                <span className="text-[#888888] text-xs block">Bengaluru, Karnataka 560012, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interaction form */}
          <div className="lg:col-span-7 bg-[#151515] border border-[#222222] p-6 sm:p-8 relative" id="contact-interactive-form">
            <div className="absolute top-0 right-0 w-8 h-[1px] bg-[#ff3e00]" />
            <div className="absolute top-0 right-0 w-[1px] h-8 bg-[#ff3e00]" />
            
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#888888] border-b border-[#222222] pb-3 mb-6 block font-bold">
              Establish Academic Inquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-wider text-[#888888]">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Prof. Alan Turing"
                    className="w-full px-4 py-2.5 bg-[#0c0c0c] border border-[#222222] hover:border-[#ff3e00]/40 focus:border-[#ff3e00] text-sm text-white focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-wider text-[#888888]">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="turing@cam.ac.uk"
                    className="w-full px-4 py-2.5 bg-[#0c0c0c] border border-[#222222] hover:border-[#ff3e00]/40 focus:border-[#ff3e00] text-sm text-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="text-[10px] font-mono uppercase tracking-wider text-[#888888]">Subject Topic</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-[#0c0c0c] border border-[#222222] hover:border-[#ff3e00]/40 focus:border-[#ff3e00] text-sm text-white focus:outline-none"
                >
                  <option value="Academic Collaboration">Academic Collaboration</option>
                  <option value="M.S./Ph.D. Research Inquiry">M.S./Ph.D. Research Inquiry</option>
                  <option value="Invited Lecture / Seminar Keynote">Invited Lecture / Seminar Keynote</option>
                  <option value="Review Request / Journal Issue">Review Request / Journal Issue</option>
                  <option value="Other">Other Category</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-wider text-[#888888]">Message Body</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Draft your inquiries or proposal content here..."
                  className="w-full px-4 py-2.5 bg-[#0c0c0c] border border-[#222222] hover:border-[#ff3e00]/40 focus:border-[#ff3e00] text-sm text-white focus:outline-none resize-none"
                />
              </div>

              {/* Status reporting banners */}
              {formState === 'error' && (
                <div className="p-3 bg-[#151515] border border-red-500/50 text-xs font-mono uppercase tracking-wide text-red-500 animate-shake">
                  Error: Please fill out Name, Email, and Message.
                </div>
              )}

              {formState === 'success' && (
                <div className="p-4 bg-[#0c0c0c] border border-[#ff3e00]/50 text-xs sm:text-sm text-[#888888] space-y-1 animate-fade-in">
                  <span className="block font-mono text-[#ff3e00] uppercase tracking-wider font-bold">✓ Inquiry Submitted Successfully!</span>
                  <span className="text-xs block leading-relaxed font-sans mt-1">
                    Simulated message dispatched. In a live configuration, this integrates directly with an SMTP agent or Firebase collection to deliver letters straight to {PERSONAL_INFO.email}.
                  </span>
                </div>
              )}

              <button
                type="submit"
                disabled={formState === 'sending'}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-[#ff3e00] hover:bg-[#ff3e00]/85 disabled:bg-slate-800 text-white font-mono uppercase tracking-widest text-xs font-bold transition-all text-center cursor-pointer"
              >
                {formState === 'sending' ? (
                  <span>Dispatching Letter...</span>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
