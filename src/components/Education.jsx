import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Eye, 
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { educationData } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function Education() {
  const [showCertModal, setShowCertModal] = useState(false);

  return (
    <section id="education" className="py-24 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-wide uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; <span className="gradient-text">Certification</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            My formal engineering foundation at JECRC University alongside accredited IT certifications.
          </p>
        </div>

        {/* Education & Certification Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main B.Tech Degree Card (7 cols) */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-300">
            <div className="space-y-6">
              
              {/* Header Info */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                      Undergraduate Degree
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      {educationData.degree}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-300">
                      Major: {educationData.major}
                    </p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  {educationData.status}
                </span>
              </div>

              {/* Institution & Timeline Meta */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3 border-y border-slate-800 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span>
                    <strong className="text-white block font-medium">JECRC University</strong>
                    Jaipur, Rajasthan, India
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span>
                    <strong className="text-white block font-medium">Academic Duration</strong>
                    Expected Graduation: {educationData.period}
                  </span>
                </div>
              </div>

              {/* Course Highlights & Focus */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  First-Year Focus &amp; Core Studies
                </h4>
                <ul className="space-y-2">
                  {educationData.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* University Tag Footer */}
            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Department of Computer Science &amp; Engineering</span>
              <span className="text-indigo-400 font-medium">4-Year Degree Program</span>
            </div>
          </div>

          {/* Certification Card (5 cols) */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-amber-500/30 transition-all duration-300 relative overflow-hidden">
            
            {/* Top Amber Ambient Glow */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-amber-500/10 rounded-full blur-2xl pointer-events-none -z-0" />

            <div className="space-y-5 relative z-10">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-amber-300 tracking-tight">
                    {educationData.certification.score}
                  </div>
                  <div className="text-[10px] font-bold text-amber-400/80 uppercase tracking-widest">
                    {educationData.certification.grade}
                  </div>
                </div>
              </div>

              {/* Cert Title & Authority */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  IT Qualification
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {educationData.certification.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {educationData.certification.issuingBody}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {educationData.certification.description}
              </p>

              {/* Quick Specs */}
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-500">Curriculum:</span>
                  <span className="font-medium text-slate-200">OS, MS Office, Web Security</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-500">Examination Result:</span>
                  <span className="font-bold text-amber-400">90% (Distinction Honors)</span>
                </div>
              </div>

            </div>

            {/* Actions: View Certificate Modal */}
            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between relative z-10">
              <span className="text-xs text-slate-400">Digital Certificate</span>
              <button
                onClick={() => setShowCertModal(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 transition-all duration-200 shadow-sm"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Certificate</span>
              </button>
            </div>

          </div>

        </div>

        {/* Certificate Modal */}
        {showCertModal && (
          <CertificateModal
            cert={educationData.certification}
            onClose={() => setShowCertModal(false)}
          />
        )}

      </div>
    </section>
  );
}
