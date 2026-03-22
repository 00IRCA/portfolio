'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Props {
  width: number;
  height: number;
  src: string;
  alt: string;
}

export default function InteractiveImage({ width, height, src, alt }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -20, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay: 0.4 },
        scale: { duration: 0.6, delay: 0.4 },
        y: { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
      }}
    >
      <Image width={width} height={height} alt={alt} src={src} />
    </motion.div>
  );
}
