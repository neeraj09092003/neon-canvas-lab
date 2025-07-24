import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Coffee, Gamepad2, Music, Camera, Rocket } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const passions = [
    { icon: Heart, title: "UI/UX Design", description: "Passionate about creating beautiful, intuitive interfaces" },
    { icon: Coffee, title: "Late Night Coding", description: "Best ideas come after midnight with endless coffee" },
    { icon: Gamepad2, title: "Gaming", description: "Drawing inspiration from game design and interactions" },
    { icon: Music, title: "Electronic Music", description: "Beats that fuel creativity and focus sessions" },
    { icon: Camera, title: "Digital Art", description: "Creating visual stories through modern design" },
    { icon: Rocket, title: "Innovation", description: "Always exploring cutting-edge technologies" }
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

  const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="about" ref={ref} className="py-20 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a frontend developer who believes in pushing creative boundaries. 
            Every project is an opportunity to create something extraordinary that 
            combines cutting-edge technology with stunning visual design.
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                  My Journey
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Started as a curious developer fascinated by animations and interactions. 
                  Over the years, I've specialized in creating immersive web experiences 
                  that blur the line between websites and digital art.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring new design trends, 
                  experimenting with creative animations, or diving deep into the 
                  latest frontend technologies.
                </p>
              </div>
              <div className="space-y-4">
                <div className="glass p-4 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-neon-green rounded-full pulse-glow"></div>
                    <span className="text-foreground">Currently crafting at TechCorp</span>
                  </div>
                </div>
                <div className="glass p-4 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full pulse-glow"></div>
                    <span className="text-foreground">5+ years of frontend magic</span>
                  </div>
                </div>
                <div className="glass p-4 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent rounded-full pulse-glow"></div>
                    <span className="text-foreground">50+ creative projects delivered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Passions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {passions.map((passion, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group"
            >
              <motion.div
                className="glass p-6 rounded-2xl relative overflow-hidden cursor-pointer border border-transparent hover:border-primary/30 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: "var(--glow-primary)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow-primary transition-all duration-300"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <passion.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {passion.title}
                  </h3>
                  
                  <p className="text-muted-foreground group-hover:text-muted-foreground/90 transition-colors duration-300">
                    {passion.description}
                  </p>
                </div>

                {/* Hover Effect Particles */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${20 + i * 20}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;