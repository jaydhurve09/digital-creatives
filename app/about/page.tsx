'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-8">About Digital Creatives</h1>
          
          <div className="prose prose-sm md:prose-lg dark:prose-invert mx-auto">
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              Digital Creatives is a forward-thinking digital agency dedicated to transforming ideas into 
              exceptional digital experiences. Our team of passionate professionals combines creativity 
              with technical expertise to deliver solutions that make a difference.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 my-8 md:my-12">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses with innovative digital solutions that drive growth, 
                  enhance user experience, and create lasting impact in the digital world.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading creative force in digital transformation, setting new 
                  standards in web development, mobile solutions, and creative design.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>✨ Innovative Solutions: We stay ahead of the curve with cutting-edge technologies</li>
              <li>🤝 Client-Centric Approach: Your success is our priority</li>
              <li>💡 Creative Excellence: We turn complex challenges into elegant solutions</li>
              <li>🚀 Proven Track Record: Consistent delivery of high-quality projects</li>
            </ul>

            <div className="mt-8 md:mt-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Process</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {[
                  {
                    title: "Discovery",
                    description: "Understanding your needs and objectives"
                  },
                  {
                    title: "Creation",
                    description: "Designing and developing your solution"
                  },
                  {
                    title: "Delivery",
                    description: "Launching and supporting your project"
                  }
                ].map((step, index) => (
                  <div key={step.title} className="bg-card p-6 rounded-xl border border-border">
                    <div className="text-2xl font-bold mb-2">{`0${index + 1}`}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
