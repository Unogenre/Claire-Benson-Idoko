import { type FormEvent, type ReactNode, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Check,
  ChevronDown,
  Handshake,
  Mail,
  Menu,
  Mic2,
  ShieldCheck,
  UsersRound,
  Waypoints,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import heroPortrait from './assets/cbi_image_1.png';
import bioPortrait from './assets/bio-portrait.jpg';
import bookcover from './assets/Book-cover.png';
import logo from './assets/claire-logo png.svg';
import {
  CONSULTATION_PRICE,
  CONSULTATION_UNIT,
  CONTACT_EMAIL,
  SAVVYCAL_URL,
  SELAR_BOOK_URL,
} from './config';

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="eyebrow-line" aria-hidden="true" />
      {children}
    </p>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    ['about', 'About'],
    ['books', 'Books'],
    ['impact', 'Impact'],
    ['initiatives', 'Work'],
    ['mentorship', 'Mentorship'],
    ['consultation', 'Consult'],
    ['writings', 'Writing'],
    ['gallery', 'Gallery'],
  ];
  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <a href="#top" className="logo-link" onClick={() => setMenuOpen(false)} data-testid="link-home">
          <img src={logo} alt="Claire Benson Idoko" className="logo" />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([id, label]) => (
            <button key={id} onClick={() => goTo(id)} data-testid={`button-nav-${id}`}>
              {label}
            </button>
          ))}
          <a className="nav-contact" href="#contact" data-testid="link-nav-contact">Get involved</a>
        </nav>
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          data-testid="button-mobile-menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            aria-label="Mobile navigation"
          >
            {navItems.map(([id, label]) => (
              <button key={id} onClick={() => goTo(id)} data-testid={`button-mobile-nav-${id}`}>
                {label}
                <ArrowUpRight size={15} />
              </button>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} data-testid="link-mobile-nav-contact">
              Get involved <ArrowUpRight size={15} />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-grid">
        <Reveal className="hero-copy">
          <Eyebrow>Claire Benson Idoko</Eyebrow>
          <h1>Building <em>health</em>,<br />dignity, and <em>opportunity.</em></h1>
          <p className="hero-intro">
            Public health professional, youth advocate, author, and founder of Nedeevah Aid Foundation—dedicated to shaping healthier, more equitable futures.
          </p>
          <div className="hero-actions">
            <a href="#books" className="button button-primary" data-testid="link-hero-books">
              Discover the work <ArrowRight size={16} />
            </a>
            <a href="#about" className="text-link" data-testid="link-hero-about">
              Meet Claire <ArrowDownIcon />
            </a>
          </div>
          <div className="hero-signature">
            <span className="signature-rule" />
            <span>Public health · Advocacy · Mentorship</span>
          </div>
        </Reveal>
        <Reveal className="hero-visual" delay={0.15}>
          <div className="hero-image-frame">
            <img src={heroPortrait} alt="Claire Benson Idoko at a public health event" />
          </div>
          <div className="hero-caption">A voice for the work that matters.</div>
        </Reveal>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to biography" data-testid="link-scroll-about">
        <span>Scroll to explore</span><ChevronDown size={16} />
      </a>
    </section>
  );
}

function ArrowDownIcon() {
  return <ChevronDown size={15} aria-hidden="true" />;
}

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-portrait">
        <img src={bioPortrait} alt="Claire Benson Idoko in a black and white portrait" />
        <div className="portrait-overlay" />
        <p>A life<br /><em>of service</em></p>
      </div>
      <Reveal className="about-copy">
        <Eyebrow>Biography</Eyebrow>
        <div className="body-large">
          <p>Claire Benson Idoko is a public health professional, youth advocate, and founder of Nedeevah Aid Foundation committed to building systems that give children and young people a fair chance at life. With a background in Biochemistry and a Master’s degree in Public Health, she works at the intersection of health, education, leadership, and community development across underserved communities in Nigeria and beyond.</p>
          <p>She is the Founder and Executive Director of the Nedeevah Aid Foundation, established in 2020 in response to widening inequalities after the COVID-19 pandemic. Through various initiatives, Claire has led efforts that have impacted over 12,000 children, pregnant women, elderly individuals, and internally displaced persons. Her work focuses on expanding access to quality education, strengthening preventive healthcare systems, and restoring dignity to vulnerable populations across 4 Nigerian states.</p>
          <p>Claire is also the founder of The Impact Circle, a global mentorship program where she trains and equips young people across different countries on leadership, social impact, development practice, and public health.</p>
          <p>She is an Anti-Corruption Champion with the United Nations Office on Drugs and Crime, where she advocates for integrity, accountability, and youth participation in governance.</p>
          <blockquote>“We are not called to succeed for ourselves alone, but to serve, uplift, and create opportunities for others.”</blockquote>
        </div>
      </Reveal>
    </section>
  );
}

function Books() {
  return (
    <section id="books" className="section section-book">
      <div className="section-inner split-layout">
        <Reveal className="book-art" delay={0.1}>
  <img
    className="book-cover-img"
    src={bookcover}
    alt="Every Girl Is an Advocate by Claire Benson Idoko"
  />
</Reveal>
        <Reveal className="book-copy" delay={0.2}>
          <Eyebrow>Featured publication</Eyebrow>
          <h2>Finding the courage <em>to use your voice.</em></h2>
          <h3>Every Girl Is an Advocate</h3>
          <p>A thoughtful invitation for every girl to recognize the power of her voice, stand up for what matters, and become an advocate in her own life and community.</p>
          <a className="button button-primary" href="https://selar.com/m/claire-benson-idoko1" target="_blank" rel="noopener noreferrer" data-testid="button-buy-book">
            Buy Book <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

const impactStats = [
  ['12,000+', 'people impacted', 'Children, pregnant women, elderly people, and internally displaced persons reached through Claire’s work.'],
  ['4', 'Nigerian states', 'Communities reached through initiatives focused on education, preventive healthcare, and dignity.'],
  ['2020', 'foundation founded', 'Nedeevah Aid Foundation began in response to widening inequalities after the COVID-19 pandemic.'],
];

function Impact() {
  return (
    <section id="impact" className="section impact-section">
      <div className="section-inner">
        <Reveal className="center-heading">
          <Eyebrow>The numbers behind the work</Eyebrow>
          <h2>Impact at a <em>glance.</em></h2>
        </Reveal>
        <div className="impact-grid">
          {impactStats.map(([value, label, detail], index) => (
            <Reveal className="impact-card" delay={index * 0.1} key={label}>
              <span className="impact-number" data-testid={`stat-value-${index}`}>{value}</span>
              <h3>{label}</h3>
              <p>{detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const initiatives = [
  { title: 'Nedeevah Aid Foundation', role: 'Founder & Executive Director', text: 'Established in 2020 to expand access to quality education, strengthen preventive healthcare systems, and restore dignity to vulnerable populations.', icon: Handshake },
  { title: 'The Impact Circle', role: 'Founder', text: 'A global mentorship program that equips young people with practical guidance in leadership, social impact, development practice, and public health.', icon: UsersRound },
  { title: 'UNODC Anti-Corruption Champion', role: 'Youth advocacy & governance', text: 'Advocating for integrity, accountability, and meaningful youth participation in governance with the United Nations Office on Drugs and Crime.', icon: ShieldCheck },
  { title: 'YWAP / Boothcamp Coordination', role: 'Member, leader & coordinator', text: 'Serving as a YWAP member and leader, while contributing as the Boothcamp coordinator for this camp.', icon: Waypoints },
];

function Initiatives() {
  return (
    <section id="initiatives" className="section initiatives-section">
      <div className="section-inner">
        <Reveal className="wide-heading">
          <Eyebrow>Where the work takes shape</Eyebrow>
          <h2>Initiatives &amp; <em>leadership.</em></h2>
          <p>Building practical pathways from conviction to change—through institutions, communities, and one honest conversation at a time.</p>
        </Reveal>
        <div className="initiative-grid">
          {initiatives.map(({ title, role, text, icon: Icon }, index) => (
            <Reveal className="initiative-card" delay={index * 0.08} key={title}>
              <div className="initiative-icon"><Icon size={22} /></div>
              <span className="card-index">0{index + 1}</span>
              <h3>{title}</h3>
              <p className="initiative-role">{role}</p>
              <p>{text}</p>
              <span className="card-arrow"><ArrowUpRight size={18} /></span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mentorship() {
  const focuses = ['Leadership and purpose', 'Social impact and development practice', 'Public health pathways'];
  return (
    <section id="mentorship" className="section mentorship-section">
      <div className="section-inner split-layout">
        <Reveal className="mentorship-intro">
          <Eyebrow>For young leaders</Eyebrow>
          <h2>You do not have to <em>lead alone.</em></h2>
          <p className="lead-copy">Through The Impact Circle, Claire trains and equips young people across different countries with practical guidance, career clarity, and the real-world insight to move from passion to measurable impact.</p>
        </Reveal>
        <Reveal className="mentorship-card" delay={0.15}>
          <p>The work is especially for young people and girls who are finding their voice, shaping a purpose, or looking for a thoughtful next step.</p>
          <ul>
            {focuses.map((focus) => <li key={focus}><span />{focus}</li>)}
          </ul>
          <a href="#contact" className="button button-primary" data-testid="link-join-impact-circle">Ask about The Impact Circle <ArrowUpRight size={16} /></a>
        </Reveal>
      </div>
    </section>
  );
}

function Consultation() {
  const details = [
    ['01', 'Focused conversation', 'A one-on-one session to talk through your goals, questions, or challenge.'],
    ['02', 'Practical guidance', 'Honest input drawn from public health, leadership, and advocacy experience.'],
    ['03', 'Clear next steps', 'A short recap with resources or next steps shared after your session.'],
  ];
  return (
    <section id="consultation" className="section consultation-section">
      <div className="section-inner split-layout consultation-layout">
        <Reveal className="consultation-copy">
          <Eyebrow>Work with Claire</Eyebrow>
          <h2>Bring the question.<br /><em>Leave with direction.</em></h2>
          <p className="lead-copy">A one-on-one session for founders, students, and young leaders who want direct, practical guidance on public health, advocacy, or building purpose-driven work.</p>
          <div className="consultation-price"><strong>{CONSULTATION_PRICE}</strong><span>{CONSULTATION_UNIT}</span></div>
          <a className="button button-primary" href={SAVVYCAL_URL || '#consultation'} {...(SAVVYCAL_URL ? { target: '_blank', rel: 'noopener noreferrer' } : {})} data-testid="button-book-consultation">Book me now <ArrowUpRight size={16} /></a>
          <p className="subtle-note">You will be taken to Claire’s booking page to choose a time that works for you.</p>
        </Reveal>
        <Reveal className="consultation-details" delay={0.15}>
          {details.map(([number, title, text]) => (
            <div className="consultation-detail" key={number}>
              <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

const articles = [
  ['Child rights', 'May 14, 2024', 'As a child rights advocate, I am deeply concerned by reports of the planned marriage of 100 orphaned girls in Niger State.', 'A call to protect girls from child marriage and uphold every child’s right to protection, education, and the freedom to choose.', 'https://www.linkedin.com/posts/claire-benson-idoko-5800881b3_endchildmarraige-advocacy-linkeldinfamily-activity-7196172416144814080-VRBV'],
  ['Education & equity', 'March 26, 2025', 'When I founded Nedeevah Aid Foundation, I had one vision: to create opportunities for children born into hardship.', 'Claire reflects on the vision behind Nedeevah Aid Foundation and its work to expand opportunity, education, and dignity for children.', 'https://www.linkedin.com/posts/claire-benson-idoko-5800881b3_educationforall-childrights-youthempowerment-activity-7310613116294225921-sbQf'],
  ['Public health', 'December 24, 2025', 'Turning community insights into evidence for malaria vaccine implementation in Nigeria.', 'A field perspective on listening to communities and turning what they share into evidence that can strengthen malaria vaccine implementation.', 'https://www.linkedin.com/posts/claire-benson-idoko-5800881b3_publichealth-malariavaccine-rstmh-activity-7409531983548153856-fdFm'],
];

function Writing() {
  return (
    <section id="writings" className="section writing-section">
      <div className="section-inner">
        <Reveal className="writing-heading">
          <div><Eyebrow>Ideas in public</Eyebrow><h2>Writing &amp; <em>advocacy.</em></h2><p>Articles, speaking engagements, and conversations that make public health, youth leadership, and sustainable development more human.</p></div>
          <a href="https://www.linkedin.com/in/claire-benson-idoko-5800881b3" target="_blank" rel="noreferrer" className="text-link" data-testid="link-view-article-archive">Explore the archive <ArrowRight size={15} /></a>
        </Reveal>
        <div className="article-grid">
          {articles.map(([category, date, title, excerpt, href], index) => (
            <Reveal className="article-card" delay={index * 0.1} key={title}>
              <span className="article-category">{category}</span>
              <h3>{title}</h3>
              <p>{excerpt}</p>
              <a href={href} target="_blank" rel="noreferrer" data-testid={`link-article-${index}`}><span>{date}</span><span className="article-arrow"><ArrowUpRight size={15} /></span></a>
            </Reveal>
          ))}
        </div>
        <div className="speaking-row">
          <div>
            <div className="mini-heading"><Mic2 size={17} /> Speaking engagements</div>
            <h3>Making room for better conversations.</h3>
          </div>
          <p>Claire speaks on public health, advocacy, youth leadership, ethical systems, and the work of turning shared goals into local action.</p>
        </div>
      </div>
    </section>
  );
}

const recognitions = [
  ['The Future Awards Africa', 'Recognition', 'Public health, leadership & youth advocacy'],
  ['Women’s Corner 2.0 Magazine', 'Feature', 'Women shaping healthier communities'],
  ['Theirworld Global Youth Ambassador', 'Global platform', 'Youth participation and education'],
  ['UN Anti-Corruption Champion', 'United Nations', 'Integrity, accountability and governance'],
  ['Youth With a Purpose Initiative', 'Programme', 'Purpose-led youth development'],
  ['Nedeevah Aid Foundation', 'Founded 2020', 'Education, health and human dignity'],
];

function Press() {
  return (
    <section id="press" className="section press-section">
      <div className="section-inner">
        <Reveal className="press-heading">
          <div><Eyebrow>The wider conversation</Eyebrow><h2>Press &amp; <em>recognition.</em></h2></div>
          <p>Selected honours, programmes, and professional affiliations that reflect Claire’s work in public health, education, advocacy, and youth development.</p>
        </Reveal>
        <div className="recognition-grid">
          {recognitions.map(([title, category, text], index) => (
            <Reveal className="recognition-item" delay={index * 0.06} key={title}>
              <span className="recognition-number">0{index + 1}</span>
              <div><span className="recognition-category">{category}</span><h3>{title}</h3><p>{text}</p></div>
              <ArrowUpRight size={17} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const galleryImages = [
  { id: 'gallery-1', src: '/gallery/gallery-1.jpg', caption: 'Claire at a public health event' },
  { id: 'gallery-2', src: '/gallery/gallery-2.jpg', caption: 'Claire Benson Idoko' },
  { id: 'gallery-3', src: '/gallery/gallery-3.jpg', caption: 'Claire Benson Idoko in a studio portrait' },
  { id: 'gallery-4', src: '/gallery/gallery-4.jpg', caption: 'Claire with students and community members' },
  { id: 'gallery-5', src: '/gallery/gallery-5.jpg', caption: 'Claire at a United Nations session' },
  { id: 'gallery-6', src: '/gallery/gallery-6.jpg', caption: 'Claire speaking at a United Nations meeting' },
  { id: 'gallery-7', src: '/gallery/gallery-7.jpg', caption: 'Claire contributing to a policy discussion' },
  { id: 'gallery-8', src: '/gallery/gallery-8.jpg', caption: 'Claire advocating during a conference session' },
  { id: 'gallery-10', src: '/gallery/gallery-10.jpg', caption: 'Claire receiving recognition for her work' },
];

function GalleryTile({ image, index }: { image: typeof galleryImages[number]; index: number }) {
  const [error, setError] = useState(false);
  return (
    <Reveal className={`gallery-tile gallery-tile-${index + 1}`} delay={index * 0.06}>
      {!error ? <img src={image.src} alt={image.caption} loading="lazy" onError={() => setError(true)} /> : <div className="gallery-placeholder"><Camera size={23} /><span>{image.caption}</span></div>}
      <span className="gallery-label">{String(index + 1).padStart(2, '0')}</span>
    </Reveal>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="section gallery-section">
      <div className="section-inner">
        <Reveal className="gallery-heading">
          <Eyebrow>Moments from the field</Eyebrow>
          <h2>A life in <em>motion.</em></h2>
          <p>Scenes from Claire’s work in public health, advocacy, leadership, and service—across communities, convenings, and conversations that move change forward.</p>
        </Reveal>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => <GalleryTile image={image} index={index} key={image.id} />)}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [path, setPath] = useState('General contact');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`${path} — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return (
    <section id="contact" className="contact-section">
      <div className="section-inner contact-layout">
        <Reveal className="contact-copy">
          <Eyebrow>Let’s build something meaningful</Eyebrow>
          <h2>Get <em>involved.</em></h2>
          <p>Whether you are looking to collaborate, learn, invite Claire to speak, or stay connected to the work, choose a path below to start the conversation.</p>
          <div className="contact-paths">
            {['Partner with Nedeevah', 'Join The Impact Circle', 'Media inquiries', 'General contact'].map((item) => <button key={item} onClick={() => { setPath(item); setSent(false); }} className={path === item ? 'selected' : ''} data-testid={`button-contact-${item.toLowerCase().replaceAll(' ', '-')}`}>{item}<ArrowUpRight size={15} /></button>)}
          </div>
        </Reveal>
        <Reveal className="contact-form-wrap" delay={0.15}>
          {sent ? (
            <div className="contact-sent" data-testid="status-inquiry-sent"><div className="confirmation-icon"><Check size={22} /></div><Eyebrow>Almost there</Eyebrow><h3>Your email app should have opened.</h3><p>Just press send there. If nothing opened, email Claire’s team directly at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> to continue the conversation.</p><button className="button button-outline-light" onClick={() => setSent(false)} data-testid="button-reset-contact">Write another note</button></div>
          ) : (
            <form onSubmit={submit} className="contact-form" data-testid="form-contact-inquiry">
              <span className="form-context">Selected path: <strong>{path}</strong></span>
              <h3>Start the conversation.</h3>
              <p>This opens your email app with your message ready to send to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
              <div className="form-two-col"><label>Name<input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" data-testid="input-inquiry-name" /></label><label>Email<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" data-testid="input-inquiry-email" /></label></div>
              <label>Message<textarea required rows={5} value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Tell us a little more..." data-testid="input-inquiry-message" /></label>
              <button type="submit" className="button button-sand" data-testid="button-send-inquiry"><Mail size={16} /> Send by email</button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div><a href="#top" className="wordmark">Claire <span>Benson Idoko</span></a><p>Public health · Advocacy · Mentorship</p></div>
      <div className="footer-links"><a href="#about">About</a><a href="#consultation">Consultation</a><a href={`mailto:${CONTACT_EMAIL}`}>Email Claire</a></div>
      <p className="copyright">© {new Date().getFullYear()} Claire Benson Idoko</p>
    </footer>
  );
}

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Books />
        <Impact />
        <Initiatives />
        <Mentorship />
        <Consultation />
        <Writing />
        <Press />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
