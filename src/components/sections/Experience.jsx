import { motion } from 'framer-motion';
import { Handshake, ShieldCheck, UsersRound, Waypoints } from 'lucide-react';

const INITIATIVES = [
  {
    id: 'nedeevah',
    title: 'Nedeevah Aid Foundation',
    role: 'Founder & Executive Director',
    description:
      'Established in 2020 to expand access to quality education, strengthen preventive healthcare systems, and restore dignity to vulnerable populations.',
    Icon: Handshake,
  },
  {
    id: 'impact-circle',
    title: 'The Impact Circle',
    role: 'Founder',
    description:
      'A global mentorship program that equips young people with practical guidance in leadership, social impact, development practice, and public health.',
    Icon: UsersRound,
  },
  {
    id: 'unodc',
    title: 'UNODC Anti-Corruption Champion',
    role: 'Youth advocacy & governance',
    description:
      'Advocating for integrity, accountability, and meaningful youth participation in governance with the United Nations Office on Drugs and Crime.',
    Icon: ShieldCheck,
  },
  {
    id: 'ywap',
    title: 'YWAP / BC Coordination',
    role: 'Member, leader & coordinator',
    description:
      'Serving as a YWAP member and leader, while contributing as the BC coordinator for this camp.',
    Icon: Waypoints,
  },
];

export function Experience() {
  return (
    <section id="initiatives" className="bg-primary text-primary-foreground py-24 sm:py-32 relative">
      {/* Decorative grain and subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16 lg:mb-24"
        >
          <p className="text-[0.7rem] uppercase tracking-[0.25em] text-secondary font-semibold mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-secondary block" /> Where the work takes shape
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            Initiatives & Leadership
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {INITIATIVES.map((initiative, index) => {
            const Icon = initiative.Icon;

            return (
              <motion.article
                key={initiative.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-primary-foreground/5 border border-primary-foreground/10 p-8 lg:p-10 rounded-2xl hover:bg-primary-foreground/10 transition-colors duration-500"
                data-testid={`card-initiative-${initiative.id}`}
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-700">
                   <Icon className="w-32 h-32 text-secondary" aria-hidden="true" />
                </div>
                
                <Icon className="w-8 h-8 text-secondary mb-8" aria-hidden="true" />
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/60 font-semibold mb-3">
                  {initiative.role}
                </p>
                <h3 className="font-serif text-2xl lg:text-3xl leading-tight text-primary-foreground mb-4">
                  {initiative.title}
                </h3>
                <p className="text-sm lg:text-base leading-relaxed text-primary-foreground/70 max-w-md">
                  {initiative.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
