'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { SECTION_IDS } from '@/src/constants/sections';
import { technologies } from '@/src/data/technologies';
import TechCard from '../ui/TechCard';
import { fadeUp, staggerContainer } from '@/src/constants/animations';

export default function TechnologiesSection() {
  return (
    <Section id={SECTION_IDS.technologies} title="Technologies">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        {technologies.map((tech) => (
          <motion.div key={tech.name} variants={fadeUp} className="h-full">
            <TechCard name={tech.name} icon={tech.icon} lightInvert={tech.lightInvert} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
