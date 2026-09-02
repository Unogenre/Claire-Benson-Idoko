import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const MENTORSHIP_FOCUSES = [
  'Leadership and purpose',
  'Social impact and development practice',
  'Public health pathways',
];

export function Mentorship() {
  return (
    <section id="mentorship" className="bg-muted/50 py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-secondary font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-secondary block" /> For young leaders
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-foreground leading-[1.05] mb-8">
              You do not have to <span className="italic text-primary">lead alone.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-6">
              Through The Impact Circle, Claire trains and equips young people across
              different countries with practical guidance, career clarity, and the
              real-world insight to move from passion to measurable impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card p-8 lg:p-12 rounded-2xl shadow-sm border border-border relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            
            <p className="text-base text-foreground/80 leading-relaxed mb-8">
              The work is especially for young people and girls who are finding their
              voice, shaping a purpose, or looking for a thoughtful next step.
            </p>

            <ul className="space-y-4 mb-10">
              {MENTORSHIP_FOCUSES.map((focus) => (
                <li
                  key={focus}
                  className="flex items-center gap-4 text-sm font-medium text-foreground bg-background rounded-lg p-4 border border-border"
                  data-testid={`text-mentorship-focus-${focus.toLowerCase().replaceAll(' ', '-')}`}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                  {focus}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-primary/90 transition-all hover:scale-105"
              data-testid="link-join-impact-circle"
            >
              Ask about The Impact Circle
              <ArrowUpRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
