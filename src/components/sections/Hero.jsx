import { motion } from 'framer-motion';
import heroPortrait from '../../assets/hero-portrait.jpg';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 lg:pt-32 overflow-hidden bg-background">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Text Column */}
        <div className="flex flex-col items-start pt-8 lg:pt-0 max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-full"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-px bg-secondary/50 block" />
              <span className="uppercase tracking-[0.2em] text-xs font-semibold text-secondary">
                Claire Benson Idoko
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-serif text-foreground leading-[1.05] mb-8 tracking-tight">
              Building <span className="italic text-primary">health</span>,<br />
              dignity, and <span className="italic text-secondary">opportunity</span>.
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-10 border-l-2 border-border pl-6">
              Public Health Professional, Youth Advocate, and Founder of Nedeevah Aid Foundation—dedicated to shaping healthier, more equitable futures.
            </p>

            <div className="flex flex-wrap gap-5">
              <button
                onClick={() => document.getElementById('books')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_4px_14px_rgba(0,0,0,0.1)]"
                data-testid="button-view-books"
              >
                Discover Books
              </button>
              <button
                onClick={() => document.getElementById('writings')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-full font-medium text-xs uppercase tracking-widest text-foreground border border-border hover:border-primary hover:bg-primary/5 transition-all"
                data-testid="button-read-articles"
              >
                Read Articles
              </button>
            </div>
          </motion.div>
        </div>

        {/* Image Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative w-full h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Subtle gradient overlay to enhance image richness */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent mix-blend-overlay z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
            style={{ backgroundImage: `url('${heroPortrait}')` }}
          />
        </motion.div>

      </div>
    </section>
  );
}
