import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Mail } from 'lucide-react';

const CONTACT_EMAIL = 'hello@nedeevah.org';

const CONTACT_PATHS = [
  {
    id: 'partner',
    title: 'Partner with Nedeevah',
    description: 'Explore partnerships that widen access to education, preventive care, and dignity.',
  },
  {
    id: 'impact-circle',
    title: 'Join The Impact Circle',
    description: 'Ask about mentorship, leadership guidance, and opportunities for young people.',
  },
  {
    id: 'media',
    title: 'Media inquiries',
    description: 'Start a conversation about interviews, speaking engagements, or features.',
  },
  {
    id: 'general',
    title: 'General contact',
    description: 'Share a thoughtful question, collaboration idea, or message for Claire.',
  },
];

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedPath, setSelectedPath] = useState(CONTACT_PATHS[3]);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySent, setInquirySent] = useState(false);
  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    if (!email) return;

    // TODO: Connect this form to your mailing-list provider here. Do not submit
    // visitor data until a provider and consent flow have been configured.
    setIsSuccess(true);
    setEmail('');

    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  const selectPath = (path) => {
    setSelectedPath(path);
    setInquirySent(false);
    document.getElementById('newsletter-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleInquirySubmit = (event) => {
    event.preventDefault();

    const subject = `${selectedPath.title} — inquiry from ${inquiryName}`;
    const body = [
      `Name: ${inquiryName}`,
      `Email: ${inquiryEmail}`,
      '',
      inquiryMessage,
    ].join('\n');
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?${new URLSearchParams({
      subject,
      body,
      replyTo: inquiryEmail,
    }).toString()}`;

    setInquirySent(true);
    setInquiryName('');
    setInquiryEmail('');
    setInquiryMessage('');
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="scroll-mt-20 py-24 sm:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-secondary/10 via-primary to-primary pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Context & Paths */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[0.7rem] uppercase tracking-[0.25em] text-secondary font-semibold mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-secondary block" /> Let’s build something meaningful
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-8 leading-tight">Get <span className="italic">Involved</span></h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-lg mb-12">
                Whether you are looking to collaborate, learn, invite Claire to speak, or
                stay connected to the work, choose a path below to start the conversation.
              </p>
            </motion.div>

            <div className="space-y-4">
              {CONTACT_PATHS.map((path, index) => (
                <motion.button
                  key={path.id}
                  type="button"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => selectPath(path)}
                  aria-pressed={selectedPath.id === path.id}
                  className={`group w-full text-left p-6 rounded-xl border transition-all duration-300 ${
                    selectedPath.id === path.id 
                      ? 'bg-primary-foreground/10 border-secondary/50 shadow-[0_0_20px_rgba(217,160,91,0.1)]' 
                      : 'bg-primary-foreground/5 border-primary-foreground/10 hover:bg-primary-foreground/10'
                  }`}
                  data-testid={`button-contact-${path.id}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className={`font-sans text-lg font-bold mb-2 ${selectedPath.id === path.id ? 'text-secondary' : 'text-primary-foreground'}`}>
                        {path.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-primary-foreground/70">
                        {path.description}
                      </p>
                    </div>
                    <ArrowUpRight className={`w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${selectedPath.id === path.id ? 'text-secondary' : 'text-primary-foreground/50'}`} aria-hidden="true" />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Column: Forms */}
          <div className="flex flex-col gap-12 lg:pt-24" id="newsletter-form">
            
            {/* Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-primary-foreground/5 p-8 lg:p-10 rounded-2xl border border-primary-foreground/10 backdrop-blur-sm"
            >
              <p className="text-xs uppercase tracking-widest font-semibold text-secondary mb-3">
                Selected path: <span className="text-primary-foreground">{selectedPath.title}</span>
              </p>
              <h3 className="text-3xl font-serif mb-4">Start the conversation.</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed mb-8">
                Share a little about what you have in mind. Your message will open in your
                email app, addressed to Claire’s team at{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-secondary hover:text-secondary/80 underline underline-offset-4 transition-colors"
                  data-testid="link-contact-email"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>

              {inquirySent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-secondary/10 border border-secondary/30 rounded-xl p-6"
                  data-testid="status-inquiry-sent"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-1">
                      <Check className="w-4 h-4 text-secondary" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl mb-2 text-primary-foreground">Ready to send.</h4>
                      <p className="text-primary-foreground/70 text-sm leading-relaxed">
                        Your email app should have opened. Press send there to complete your inquiry. If it did
                        not open, email the address directly.
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-5" data-testid="form-contact-inquiry">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="inquiry-name" className="text-xs uppercase tracking-widest text-primary-foreground/60 ml-1">Name</label>
                      <input
                        id="inquiry-name"
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={inquiryName}
                        onChange={(event) => setInquiryName(event.target.value)}
                        className="flex h-12 w-full rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-2 text-primary-foreground placeholder:text-primary-foreground/30 focus-visible:border-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/20"
                        data-testid="input-inquiry-name"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="inquiry-email" className="text-xs uppercase tracking-widest text-primary-foreground/60 ml-1">Email</label>
                      <input
                        id="inquiry-email"
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={inquiryEmail}
                        onChange={(event) => setInquiryEmail(event.target.value)}
                        className="flex h-12 w-full rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-2 text-primary-foreground placeholder:text-primary-foreground/30 focus-visible:border-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/20"
                        data-testid="input-inquiry-email"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="inquiry-message" className="text-xs uppercase tracking-widest text-primary-foreground/60 ml-1">Message</label>
                    <textarea
                      id="inquiry-message"
                      required
                      rows={4}
                      placeholder="Tell us a little more..."
                      value={inquiryMessage}
                      onChange={(event) => setInquiryMessage(event.target.value)}
                      className="flex w-full resize-y rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus-visible:outline-none focus-visible:border-secondary focus-visible:ring-2 focus-visible:ring-secondary/20 transition-all"
                      data-testid="input-inquiry-message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-secondary text-sm font-medium tracking-wide text-secondary-foreground transition-all hover:bg-secondary/90"
                    data-testid="button-send-inquiry"
                  >
                    <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                    Draft Email
                  </button>
                </form>
              )}
            </motion.div>

            {/* Newsletter Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-px bg-primary-foreground/20 block" />
                <p className="text-xs uppercase tracking-widest font-semibold text-primary-foreground/60">
                  Stay connected
                </p>
              </div>
              <h3 className="text-2xl font-serif mb-3">Join the Newsletter</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6">
                Updates on public health, youth leadership, writing, and upcoming opportunities.
              </p>
              <p className="text-sm text-secondary mb-6" data-testid="newsletter-placeholder-note">
                Newsletter signup placeholder — connect your mailing list here.
              </p>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-secondary/10 border border-secondary/30 rounded-xl p-5"
                  data-testid="status-newsletter-subscribed"
                >
                  <h4 className="font-serif text-lg mb-1 text-primary-foreground">Placeholder submitted.</h4>
                  <p className="text-primary-foreground/70 text-sm">
                    No email was sent. Replace the marked handler with your mailing-list code when you are ready.
                  </p>
                </motion.div>
              ) : (
                <>
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3 sm:flex-row" data-testid="form-newsletter-placeholder">
                    <input
                      id="newsletter-email"
                      type="email"
                      required
                      placeholder="Your email address"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="flex h-12 w-full min-w-0 flex-1 rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-2 text-primary-foreground placeholder:text-primary-foreground/30 focus-visible:border-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/20"
                      data-testid="input-newsletter-email"
                    />
                    <button
                      type="submit"
                      className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-lg bg-primary-foreground px-8 font-medium tracking-wide text-primary transition-colors hover:bg-primary-foreground/90"
                      data-testid="button-subscribe"
                    >
                      Subscribe
                    </button>
                  </form>
                </>
              )}
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
