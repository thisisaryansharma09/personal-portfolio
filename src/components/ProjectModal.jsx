import React from 'react';
import { X, CheckCircle, FileSpreadsheet, Code, ExternalLink, HelpCircle } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700/80 p-6 sm:p-8 shadow-2xl text-slate-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            {project.badge}
          </div>
          <h3 className="text-2xl font-extrabold text-white">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-indigo-400">
            Category: {project.category}
          </p>
        </div>

        {/* Project Content Breakdown */}
        <div className="mt-6 space-y-6 text-sm">
          
          {/* Purpose Box */}
          <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Purpose &amp; Objective
            </h4>
            <p className="text-slate-300 leading-relaxed">
              {project.purpose}
            </p>
          </div>

          {/* Tools & Techniques Used */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Tools &amp; Formulas Applied
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-indigo-300 border border-slate-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features Implemented */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Key Elements &amp; Work Done
            </h4>
            <ul className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Disclaimer & Placeholder Link Notice */}
          <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-800/50 flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <div className="text-xs space-y-1 text-indigo-200">
              <span className="font-semibold block text-white">Academic Practice Project</span>
              <span>
                This is a practical exercise created for skill building. To link your Google Drive sheet, OneDrive file, or GitHub code repository, simply update the <code className="bg-slate-900 px-1.5 py-0.5 rounded text-indigo-300">detailsUrl</code> in <code className="bg-slate-900 px-1.5 py-0.5 rounded text-indigo-300">src/data/portfolioData.js</code>.
              </span>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
