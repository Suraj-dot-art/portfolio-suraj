
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';


const HeroSection = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const skills = ['ReactJS Developer', 'Full Stack Engineer', 'Problem Solver', 'Creative Technologist', 'Innovation Enthusiast'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // This would trigger resume download
    console.log('Download resume');
    const link = document.createElement('a');
    link.href = '/Suraj_Divekar.pdf'; // ✅ Correct path if file is directly in public folder
    link.download = 'Suraj_Divekar_Resume.pdf'; // ✅ Desired download file name

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            Hey, I'm{' '}
            <span className="gradient-text">Suraj</span>
          </h1>
          
          <div className="text-2xl md:text-4xl font-medium text-muted-foreground h-16 flex items-center justify-center">
            <span>I'm a </span>
            <span className="ml-3 gradient-text font-bold min-w-[300px] text-left">
              {skills[currentSkillIndex]}
            </span>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I build impactful web experiences and turn creative ideas into powerful digital products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all"
            >
              See My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={downloadResume}
              className="px-8 py-6 text-lg font-semibold glass-card hover:bg-primary/10 transform hover:scale-105 transition-all"
            >
              Download Resume
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-20 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
