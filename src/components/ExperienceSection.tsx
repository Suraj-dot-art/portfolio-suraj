
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'AdXpert',
      role: 'Frontend Developer Intern',
      period: 'Jan 2024 - Jun 2024',
      location: 'Remote',
      achievements: [
        'Full ownership of major frontend modules using React and TailwindCSS',
        'Implemented dynamic rendering and lazy loading optimizations',
        'Contributed 1500+ lines of production-ready code',
        'Collaborated with cross-functional teams to deliver pixel-perfect designs'
      ],
      tech: ['React', 'TailwindCSS', 'JavaScript', 'Git', 'Team Collaboration'],
      logo: '🚀'
    },
    {
      company: 'NoQs Digital',
      role: 'Web Developer Intern',
      period: 'Jun 2023 - Dec 2023',
      location: 'Pune, India',
      achievements: [
        'Built cross-device e-commerce platform from ground up',
        'Integrated payment APIs for seamless transaction processing',
        'Improved overall user experience by 30% through optimization',
        'Developed responsive designs ensuring cross-browser compatibility'
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Payment APIs', 'E-commerce'],
      logo: '💼'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey building real-world applications and solving complex problems
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary/20 md:left-1/2 md:transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-12 md:flex md:items-center ${
              index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
            }`}>
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background md:left-1/2 md:transform md:-translate-x-1/2 z-10"></div>
              
              <div className={`ml-16 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <Card className="glass-card hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="text-4xl">{exp.logo}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                        <h4 className="text-xl text-primary font-semibold mb-2">{exp.company}</h4>
                        <div className="flex flex-wrap gap-2 text-muted-foreground text-sm">
                          <span>{exp.period}</span>
                          <span>•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Current Learning Section */}
        <div className="mt-20">
          <Card className="glass-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                📚 Currently Learning
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Continuously expanding my skillset with cutting-edge technologies
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['System Design', 'Advanced DSA', 'Microservices', 'Cloud Architecture', 'DevOps'].map((skill) => (
                  <Badge key={skill} variant="outline" className="px-4 py-2 text-sm font-medium">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
