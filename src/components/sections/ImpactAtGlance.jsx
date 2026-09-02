import { motion } from 'framer-motion';

const IMPACT_STATS = [
  {
    id: 'people',
    value: '12,000+',
    label: 'people impacted',
    detail: 'Children, pregnant women, elderly people, and internally displaced persons reached through Claire’s work.',
  },
  {
    id: 'states',
    value: '4',
    label: 'Nigerian states',
    detail: 'Communities reached through initiatives focused on education, preventive healthcare, and dignity.',
  },
  {
    id: 'founded',
    value: '2020',
    label: 'foundation founded',
    detail: 'Nedeevah Aid Foundation began in response to widening inequalities after the COVID-19 pandemic.',
  },
];

export function ImpactAtGlance() {
  return (
    <section id="impact" className="bg-muted/30 py-24 sm:py-32 relative border-y border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-24"
        >
          <p className="text-[0.7rem] uppercase tracking-[0.25em] text-secondary font-semibold mb-4">
            The numbers behind the work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
            Impact at a <span className="italic text-primary">Glance</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {IMPACT_STATS.map((stat, index) => (
            <motion.article
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow group"
              data-testid={`card-impact-${stat.id}`}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-secondary rounded-b-md transform origin-top transition-transform duration-300 scale-y-0 group-hover:scale-y-100" />
              
              <p
                className="font-serif text-5xl sm:text-6xl lg:text-7xl text-primary tracking-tighter mb-4"
                data-testid={`stat-value-${stat.id}`}
              >
                {stat.value}
              </p>
              <h3 className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-foreground mb-4">
                {stat.label}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {stat.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
