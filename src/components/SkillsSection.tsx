
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
        { name: 'TypeScript', level: 85, color: 'bg-blue-500' },
        { name: 'Java', level: 80, color: 'bg-red-500' },
        { name: 'SQL', level: 75, color: 'bg-green-500' },
        { name: 'HTML5', level: 95, color: 'bg-orange-500' },
        { name: 'CSS3', level: 90, color: 'bg-blue-400' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', level: 92, color: 'bg-blue-400' },
        { name: 'Redux Toolkit', level: 85, color: 'bg-purple-500' },
        { name: 'Node.js', level: 80, color: 'bg-green-600' },
        { name: 'Express', level: 78, color: 'bg-gray-600' },
        { name: 'TailwindCSS', level: 88, color: 'bg-teal-500' },
        { name: 'Next.js', level: 75, color: 'bg-black' }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'MongoDB', level: 82, color: 'bg-green-500' },
        { name: 'Firebase', level: 80, color: 'bg-yellow-500' },
        { name: 'Git', level: 85, color: 'bg-orange-500' },
        { name: 'Clerk', level: 85, color: 'bg-purple-400' },
        { name: 'Razorpay', level: 80, color: 'bg-blue-600' },
        { name: 'Vercel', level: 90, color: 'bg-black' }
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const allSkills = skillCategories.flatMap(category => category.skills);
      setAnimatedSkills(allSkills.map((_, index) => index));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to build amazing digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={category.title} className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const globalIndex = categoryIndex * category.skills.length + skillIndex;
                    const isAnimated = animatedSkills.includes(globalIndex);
                    
                    return (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full ${skill.color} transition-all duration-1000 ease-out ${
                              isAnimated ? 'w-full' : 'w-0'
                            }`}
                            style={{ 
                              width: isAnimated ? `${skill.level}%` : '0%',
                              transitionDelay: `${globalIndex * 100}ms`
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Floating Tech Icons */}
        <div className="mt-20 relative overflow-hidden">
          <h3 className="text-2xl font-bold text-center mb-12">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'MongoDB', icon: '🍃' },
              { name: 'JavaScript', icon: '💛' },
              { name: 'TypeScript', icon: '🔷' },
              { name: 'Git', icon: '📝' },
              { name: 'Firebase', icon: '🔥' },
              { name: 'TailwindCSS', icon: '🎨' }
            ].map((tech, index) => (
              <div 
                key={tech.name} 
                className="glass-card p-4 rounded-xl hover:scale-110 transition-transform cursor-pointer animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl mb-2 text-center">{tech.icon}</div>
                <div className="text-sm font-medium text-center">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
