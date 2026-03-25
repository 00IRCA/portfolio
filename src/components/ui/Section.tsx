'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/src/constants/animations';

interface Props {
  id?: string;
  title?: string;
  className?: string;
  children: ReactNode;
}

export default function Section({ id, title, className, children }: Props) {
  const sectionId = id ?? title?.toLowerCase().replace(/\s+/g, '-');
  return (
    <motion.section
      id={sectionId}
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
    >
      <div className="max-w-6xl mx-auto mb-16 md:mb-32 p-8 xl:px-0 scroll-mt-20">
        {title && (
          <div className="flex flex-col items-center mb-10 gap-3">
            <h2 className="text-3xl font-bold text-primary text-center">{title}</h2>
            <div className="h-1 w-16 rounded-full bg-primary/50" />
          </div>
        )}
        {children}
      </div>
    </motion.section>
  );
}
