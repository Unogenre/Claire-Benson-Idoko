import { Link } from 'wouter';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Navbar() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(4px)", "blur(12px)"]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ opacity, backdropFilter: backdropBlur }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/90 transition-all duration-300"
    >
      <motion.div 
        style={{ opacity: borderOpacity }}
        className="absolute bottom-0 left-0 right-0 h-px bg-border/50" 
      />
      <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl tracking-tight font-medium hover:text-primary transition-colors duration-300" data-testid="link-home">
          Claire Benson Idoko
        </Link>
        <a
          href="#contact"
          className="md:hidden text-xs font-semibold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
          data-testid="button-nav-mobile-contact"
        >
          Get involved
        </a>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-medium uppercase tracking-widest">
          <button onClick={() => scrollTo('about')} className="text-muted-foreground hover:text-primary transition-colors" data-testid="button-nav-about">About</button>
          <button onClick={() => scrollTo('books')} className="text-muted-foreground hover:text-primary transition-colors" data-testid="button-nav-books">Books</button>
          <button onClick={() => scrollTo('impact')} className="text-muted-foreground hover:text-primary transition-colors" data-testid="button-nav-impact">Impact</button>
          <button onClick={() => scrollTo('initiatives')} className="text-muted-foreground hover:text-primary transition-colors" data-testid="button-nav-initiatives">Initiatives</button>
          <button onClick={() => scrollTo('mentorship')} className="text-muted-foreground hover:text-primary transition-colors" data-testid="button-nav-mentorship">Mentorship</button>
          <button onClick={() => scrollTo('writings')} className="text-muted-foreground hover:text-primary transition-colors" data-testid="button-nav-writings">Writing</button>
          <button onClick={() => scrollTo('press')} className="text-muted-foreground hover:text-primary transition-colors" data-testid="button-nav-press">Press</button>
          <button onClick={() => scrollTo('contact')} className="text-secondary hover:text-primary transition-colors" data-testid="button-nav-contact">Contact</button>
        </nav>
      </div>
    </motion.header>
  );
}
