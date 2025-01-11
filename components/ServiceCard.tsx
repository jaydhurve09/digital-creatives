'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}

export default function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
    >
      <div className="w-12 h-12 mb-4 relative">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-contain text-white"
          style={{ fill: 'white' }}
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}
