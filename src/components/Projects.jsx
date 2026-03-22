import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Crypto Hunter",
      subtitle: "Real-Time Cryptocurrency Tracker",
      date: "Dec 2024",
      desc: "Improved a cryptocurrency tracking system that allows users to monitor real-time market prices, save favorite cryptocurrencies, and access news updates. Secure backend services with JWT authentication.",
      tech: ["React.js", "Node.js", "Express.js", "Firebase", "JWT"],
      github: "https://github.com/tanishqT"
    },
    {
      title: "Smart Parking System",
      subtitle: "Real-Time Parking Manager",
      date: "June 2025",
      desc: "Developed a Python-Django based parking system using Min Heap & Hash Maps for automated slot allocation, digital billing, and live dashboards. Designed for scalability in multi-floor facilities.",
      tech: ["Python", "Django", "DSA", "HTML/CSS/JS"],
      github: "https://github.com/tanishqT"
    },
    {
      title: "AI-Powered Real-Time Quiz App",
      subtitle: "",
      date: "Feb 2025",
      desc: "Created a real-time quiz platform with WebSockets and AI-generated questions from prompts, multiplayer rooms, and live scoring dashboards. Optimized for 100+ participants simultaneously.",
      tech: ["Python", "Node.js", "React.js", "MongoDB"],
      github: "https://github.com/tanishqT"
    }
  ];

  return (
    <section id="projects" className="projects section-padding">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Featured Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card glass"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="project-header">
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" title="GitHub">
                  <Github size={24} />
                </a>
              </div>
              <span>{project.date}</span>
            </div>
            <h3 className="project-title">{project.title}</h3>
            {project.subtitle && <h4 className="project-subtitle">{project.subtitle}</h4>}
            <p className="project-desc">{project.desc}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
