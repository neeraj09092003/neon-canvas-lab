import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Filter, X, Play } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['all', 'web app', 'animation', 'ui/ux', 'experimental'];

  const projects = [
    {
      id: 1,
      title: "Neural Network Visualizer",
      description: "Interactive 3D visualization of neural networks with real-time data flow animations",
      category: "experimental",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80",
      tags: ["Three.js", "React", "WebGL", "Animation"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 2,
      title: "Cyberpunk Dashboard",
      description: "Futuristic admin dashboard with neon aesthetics and smooth micro-interactions",
      category: "web app",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800&q=80",
      tags: ["React", "TypeScript", "Framer Motion", "Charts"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 3,
      title: "Particle Symphony",
      description: "Audio-reactive particle system that creates visual music experiences",
      category: "animation",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      tags: ["Canvas", "Web Audio API", "GSAP", "Particles"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 4,
      title: "Glass Morphism Components",
      description: "Beautiful component library featuring modern glassmorphism design patterns",
      category: "ui/ux",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80",
      tags: ["CSS", "Design System", "Components", "Figma"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 5,
      title: "AI Chat Interface",
      description: "Conversational UI with advanced animations and natural language processing",
      category: "web app",
      image: "https://images.unsplash.com/photo-1676277791608-ac54c2c2eecf?w=800&q=80",
      tags: ["Next.js", "AI", "WebSocket", "Animation"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 6,
      title: "Holographic Portfolio",
      description: "Experimental portfolio featuring holographic effects and 3D interactions",
      category: "experimental",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      tags: ["Three.js", "Shaders", "WebXR", "Innovation"],
      github: "#",
      live: "#",
      featured: false
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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

  const projectVariants = {
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
    <section ref={ref} className="py-20 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
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
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of creative experiments, innovative solutions, and 
            boundary-pushing web experiences that define my approach to development.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 border ${
                selectedCategory === category
                  ? 'bg-gradient-primary text-primary-foreground border-primary shadow-glow-primary'
                  : 'glass border-border hover:border-primary/30 text-foreground'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                {category === 'all' ? 'All Projects' : category.charAt(0).toUpperCase() + category.slice(1)}
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              layout
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <motion.div
                className="glass rounded-3xl overflow-hidden border border-transparent hover:border-primary/30 transition-all duration-500"
                whileHover={{ 
                  scale: 1.02, 
                  y: -10,
                  boxShadow: "var(--glow-primary)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-primary px-3 py-1 rounded-full text-sm font-medium text-primary-foreground">
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  >
                    <motion.div
                      className="bg-background/80 backdrop-blur-sm rounded-full p-3"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="w-6 h-6 text-primary" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-secondary/50 text-secondary-foreground rounded-lg">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded-lg">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.live}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-primary text-primary-foreground rounded-xl font-medium text-sm hover:shadow-glow-primary transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      className="flex items-center justify-center p-2 glass border border-border hover:border-primary/30 rounded-xl transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-lg flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 glass p-2 rounded-full hover:bg-destructive/20 transition-colors duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold gradient-text mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.live}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-xl font-medium hover:shadow-glow-primary transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={selectedProject.github}
                    className="flex items-center gap-2 px-6 py-3 glass border border-border hover:border-primary/30 rounded-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;