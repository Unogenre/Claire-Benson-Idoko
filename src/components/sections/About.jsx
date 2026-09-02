import { motion } from 'framer-motion';
import bioPortrait from '../../assets/bio-portrait.jpg';

export function About() {
  return (
    <section id="about" className="bg-primary text-primary-foreground py-24 lg:py-0 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] lg:min-h-[85vh]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[400px] lg:h-auto overflow-hidden block"
        >
          <div
            className="absolute inset-0 bg-cover bg-center grayscale mix-blend-luminosity opacity-80 scale-105"
            style={{ backgroundImage: `url('${bioPortrait}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12">
            <p className="font-serif text-3xl lg:text-4xl italic text-primary-foreground/90">A Life<br/>of Service</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-20 lg:py-24 relative z-10"
        >
          <div className="max-w-2xl">
            <h2 className="font-sans text-xs uppercase tracking-[0.25em] text-secondary font-semibold mb-8 flex items-center gap-4">
              <span className="w-12 h-px bg-secondary block" /> Biography
            </h2>
            <div className="space-y-6 text-base lg:text-lg leading-relaxed text-primary-foreground/80 font-light">
              <p>
                Claire Benson Idoko is a public health professional, youth advocate, and founder of Nedeevah Aid Foundation committed to building systems that give children and young people a fair chance at life. With a background in Biochemistry and a Master’s degree in Public Health, she works at the intersection of health, education, leadership, and community development across underserved communities in Nigeria and beyond.
              </p>
              <p>
                She is the Founder and Executive Director of the Nedeevah Aid Foundation, established in 2020 in response to widening inequalities after the COVID-19 pandemic. Through various initiatives, Claire has led efforts that have impacted over 12,000 children, pregnant women, elderly individuals, and internally displaced persons. Her work focuses on expanding access to quality education, strengthening preventive healthcare systems, and restoring dignity to vulnerable populations across 4 Nigerian states.
              </p>
              <p>
                Claire is also the founder of The Impact Circle, a global mentorship program where she trains and equips young people across different countries on leadership, social impact, development practice, and public health. Through this platform, she provides practical guidance, career clarity, and real-world insights to help youth transition from passion to measurable impact.
              </p>
              <p>
                She is also an Anti-Corruption Champion with the United Nations Office on Drugs and Crime, where she advocates for integrity, accountability, and youth participation in governance.
              </p>
              <p className="pt-4 text-xl font-serif italic text-primary-foreground">
                "We are not called to succeed for ourselves alone, but to serve, uplift, and create opportunities for others."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
