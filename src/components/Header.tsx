import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter, FileText, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-16 code-effect"
    >
      <div className="max-w-5xl w-full mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20">
        {/* Profile Photo Container */}
        <motion.div 
          className="flex-shrink-0 relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            className="w-64 h-80 md:w-80 md:h-96 relative z-10 overflow-hidden rounded-md shadow-xl bg-gradient-to-br from-accent/5 to-accent/30 p-1 transition-all duration-300 hover:shadow-accent/20 hover:shadow-2xl"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full overflow-hidden rounded-md">
              {/* Replace the placeholder URL with your actual image */}
              <img 
                src="/bhuvan.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Animated dots */}
            <div className="absolute -bottom-2 -right-2 flex gap-1">
              <div className="h-3 w-3 rounded-full bg-accent animate-pulse-soft"></div>
              <div className="h-3 w-3 rounded-full bg-accent/80 animate-pulse-soft" style={{ animationDelay: '0.3s' }}></div>
              <div className="h-3 w-3 rounded-full bg-accent/60 animate-pulse-soft" style={{ animationDelay: '0.6s' }}></div>
            </div>
          </motion.div>
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute -top-5 -left-5 w-full h-full rounded-md border-2 border-dashed border-accent/20 z-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.div 
            className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-md z-0 animate-pulse-soft"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </motion.div>
        
        {/* Text Content */}
        <motion.div 
          className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase rounded-full bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/10 text-accent"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span>Software Engineer</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-display font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hello, I'm
            </motion.span>
            <motion.span 
              className="block mt-2 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Bhuvan Kambley
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg leading-relaxed text-foreground/80 text-balance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Actively seeking full-time Full Stack/ Software Developer opportunities starting March 2025, with a passion for Full Stack Development, Machine Learning and Cloud Technologies.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                className="rounded-full gap-2 font-medium" 
                size="lg"
                onClick={() => window.open('https://drive.google.com/file/d/1ECDq5qDRqDN_U5NJ1LqLBiMEblQma3NF/view', '_blank')}
              >
                <FileText size={18} />
                Download Resume
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                variant="outline" 
                className="rounded-full gap-2 font-medium" 
                size="lg"
                onClick={() => {
                  const email = 'pbhuvankambley2003@gmail.com';
                  const subject = 'Contact from Portfolio Website';
                  const body = 'Hello Bhuvan,\n\nI visited your portfolio and would like to connect.';
                  
                  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}
              >
                <Mail size={18} />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            className="flex items-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <motion.a 
              href="https://github.com/Bhuvankambley2003" 
              className="p-2.5 rounded-full bg-foreground/5 hover:bg-accent/10 hover:text-accent transition-colors border border-foreground/10 hover:border-accent/30"
              aria-label="GitHub Profile"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Github size={20} className="text-foreground/80" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/bhuvankambley/" 
              className="p-2.5 rounded-full bg-foreground/5 hover:bg-accent/10 hover:text-accent transition-colors border border-foreground/10 hover:border-accent/30"
              aria-label="LinkedIn Profile"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Linkedin size={20} className="text-foreground/80" />
            </motion.a>
            <motion.a 
              href="https://x.com/BKambley" 
              className="p-2.5 rounded-full bg-foreground/5 hover:bg-accent/10 hover:text-accent transition-colors border border-foreground/10 hover:border-accent/30"
              aria-label="Twitter Profile"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Twitter size={20} className="text-foreground/80" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <span className="text-sm text-foreground/60 mb-2">Scroll Down</span>
        <ArrowDown size={20} className="text-foreground/60" />
      </motion.div>
    </section>
  );
};

export default Header;