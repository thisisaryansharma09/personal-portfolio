import React from 'react';
import { ArrowDown, Mail, FolderGit2, Award, GraduationCap, Zap, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onCopyEmail }) {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/15 to-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4" />
              <span>Available for Internships &amp; Excel Projects</span>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="gradient-text">Aryan Sharma</span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-indigo-300/90 dark:text-indigo-300/90 tracking-tight">
                {personalInfo.roleTitle}
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.heroIntro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View My Projects</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-indigo-500/50 shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onCopyEmail}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl font-medium text-xs text-slate-400 hover:text-indigo-300 border border-transparent hover:border-slate-800 transition"
                title="Copy Aryan's email address"
              >
                <span>Copy Email</span>
              </button>
            </div>

            {/* Key Quick Badges Row */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">College</div>
                  <div className="text-xs font-bold text-slate-200">JECRC Univ '30</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">RS-CIT Score</div>
                  <div className="text-xs font-bold text-slate-200">90% Distinction</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Typing Speed</div>
                  <div className="text-xs font-bold text-slate-200">{personalInfo.typingSpeed}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Focus</div>
                  <div className="text-xs font-bold text-slate-200">Excel &amp; CSE</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Image / Avatar Placeholder */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Outer decorative gradient glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500 -z-10" />

              {/* Profile Card Container */}
              <div className="relative rounded-3xl overflow-hidden glass-card p-4 sm:p-5 border border-slate-700/60 shadow-2xl">
                {/* Image Placeholder with instructions inside comments */}
                {/* 
                  PHOTO REPLACEMENT NOTE:
                  To use your own real photo, add your photo image file (e.g., 'profile.jpg')
                  into the 'public/' directory and update photoUrl in 'src/data/portfolioData.js'.
                */}
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-slate-900 flex items-center justify-center border border-slate-800">
                  <img
                    src={personalInfo.photoUrl}
                    alt="Aryan Sharma - First-Year B.Tech CSE Student"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition duration-500"
                    onError={(e) => {
                      // Fallback to placeholder SVG if user provided photo fails to load
                      e.target.onerror = null;
                      e.target.src = '/profile-placeholder.svg';
                    }}
                  />
                  
                  {/* Subtle photo overlay pill */}
                  <div className="absolute bottom-3 left-3 right-3 py-2 px-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700/60 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200">Aryan Sharma</span>
                    <span className="text-indigo-400 font-medium">B.Tech CSE '30</span>
                  </div>
                </div>

                {/* Sub-card quick info */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 px-1">
                  <span>📍 Jaipur, Rajasthan</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Open to Work
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Down Arrow Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-slate-500 hover:text-indigo-400 transition cursor-pointer">
        <a
          href="#about"
          onClick={(e) => handleScrollTo(e, '#about')}
          className="flex flex-col items-center gap-1"
          aria-label="Scroll to About section"
        >
          <span className="text-[11px] font-medium tracking-wider uppercase">Explore</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
