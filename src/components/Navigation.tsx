
import { useState, useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="font-mono font-bold text-xl gradient-text">
          &lt;SD /&gt;
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('about')} className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-foreground/80 hover:text-foreground transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection('experience')} className="text-foreground/80 hover:text-foreground transition-colors">
            Experience
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/Suraj-dot-art" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="c" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
