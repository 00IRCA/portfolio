'use client';

import { motion } from 'framer-motion';
import { projects } from '@/src/data/projects';
import ProjectCard from '../ui/ProjectCard';
import Section from '../ui/Section';
import { SECTION_IDS } from '@/src/constants/sections';
import { fadeUp, staggerContainer } from '@/src/constants/animations';

export default function ProjectsSection() {
  return (
    <Section id={SECTION_IDS.projects} title="Projects">
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={fadeUp}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
