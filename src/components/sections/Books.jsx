import { useState } from 'react';
import { motion } from 'framer-motion';
import { PurchaseDialog } from '../PurchaseDialog';

const BOOK = {
  title: 'Every Girl Is an Advocate',
  subtitle: 'Finding the courage to use your voice',
  description:
    'A thoughtful invitation for every girl to recognize the power of her voice, stand up for what matters, and become an advocate in her own life and community.',
};

export function Books() {
  const [isPurchaseOpen, setIsPurchaseOpen] = useState(false);

  return (
    <section id="books" className="bg-background py-24 sm:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 flex justify-center lg:justify-end"
          >
            <div className="relative group w-full max-w-[340px]">
              {/* Decorative Book Backing */}
              <div className="absolute inset-0 bg-secondary/10 translate-x-4 translate-y-4 rounded-lg -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
              
              <div className="relative aspect-[0.75/1] w-full overflow-hidden rounded-lg bg-primary p-8 shadow-[0_20px_50px_rgba(20,40,30,0.15)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_rgba(20,40,30,0.25)] flex flex-col justify-between border border-primary/20">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_80%,#D9A05B,transparent_50%)]" />
                
                <div className="relative h-full flex flex-col items-center justify-between py-6 px-4 text-center border border-primary-foreground/10">
                  <span className="text-[0.6rem] uppercase tracking-[0.3em] text-primary-foreground/70">
                    Claire Benson Idoko
                  </span>
                  
                  <h3 className="font-serif text-3xl sm:text-4xl leading-[1.1] text-primary-foreground mt-8 mb-4">
                    Every Girl<br />
                    <span className="italic">Is an</span><br />
                    Advocate
                  </h3>
                  
                  <span className="text-[0.6rem] uppercase tracking-[0.2em] text-primary-foreground/60 border-t border-primary-foreground/20 pt-4 w-full">
                    A call to speak up
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-secondary font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-secondary block" /> Featured Publication
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">
              Finding the courage <br/> <span className="italic text-primary">to use your voice.</span>
            </h2>
            
            <h3 className="font-sans text-xl font-medium text-foreground mb-4">
              {BOOK.title}
            </h3>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mb-10">
              {BOOK.description}
            </p>
            
            <button
              onClick={() => setIsPurchaseOpen(true)}
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-primary/90 transition-all hover:scale-105 shadow-md group"
              data-testid="button-buy-book"
            >
              Purchase a Copy 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>
        </div>
      </div>

      <PurchaseDialog
        isOpen={isPurchaseOpen}
        onClose={() => setIsPurchaseOpen(false)}
        bookTitle={BOOK.title}
      />
    </section>
  );
}
