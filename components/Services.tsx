'use client';

import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications, responsive websites, and e-commerce solutions using cutting-edge technologies.',
    icon: '/icons/web-dev.svg',
  },
  {
    title: 'Android Development',
    description: 'Native and cross-platform mobile applications with intuitive user interfaces and robust functionality.',
    icon: '/icons/android-dev.svg',
  },
  {
    title: 'Graphic Design',
    description: 'Eye-catching visuals, branding materials, and user interface designs that capture your brand essence.',
    icon: '/icons/graphic-design.svg',
  },
  {
    title: 'Content Creation',
    description: 'Engaging content strategy, copywriting, and multimedia content to tell your brand story effectively.',
    icon: '/icons/content-creation.svg',
  },
];

export default function Services() {
  return (
    <section className="py-16 md:py-20 bg-transparent" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            We offer comprehensive digital solutions to help your business thrive in the digital age.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
