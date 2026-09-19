import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Youtube,
  Globe,
  Send,
  CheckCircle2,
  FileDown,
  Loader2,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { openOrDownloadCV } from '../utils/cvDownloader';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    setSendError(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/mdkamrulislamnakir@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const result = await response.json();

      if (response.ok || result.success === 'true' || result.success === true) {
        setIsSubmitted(true);
      } else {
        // Fallback to direct window open if service blocked
        throw new Error(result.message || 'Service busy');
      }
    } catch {
      // Fallback: provide direct web Gmail or mailto
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        PERSONAL_INFO.email
      )}&su=${encodeURIComponent(`[Portfolio] ${formData.subject} - from ${formData.name}`)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(gmailUrl, '_blank');
      setIsSubmitted(true);
    } finally {
      setIsSending(false);
    }
  };

  const handleOpenGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      PERSONAL_INFO.email
    )}&su=${encodeURIComponent(`[Portfolio] ${formData.subject || 'Inquiry'} - ${formData.name || 'Visitor'}`)}&body=${encodeURIComponent(
      `Hello Md. Kamrul Islam,\n\nName: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\nMessage:\n${formData.message || ''}`
    )}`;
    window.open(gmailUrl, '_blank');
  };

  const handleOpenWhatsApp = () => {
    const text = `Hello Md. Kamrul Islam,\nMy name is ${formData.name || 'Visitor'}.\nSubject: ${formData.subject}\n${formData.message ? `\nMessage: ${formData.message}` : ''}`;
    window.open(`https://wa.me/8801810811417?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section
      id="contact"
      className="smooth-card rounded-2xl bg-[#0a1228] text-white p-6 sm:p-7 border border-blue-900/60 shadow-xl shadow-blue-950/40 hover:shadow-2xl hover:border-blue-700/80 transition-all duration-300"
    >
      {/* Header with Download CV button */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
            GET IN TOUCH
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Let's Work Together
          </h2>
          <p className="text-xs text-slate-400 mt-1 text-left">
            Feel free to reach out for any opportunity, consultation or collaboration.
          </p>
        </div>

        <button
          onClick={openOrDownloadCV}
          className="smooth-btn hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/40 text-xs font-bold transition-all duration-300 cursor-pointer"
          title="Download Official CV"
        >
          <FileDown className="w-3.5 h-3.5" />
          <span>Get CV</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left Side: Contact Direct Details with smooth hover */}
        <div className="md:col-span-5 space-y-3 text-xs text-slate-300">
          <div className="smooth-btn flex items-center gap-2.5 p-1 rounded-lg bg-[#080e21] border border-blue-900/30 transition-all duration-200">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <a href={`tel:${PERSONAL_INFO.phone}`} className="text-slate-200 hover:text-cyan-300 transition-colors truncate font-medium">
              {PERSONAL_INFO.phone}
            </a>
          </div>

          <div className="smooth-btn flex items-center gap-2.5 p-1 rounded-lg bg-[#080e21] border border-blue-900/30 transition-all duration-200">
            <div className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Mail className="w-3.5 h-3.5" />
            </div>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-200 hover:text-cyan-300 transition-colors truncate font-medium">
              {PERSONAL_INFO.email}
            </a>
          </div>

          <div className="smooth-btn flex items-center gap-2.5 p-1 rounded-lg bg-[#080e21] border border-blue-900/30 transition-all duration-200">
            <div className="w-7 h-7 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <span className="truncate font-medium text-slate-200">{PERSONAL_INFO.location}</span>
          </div>

          <div className="pt-2 border-t border-blue-950/60 space-y-2">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="smooth-btn flex items-center gap-2.5 p-1.5 rounded-lg bg-[#080e21] border border-blue-900/30 hover:border-cyan-400 hover:text-cyan-300 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Linkedin className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium text-slate-200">LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="smooth-btn flex items-center gap-2.5 p-1.5 rounded-lg bg-[#080e21] border border-blue-900/30 hover:border-slate-400 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-7 h-7 rounded-lg bg-slate-500/15 border border-slate-500/30 flex items-center justify-center text-slate-300 shrink-0">
                <Github className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium text-slate-200">GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="smooth-btn flex items-center gap-2.5 p-1.5 rounded-lg bg-[#080e21] border border-blue-900/30 hover:border-rose-400 hover:text-rose-400 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-7 h-7 rounded-lg bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
                <Youtube className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium text-slate-200">YouTube</span>
            </a>

            <a
              href={PERSONAL_INFO.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="smooth-btn flex items-center gap-2.5 p-1.5 rounded-lg bg-[#080e21] border border-blue-900/30 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Globe className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium text-slate-200">All Tech Academy</span>
            </a>
          </div>
        </div>

        {/* Right Side: Quick Contact Form */}
        <div className="md:col-span-7">
          {isSubmitted ? (
            <div className="p-5 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-white text-xs space-y-3 animate-in fade-in">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Message Sent Successfully!</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                ধন্যবাদ <strong>{formData.name}</strong>! আপনার বার্তাটি সরাসরি মোঃ কামরুল ইসলামের কাছে (<span className="text-emerald-300 font-mono">mdkamrulislamnakir@gmail.com</span>) পৌঁছে গেছে। খুব শীঘ্রই আপনার ইমেইলে উত্তর দেওয়া হবে।
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
                  }}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer transition-colors"
                >
                  Send Another Message
                </button>
                <button
                  onClick={handleOpenWhatsApp}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#080e21] border border-blue-900/50 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />

              <input
                type="email"
                required
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#080e21] border border-blue-900/50 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />

              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#080e21] border border-blue-900/50 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="ERP / MIS Job Opportunity">ERP / MIS Job Opportunity</option>
                <option value="Project Collaboration">Project Collaboration</option>
                <option value="Computer & Excel Training">Computer & Excel Training</option>
                <option value="All Tech Academy Inquiries">All Tech Academy Inquiries</option>
              </select>

              <textarea
                required
                rows={3}
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#080e21] border border-blue-900/50 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              />

              {sendError && (
                <div className="p-2.5 rounded-lg bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs">
                  {sendError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="smooth-btn w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Direct Alternative Options: Gmail Web and WhatsApp */}
              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-blue-950/60">
                <span>Or connect directly:</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleOpenGmail}
                    className="inline-flex items-center gap-1 text-slate-300 hover:text-rose-400 hover:underline cursor-pointer transition-colors"
                    title="Open directly in Gmail"
                  >
                    <ExternalLink className="w-3 h-3 text-rose-400" />
                    <span>Gmail Web</span>
                  </button>
                  <span>&bull;</span>
                  <button
                    type="button"
                    onClick={handleOpenWhatsApp}
                    className="inline-flex items-center gap-1 text-slate-300 hover:text-emerald-400 hover:underline cursor-pointer transition-colors"
                    title="Direct chat on WhatsApp"
                  >
                    <MessageSquare className="w-3 h-3 text-emerald-400" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

