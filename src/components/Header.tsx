/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Globe, Mail } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Research', href: '#research' },
    { label: 'Teaching', href: '#teaching' },
    { label: 'Publications', href: '#publications' },
    { label: 'Books', href: '#books' },
    { label: 'Activities', href: '#activities' },
    { label: 'News', href: '#news' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of navbar
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c0c0c]/90 backdrop-blur-md shadow-lg border-b border-[#222222] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand/Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 group"
          id="logo-brand-link"
        >
          <div className="p-1.5 bg-[#ff3e00] text-white transition-colors">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <span className="font-display font-medium text-lg text-white tracking-tight block">
              Anirban Chakraborty
            </span>
            <span className="text-[9px] text-[#888888] font-mono tracking-widest uppercase block -mt-1">
              Associate Professor • IISc
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1" id="desktop-navbar">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'text-[#ff3e00] font-bold border-b border-[#ff3e00]'
                    : 'text-[#888888] hover:text-white hover:bg-[#151515]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Links */}
        <div className="hidden lg:flex items-center gap-3" id="quick-links-header">
          <a
            href="https://visual-computing.in"
            target="_blank"
            referrerPolicy="no-referrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 border border-[#222222] hover:border-[#ff3e00] text-xs font-mono uppercase tracking-wider text-[#888888] hover:text-[#ff3e00] bg-transparent transition-all"
          >
            <Globe className="h-3 w-3" />
            <span>VCL Lab</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#ff3e00] hover:bg-[#ff3e00]/80 text-xs font-mono uppercase tracking-wider text-white transition-all font-bold"
          >
            <Mail className="h-3 w-3" />
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          id="mobile-menu-btn"
          className="md:hidden p-2 rounded-lg text-[#888888] hover:text-white hover:bg-[#151515] transition-colors"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden absolute top-full left-0 right-0 bg-[#0c0c0c] border-b border-[#222222] shadow-2xl py-4 px-6 flex flex-col gap-2 slide-in"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-3 font-mono text-xs uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'text-[#ff3e00] bg-[#151515] font-bold border-l-2 border-[#ff3e00]'
                    : 'text-[#888888] hover:text-white hover:bg-[#151515]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="border-t border-[#222222] pt-3 mt-1 flex flex-col gap-2">
            <a
              href="https://visual-computing.in"
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center justify-center gap-2 px-4 py-3 border border-[#222222] text-xs font-mono uppercase tracking-wider text-[#888888] hover:text-white"
            >
              <Globe className="h-4 w-4" />
              <span>Visit Visual Computing Lab</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
