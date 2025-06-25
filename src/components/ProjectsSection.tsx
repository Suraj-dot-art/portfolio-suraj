
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Background Removal SaaS',
      tagline: 'AI-powered image processing platform',
      description: 'A complete SaaS solution featuring Razorpay integration, Clerk authentication, AI-powered background removal, and MongoDB. Includes credit-based system and seamless image handling.',
      image: '/WhatsApp Image 2025-01-20 at 01.11.39_0f378ad9.jpg',
      tech: ['React', 'Node.js', 'MongoDB', 'Razorpay', 'Clerk', 'AI/ML'],
      github: 'https://github.com/Suraj-dot-art/AI-BG-REMOVAL',
      live: 'https://ai-bg-removal-sd.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'Gemini Clone',
      tagline: 'Modern AI chat interface',
      description: 'A responsive AI-powered application showcasing modern frontend development skills with clean UI/UX and seamless user interactions.',
      image: '/gemini.png',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'AI API'],
      github: 'https://github.com/Suraj-dot-art/gemini-clone',
      live: 'https://gemini-clone-demo.vercel.app',
      featured: true
    },
    {
      id: 3,
      title: 'Netflix UI Clone',
      tagline: 'Pixel-perfect streaming interface',
      description: 'Complete Netflix interface recreation with ReactJS, Redux for state management, and Firebase authentication. Fully responsive and deployed.',
      image: '/netflix.png',
      tech: ['React', 'Redux', 'Firebase', 'CSS3', 'Responsive Design'],
      github: 'https://github.com/surajdivekar/netflix-clone',
      live: 'https://netflix-clone-demo.vercel.app',
      featured: true
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      tagline: 'Cross-device shopping experience',
      description: 'Built during NoQs Digital internship - A comprehensive e-commerce platform with payment API integration and improved UX by 30%.',
      image: '/myntra.png',
      tech: ['React', 'Node.js', 'Payment APIs', 'MongoDB', 'Express'],
      github: 'https://github.com/Suraj-dot-art/functional-myntra-clone',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and creative problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <Card 
              key={project.id}
              className={`glass-card overflow-hidden group cursor-pointer transition-all duration-500 ${
                hoveredProject === project.id ? 'scale-105 shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-primary font-medium mb-3">{project.tagline}</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project) => (
            <Card key={project.id} className="glass-card group hover:scale-105 transition-transform">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-primary font-medium mb-3">{project.tagline}</p>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
