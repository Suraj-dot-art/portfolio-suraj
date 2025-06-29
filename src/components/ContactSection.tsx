
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Youtube } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const downloadResume = () => {
    // This would trigger resume download
    console.log('Download resume');
    const link = document.createElement('a');
    link.href = '/Suraj_bhai.pdf'; // ✅ Correct path if file is directly in public folder
    link.download = 'Suraj_Divekar_Resume.pdf'; // ✅ Desired download file name

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's build something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
<form
  action="https://formspree.io/f/xpwrolgz" // Replace with your actual Formspree link
  method="POST"
  className="space-y-6"
>
  <Input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="h-12 text-base"
  />
  <Input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="h-12 text-base"
  />
  <Textarea
    name="message"
    placeholder="Your Message"
    required
    rows={6}
    className="text-base resize-none"
  />
  <Button type="submit" className="w-full h-12 text-base font-semibold">
    Send Message
  </Button>
</form>

            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:surajdivekarsd27@gmail.com" className="text-primary hover:underline">
                      surajdivekarsd27@gmail.com
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+917058032734" className="text-primary hover:underline">
                      +91 7058032734
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-6">Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Download my resume to learn more about my experience and skills
                </p>
                <Button onClick={downloadResume} size="lg" className="w-full">
                  Download Resume
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Follow Me</h3>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" size="icon" asChild className="h-12 w-12">
                    <a href="https://github.com/Suraj-dot-art" target="_blank" rel="noopener noreferrer">
                      <Github className="h-6 w-6" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="h-12 w-12">
                    <a href="https://github.com/Suraj-dot-art" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="h-12 w-12">
                    <a href="https://leetcode.com/u/surajdivekarsd27/" target="_blank" rel="noopener noreferrer">
                      <Youtube className="h-6 w-6" />
                    </a>
                  </Button>
                </div>
                <div className="mt-6 text-center text-sm text-muted-foreground">
                  <p>Let's connect and build something amazing together!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
