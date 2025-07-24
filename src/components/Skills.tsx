import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Zap, Database, Globe, Sparkles } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "primary",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript ES6+", level: 95 },
        { name: "Vue.js", level: 80 }
      ]
    },
    {
      title: "Animation & Motion",
      icon: Zap,
      color: "accent",
      skills: [
        { name: "Framer Motion", level: 90 },
        { name: "GSAP", level: 85 },
        { name: "CSS Animations", level: 95 },
        { name: "Three.js", level: 75 }
      ]
    },
    {
      title: "Design & UI",
      icon: Palette,
      color: "neon-pink",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe Creative Suite", level: 80 },
        { name: "UI/UX Design", level: 88 },
        { name: "Design Systems", level: 92 }
      ]
    },
    {
      title: "Backend & Tools",
      icon: Database,
      color: "neon-cyan",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "PostgreSQL", level: 78 },
        { name: "Git/GitHub", level: 95 }
      ]
    }
  ];

  const technologies = [
    "React", "TypeScript", "Next.js", "Vue.js", "Framer Motion", "GSAP", 
    "Three.js", "WebGL", "Tailwind CSS", "Styled Components", "GraphQL", 
    "Node.js", "Python", "Figma", "Adobe XD", "Git", "Docker", "AWS"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        delay: 0.5
      }
    })
  };

  return (
    <section ref={ref} className="py-20 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-56 h-56 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-pink/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for creating immersive digital experiences, 
            from cutting-edge animations to robust full-stack applications.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-3xl p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-primary group-hover:shadow-glow-primary transition-all duration-300`}
                    whileHover={{ rotate: 10, scale: 1.05 }}
                  >
                    <category.icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-muted-foreground text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-primary rounded-full relative"
                          variants={progressVariants}
                          custom={skill.level}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-secondary opacity-5"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Sparkles className="w-6 h-6 text-accent" />
              <h3 className="text-2xl md:text-3xl font-bold text-center gradient-text">
                Technology Stack
              </h3>
              <Globe className="w-6 h-6 text-accent" />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="px-4 py-2 bg-secondary/50 hover:bg-gradient-primary hover:text-primary-foreground rounded-2xl text-sm font-medium transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/30"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "var(--glow-primary)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: 0.6 + index * 0.05,
                      duration: 0.5 
                    }
                  } : { opacity: 0, y: 20 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-accent/30 rounded-full"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;