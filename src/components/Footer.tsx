
const Footer = () => {
  return (
    <footer className="bg-muted/30 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-mono font-bold text-xl gradient-text mb-2">
              &lt;SD /&gt;
            </div>
            <p className="text-muted-foreground">
              Building the future, one line of code at a time.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © 2024 Suraj Divekar. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Made with ❤️ in Pune, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
