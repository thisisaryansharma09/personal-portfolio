import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  MapPin, 
  AlertCircle,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ prefilledSubject, onCopyEmail }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: prefilledSubject || '',
    message: '',
  });

  // Keep subject updated if user clicked a role in Opportunities
  React.useEffect(() => {
    if (prefilledSubject) {
      setFormData((prev) => ({ ...prev, subject: `Inquiry regarding: ${prefilledSubject}` }));
    }
  }, [prefilledSubject]);

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'opened_client' | null
  const [copiedFormText, setCopiedFormText] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please type a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build the mailto URI with sanitized encoding
    const subjectEncoded = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Aryan,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\n---\nSent via portfolio contact form`
    );

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    // Open user's email client
    window.location.href = mailtoUrl;
    setSubmissionStatus('opened_client');
  };

  const handleCopyMessage = () => {
    const formattedText = `To: ${personalInfo.email}\nSubject: ${formData.subject}\nFrom: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(formattedText);
    setCopiedFormText(true);
    setTimeout(() => setCopiedFormText(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have an Excel sheet to organize, an internship role, or an academic query? I would love to hear from you.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Social Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                    Direct Email
                  </span>
                  <h3 className="text-base font-bold text-white break-all">
                    {personalInfo.email}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Feel free to email me directly anytime. I monitor my inbox daily and reply promptly.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Email</span>
                </a>

                <button
                  onClick={onCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Address</span>
                </button>
              </div>
            </div>

            {/* Social Links Placeholders Card */}
            {/* 
              SOCIAL LINKS INSTRUCTIONS:
              Update your LinkedIn and GitHub URLs in 'src/data/portfolioData.js'.
            */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Professional &amp; Code Profiles
              </h4>

              <div className="space-y-3">
                {/* LinkedIn */}
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-blue-500/40 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 group-hover:scale-105 transition-transform">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-blue-300">
                        LinkedIn Profile
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Connect with Aryan on LinkedIn
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400" />
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-purple-500/40 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-600/20 text-purple-400 group-hover:scale-105 transition-transform">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-purple-300">
                        GitHub Profile
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Explore C exercises &amp; repositories
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400" />
                </a>
              </div>
            </div>

            {/* Location & Academic Base */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 flex items-center gap-3.5 text-xs text-slate-300">
              <div className="p-2.5 rounded-xl bg-slate-800 text-slate-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-semibold text-white block">Jaipur, Rajasthan, India</span>
                <span className="text-slate-400">Available for remote internships &amp; local opportunities</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the details below. This will prepare a direct email addressed to Aryan Sharma.
              </p>

              {/* Success / Client Opened Banner */}
              {submissionStatus === 'opened_client' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-xs space-y-2 animate-fade-in">
                  <div className="flex items-center gap-2 font-bold text-emerald-300">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>Your default email application was triggered!</span>
                  </div>
                  <p className="text-emerald-300/90 leading-relaxed">
                    If your email client didn't open automatically, you can copy your formatted message below and send it directly to <strong className="text-white">{personalInfo.email}</strong>.
                  </p>
                  <button
                    onClick={handleCopyMessage}
                    className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 font-semibold transition"
                  >
                    {copiedFormText ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedFormText ? 'Copied to Clipboard!' : 'Copy Formatted Message'}</span>
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-300">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Verma"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-xs text-white placeholder-slate-500 focus:outline-none transition ${
                        errors.name
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-slate-800 focus:border-indigo-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-300">
                      Your Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-xs text-white placeholder-slate-500 focus:outline-none transition ${
                        errors.email
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-slate-800 focus:border-indigo-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-300">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Inquiry regarding Excel Project / Internship"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-xs text-white placeholder-slate-500 focus:outline-none transition ${
                      errors.subject
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-slate-800 focus:border-indigo-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-300">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message, project specifications, or collaboration details..."
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-xs text-white placeholder-slate-500 focus:outline-none transition resize-y ${
                      errors.message
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-slate-800 focus:border-indigo-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-slate-500 text-center sm:text-left">
                    Opens your email client to send securely without third-party tracking.
                  </p>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all duration-200 transform hover:-translate-y-0.5 shrink-0"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
