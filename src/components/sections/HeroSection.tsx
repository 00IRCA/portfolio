'use client';

import { motion } from 'framer-motion';
import InteractiveImage from '../ui/InteractiveImage';
import { SECTION_IDS } from '@/src/constants/sections';
import { fadeUp, staggerContainer } from '@/src/constants/animations';

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden min-h-[calc(100vh-72px)] flex flex-col md:flex-row items-center justify-center gap-8 p-8"
      id={SECTION_IDS.home}
    >
      <motion.div
        className="relative z-10 flex flex-col items-start gap-4 max-w-lg"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={fadeUp}
          className="text-sm font-semibold tracking-widest uppercase text-primary/80"
        >
          Available for work
        </motion.p>
        <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl leading-tight">
          <span className="block font-bold">ISMAEL RUIZ</span>
          <span className="block text-primary font-bold">FULL STACK DEVELOPER</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-foreground/60 text-base md:text-lg leading-relaxed max-w-sm"
        >
          Building high-quality web applications with clean code and thoughtful design.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-row items-center gap-4 mt-2">
          <a
            href={`#${SECTION_IDS.contact}`}
            className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-all duration-200 hover:scale-105 shadow-[0_0_20px_rgba(64,198,255,0.3)]"
          >
            Get in Touch
          </a>
          <a
            href={`#${SECTION_IDS.projects}`}
            className="px-6 py-3 border border-foreground/20 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-200"
          >
            View Projects
          </a>
        </motion.div>
      </motion.div>
      <div className="relative z-10 hidden md:block">
        <InteractiveImage width={700} height={700} alt="hero" src={'/hero-image.png'} />
      </div>
    </section>
  );
}
