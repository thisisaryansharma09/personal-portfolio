import React from 'react';
import { 
  Compass, 
  Lightbulb, 
  Target, 
  BookOpen, 
  Keyboard, 
  TrendingUp, 
  CheckCircle,
  Briefcase
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>About Aryan Sharma</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Curious Learner, Problem Solver &amp; <span className="gradient-text">Aspiring Entrepreneur</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A genuine look into my background, academic direction, and everyday dedication as a first-year student.
          </p>
        </div>

        {/* Grid: Story Narrative & Profile Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">My Academic &amp; Tech Journey</h3>
                  <p className="text-xs text-slate-400">JECRC University · Class of 2030</p>
                </div>
              </div>

              {personalInfo.aboutNarrative.map((paragraph, index) => (
                <p key={index} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Guiding Principles */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span className="text-xs text-slate-300">
                    <strong className="text-white block font-semibold">Honest Work Ethic</strong>
                    Always transparent about my current skillset while putting in the work to improve.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span className="text-xs text-slate-300">
                    <strong className="text-white block font-semibold">Self-Driven Learning</strong>
                    Actively building spreadsheets and writing code beyond class curricula.
                  </span>
                </div>
              </div>
            </div>

            {/* Typing Speed & Daily Productivity Card */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800 flex flex-col sm:flex-row items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                <Keyboard className="w-8 h-8" />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-sm font-bold text-white">Typing Speed:</span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    30 WPM
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400">
                  Practicing touch typing every day to enhance speed, accuracy, and efficiency for data entry and coding workflows.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Career Interests & Entrepreneurial Ambition (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Career Interests Card */}
            <div className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-800 space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Career Interests</h3>
                  <p className="text-xs text-slate-400">Where I channel my curiosity</p>
                </div>
              </div>

              <div className="space-y-3">
                {personalInfo.careerInterests.map((interest, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/30 transition duration-200"
                  >
                    <div className="text-sm font-semibold text-white flex items-center justify-between">
                      <span>{interest.title}</span>
                      <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md">
                        #0{idx + 1}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      {interest.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Entrepreneurship Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-slate-900/60 border border-indigo-500/30 relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center mb-4">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1.5">
                The Entrepreneurial Goal
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                "My vision is to bridge practical computer science knowledge with business efficiency. As I progress through my B.Tech CSE degree at JECRC, I aim to incubate innovative software products and data-driven ventures that create real value."
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
