import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Handshake, Mic2 } from 'lucide-react';

const ARTICLES = [
  {
    id: 'child-rights-advocacy',
    category: 'Child rights',
    date: 'May 14, 2024',
    title: 'As a child rights advocate, I am deeply concerned by reports of the planned marriage of 100 orphaned girls in Niger State.',
    excerpt:
      'A call to protect girls from child marriage and uphold every child’s right to protection, education, and the freedom to choose.',
    destination: 'Read the advocacy post',
    href: 'https://www.linkedin.com/posts/claire-benson-idoko-5800881b3_endchildmarraige-advocacy-linkeldinfamily-activity-7196172416144814080-VRBV',
  },
  {
    id: 'nedeevah-foundation',
    category: 'Education & equity',
    date: 'March 26, 2025',
    title: 'When I founded Nedeevah Aid Foundation, I had one vision: to create opportunities for children born into hardship.',
    excerpt:
      'Claire reflects on the vision behind Nedeevah Aid Foundation and its work to expand opportunity, education, and dignity for children.',
    destination: 'Read the foundation story',
    href: 'https://www.linkedin.com/posts/claire-benson-idoko-5800881b3_educationforall-childrights-youthempowerment-activity-7310613116294225921-sbQf',
  },
  {
    id: 'malaria-vaccine',
    category: 'Public health',
    date: 'December 24, 2025',
    title: 'Turning community insights into evidence for malaria vaccine implementation in Nigeria.',
    excerpt:
      'A field perspective on listening to communities and turning what they share into evidence that can strengthen malaria vaccine implementation.',
    destination: 'Read the public health post',
    href: 'https://www.linkedin.com/posts/claire-benson-idoko-5800881b3_publichealth-malariavaccine-rstmh-activity-7409531983548153856-fdFm',
  },
];

const SPEAKING_ENGAGEMENTS = [
  {
    id: 'tedx-jimeta',
    date: 'July 11, 2025',
    title: 'TEDxJimeta roundtable conversation',
    description:
      'Guest speaker in a conversation about building better systems and telling meaningful stories.',
    href: 'https://www.linkedin.com/posts/claire-benson-idoko-5800881b3_excited-to-be-joining-this-important-tedxjimeta-activity-7349358798320381954-EPR6',
  },
  {
    id: 'ladies-of-grace',
    date: 'November 30, 2024',
    title: 'Ladies of Grace: “Thriving in Challenging Times”',
    description:
      'Panelist for a session on managing yourself, family, and faith through challenging times.',
    href: 'https://www.linkedin.com/posts/claire-benson-idoko-5800881b3_ladiesofgrace-thrivinginchallengingtimes-activity-7268736265108279296-ZhXk',
  },
];

export function Blog() {
  return (
    <section id="writings" className="py-24 sm:py-32 bg-background relative border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="mb-16 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-secondary font-semibold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-secondary block" /> Ideas in public
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
              Writing & <span className="italic text-primary">Advocacy</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Articles, speaking engagements, and conversations that make public health, youth leadership, and sustainable development more human.
            </p>
          </motion.div>

          <motion.a
            href="https://www.linkedin.com/in/claire-benson-idoko-5800881b3"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary border-b-2 border-primary/20 hover:border-primary pb-2 self-start md:self-auto transition-all"
            data-testid="link-view-article-archive"
          >
            Explore the archive
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {ARTICLES.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col h-full"
              data-testid={`card-article-${article.id}`}
            >
              <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-widest mb-6">
                <span className="text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>
              <h3 className="text-2xl font-serif text-foreground mb-4 group-hover:text-primary transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-1 text-sm">
                {article.excerpt}
              </p>
              <a
                href={article.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between border-t border-border pt-6 mt-auto text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                data-testid={`link-article-${article.id}`}
              >
                <span>
                  {article.date}
                  <span className="sr-only"> — {article.destination}</span>
                </span>
                <span className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </a>
            </motion.article>
          ))}
        </div>

        <div className="mt-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 border-t border-border pt-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Mic2 className="w-5 h-5 text-primary" aria-hidden="true" />
              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-primary/65 font-semibold">
                Speaking engagements
              </p>
            </div>
            <div className="space-y-8">
              {SPEAKING_ENGAGEMENTS.map((engagement) => (
                <article key={engagement.id} data-testid={`card-speaking-${engagement.id}`}>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground/70 font-semibold">
                    {engagement.date}
                  </p>
                  <h3 className="mt-2 text-2xl font-serif text-foreground">
                    {engagement.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {engagement.description}
                  </p>
                  <a
                    href={engagement.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/75 transition-colors"
                    data-testid={`link-speaking-${engagement.id}`}
                  >
                    View event details
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>

          <aside className="bg-secondary/40 p-8 sm:p-10 self-start" data-testid="card-sdg-partnerships">
            <Handshake className="w-7 h-7 text-primary mb-8" aria-hidden="true" />
            <p className="text-[0.65rem] uppercase tracking-[0.24em] text-primary/65 font-semibold">
              SDG partnerships
            </p>
            <h3 className="mt-4 text-3xl font-serif text-foreground">
              Turning shared goals into local action.
            </h3>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Claire partners with global platforms to promote the Sustainable Development Goals, bringing youth voices into conversations about health, education, equity, and ethical leadership.
            </p>
            <a
              href="mailto:hello@nedeevah.org?subject=SDG%20partnership%20inquiry"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/75 transition-colors"
              data-testid="link-sdg-partnership-inquiry"
            >
              Discuss a partnership
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}