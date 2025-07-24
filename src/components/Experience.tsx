import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Award, ExternalLink } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      type: 'work',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Innovation',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading frontend development for cutting-edge web applications with focus on performance optimization and user experience. Built immersive interfaces serving 1M+ users.',
      achievements: [
        'Increased user engagement by 40% through animated micro-interactions',
        'Led team of 5 developers in building design system used across 10+ products',
        'Implemented WebGL-based data visualizations reducing load times by 60%'
      ],
      technologies: ['React', 'TypeScript', 'Three.js', 'Framer Motion'],
      icon: Briefcase,
      color: 'primary'
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Creative Digital Studio',
      location: 'Remote',
      period: '2020 - 2022',
      description: 'Specialized in creating award-winning websites and interactive experiences for luxury brands and startups. Focused on animation-heavy interfaces and creative problem solving.',
      achievements: [
        'Delivered 25+ premium websites with advanced animations',
        'Reduced development time by 30% through reusable component libraries',
        'Won Best Creative Website award at Web Design Conference 2021'
      ],
      technologies: ['Vue.js', 'GSAP', 'WebGL', 'Node.js'],
      icon: Briefcase,
      color: 'accent'
    },
    {
      type: 'education',
      title: 'Master of Computer Science',
      company: 'Stanford University',
      location: 'Stanford, CA',
      period: '2018 - 2020',
      description: 'Specialized in Human-Computer Interaction and Computer Graphics. Thesis on "Interactive Data Visualization using WebGL and Machine Learning".',
      achievements: [
        'GPA: 3.9/4.0, Summa Cum Laude',
        'Published 3 papers on interactive web technologies',
        'Teaching Assistant for Advanced Web Development course'
      ],
      technologies: ['Computer Graphics', 'Machine Learning', 'HCI', 'Research'],
      icon: GraduationCap,
      color: 'neon-pink'
    },
    {
      type: 'work',
      title: 'Junior Web Developer',
      company: 'StartupLab Inc.',
      location: 'New York, NY',
      period: '2017 - 2018',
      description: 'First professional role where I discovered my passion for frontend development and creative coding. Built responsive websites and learned the fundamentals of user experience design.',
      achievements: [
        'Developed company\'s first mobile-responsive website',
        'Increased mobile conversion rates by 25%',
        'Contributed to open-source animation library with 1k+ stars'
      ],
      technologies: ['JavaScript', 'CSS3', 'jQuery', 'Bootstrap'],
      icon: Briefcase,
      color: 'neon-cyan'
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Science',
      company: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      period: '2013 - 2017',
      description: 'Foundation in computer science fundamentals with focus on software engineering and web technologies. Active in hackathons and coding competitions.',
      achievements: [
        'Dean\'s List for 6 consecutive semesters',
        'Won 1st place at Cal Hacks 2016 for VR web application',
        'President of Web Development Club'
      ],
      technologies: ['Java', 'Python', 'Data Structures', 'Algorithms'],
      icon: GraduationCap,
      color: 'neon-green'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section ref={ref} className="py-20 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Journey & Milestones
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From student to senior developer, each step has shaped my passion 
            for creating exceptional digital experiences and pushing creative boundaries.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow-primary"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <exp.icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-20 md:ml-0`}>
                  <motion.div
                    className="glass rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
                    whileHover={{ 
                      scale: 1.02, 
                      y: -5,
                      boxShadow: "var(--glow-primary)"
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {exp.title}
                          </h3>
                          {exp.type === 'work' && (
                            <Award className="w-5 h-5 text-accent flex-shrink-0 ml-2" />
                          )}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-accent">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-lg border border-border/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <motion.div
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink className="w-5 h-5 text-primary" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 glass rounded-3xl p-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-secondary opacity-5"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">1M+</div>
              <div className="text-muted-foreground">Users Impacted</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">3</div>
              <div className="text-muted-foreground">Awards Won</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;