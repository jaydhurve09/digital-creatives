'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">Digital Creatives</h3>
            <p className="text-muted-foreground text-sm">
              Transforming ideas into exceptional digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/#services" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">Android Development</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">Graphic Design</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">Content Creation</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold">Contact Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: info@digitalcreatives.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Creative Street, Digital City</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground"
        >
          <p>&copy; {new Date().getFullYear()} Digital Creatives. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
