import React from 'react';
import { 
  Briefcase, 
  FileSpreadsheet, 
  Table, 
  Laptop, 
  CalendarCheck, 
  ArrowRight,
  Handshake,
  CheckCircle2
} from 'lucide-react';
import { opportunitiesData } from '../data/portfolioData';

export default function Opportunities({ onSelectRole }) {
  const getRoleIcon = (iconName) => {
    switch (iconName) {
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5 text-emerald-400" />;
      case 'Table': return <Table className="w-5 h-5 text-indigo-400" />;
      case 'Laptop': return <Laptop className="w-5 h-5 text-blue-400" />;
      case 'CalendarCheck': return <CalendarCheck className="w-5 h-5 text-purple-400" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-amber-400" />;
      default: return <Briefcase className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="opportunities" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
            <Handshake className="w-3.5 h-3.5" />
            <span>Open to Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Open to <span className="gradient-text">Opportunities</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {opportunitiesData.statement}
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunitiesData.roles.map((role, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-3xl border border-slate-800 hover:border-emerald-500/40 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-800/80 group-hover:scale-105 transition-transform">
                    {getRoleIcon(role.icon)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-emerald-400 border border-slate-700/80">
                    {role.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {role.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {role.description}
                </p>
              </div>

              {/* Action Button: Prefills contact form subject */}
              <div className="pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => onSelectRole(role.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-800/80 hover:bg-emerald-600 text-slate-200 hover:text-white transition-all duration-200"
                >
                  <span>Discuss This Role</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Quick Commitment Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-950/60 to-purple-950/40 border border-indigo-500/30 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                My Work Commitment
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed space-y-2">
                <span>Prompt communication, eagerness to incorporate constructive feedback, and dedicated attention to detail in every spreadsheet or assignment.</span>
              </p>
            </div>
            
            <div className="pt-6">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition"
              >
                <span>Hire / Connect with Aryan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
