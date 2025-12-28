'use client';

import { motion } from 'framer-motion';

export default function ProjectCard({ title, desc, year }: any) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="border-b border-zinc-200 dark:border-zinc-800 py-10"
    >
      <div className="flex justify-between items-start gap-6">
        <div>
          <h3 className="text-2xl font-medium">{title}</h3>
          <p className="mt-3 max-w-lg text-zinc-600 dark:text-zinc-400">
            {desc}
          </p>
        </div>
        <span className="text-zinc-400">{year}</span>
      </div>
    </motion.div>
  );
}
