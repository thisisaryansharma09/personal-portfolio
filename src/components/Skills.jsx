import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  Code2, 
  FileText, 
  Presentation, 
  MessageSquare, 
  Users, 
  Clock, 
  Keyboard, 
  CheckCircle2, 
  Layers
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const getIcon = (name) => {
    switch (name) {
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5 text-emerald-400" />;
      case 'Code': return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'FileText': return <FileText className="w-5 h-5 text-indigo-400" />;
      case 'Presentation': return <Presentation className="w-5 h-5 text-amber-400" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-cyan-400" />;
      case 'Users': return <Users className="w-5 h-5 text-purple-400" />;
      case 'Clock': return <Clock className="w-5 h-5 text-pink-400" />;
      case 'Keyboard': return <Keyboard className="w-5 h-5 text-amber-400" />;
      default: return <Layers className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>Skills &amp; Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Current Skillset &amp; <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Honest, realistic competency levels reflecting my active practice and first-year university studies.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'technical'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              Technical &amp; Software
            </button>
            <button
              onClick={() => setActiveTab('soft')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'soft'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              Professional &amp; Soft Skills
            </button>
          </div>
        </div>

        {/* Technical & Office Suite Skills */}
        {(activeTab === 'all' || activeTab === 'technical') && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-md">
                Technical &amp; Office Suite
              </span>
              <div className="h-px bg-slate-800 flex-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillsData.technical.map((skill, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 group"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-800/80 group-hover:scale-110 transition-transform">
                        {getIcon(skill.icon)}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {skill.name}
                        </h3>
                        <p className="text-xs text-slate-400">{skill.description}</p>
                      </div>
                    </div>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0 border ${
                        skill.level === 'Intermediate'
                          ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                          : skill.level === 'Basic'
                          ? 'bg-blue-500/15 text-blue-400 border-blue-500/30'
                          : 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  {/* Clean progress bar indicator */}
                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between text-xs text-slate-400 font-medium">
                      <span>Proficiency Level</span>
                      <span>{skill.level}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          skill.level === 'Intermediate'
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                            : skill.level === 'Basic'
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-400'
                            : 'bg-gradient-to-r from-indigo-500 to-purple-400'
                        }`}
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Soft & Professional Skills */}
        {(activeTab === 'all' || activeTab === 'soft') && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-md">
                Interpersonal &amp; Work Productivity
              </span>
              <div className="h-px bg-slate-800 flex-1" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillsData.soft.map((skill, index) => (
                <div
                  key={index}
                  className="glass-card p-5 rounded-2xl border border-slate-800 hover:border-purple-500/40 transition-all duration-300 group"
                >
                  <div className="p-2.5 rounded-xl bg-slate-800/80 w-fit mb-3 group-hover:scale-110 transition-transform">
                    {getIcon(skill.icon)}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{skill.name}</h3>
                  <div className="text-[11px] font-semibold text-purple-400 mb-2">
                    {skill.level}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Transparency Footnote */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 max-w-xl mx-auto">
            * Ratings represent honest self-evaluations aligned with first-year academic coursework and practical spreadsheet exercises. No inflated claims.
          </p>
        </div>

      </div>
    </section>
  );
}
