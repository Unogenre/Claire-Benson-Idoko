import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-12 relative overflow-hidden">
      {/* Decorative large serif background */}
      <div className="absolute -bottom-20 -right-20 text-[250px] font-serif text-primary-foreground/[0.03] leading-none pointer-events-none select-none tracking-tighter">
        CBI
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 lg:gap-24 mb-20">
          
          <div className="max-w-xs">
            <Link href="/" className="font-serif text-3xl mb-6 block hover:text-secondary transition-colors duration-300">
              Claire Benson Idoko
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed border-l-2 border-secondary/50 pl-4">
              Public health professional, youth advocate, and founder committed to building healthier, more equitable futures.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12 text-sm">
            <div className="flex flex-col gap-4">
              <span className="font-bold text-secondary uppercase tracking-[0.2em] text-[0.65rem] mb-2">Explore</span>
              <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all" data-testid="link-footer-about">Biography</a>
              <a href="#books" className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all" data-testid="link-footer-books">Books</a>
              <a href="#impact" className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all" data-testid="link-footer-impact">Impact</a>
            </div>
            
            <div className="flex flex-col gap-4">
              <span className="font-bold text-secondary uppercase tracking-[0.2em] text-[0.65rem] mb-2">Work</span>
              <a href="#initiatives" className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all" data-testid="link-footer-initiatives">Initiatives</a>
              <a href="#mentorship" className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all" data-testid="link-footer-mentorship">Mentorship</a>
              <a href="#writings" className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all" data-testid="link-footer-writings">Writing</a>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-bold text-secondary uppercase tracking-[0.2em] text-[0.65rem] mb-2">Connect</span>
              <a href="#press" className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all" data-testid="link-footer-press">Press</a>
              <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all" data-testid="link-footer-contact">Get involved</a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/50 gap-4">
          <p>&copy; {new Date().getFullYear()} Claire Benson Idoko. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            <p className="opacity-70">Designed thoughtfully.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
