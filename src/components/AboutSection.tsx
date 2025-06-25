
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AboutSection = () => {
  const timelineData = [
    {
      year: '2021',
      title: 'Started College Journey',
      description: 'Began B.E. in Computer Engineering at AISSMS IOIT, Pune',
      type: 'education'
    },
    {
      year: '2024',
      title: 'First Internship',
      description: 'Web Developer Intern at NoQs Digital - Built cross-device e-commerce platform',
      type: 'work'
    },
    {
      year: '2025',
      title: 'Frontend Specialist',
      description: 'Frontend Developer Intern at AdXpert - Led major frontend modules development',
      type: 'work'
    },
    {
      year: '2025',
      title: 'Current Focus',
      description: 'Building SaaS products and exploring System Design & Advanced Data Structures',
      type: 'present'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate developer from Pune, India, on a mission to create meaningful digital experiences
          </p>
        </div>

        <Tabs defaultValue="overview" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-12">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="passion">Passion</TabsTrigger>
            <TabsTrigger value="fun-facts">Fun Facts</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Hey there! 👋</h3>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  I'm Suraj Divekar, a creative technologist and software developer who loves turning ideas into reality. 
                  Currently pursuing my B.E. in Computer Engineering at AISSMS IOIT, Pune.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  With hands-on experience in full-stack development, I've contributed to production-level applications 
                  and built several impactful projects. I'm passionate about clean code, user experience, and the 
                  intersection of technology and creativity.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education" className="space-y-8">
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Educational Journey</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold">B.E. Computer Engineering (2021 - 2025)</h4>
                    <p className="text-primary font-medium">AISSMS IOIT, Pune</p>
                    <p className="text-muted-foreground">CGPA - 8.2/10</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Higher Secondary</h4>
                    <p className="text-primary font-medium">Kendriya Vidyalaya, Lonavala</p>
                    <p className="text-muted-foreground">Percentage - 91.8%</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Senior Secondary</h4>
                    <p className="text-primary font-medium">Kendriya Vidyalaya, Lonavala</p>
                    <p className="text-muted-foreground">Percentage - 85.4%</p>
                  </div>
                  
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="passion" className="space-y-8">
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">What Drives Me</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-3">🚀 Innovation</h4>
                    <p className="text-muted-foreground">I love exploring new technologies and finding creative solutions to complex problems.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-3">💡 Entrepreneurship</h4>
                    <p className="text-muted-foreground">Passionate about startup culture and building products that make a difference.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-3">🎨 User Experience</h4>
                    <p className="text-muted-foreground">Believing that great technology should be intuitive and delightful to use.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-3">📚 Continuous Learning</h4>
                    <p className="text-muted-foreground">Currently diving deep into System Design and Advanced Data Structures.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fun-facts" className="space-y-8">
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Fun Facts About Me</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <p>☕ Coffee-driven coding sessions are my favorite</p>
                    <p>🎮 Love experimenting with game development in my free time</p>
                    <p>📱 Always exploring the latest tech trends and frameworks</p>
                  </div>
                  <div className="space-y-4">
                    <p>🏆 Competitive programming enthusiast on LeetCode</p>
                    <p>🌐 Open source contributor and community builder</p>
                    <p>🎯 Goal: Build a successful SaaS product by 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">My Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            {timelineData.map((item, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <Card className="glass-card hover:scale-105 transition-transform">
                    <CardContent className="p-6">
                      <div className="text-primary font-bold text-lg">{item.year}</div>
                      <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
