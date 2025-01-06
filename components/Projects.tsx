'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: '/projects/ecommerce.jpg',
    description: 'A modern e-commerce platform built with Next.js and Stripe integration.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    link: '#',
    completed: '2024'
  },
  {
    title: 'Health & Fitness App',
    category: 'Mobile Development',
    image: '/projects/fitness.jpg',
    description: 'Cross-platform mobile app for fitness tracking and workout planning.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    link: '#',
    completed: '2024'
  },
  {
    title: 'Corporate Branding',
    category: 'Graphic Design',
    image: '/projects/branding.jpg',
    description: 'Complete brand identity design for a tech startup.',
    technologies: ['Adobe Creative Suite', 'Figma', 'Brand Strategy'],
    link: '#',
    completed: '2024'
  },
  {
    title: 'AI Content Platform',
    category: 'Web Development',
    image: '/projects/ai-platform.jpg',
    description: 'AI-powered content generation and management platform.',
    technologies: ['Python', 'React', 'OpenAI API', 'AWS'],
    link: '#',
    completed: '2024'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Our Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore our portfolio of innovative digital solutions and creative works.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-sm bg-gray-800 text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Link
                      href={project.link}
                      className="text-blue-500 hover:text-blue-400 font-medium transition-colors"
                    >
                      View Project →
                    </Link>
                    <span className="text-gray-500 text-sm">
                      Completed in {project.completed}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
