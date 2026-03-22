'use client';

import { motion } from 'framer-motion';
import { experience } from '@/src/data/experience';
import ExperienceCard from '../ui/ExperienceCard';
import Section from '../ui/Section';
import { SECTION_IDS } from '@/src/constants/sections';
import { fadeUp, staggerContainer } from '@/src/constants/animations';

export default function ExperienceSection() {
  return (
    <Section id={SECTION_IDS.experience} title="Experience">
      <motion.div
        className="flex flex-col gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        {experience.map((exp) => (
          <motion.div key={exp.company + exp.position} variants={fadeUp}>
            <ExperienceCard
              position={exp.position}
              company={exp.company}
              url={exp.url}
              startYear={exp.startYear}
              endYear={exp.endYear}
              description={exp.description}
              technologies={exp.technologies}
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
