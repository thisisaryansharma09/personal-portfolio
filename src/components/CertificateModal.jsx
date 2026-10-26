import React from 'react';
import { X, Award, ExternalLink, Download, CheckCircle2, AlertCircle } from 'lucide-react';

export default function CertificateModal({ cert, onClose }) {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700/80 p-6 sm:p-8 shadow-2xl text-slate-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
          aria-label="Close certificate modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5 pr-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
            <Award className="w-3.5 h-3.5" />
            <span>Score: {cert.score} · {cert.grade}</span>
          </div>
          <h3 className="text-2xl font-extrabold text-white">
            {cert.title}
          </h3>
          <p className="text-xs text-slate-400">
            Issued by {cert.issuingBody}
          </p>
        </div>

        {/* Certificate Preview Card */}
        <div className="mt-6 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center p-2 sm:p-4 shadow-inner">
          <img
            src={cert.imageUrl}
            alt="Aryan Sharma RS-CIT Certificate 90%"
            className="w-full max-h-[420px] object-contain rounded-lg"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/certificate-placeholder.svg';
            }}
          />
        </div>

        {/* Replacement Guide Note */}
        <div className="mt-6 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-2 text-xs">
          <div className="flex items-center gap-2 text-amber-300 font-semibold">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>How to display your scanned certificate image:</span>
          </div>
          <ol className="list-decimal list-inside space-y-1 text-slate-300 leading-relaxed pl-1">
            <li>Save your scanned certificate photo as <code className="bg-slate-950 px-1.5 py-0.5 rounded text-indigo-300 font-mono">certificate.jpg</code> inside the <code className="bg-slate-950 px-1.5 py-0.5 rounded text-indigo-300 font-mono">public/</code> folder.</li>
            <li>In <code className="bg-slate-950 px-1.5 py-0.5 rounded text-indigo-300 font-mono">src/data/portfolioData.js</code>, update <code className="bg-slate-950 px-1.5 py-0.5 rounded text-indigo-300 font-mono">imageUrl</code> to <code className="bg-slate-950 px-1.5 py-0.5 rounded text-indigo-300 font-mono">"/certificate.jpg"</code>.</li>
          </ol>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4" />
            Government Accredited IT Qualification
          </span>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
