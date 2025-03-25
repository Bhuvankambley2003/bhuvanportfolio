import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, ArrowRight, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <AnimatedSection id="contact" className="py-20 px-6 relative code-effect">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-accent uppercase rounded-full bg-accent/10 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Contact
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Say Hello👋
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto text-balance"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I'm currently available for full-time positions. If you have a project that needs coding or a team that needs a developer, feel free to reach out.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="glass-card rounded-2xl p-8 shadow-lg overflow-hidden relative"
              whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 overflow-hidden z-[-1]">
                <div className="absolute inset-0 bg-gradient-radial from-accent/5 to-transparent opacity-60"></div>
              </div>
              
              <motion.h3 
                className="text-xl font-display font-bold mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Send Me a Message
              </motion.h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="Your name"
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="Your email"
                    />
                  </motion.div>
                </div>
                
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="Subject"
                  />
                </motion.div>
                
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none"
                    placeholder="Your message"
                  ></motion.textarea>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      type="submit"
                      className="w-full py-6 flex items-center justify-center gap-2 text-white dark:text-black font-medium rounded-lg group"
                    >
                      <span>Send Message</span>
                      <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-2 flex flex-col space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="glass-card rounded-2xl p-8 flex-1 shadow-lg"
              whileHover={{ boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.h3 
                className="text-lg md:text-xl font-display font-bold mb-5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Contact Information
              </motion.h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-lg bg-accent/10 flex items-center justify-center text-accent"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--accent), 0.2)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Mail size={18} />
                  </motion.div>
                  <div className="flex-1 text-left">
                    <p className="text-xs md:text-sm text-foreground/60 mb-1">Email</p>
                    <a 
                      href="mailto:pbhuvankambley2003@gmail.com" 
                      className="text-sm md:text-lg text-foreground font-medium hover:text-accent transition-colors break-words"
                    >
                      pbhuvankambley2003@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4 text-left"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-lg bg-accent/10 flex items-center justify-center text-accent"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--accent), 0.2)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Phone size={18} />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-xs md:text-sm text-foreground/60 mb-1">Phone</p>
                    <a 
                      href="tel:+919110260591" 
                      className="text-sm md:text-lg text-foreground font-medium hover:text-accent transition-colors"
                    >
                      +91 9110260591
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.55 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-lg bg-accent/10 flex items-center justify-center text-accent"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--accent), 0.2)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <MapPin size={18} />
                  </motion.div>
                  <div className="flex-1 text-left">
                    <p className="text-xs md:text-sm text-foreground/60 mb-1">Location</p>
                    <p className="text-sm md:text-lg text-foreground font-medium">Bengaluru, India</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-8 pt-6 border-t border-foreground/5 display-flex"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-xs md:text-sm text-foreground/60 mb-4">Find me on social media</p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full invisible"
                    aria-hidden="true"
                  ></a>
                  <a
                    href="#"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full invisible"
                    aria-hidden="true"
                  ></a>
                  
                  <motion.a 
                    href="https://github.com/Bhuvankambley2003" 
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-foreground/5 hover:bg-accent/10 hover:text-accent flex items-center justify-center transition-colors border border-foreground/10"
                    aria-label="GitHub Profile"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Github size={16} />
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/bhuvankambley/" 
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-foreground/5 hover:bg-accent/10 hover:text-accent flex items-center justify-center transition-colors border border-foreground/10"
                    aria-label="LinkedIn Profile"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Linkedin size={16} />
                  </motion.a>
                  <motion.a 
                    href="https://x.com/BKambley" 
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-foreground/5 hover:bg-accent/10 hover:text-accent flex items-center justify-center transition-colors border border-foreground/10"
                    aria-label="Twitter Profile"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Twitter size={16} />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="glass-card rounded-2xl p-8 bg-gradient-to-br from-accent to-blue-600 text-white shadow-lg overflow-hidden relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
            >
              <div className="absolute top-0 right-0 opacity-10">
                <svg width="140" height="140" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#fff" d="M0 97.6L60 0h80v140H0z" />
                </svg>
              </div>
              
              <motion.h3 
                className="text-xl font-display font-bold mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Available for Opportunities
              </motion.h3>
              <motion.p 
                className="text-white/90 mb-6 max-w-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                viewport={{ once: true }}
              >
                I'm currently available for freelance projects and full-time positions. Let's build something amazing together.
              </motion.p>
              <motion.a 
                href="mailto:pbhuvankambley2003@gmail.com" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-accent font-medium rounded-lg hover:bg-white/90 transition-colors group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <span>Let's Talk</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;