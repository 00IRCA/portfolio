'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { SECTION_IDS } from '@/src/constants/sections';
import { technologies, Technology } from '@/src/data/technologies';
import TechCard from '../ui/TechCard';
import { fadeUp, staggerContainer } from '@/src/constants/animations';

const experiencedTechs = technologies.filter((tech) => tech.level === 'experienced');
const familiarTechs = technologies.filter((tech) => tech.level === 'familiar');

function TechGrid({ techs }: { techs: Technology[] }) {
  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
    >
      {techs.map((tech) => (
        <motion.div key={tech.name} variants={fadeUp} className="h-full">
          <TechCard name={tech.name} icon={tech.icon} lightInvert={tech.lightInvert} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function TechnologiesSection() {
  return (
    <Section id={SECTION_IDS.technologies} title="Technologies">
      <div className="flex flex-col gap-8">
        <TechGrid techs={experiencedTechs} />

        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium text-foreground/40 uppercase tracking-widest">
            Familiar
          </p>
          <TechGrid techs={familiarTechs} />
        </div>
      </div>
    </Section>
  );
}
