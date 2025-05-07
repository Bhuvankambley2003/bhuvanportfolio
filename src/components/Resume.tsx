import { motion } from "framer-motion";
import { Award, Building2, Calendar, ChevronRight, Download, Link as LinkIcon, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// import { ThemeToggle } from "@/components/theme-toggle";

const Resume = () => {
  // Experience data
  const experiences = [
    {
      title: "SDE Intern",
      subtitle: "Vegam Solutions Delaware",
      period: "2025 - Present",
      description: "Led the end-to-end development of StockForge, an advanced cloud-based full-stack solution for inventory management, utilizing Django, AWS, and PostgreSQL. Achieved annual time savings of ≈250 man-hours."
    },
    {
      title: "Machine Learning Intern",
      subtitle: "Dotch Endeavours pvt ltd",
      period: "Oct - Nov 2023",
      description: "Spearheaded the development of a Parkinson's disease prediction algorithm, leveraging neural networks and TensorFlow, achieving 92% accuracy. Supported departmental needs while gaining foundational knowledge in Scikit-learn. Utilized version control (Git) for code management and collaborated effectively using GitHub."
    }
  ];

  // Education data
  const education = [
    {
      title: "BE in Computer Science",
      subtitle: "The National Institute of Engineering Mysuru",
      period: "2021 - 2025",
      description: "Specialized in Cloud Technologies, Machine Learning, and Full Stack Development beyond academic coursework."
    },
    {
      title: "Class 5 - Class 12",
      subtitle: "Sri Vidya Kendra",
      period: "2014 - 2021",
      description: "Studied CBSE board with a focus on Mathematics, Science and Computer Science."
    }
  ];

  // Skills data
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 9 },
        { name: "C++", level: 8 },
        { name: "C", level: 8 },
        { name: "Java", level: 7 }
      ]
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "MySQL", level: 8 },
        { name: "Firebase", level: 7 },
        { name: "MongoDB", level: 7 },
        { name: "PostgreSQL", level: 8 },
        { name: "Django", level: 8 },
        { name: "RESTful APIs", level: 8 }
      ]
    },
    {
      title: "Tools & Cloud",
      skills: [
        { name: "VS Code", level: 9 },
        { name: "SnowFlake", level: 7 },
        { name: "Postman", level: 8 },
        { name: "Git/GitHub", level: 8 },
        { name: "Docker", level: 7 },
        { name: "AWS", level: 7 }
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Machine Learning", level: 8 },
        { name: "PyTorch", level: 7 },
        { name: "TensorFlow", level: 8 },
        { name: "Data Analysis", level: 8 }
      ]
    }
  ];

  // Certifications data
  const certifications = [
    {
      title: "AWS Knowledge: Architecting",
      issuer: "Amazon Web Services",
      date: "2025",
      description: "Cloud architecture fundamentals and best practices on AWS platform."
    },
    {
      title: "IBM Data Analysis",
      issuer: "IBM",
      date: "2024",
      description: "Professional data analysis techniques and tools certified by IBM."
    },
    {
      title: "Google Data Data Everywhere",
      issuer: "Google",
      date: "2023",
      description: "Data analytics fundamentals and practices by Google."
    }
  ];

  // Achievements data
  const achievements = [
    // {
    //   title: "Google CodeJam Finalist",
    //   description: "Reached the final round of Google's global coding competition, demonstrating exceptional problem-solving skills and algorithmic thinking."
    // },
    // {
    //   title: "Open Source Contributor",
    //   description: "Active contributor to several open-source projects, including contributions to Django and TensorFlow libraries."
    // },
    {
      title: "Runner-up in National Level Hackathon 2024",
      description: "Competing among 70 teams in PES Mandya, we designed the Groupie app, which featured real-time chat for doubt solving, file sharing, and a scheduling calendar."
    }
  ];

  // Component for About Me section
  // AboutMeSection component
// AboutMeSection component
// AboutMeSection component
const AboutMeSection = () => {
  const aboutMeData = {
    name: "Bhuvan Kambley",
    title: "Computer Science Engineer",
    bio: "I'm **Bhuvan Kambley**, a highly driven **Full-Stack Developer** with a deep curiosity for Machine Learning and Artificial Intelligence. Currently pursuing my Bachelor's degree in Computer Science and Engineering at the National Institute of Engineering, Mysuru. I bring together academic excellence with hands-on industry experience across software engineering and intelligent systems.\n\nAt Vegam Solutions, I’m developing **StockForge**—a cloud-based solution designed to streamline inventory and production management for manufacturing enterprises.\nI take pride in being an **enthusiastic and conscientious team player** with exceptional communication and soft skills. I am passionate about learning new skills, keeping up with emerging tech trends, and identifying the best technologies to enhance our solutions. Furthermore, I believe in giving back to society and actively participate in volunteering activities to create a positive impact.",
    image: "/bk.jpg",
    location: "Bengaluru, India",
    experience: "Intern",
    availability: "Full Time",
    website: "https://bhuvankambley-portfolio.vercel.app",
  };

  return (
    <div className="glass p-8 rounded-2xl mb-16 bg-foreground/[0.02] border border-foreground/10 backdrop-blur-sm w-full">
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center md:items-start ">
        {/* Left Side - Bio and Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col flex-1"
        >
          <h1 className="heading-md text-4xl font-medium tracking-tight ">
            <span className="mr-6">01.</span>About Me
          </h1>          
          {/* <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            viewport={{ once: true }}
            className="w-28 h-1 bg-gradient-to-r from-accent to-accent/50 md:mx-0 rounded-full mb-6 origin-left"
          /> */}
          <div className="subtitle mb-6"></div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div 
              className="text-foreground/80 leading-relaxed text-default text-center md:text-left"
              dangerouslySetInnerHTML={{ 
                __html: aboutMeData.bio
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
                  .replace(/\n\n/g, '<br /><br />') 
              }}
            />
          
            {/* Right Side - Profile Photo - Moved inside the content area */}
            <motion.div 
              className="flex-shrink-0 relative mb-8 md:mb-0 mt-4 md:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div 
                className="w-60 h-85   relative z-10 overflow-hidden rounded-md shadow-xl bg-gradient-to-br from-accent/5 to-accent/30 p-1 transition-all duration-300 hover:shadow-accent/20 hover:shadow-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full overflow-hidden rounded-md">
                  <img 
                    src={aboutMeData.image} 
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
              {/* <motion.div 
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
              /> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};


  // ResumeSection component
  const ResumeSection = ({ title, children }: { title: string, children: React.ReactNode }) => {
    return (
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-24 max-w-2xl mx-auto"
        id="ResumeSection"
      >
        
        <div className="flex flex-col items-center mb-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display mt-4"
          >
            <span className="mr-6"></span>{title}
          </motion.h2>
          {/* <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto rounded-full mb-6 origin-left"
          /> */}
        </div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {children}
        </motion.div>
      </motion.section>
    );
  };

  // TimelineItem component
  const TimelineItem = ({ title, subtitle, period, description, index, icon }: { 
    title: string, 
    subtitle: string, 
    period: string, 
    description: string, 
    index: number,
    icon?: React.ReactNode
  }) => {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.1,
          ease: [0.22, 1, 0.36, 1]
        }}
        viewport={{ once: true }}
        className="group bg-secondary/30 hover:bg-secondary/60 rounded-xl p-8 transition-all duration-500"
      >
        <div className="flex flex-col space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-medium text-xl tracking-tight group-hover:text-primary transition-colors duration-300 text-left">{title}</h3>
              <div className="flex items-center mt-1 text-primary/80 font-medium">
                {/* {icon || <Building2 className="w-4 h-4 mr-2 opacity-70" />} */}
                <span>{subtitle}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 bg-primary/5 text-sm text-foreground/70 px-3 py-1.5 rounded-full">
              <Calendar className="w-3.5 h-3.5 mr-1 opacity-70" />
              <span>{period}</span>
            </div>
          </div>
          
          <p className="text-foreground/70 text-sm leading-relaxed group-hover:text-foreground/90 transition-colors duration-300 text-left">{description}</p>
          
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center text-sm text-primary/80 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {/* <span className="mr-1">Learn more</span> */}
            {/* <ChevronRight className="w-4 h-4" /> */}
          </motion.div>
        </div>
      </motion.div>
    );
  };

  // SkillCategory component
  const SkillCategory = ({ title, skills, index }: { 
    title: string, 
    skills: { name: string, level: number }[], 
    index: number 
  }) => {
    return (
      <motion.div 
        className="bg-foreground/[0.02] border border-foreground/5 p-6 rounded-xl backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.1,
          ease: [0.22, 1, 0.36, 1]
        }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg font-semibold mb-4 text-center">{title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx}
              className="text-xs md:text-sm font-medium text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.3, 
                delay: 0.1 + idx * 0.05,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium  rounded-lg inline-block min-w-[120px]">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  // AchievementCard component
  const AchievementCard = ({ title, issuer, date, description, index }: { 
    title: string, 
    issuer?: string, 
    date?: string, 
    description?: string, 
    index: number 
  }) => {
    return (
      <motion.div 
        className="glass p-6 rounded-xl flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.1,
          ease: [0.22, 1, 0.36, 1]
        }}
        viewport={{ once: true }}
      >
        <div className="bg-primary/10 rounded-full p-3 h-fit">
          <Award className="text-primary w-6 h-6" />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          {(issuer || date) && (
            <div className="flex flex-wrap gap-2 text-sm text-foreground/70 mb-2">
              {issuer && <span>{issuer}</span>}
              {issuer && date && <span>•</span>}
              {date && <span>{date}</span>}
            </div>
          )}
          {description && <p className="text-sm text-foreground/70">{description}</p>}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Change max-w-7xl to max-w-6xl to reduce the main container width */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="py-16 md:py-24 text-center"
        >
        </motion.div>
        <motion.span 
                    initial={{ opacity: 0, scale: 0.9 }}  
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="inline-block px-3 py-1 text-xs font-medium tracking-wider bg-blue-500/10 text-accent uppercase rounded-full bg-accent/10 mb-4"
                  >
                    Resume
        </motion.span>
        {/* Change max-w-5xl to max-w-4xl for the content container */}
        <div className="max-w-4xl mx-auto">
          <AboutMeSection />

          <ResumeSection title="Experience">
            <Card className="p-6 bg-foreground/[0.02] border border-foreground/10 shadow-lg rounded-2xl backdrop-blur-sm">
              <div className="space-y-8">
                {experiences.map((experience, index) => (
                  <TimelineItem 
                    key={index}
                    title={experience.title}
                    subtitle={experience.subtitle}
                    period={experience.period}
                    description={experience.description}
                    index={index}
                  />
                ))}
              </div>
            </Card>
          </ResumeSection>

          <ResumeSection title="Education">
            <Card className="p-6 bg-foreground/[0.02] border border-foreground/10 shadow-lg rounded-2xl backdrop-blur-sm">
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <TimelineItem 
                    key={index}
                    title={edu.title}
                    subtitle={edu.subtitle}
                    period={edu.period}
                    description={edu.description}
                    index={index}
                  />
                ))}
              </div>
            </Card>
          </ResumeSection>

          <ResumeSection title="Skills">
            <Card className="p-6 bg-foreground/[0.02] border border-foreground/10 shadow-lg rounded-2xl backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories.map((category, index) => (
                  <SkillCategory 
                    key={index}
                    title={category.title}
                    skills={category.skills}
                    index={index}
                  />
                ))}
              </div>
            </Card>
          </ResumeSection>

          <ResumeSection title="Certifications">
            <Card className="p-6 bg-foreground/[0.02] border border-foreground/10 shadow-lg rounded-2xl backdrop-blur-sm">
              <div className="space-y-8">
                <TimelineItem
                  title="AWS Knowledge: Architecting"
                  subtitle="Amazon Web Services"
                  period="2025"
                  description="Cloud architecture fundamentals and best practices on AWS platform."
                  index={0}
                  // icon={<Award size={14} />}
                />
                
                <TimelineItem
                  title="IBM Data Analysis"
                  subtitle="IBM"
                  period="2024"
                  description="Professional data analysis techniques and tools certified by IBM."
                  index={1}
                  // icon={<Award size={14} />}
                />
                
                <TimelineItem
                  title="Google Data Data Everywhere"
                  subtitle="Google"
                  period="2023"
                  description="Data analytics fundamentals and practices by Google."
                  index={2}
                  // icon={<Award size={14} />}
                />
                
                <div className="mt-10 flex justify-center">
                  <Button
                    variant="outline"
                    className="rounded-full gap-2 font-medium hover:bg-accent/10 hover:text-accent border-accent/20 transition-colors mb-8"
                    onClick={() => window.open("https://www.credly.com/users/bhuvan-kambley", "_blank")}
                  >
                    {/* <Award size={18} /> */}
                    View All Badges on Credly
                  </Button>
                </div>
              </div>
            </Card>
          </ResumeSection>

          <ResumeSection title="Achievements">
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={index}
                  title={achievement.title}
                  description={achievement.description}
                  index={index}
                />
              ))}
            </div>
          </ResumeSection>
        </div>
      </div>
    </div>
  );
};

export default Resume;