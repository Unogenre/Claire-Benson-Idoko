import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const RECOGNITION_ITEMS = [
  {
    id: 'future-awards-africa',
    category: 'Award nomination',
    date: '2025',
    title: 'The Future Awards Africa',
    text: 'Nominated in the Activism and Advocacy category for the awards’ 19th edition.',
    href: 'https://awards.thefutureafrica.com/the-future-awards-africa-unveils-nominees-for-19th-edition-adds-new-categories-to-honour-more-achievers/',
    linkLabel: 'Official announcement',
  },
  {
    id: 'womens-corner',
    category: 'Press feature',
    date: '2025',
    title: 'Women’s Corner 2.0 Magazine',
    text: 'Interviewed and featured in a spotlight on her child-rights advocacy, development work, and leadership.',
    href: 'https://www.linkedin.com/posts/bayo-speaks_womenscorner20-bayospeaksmagazine-womeninspiration-activity-7416437061064409088-qr4k',
    linkLabel: 'View the feature',
  },
  {
    id: 'theirworld',
    category: 'Affiliation',
    date: 'Since 2023',
    title: 'Theirworld Global Youth Ambassador',
    text: 'Part of Theirworld’s international network of young education advocates working to help end the global education crisis.',
    href: 'https://www.linkedin.com/in/claire-benson-idoko-5800881b3',
    linkLabel: 'View verified profile',
  },
  {
    id: 'unodc',
    category: 'Affiliation',
    date: 'Current',
    title: 'UN Anti-Corruption Champion',
    text: 'Advocates for integrity, accountability, and meaningful youth participation in governance with the United Nations Office on Drugs and Crime.',
    href: 'https://www.linkedin.com/in/claire-benson-idoko-5800881b3',
    linkLabel: 'View verified profile',
  },
  {
    id: 'ywap',
    category: 'Leadership',
    date: 'Current',
    title: 'Youth With a Purpose Initiative',
    text: 'Serves as a member and leader, supporting purpose-driven youth development and community service.',
    href: 'https://www.linkedin.com/posts/claire-benson-idoko-5800881b3_ywap-leadership-advocacy-activity-7368344738564861952-BnZ3',
    linkLabel: 'Read Claire’s reflection',
  },
  {
    id: 'nedeevah',
    category: 'Leadership',
    date: 'Since 2020',
    title: 'Nedeevah Aid Foundation',
    text: 'Founder and Executive Director, leading work across education, preventive healthcare, child rights, and community development.',
    href: 'https://www.linkedin.com/company/nedeevah-aid-foundation-naf/',
    linkLabel: 'Visit the foundation',
  },
];

export function Press() {
  return (
    <section id="press" className="bg-card py-24 sm:py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24"
        >
          <div className="max-w-2xl">
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-secondary font-semibold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-secondary block" /> The wider conversation
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
              Press & <span className="italic text-primary">Recognition</span>
            </h2>
          </div>
          <p className="max-w-md text-base text-muted-foreground leading-relaxed border-l-2 border-border pl-6">
            Selected honours, programmes, and professional affiliations that reflect
            Claire’s work in public health, education, advocacy, and youth development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {RECOGNITION_ITEMS.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              data-testid={`card-press-${item.id}`}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <p className="text-[0.65rem] uppercase tracking-widest text-secondary font-semibold bg-secondary/10 px-3 py-1 rounded-full">
                  {item.category}
                </p>
                <p className="shrink-0 text-xs font-medium text-muted-foreground">
                  {item.date}
                </p>
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4 leading-snug group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">
                {item.text}
              </p>
              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors"
                  aria-label={`${item.linkLabel} for ${item.title} (opens in a new tab)`}
                >
                  {item.linkLabel}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary border-b-2 border-primary/20 hover:border-primary pb-2 transition-all group"
            data-testid="link-press-inquiries"
          >
            Share a feature or inquiry
            <ArrowUpRight className="w-4 h-4 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
