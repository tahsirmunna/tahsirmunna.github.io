/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BookOpen, Github, Terminal, ArrowRight, ExternalLink, HelpCircle, Check, Copy } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Teaching from './components/Teaching';
import Publications from './components/Publications';
import Books from './components/Books';
import Activities from './components/Activities';
import Contact from './components/Contact';
import { PERSONAL_INFO } from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [showDeployGuide, setShowDeployGuide] = useState(false);
  const [copiedScript, setCopiedScript] = useState<string | null>(null);

  // Monitor scroll coordinate to update nav highlights
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'research', 'teaching', 'publications', 'books', 'activities', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyDeployScript = (scriptText: string, id: string) => {
    navigator.clipboard.writeText(scriptText);
    setCopiedScript(id);
    setTimeout(() => setCopiedScript(null), 2000);
  };

  const ghActionsYaml = `name: Deploy to GitHub Pages
on:
  push:
    branches: [ main, master ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install Dependencies
        run: npm ci
      - name: Compile and Build Build bundle
        run: npm run build
      - name: Deploy static builds to gh-pages branch
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist`;

  return (
    <div className="min-h-screen bg-[#0c0c0c] relative text-[#888888] selection:bg-[#ff3e00]/20 selection:text-white">
      
      {/* Floating Header */}
      <Header activeSection={activeSection} />

      {/* Main Port Structure */}
      <main>
        {/* Intro section */}
        <Hero />

        {/* Biography & Timeline */}
        <About />

        {/* Regular courses he teaches */}
        <Teaching />

        {/* Searchable Papers DB */}
        <Publications />

        {/* Monograph features */}
        <Books />

        {/* Service timelines and lab mates */}
        <Activities />

        {/* Contact coordinates & client form */}
        <Contact />
      </main>

      {/* Deployment Helper Overlay Tool - Addresses user's request for GitHub Pages */}
      <div className="fixed bottom-6 right-6 z-40 animate-fade-in" id="github-deploy-floating-anchor">
        <button
          onClick={() => setShowDeployGuide(!showDeployGuide)}
          className="flex items-center gap-2 px-4 py-3 bg-[#151515] border border-[#ff3e00]/45 hover:border-[#ff3e00] text-white font-mono text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg"
          title="GitHub Pages deployment guide"
        >
          <Github className="h-4 w-4 text-[#ff3e00]" />
          <span>GH Pages Deployment Toolkit</span>
        </button>

        {showDeployGuide && (
          <div className="absolute bottom-16 right-0 w-[340px] sm:w-[480px] max-h-[80vh] overflow-y-auto bg-[#151515] border border-[#222222] p-5 md:p-6 text-left animate-slide-up space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#222222] pb-3">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-[#ff3e00]" />
                <h4 className="font-mono text-xs uppercase tracking-widest font-bold text-white">
                  How to Host on github.io
                </h4>
              </div>
              <button
                onClick={() => setShowDeployGuide(false)}
                className="text-[#888888] hover:text-white text-xs font-mono uppercase tracking-wider"
              >
                [Close]
              </button>
            </div>

            <p className="font-sans text-xs text-[#888888] leading-relaxed">
              To host this under your custom <strong className="text-white">github.io</strong> subdirectory domain (e.g. <code>username.github.io/academic-site/</code>), follow this step-by-step checklist:
            </p>

            <ol className="list-decimal pl-4 space-y-3.5 font-sans text-xs text-[#cbd5e1]" id="deploy-check-list">
              <li>
                <strong className="text-white font-mono text-[11px] uppercase tracking-wider block mb-1">1. Add gh-pages helper package</strong>
                <p className="text-[10px] text-[#888888] mt-1">Open your local project directory terminal and run:</p>
                <div className="flex justify-between items-center bg-[#0c0c0c] border border-[#222222] text-[#888888] p-2 mt-1.5 font-mono text-[10px]">
                  <code>npm install -D gh-pages</code>
                  <button
                    onClick={() => copyDeployScript('npm install -D gh-pages', 'npm-install')}
                    className="px-2 py-1 bg-[#ff3e00] text-white text-[9px] font-mono uppercase tracking-wider"
                  >
                    {copiedScript === 'npm-install' ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </li>

              <li>
                <strong className="text-white font-mono text-[11px] uppercase tracking-wider block mb-1">2. Edit package.json</strong>
                <p className="text-[10px] text-[#888888] mt-1">Add a homepage attribute and deploy helpers to scripts:</p>
                <div className="bg-[#0c0c0c] border border-[#222222] text-[#888888] p-3.5 mt-1.5 font-mono text-[10px] leading-relaxed">
                  <pre className="whitespace-pre overflow-x-auto text-left">
                    {`"homepage": "https://<username>.github.io/<repo>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}`}
                  </pre>
                </div>
              </li>

              <li>
                <strong className="text-white font-mono text-[11px] uppercase tracking-wider block mb-1">3. Execute build deployment</strong>
                <p className="text-[10px] text-[#888888] mt-1">Run this Command to build and push direct assets to your gh-pages branch:</p>
                <div className="flex justify-between items-center bg-[#0c0c0c] border border-[#222222] text-[#888888] p-2 mt-1.5 font-mono text-[10px]">
                  <code>npm run deploy</code>
                  <button
                    onClick={() => copyDeployScript('npm run deploy', 'npm-deploy')}
                    className="px-2 py-1 bg-[#ff3e00] text-white text-[9px] font-mono uppercase tracking-wider"
                  >
                    {copiedScript === 'npm-deploy' ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </li>

              <li>
                <strong className="text-white font-mono text-[11px] uppercase tracking-wider block mb-1">4. Automate via GitHub Actions (Optional)</strong>
                <p className="text-[10px] text-[#888888] mt-1">
                  Place this YAML code inside your repository at <code>.github/workflows/deploy.yml</code> to run deployments on push:
                </p>
                <div className="relative">
                  <pre className="bg-[#0c0c0c] border border-[#222222] text-[#888888] p-3 mt-1.5 font-mono text-[9px] overflow-x-auto max-h-36">
                    {ghActionsYaml}
                  </pre>
                  <button
                    onClick={() => copyDeployScript(ghActionsYaml, 'actions-yaml')}
                    className="absolute right-2 top-2 px-1.5 py-1 bg-[#ff3e00] text-white text-[9px] font-mono uppercase tracking-wider font-bold"
                  >
                    {copiedScript === 'actions-yaml' ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </li>
            </ol>
            
            <p className="text-[10px] font-mono tracking-wider uppercase text-[#ff3e00] text-center pt-2">
              Configure GitHub Settings &rarr; Pages &rarr; Source to "gh-pages branch".
            </p>
          </div>
        )}
      </div>

      {/* Footer block */}
      <footer className="bg-[#0c0c0c] text-[#888888] pt-16 pb-12 border-t border-[#222222] text-left">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Logo & short descriptor */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-[#ff3e00] text-white">
                <BookOpen className="h-4 w-4" />
              </span>
              <span className="font-display font-medium text-white text-lg tracking-tight">
                Anirban Chakraborty
              </span>
            </div>
            
            <p className="font-sans text-xs text-[#888888] leading-relaxed max-w-sm">
              Dr. Anirban Chakraborty leads high-yield visual computing developments in computational networks, biometric re-identification consistency, and neural security safeguards.
            </p>
            
            <span className="text-[10px] font-mono uppercase tracking-widest block text-[#ff3e00] font-bold">
              Computational & Data Sciences • IISc Bangalore
            </span>
          </div>

          {/* Quick links map */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#ff3e00] font-bold">
              Lab Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-wider pl-0">
              <li>
                <a href="#about" className="hover:text-white transition-colors">Biography Narrative</a>
              </li>
              <li>
                <a href="#research" className="hover:text-white transition-colors">Core Research</a>
              </li>
              <li>
                <a href="#teaching" className="hover:text-white transition-colors">Taught Syllabi</a>
              </li>
              <li>
                <a href="#publications" className="hover:text-white transition-colors">Corpus Papers</a>
              </li>
            </ul>
          </div>

          {/* Core copyright profile */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#ff3e00] font-bold">
              Affiliation Coordinates
            </h4>
            
            <p className="font-sans text-xs leading-relaxed text-[#cbd5e1]">
              Department of Computational and Data Sciences (CDS),<br />
              Indian Institute of Science (IISc),<br />
              Bengaluru, Karnataka - 560012, India<br />
              <strong className="text-[#ff3e00] font-mono uppercase text-[10px] tracking-wider block mt-1">Office: Room 202, CDS Building</strong>
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.scholar}
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-2 bg-[#151515] border border-[#222222] hover:border-[#ff3e00] text-[#888888] hover:text-[#ff3e00] transition-all"
                title="Google Scholar"
              >
                <HelpCircle className="h-4 w-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-2 bg-[#151515] border border-[#222222] hover:border-[#ff3e00] text-[#888888] hover:text-[#ff3e00] transition-all"
                title="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Underline Copyright */}
        <div className="max-w-7xl mx-auto px-6 border-t border-[#222222] pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-[#888888]">
          <span>
            © {new Date().getFullYear()} Dr. Anirban Chakraborty. All Rights Reserved. Indian Institute of Science, Bangalore.
          </span>
          <span className="flex items-center gap-1.5 font-mono uppercase tracking-wider text-[10px]">
            <span>Vite &bull; React &bull; Tailwind CSS</span>
          </span>
        </div>
      </footer>

    </div>
  );
}
